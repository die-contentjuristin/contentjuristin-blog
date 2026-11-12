# Reels ohne B-Roll

Text-Reels im selben Look wie deine Carousel-Beiträge: Navy, Papier, Dunkelrot, Source Serif und Inter. Kein Filmen, keine Stockvideos, kein Gesicht. Du schreibst eine kurze Textdatei, GitHub macht daraus ein fertiges Video (MP4, 1080 × 1920) und ein Titelbild.

- Strategie und KI & Tools: heller Hintergrund, Säule als rote Laufschrift
- Recht im Alltag: Navy-Hintergrund, Säule als rote Box, unten „Allgemeine Info, keine Rechtsberatung“ mit Stand
- Auf jeder Folie wie im Carousel: `@die.contentjuristin` links oben, Zähler `2/6` rechts oben, unten rechts eine Linie, die mitläuft

## Die sechs Formate

| Format | So sieht es aus | Passt für |
|---|---|---|
| `mythos-fakt` | Roter Nummernkreis, Irrtum als Zitat-Karte, darunter „Warum das nicht stimmt“ und der Fakt | Recht-Irrtümer, „3 Fehler beim …“ |
| `vergleich` | Überschrift, rote Karte „So nicht“ ✗, dann Karte „So schon“ ✓ | Formulierungen, Bio, Captions |
| `liste` | Nummernkreis mit Zusatz (z. B. „5 Min.“), Titel, kurzer Satz | Anleitungen, Schritte |
| `dm-frage` | Frage als Zitat-Blase, Antwort kommt Blase für Blase | Echte Fragen aus Nachrichten und Kommentaren |
| `darf-ich` | Frage, dann Urteil JA ✓ / NEIN ✗ / KOMMT DRAUF AN, dann Begründung | Quiz, bringt Kommentare |
| `statement` | Ein großer Satz pro Folie | Meinungen, Einblicke, schnelle Puffer-Themen |

## Die sechs Looks (`stil`)

Damit nicht alle Reels gleich aussehen, wählst du pro Reel einen Look. Format (was gezeigt wird) und Look (wie es aussieht) lassen sich frei kombinieren.

| `stil` | So sieht es aus | Gut für |
|---|---|---|
| `standard` | Eine Farbe durchgehend (Papier bzw. Navy bei Recht) | Alles, ruhig und klar |
| `wechsel` | Folien wechseln zwischen Navy und Papier, die neue Farbe wischt herein | Listen, Quiz, Vergleiche |
| `akzent` | Hook und Schluss vollflächig Dunkelrot, Text zentriert | Fragen, starke Aussagen |
| `poster` | Hook groß und unten, riesige Kontur-Nummer gleitet durchs Bild | Mythen, Listen mit wenigen Punkten |
| `karten` | Inhalte auf Karten, die wie ausgeteilt hereinfliegen, Hook auf Notizzettel | Anleitungen, Vorlagen, Tipps |
| `farbwechsel` | Navy, Dunkelrot und Papier im Wechsel | Statements, kurze Meinungs-Reels |

Tipp: Wechsle die Looks im Feed ab, damit nebeneinander im Profil keine zwei gleichen Titelbilder stehen.

Bei jedem Format kannst du zusätzlich verwenden:

| Feld | Wirkung |
|---|---|
| `zahl: "3"` | Große Zahl über dem Hook, wie im Carousel „3 Fehler beim Impressum“ |
| `unterzeile` | Kleiner Satz unter dem Hook, z. B. „Drei Gründe, die fast jeder übersieht.“ |
| `kurz` + `kurz_titel` | Folie „Das Wichtigste in Kürze“ mit nummerierter Box vor dem Schluss |
| `cta`, `cta_klein` | Schlussfolie: großer Satz, kleiner Satz darunter |
| `knopf` | Text im Knopf unten rechts auf der Schlussfolie (Standard: „Speichern“) |
| `beispiel` (nur bei `liste`, pro Punkt) | Beispielsatz in einer Karte, der sich wie getippt aufbaut |
| `___` (drei Unterstriche, in jedem Text) | Lücke zum Ausfüllen, z. B. für Lückentext-Vorlagen |

Die Bewegungen passieren automatisch: Wörter im Hook und in großen Sätzen kommen nacheinander, hervorgehobene Wörter werden dunkelrot angestrichen, Folien wechseln wie beim Swipen.

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
- **Ein Wort hervorheben** mit Sternchen: `*Impressum*`. Es wird beim Einblenden dunkelrot angestrichen. Mehr als eins pro Satz verwässert den Effekt.
- **Texte immer in Anführungszeichen** `"…"`, vor allem wenn ein Doppelpunkt vorkommt.
- **Recht im Alltag:** `stand` immer ausfüllen, Quellen in die Caption oder in den Blogartikel.
- Die Anzeigedauer berechnet sich automatisch aus der Wortanzahl. Ideal sind 12 bis 25 Sekunden.
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
- „Warum dich *niemand* sieht.“
- „Unpopuläre Meinung: *[Aussage]*“
- „Was ich Selbständigen zu *[Thema]* immer sage“

## Themen-Ideen für die nächsten Monate

Rechtliche Inhalte vor dem Posten bitte wie immer gegen aktuelle Quellen prüfen und `stand` setzen.

| Säule | Format | Hook |
|---|---|---|
| Recht im Alltag | `darf-ich` | „Musik in Reels: *Darf ich das?*“ |
| Recht im Alltag | `mythos-fakt` | `zahl: "3"`, „Mythen zur *Werbekennzeichnung*“ |
| Recht im Alltag | `dm-frage` | „Darf ich Kundinnen-Fotos *reposten*?“ |
| Recht im Alltag | `liste` | „Gewinnspiel auf Instagram: *4 Punkte* vorher prüfen“ |
| Recht im Alltag | `darf-ich` | „Bewertungen posten: *Erlaubt oder nicht?*“ |
| Recht im Alltag | `dm-frage` | „Brauche ich für Instagram eine *Datenschutzerklärung*?“ |
| Recht im Alltag | `mythos-fakt` | „3 Mythen zu *KI-Bildern* und Urheberrecht“ |
| Strategie | `liste` | „*3 Fehler*, die deine Reichweite bremsen“ |
| Strategie | `statement` | „Likes sind egal. *Speichern* zählt.“ |
| Strategie | `vergleich` | „Deine Bio: *So nicht, so schon*“ |
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
