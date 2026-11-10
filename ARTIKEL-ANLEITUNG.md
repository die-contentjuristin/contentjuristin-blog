# So fügst du einen neuen Artikel hinzu

Alles direkt auf github.com, ohne etwas zu installieren.

## 1. Neue Datei anlegen

1. Öffne im Repository den Ordner `src/artikel/`.
2. Klick auf **Add file → Create new file**.
3. Gib der Datei einen Namen aus Kleinbuchstaben und Bindestrichen, mit der Endung `.md`.
   Beispiel: `musik-in-reels.md`
   Der Dateiname wird zur Adresse: `…/artikel/musik-in-reels/`

Am einfachsten: Öffne den Beispielartikel `einen-monat-content-in-30-minuten-planen.md`, kopier den ganzen Inhalt und ändere ihn.

## 2. Oben die Angaben ausfüllen

Der Block zwischen den zwei Linien `---` muss ganz oben stehen:

```yaml
---
titel: "Musik in Reels: Was Selbständige wirklich dürfen"
saeule: "Recht im Alltag"      # genau so schreiben: Strategie | Recht im Alltag | KI & Tools
datum: 2027-01-05              # Jahr-Monat-Tag
lesezeit: 6                    # Minuten, nur die Zahl
teaser: "Ein bis zwei Sätze für die Startseite."
lead: "Der größere Einleitungsabsatz oben im Artikel."
instagram: "https://www.instagram.com/p/..."   # Link zum passenden Post, leer lassen = Link zum Profil
bild: ""                       # optional, z. B. "/bilder/musik-in-reels.webp"
bild_alt: ""                   # Beschreibung des Bildes, Pflicht wenn es ein Bild gibt
kurz:                          # Box „Das Wichtigste in Kürze“
  - "Erster Punkt."
  - "Zweiter Punkt."
# nur bei „Recht im Alltag“:
stand: "Jänner 2027"
quellen:
  - titel: "WKO: Musik in Social Media"
    url: "https://..."
---
```

Wichtig: Texte mit Doppelpunkt immer in Anführungszeichen `"…"` setzen.

Bei **Recht im Alltag** kommen die Hinweisbox „Keine Rechtsberatung, Stand: …“ und die Quellenliste automatisch dazu. Fehlen `stand` oder `quellen`, zeigt der Bau eine Warnung.

## 3. Den Text schreiben

Unter dem zweiten `---` kommt der Artikel in einfacher Markdown-Schreibweise:

| So schreibst du | So sieht es aus |
|---|---|
| `## Zwischenüberschrift` | große Zwischenüberschrift |
| `### Kleinere Überschrift` | kleinere Überschrift |
| `**fett**` | **fett** |
| `- Punkt` | Aufzählung |
| `1. Punkt` | nummerierte Liste |
| `[Linktext](https://...)` | Link |
| Leerzeile | neuer Absatz |

Schritte mit Minutenangabe wie im Beispielartikel (optional):

```
{% schritt "5 Min.", "Zurückschauen" %}
Text des Schritts.
{% endschritt %}
```

## 4. Bild (optional)

- Format WebP, 16:9, höchstens 1600 Pixel breit.
- Hochladen in den Ordner `src/bilder/` (**Add file → Upload files**).
- Im Artikel `bild: "/bilder/dateiname.webp"` und `bild_alt: "Was auf dem Bild zu sehen ist"` eintragen.
- Keine Bilder von fremden Seiten verlinken (Datenschutz: keine externen Anfragen).

## 5. Speichern = Veröffentlichen

Klick auf **Commit changes** (direkt auf `main`). Nach etwa ein bis zwei Minuten ist der Artikel online und steht automatisch oben auf der Startseite.
Den Fortschritt siehst du im Reiter **Actions**. Ein rotes ✗ heißt: Etwas stimmt nicht, meist ein Tippfehler im Block oben.

## Vorschau auf dem eigenen Computer (optional)

Wer Node.js installiert hat:

```bash
npm install
```

```bash
npm start
```

Dann im Browser `http://localhost:8080` öffnen. Änderungen erscheinen sofort.
