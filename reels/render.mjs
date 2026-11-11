// Macht aus jeder Datei in reels/inhalte/ ein fertiges Reel (MP4, 1080 × 1920, 30 fps) und ein Titelbild (PNG).
// Aufruf:  node render.mjs                 → alle Reels
//          node render.mjs impressum-mythen → nur dieses Reel (Dateiname ohne .md)
import { chromium } from "playwright";
import yaml from "js-yaml";
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const FPS = 30;
const ordner = path.dirname(fileURLToPath(import.meta.url));
const inhalte = path.join(ordner, "inhalte");
const fertig = path.join(ordner, "fertig");
fs.mkdirSync(fertig, { recursive: true });

const SAEULEN = ["Strategie", "Recht im Alltag", "KI & Tools"];
const PFLICHT = {
  "mythos-fakt": ["paare"],
  liste: ["punkte"],
  vergleich: ["paare"],
  "dm-frage": ["frage", "antworten"],
  "darf-ich": ["fragen"],
  statement: ["aussagen"],
};

function lies(datei) {
  const text = fs.readFileSync(datei, "utf8");
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) throw new Error("Der Block zwischen den zwei Linien --- fehlt ganz oben.");
  const d = yaml.load(m[1]);
  const fehler = [];
  if (!PFLICHT[d.format]) fehler.push(`format muss eines davon sein: ${Object.keys(PFLICHT).join(" | ")}`);
  if (!SAEULEN.includes(d.saeule)) fehler.push(`saeule muss genau so geschrieben sein: ${SAEULEN.join(" | ")}`);
  if (!d.hook) fehler.push("hook fehlt (der erste Satz, der sofort zu sehen ist)");
  for (const feld of PFLICHT[d.format] || []) if (!d[feld] || (Array.isArray(d[feld]) && !d[feld].length)) fehler.push(`${feld} fehlt`);
  if (d.format === "darf-ich")
    (d.fragen || []).forEach((f, i) => {
      if (!["ja", "nein", "kommt drauf an"].includes(String(f.antwort).toLowerCase().trim()))
        fehler.push(`Frage ${i + 1}: antwort muss "ja", "nein" oder "kommt drauf an" sein`);
    });
  if (fehler.length) throw new Error(fehler.join("\n  "));
  if (d.saeule === "Recht im Alltag" && !d.stand) console.warn(`  ⚠ ${path.basename(datei)}: Bei „Recht im Alltag“ bitte "stand" angeben.`);
  return d;
}

function ffmpeg(ziel) {
  const p = spawn("ffmpeg", [
    "-y", "-loglevel", "error",
    "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
    // stille Tonspur: Musik kommt später in der Instagram-App dazu, manche Apps verlangen aber eine Tonspur
    "-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=44100",
    "-shortest", "-c:v", "libx264", "-preset", "slow", "-crf", "17", "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", ziel,
  ], { stdio: ["pipe", "inherit", "inherit"] });
  const fertigP = new Promise((ok, nein) => p.on("close", (c) => (c === 0 ? ok() : nein(new Error("ffmpeg ist fehlgeschlagen")))));
  return { stdin: p.stdin, fertigP };
}

async function rendere(browser, datei) {
  const name = path.basename(datei, ".md");
  const daten = lies(datei);
  const seite = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await seite.goto(pathToFileURL(path.join(ordner, "vorlage.html")).href);
  const { dauer, hookEnde } = await seite.evaluate((d) => window.bauen(d), daten);

  // Titelbild: der Hook, so wie er beim Öffnen zu sehen ist
  await seite.evaluate((t) => window.zeige(t), Math.min(1.2, hookEnde - 0.4));
  await seite.screenshot({ path: path.join(fertig, `${name}-titelbild.png`) });

  const { stdin, fertigP } = ffmpeg(path.join(fertig, `${name}.mp4`));
  const bilder = Math.ceil(dauer * FPS);
  for (let i = 0; i < bilder; i++) {
    await seite.evaluate((t) => window.zeige(t), i / FPS);
    const bild = await seite.screenshot({ type: "jpeg", quality: 96 });
    if (!stdin.write(bild)) await new Promise((ok) => stdin.once("drain", ok));
  }
  stdin.end();
  await fertigP;
  await seite.close();
  console.log(`✓ ${name}.mp4  (${dauer.toFixed(1)} s)`);
}

const wunsch = process.argv.slice(2).map((n) => n.replace(/\.md$/, ""));
const dateien = fs.readdirSync(inhalte)
  .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
  .filter((f) => !wunsch.length || wunsch.includes(f.replace(/\.md$/, "")))
  .map((f) => path.join(inhalte, f));

if (!dateien.length) {
  console.error("Keine passenden Dateien in reels/inhalte/ gefunden.");
  process.exit(1);
}

const browser = await chromium.launch();
let fehlerhaft = 0;
for (const datei of dateien) {
  try {
    await rendere(browser, datei);
  } catch (e) {
    fehlerhaft++;
    console.error(`✗ ${path.basename(datei)}:\n  ${e.message}`);
  }
}
await browser.close();
process.exit(fehlerhaft ? 1 : 0);
