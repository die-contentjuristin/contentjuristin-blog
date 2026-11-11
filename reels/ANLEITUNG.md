# Reels ohne B-Roll

Text-Reels im Design des Blogs: Navy, Papier, Dunkelrot, Source Serif und Inter. Kein Filmen, keine Stockvideos, kein Gesicht. Du schreibst eine kurze Textdatei, GitHub macht daraus ein fertiges Video (MP4, 1080 × 1920) und ein Titelbild.

- Strategie und KI & Tools: heller Hintergrund
- Recht im Alltag: Navy-Hintergrund mit der Zeile „Allgemeine Information, keine Rechtsberatung. Stand: …“

## Die fünf Formate

| Format | So sieht es aus | Passt für |
|---|---|---|
| `mythos-fakt` | Irrtum erscheint, wird durchgestrichen, darunter der Fakt | Recht-Irrtümer, „Das glauben viele …“ |
| `liste` | Große Nummer, Titel, kurzer Satz. Ein Punkt pro Bild | Anleitungen, „3 Fehler bei …“ |
| `dm-frage` | Frage als Chat-Nachricht, Antwort kommt Blase für Blase | Echte Fragen aus Nachrichten und Kommentaren |
| `darf-ich` | Frage, dann Stempel JA / NEIN / KOMMT DRAUF AN, dann Begründung | Quiz, bringt Kommentare |
| `statement` | Ein großer Satz pro Bild | Meinungen, Einblicke, schnelle Puffer-Themen |

Leere Vorlagen mit Erklärungen liegen in `reels/vorlagen/`. Fertige Beispiele liegen in `reels/inhalte/`.

## Neues Reel erstellen (direkt auf github.com)

1. Öffne die passende Vorlage in `reels/vorlagen/`, z. B. `liste.md`, und kopier den ganzen Inhalt.
2. Geh in den Ordner `reels/inhalte/` → **Add file → Create new file**.
   Dateiname aus Kleinbuchstaben und Bindestrichen, z. B. `musik-in-reels.md`.
3. Inhalt einfügen und die Texte ersetzen. Die Zeilen mit `#` darfst du löschen.
4. **Commit changes** klicken.
5. Nach etwa 3 bis 5 Minuten: Reiter **Actions** → oberster Lauf „Reels erstellen“ → ganz unten bei **Artifacts** auf **reels** klicken. Du bekommst eine ZIP-Datei mit allen Videos und Titelbildern.

Ein rotes ✗ bei Actions heißt: Etwas stimmt nicht. Klick auf den Lauf, dort steht auf Deutsch, welches Feld fehlt oder falsch geschrieben ist.

Tipp: Eine Datei, deren Name mit `_` beginnt (z. B. `_entwurf-musik.md`), wird übersprungen. So kannst du Entwürfe ablegen.

## Schreibregeln, damit es gut lesbar bleibt

- **Hook:** höchstens 8 Wörter. Er ist ab der ersten Sekunde zu sehen und wird zum Titelbild.
- **Pro Bild ein Gedanke**, höchstens etwa 15 Wörter.
- **Ein Wort hervorheben** mit Sternchen: `*Impressum*`. Mehr als eins pro Satz verwässert den Effekt.
- **Texte immer in Anführungszeichen** `"…"`, vor allem wenn ein Doppelpunkt vorkommt.
- **Recht im Alltag:** `stand` immer ausfüllen, Quellen in die Caption oder in den Blogartikel.
- Die Anzeigedauer berechnet sich automatisch aus der Wortanzahl. Ideal sind 15 bis 35 Sekunden.
- Zu viel Text? Die Schrift wird automatisch kleiner. Wenn sie sichtbar klein wird: kürzen.

## Posten auf Instagram

1. Video in der Instagram-App als Reel hochladen.
2. **Musik:** in der App leise Hintergrundmusik hinzufügen (Lautstärke ca. 20 bis 30 %). Mit einem Business-Profil zeigt dir Instagram in der Regel nur Musik, die für geschäftliche Profile freigegeben ist. Bleib bei dieser Auswahl und lade keine fremden Songs mit hoch.
3. **Titelbild:** „Titelbild bearbeiten“ → „Aus Galerie hinzufügen“ → die Datei `…-titelbild.png`. Im Profilraster wird sie auf 3:4 zugeschnitten; der Hook steht so, dass er sichtbar bleibt.
4. **Caption** nach der Vorlage unten.
5. Im Blogartikel unter `instagram:` den Link zum Reel eintragen.

### Caption-Vorlage

```
[Hook noch einmal in anderen Worten, eine Zeile]

[2 bis 3 Sätze: worum es geht und für wen]

[Bei Recht im Alltag:]
Allgemeine Information, keine Rechtsberatung. Stand: [Monat Jahr], gilt für [Österreich].
Quelle: [z. B. WKO, Titel der Seite]

Die ausführliche Version mit Checkliste findest du im Blog, Link in der Bio.

[Frage an die Community, z. B. „Hast du dein Impressum schon in der Bio?“]

#selbständig #socialmediatipps #[thema] #contentplanung
```

## Hook-Formeln zum Ausfüllen

- „3 Mythen zu *[Thema]*“
- „Darf ich *[Handlung]*?“
- „Das kostet dich *[Zeit/Geld/Reichweite]*: [Fehler]“
- „[Thema] in *[Zeit]* erledigt“
- „Bevor du *[Handlung]*, prüf das.“
- „Die häufigste Frage in meinen DMs: *[Thema]*“
- „[Zahl] Fehler bei *[Thema]*, die ich ständig sehe“
- „Rate mit: *Erlaubt oder nicht?*“
- „Unpopuläre Meinung: *[Aussage]*“
- „Was ich Selbständigen zu *[Thema]* immer sage“

## Themen-Ideen für die nächsten Monate

Rechtliche Inhalte vor dem Posten bitte wie immer gegen aktuelle Quellen prüfen und `stand` setzen.

| Säule | Format | Hook |
|---|---|---|
| Recht im Alltag | `darf-ich` | „Musik in Reels: *Darf ich das?*“ |
| Recht im Alltag | `mythos-fakt` | „3 Mythen zu *Werbekennzeichnung*“ |
| Recht im Alltag | `dm-frage` | „Darf ich Kundinnen-Fotos *reposten*?“ |
| Recht im Alltag | `liste` | „Gewinnspiel auf Instagram: *4 Punkte* vorher prüfen“ |
| Recht im Alltag | `darf-ich` | „Bewertungen posten: *Erlaubt oder nicht?*“ |
| Recht im Alltag | `dm-frage` | „Brauche ich für Instagram eine *Datenschutzerklärung*?“ |
| Recht im Alltag | `mythos-fakt` | „3 Mythen zu *KI-Bildern* und Urheberrecht“ |
| Strategie | `liste` | „*3 Fehler*, die deine Reichweite bremsen“ |
| Strategie | `statement` | „Likes sind egal. *Speichern* zählt.“ |
| Strategie | `liste` | „Deine Bio in *4 Zeilen*“ |
| Strategie | `mythos-fakt` | „3 Mythen übers *tägliche Posten*“ |
| Strategie | `statement` | „Zwei Posts pro Woche *reichen*.“ |
| KI & Tools | `liste` | „*3 Prompts* für deine Monatsplanung“ |
| KI & Tools | `darf-ich` | „KI-Texte: *Muss ich das kennzeichnen?*“ |
| KI & Tools | `statement` | „Dein bester Content-Ideengeber ist *dein Postfach*.“ |

## Für Technik-Interessierte

- `vorlage.html`: Design und Animation. Farben und Schriftgrößen stehen oben im `<style>`.
- `render.mjs`: macht aus den Dateien die Videos (Playwright + ffmpeg).
- `.github/workflows/reels.yml`: startet das automatisch bei jeder Änderung in `reels/inhalte/`.
- Lokal: im Ordner `reels` einmal `npm install` und `npx playwright install chromium`, dann `node render.mjs` (alle) oder `node render.mjs dateiname` (eines). Die Videos landen in `reels/fertig/`.

Der Ordner `reels/` gehört nicht zur Website und wird nicht veröffentlicht.
