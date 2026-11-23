// Rendert ein Tutorial-Video (1080 × 1920, 30 fps) mit stiller Tonspur.
// Aufruf: node reels/tutorials/render.cjs [name]   (Standard: untertitel-korrigieren)
// Ergebnis in reels/tutorials/fertig/: NAME.mp4 (mit Texten) und NAME-ohne-text.mp4 (nur das Handy)
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const FPS = 30;
const name = process.argv[2] || "untertitel-korrigieren";
const ziel = path.join(__dirname, "fertig");
fs.mkdirSync(ziel, { recursive: true });

async function rendere(browser, ohne) {
  const datei = path.join(ziel, `${name}${ohne ? "-ohne-text" : ""}.mp4`);
  const pg = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await pg.goto("file://" + path.join(__dirname, `${name}.html`) + (ohne ? "?ohne=1" : ""));
  await pg.evaluate(() => document.fonts.ready);
  const dauer = await pg.evaluate(() => window.DAUER);
  const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
    "-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=44100", "-shortest",
    "-c:v", "libx264", "-preset", "slow", "-crf", "17", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "128k",
    "-movflags", "+faststart", datei], { stdio: ["pipe", "inherit", "inherit"] });
  const fertig = new Promise((ok, nein) => ff.on("close", (c) => (c ? nein(new Error("ffmpeg")) : ok())));
  for (let i = 0; i < Math.ceil(dauer * FPS); i++) {
    await pg.evaluate((t) => window.zeige(t), i / FPS);
    const bild = await pg.screenshot({ type: "jpeg", quality: 95 });
    if (!ff.stdin.write(bild)) await new Promise((ok) => ff.stdin.once("drain", ok));
  }
  ff.stdin.end();
  await fertig;
  await pg.close();
  console.log("✓", path.relative(process.cwd(), datei));
}

(async () => {
  const b = await chromium.launch();
  await rendere(b, false);
  await rendere(b, true);
  await b.close();
})();
