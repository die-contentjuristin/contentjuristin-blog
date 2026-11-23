// Rendert die drei Clips: node reels/tutorials/clips.cjs  → fertig/clip-1.mp4, clip-2.mp4, clip-3.mp4
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
const FPS = 30, ziel = path.join(__dirname, "fertig");
fs.mkdirSync(ziel, { recursive: true });
(async () => {
  const b = await chromium.launch();
  for (const n of [1, 2, 3]) {
    const pg = await b.newPage({ viewport: { width: 1080, height: 1920 } });
    await pg.goto("file://" + path.join(__dirname, "clips.html") + "?clip=" + n);
    await pg.evaluate(() => document.fonts.ready);
    const dauer = await pg.evaluate(() => window.DAUER);
    const datei = path.join(ziel, `clip-${n}.mp4`);
    const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
      "-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=44100", "-shortest",
      "-c:v", "libx264", "-preset", "slow", "-crf", "17", "-pix_fmt", "yuv420p", "-c:a", "aac", "-movflags", "+faststart", datei],
      { stdio: ["pipe", "inherit", "inherit"] });
    const fertig = new Promise((ok, no) => ff.on("close", (c) => (c ? no(new Error("ffmpeg")) : ok())));
    for (let i = 0; i < dauer * FPS; i++) {
      await pg.evaluate((t) => window.zeige(t), i / FPS);
      const bild = await pg.screenshot({ type: "jpeg", quality: 95 });
      if (!ff.stdin.write(bild)) await new Promise((ok) => ff.stdin.once("drain", ok));
    }
    ff.stdin.end(); await fertig; await pg.close();
    console.log("✓", path.relative(process.cwd(), datei), dauer + " s");
  }
  await b.close();
})();
