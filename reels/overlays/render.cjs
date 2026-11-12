#!/usr/bin/env node
// Rendert die Overlays aus overlays.json als Videos (1080 × 1920, 30 fps).
//
//   node reels/overlays/render.cjs                 alle Overlays
//   node reels/overlays/render.cjs 01-hook 09      nur Einträge, deren Datei so beginnt
//
// Ergebnis in reels/overlays/export/:
//   NAME.mov             ProRes 4444 mit Transparenz (CapCut Desktop, Premiere, DaVinci, Final Cut)
//   NAME.webm            VP9 mit Transparenz (klein, für Browser/Canva-Tests)
//   NAME_greenscreen.mp4 auf Grün, für Handy-Apps mit „Chroma Key“ (CapCut, InShot, Edits)
//   _vorschau.mp4        alle Overlays nacheinander auf Platzhalter-Hintergrund
//
// Braucht: Playwright (Chromium) und ffmpeg.

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { chromium } = require("playwright");

const FPS = 30;
const ORDNER = __dirname;
const EXPORT = path.join(ORDNER, "export");
const liste = JSON.parse(fs.readFileSync(path.join(ORDNER, "overlays.json"), "utf8"));
const filter = process.argv.slice(2);
const auswahl = filter.length ? liste.filter((e) => filter.some((f) => e.datei.startsWith(f))) : liste;

const ff = (args) => execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...args], { stdio: "inherit" });

(async () => {
  fs.mkdirSync(EXPORT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  const vorschauTeile = [];

  for (const eintrag of auswahl) {
    const { datei, ...params } = eintrag;
    const url = "file://" + path.join(ORDNER, "overlays.html") + "?" + new URLSearchParams(params);
    await page.goto(url);
    const dauer = await page.evaluate(() => window.bereit);
    const frames = Math.round(dauer * FPS);
    const tmp = fs.mkdtempSync(path.join(require("os").tmpdir(), "ov-"));
    process.stdout.write(`${datei}: ${dauer}s, ${frames} Bilder … `);

    for (let i = 0; i < frames; i++) {
      await page.evaluate((t) => window.zeige(t), i / FPS);
      await page.screenshot({ path: path.join(tmp, `f${String(i).padStart(5, "0")}.png`), omitBackground: true });
    }
    const quelle = ["-framerate", String(FPS), "-i", path.join(tmp, "f%05d.png")];
    const ziel = (endung) => path.join(EXPORT, datei + endung);

    ff([...quelle, "-c:v", "prores_ks", "-profile:v", "4", "-pix_fmt", "yuva444p10le", "-vendor", "apl0", ziel(".mov")]);
    ff([...quelle, "-c:v", "libvpx-vp9", "-pix_fmt", "yuva420p", "-b:v", "0", "-crf", "32", "-auto-alt-ref", "0", "-row-mt", "1", ziel(".webm")]);
    ff(["-f", "lavfi", "-i", `color=c=0x00B140:s=1080x1920:r=${FPS}`, ...quelle,
      "-filter_complex", "[0][1]overlay=shortest=1,format=yuv420p", "-c:v", "libx264", "-crf", "18", "-preset", "medium", "-movflags", "+faststart", ziel("_greenscreen.mp4")]);

    // Vorschau-Schnipsel: auf ruhigem, warmem Verlauf (Platzhalter für B-Roll), halbe Größe
    const teil = path.join(tmp, "vorschau.mp4");
    ff(["-f", "lavfi", "-i", `gradients=s=540x960:c0=0x8d8a84:c1=0xc9c3b8:x0=0:y0=0:x1=540:y1=960:r=${FPS}:d=${dauer + 0.6}`,
      "-framerate", String(FPS), "-i", path.join(tmp, "f%05d.png"),
      "-filter_complex", "[1]scale=540:960,tpad=stop_mode=clone:stop_duration=0.6[o];[0][o]overlay=shortest=1,format=yuv420p",
      "-c:v", "libx264", "-crf", "23", "-preset", "fast", teil]);
    const behalten = path.join(EXPORT, `.vorschau-${datei}.mp4`);
    fs.copyFileSync(teil, behalten);
    vorschauTeile.push(behalten);

    fs.rmSync(tmp, { recursive: true, force: true });
    console.log("fertig");
  }
  await browser.close();

  if (!filter.length && vorschauTeile.length) {
    const listeDatei = path.join(EXPORT, ".vorschau-liste.txt");
    fs.writeFileSync(listeDatei, vorschauTeile.map((p) => `file '${p}'`).join("\n"));
    ff(["-f", "concat", "-safe", "0", "-i", listeDatei, "-c", "copy", "-movflags", "+faststart", path.join(EXPORT, "_vorschau.mp4")]);
    vorschauTeile.forEach((p) => fs.rmSync(p)); fs.rmSync(listeDatei);
    console.log("Vorschau: export/_vorschau.mp4");
  }
})().catch((e) => { console.error(e); process.exit(1); });
