# Tutorial-Videos

## Untertitel automatisch erstellen und ein Wort korrigieren (24.12.)

- `fertig/untertitel-korrigieren.mp4`: mit Hook, Schritt-Titeln und Schluss, 21 s, stille Tonspur
- `fertig/untertitel-korrigieren-ohne-text.mp4`: nur das Handy, falls du eigene Texte in der App darüberlegst

Die App-Oberfläche ist neutral gezeichnet und passt zu CapCut, Edits & Co. (die Menüs heißen dort leicht anders).

### Ablauf und Sprechtext-Vorschlag

| Zeit | Im Bild | Du sagst |
| --- | --- | --- |
| 0–2,6 s | Hook „Automatische Untertitel verhören sich gern.“ | „Automatische Untertitel? Praktisch, aber sie verhören sich gern.“ |
| 2,6–6,2 s | Schritt 1: Aufnahme, Sprechblase „Das Impressum gehört in die Bio.“ | „Nimm einen Satz mit Fachbegriff auf, zum Beispiel: Das Impressum gehört in die Bio.“ |
| 6,2–8,6 s | Schritt 2: Schnitt-App, Tipp auf „Text“ | „Öffne das Video in deiner Schnitt-App und tipp auf Text.“ |
| 8,6–11,6 s | Schritt 3: „Automatische Untertitel“, Ladebalken | „Dann auf Automatische Untertitel.“ |
| 11,6–13,8 s | Schritt 4: „Das Impression gehört in die Bio.“ rot eingekreist | „Und schon: Impression statt Impressum.“ |
| 13,8–18,6 s | Schritt 5: Untertitel antippen, Wort ausbessern, ✓ | „Antippen, Wort korrigieren, fertig.“ |
| 19–21 s | „Namen und Fachbegriffe immer gegenlesen.“ | „Also: vor dem Posten immer gegenlesen.“ |

Zum Drübersprechen in CapCut/Edits: Video öffnen → „Audio“ → „Voiceover“ (Mikrofon) aufnehmen.
Länger brauchen? Clip an der Stelle teilen und das Standbild verlängern („Standbild“ / „Freeze“).

### Texte ändern und neu rendern

Texte und Zeitplan stehen oben im Skript von `untertitel-korrigieren.html` (`SCHRITTE`, `SATZ`), Hook und Schluss im HTML.

```bash
node reels/tutorials/render.cjs
```

Braucht Node, Playwright (Chromium) und ffmpeg. Vorschau eines Moments im Browser: `untertitel-korrigieren.html?t=15`
