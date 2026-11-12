# Reel-Overlays (Motion)

Animierte Text-Overlays für Reels mit B-Roll, im Look von die.contentjuristin:
Navy #1B2440, Papier #F5F6F8, Dunkelrot #7A1F2B nur als Akzent, Source Serif für Hooks, Inter für Text.
Format 1080 × 1920, 30 fps. Alles bleibt in den Instagram-Sicherheitszonen
(oben 250 px, unten 480 px und rechts 140 px bleiben frei).

## Die Overlays und passende B-Roll aus Notion

| Overlay | Wofür | Passt zu B-Roll |
| --- | --- | --- |
| `hook` | Text-Overlay für die ersten 3 Sek., ein Wort in Rot unterstrichen. Auch auf Navy für Recht-Reels | Hook-Zettel ins Bild schieben, Dunkelroter Stift fällt auf Papier, Handy umdrehen |
| `schritt` | Etikett „Schritt 1“ mit Titel und Dauer, oben links | Kalender blättern, Haftnotizen kleben, Bildschirmaufnahmen |
| `zahl` | Zahl im Ring, zählt hoch (30 Minuten, 3 Säulen …) | Timer startet bei 30:00, Mindmap 1 Idee → 5 Posts |
| `kreis` | Handgezeichneter roter Kreis mit Etikett | Wochenplaner Mo, Mi, Fr markieren, Jahreskalender |
| `checkliste` | Punkte werden nacheinander abgehakt | Punkte auf Checkliste abhaken, To-do-Liste durchstreichen |
| `mythos` | Aussage wird durchgestrichen, Richtigstellung erscheint | Papier zerknüllen und wegwerfen |
| `textmarker` | Satz mit Textmarker-Hervorhebung (Navy = Recht) | Textmarker markiert einen Satz, Finger fährt Gesetzestext entlang |
| `atde` | Vergleich Österreich / Deutschland | Ordner ins Regal, Einwilligungsformular, Impressum-Link antippen |
| `hinweis` | „Allgemeine Information, keine Rechtsberatung“ mit Stand und AT/DE | Unter jedes Recht-Reel |
| `uebergang` | Navy-Wischblende mit CJ-Monogramm, Schnitt genau in der Mitte (0,4 s) | Hand wischt über die Linse |
| `endcard` | Speichern / Blog / Handle mit Monogramm | Laptop zuklappen, Kaffeetasse |

Die Beispieltexte stammen aus dem Reel „Einen Monat Content in 30 Minuten planen“ (27.11.).
Die Recht-Beispiele (Impressum, § 5 ECG, § 25 MedienG, § 5 DDG) vor dem Posten bitte selbst prüfen und den Stand anpassen.

## Dateien nach dem Rendern (`export/`)

- `NAME.mov`: ProRes 4444 **mit Transparenz**. Für CapCut am Computer, Premiere, DaVinci, Final Cut. Einfach als Ebene über die B-Roll legen.
- `NAME_greenscreen.mp4`: auf Grün. Für Handy-Apps (CapCut, InShot, Edits): als Overlay einfügen, dann „Chroma Key“ / „Hintergrund entfernen“ auf Grün. Der weiche Schatten der Karten fällt dabei weg.
- `NAME.webm`: VP9 mit Transparenz, sehr klein.
- `_vorschau.mp4`: alle Overlays hintereinander zum Ansehen.

**Länger stehen lassen:** Overlays wie `schritt` oder `hinweis` haben in der Mitte eine ruhige Standphase.
Clip in der Mitte teilen und das Standbild verlängern (CapCut: „Standbild“ / „Freeze“), nicht die Geschwindigkeit ändern.

## Eigene Texte

1. In `overlays.json` einen Eintrag kopieren und Texte ändern. `*Wort*` wird zum roten Akzent.
2. Rendern:

```bash
node reels/overlays/render.cjs
```

Nur einzelne Overlays (Dateiname beginnt mit …):

```bash
node reels/overlays/render.cjs 01 09
```

Zum Ansehen im Browser mit Sicherheitszonen: `overlays.html?o=hook&vorschau=1`

### Einstellungen je Overlay

| Overlay | Felder |
| --- | --- |
| `hook` | `label`, `zeile1`, `zeile2`, `flaeche` (`papier` / `navy`), `groesse`, `dauer` |
| `schritt` | `etikett`, `titel`, `unter`, `flaeche`, `dauer` |
| `zahl` | `zahl`, `einheit`, `vorsatz`, `dauer` |
| `kreis` | `text`, `breite`, `hoehe`, `oben`, `dauer` |
| `checkliste` | `label`, `titel`, `punkte` (mit `\|` getrennt), `dauer` |
| `mythos` | `label`, `aussage`, `antwort`, `dauer` |
| `textmarker` | `label`, `text` (mit `*…*`), `flaeche`, `dauer` |
| `atde` | `label`, `titel`, `at`, `de` (Zeilen mit `\|` getrennt), `dauer` |
| `hinweis` | `text`, `stand`, `laender` (z. B. `AT\|DE`), `dauer` |
| `uebergang` | `dauer` |
| `endcard` | `titel`, `unter`, `handle`, `dauer` |

Braucht Node, Playwright (Chromium) und ffmpeg. Die Schriften kommen aus `src/fonts`.
