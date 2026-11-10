# Blog-Bauanleitung für Claude Code

Bauanleitung für den Blog zu @die.contentjuristin. Die Datei `claude/blog-entwurf.html` im selben Projekt ist der Design-Entwurf, an dem sich die Umsetzung orientiert.

## Ziel und Rahmen

- Der Blog enthält die langen Versionen der Instagram-Posts: mehr Beispiele, Checklisten, Quellen. Etwa ein Artikel pro Monat.
- Zielgruppe: Selbständige und kleine Dienstleister in Österreich und Deutschland.
- Kosten absolut minimal. Bezahlt wird nur die Domain, das Hosting ist gratis.
- Keine Monetarisierung: keine Werbung, keine Affiliate-Links, keine Produkte, keine Newsletter-Anmeldung.
- Faceless: keine Fotos der Inhaberin. Der Name steht nur in der Offenlegung.

## Technik

- Statische Website. Empfohlen ist Eleventy (11ty) mit Markdown-Artikeln, alternativ reines HTML/CSS.
- Code in einem GitHub-Repository der Inhaberin.
- Hosting gratis über GitHub Pages oder Cloudflare Pages, automatisch veröffentlicht bei jedem Push.
- Eigene Domain (.at), sobald registriert. Bis dahin die kostenlose Adresse des Hosters.
- Kein JavaScript nötig, höchstens minimal.

## Datenschutz-Regeln

Diese Regeln sind verbindlich:

- Keine Cookies, kein Tracking, keine Analyse-Dienste.
- Keine externen Anfragen beim Seitenaufruf:
  - Schriften lokal als WOFF2 einbinden, keine Google-Fonts-Links. Source Serif 4 und Inter stehen unter der SIL Open Font License.
  - Keine eingebetteten Instagram-Posts, Videos oder Karten, nur normale Links.
  - Keine externen Skripte, Icons oder CDNs.
- Kein Kontaktformular. Kontakt nur per E-Mail-Adresse als Text.
- Wenn sich daran etwas ändert, muss die Datenschutzerklärung angepasst werden. Vorher Rücksprache.

## Design (Look A „Klar & seriös“ mit Dunkelrot)

| Token | Wert | Verwendung |
|---|---|---|
| Navy | #1B2440 | Text, Footer, Flächen für Rechts-Inhalte |
| Papier | #F5F6F8 | Hintergrund |
| Dunkelrot | #7A1F2B | Akzent: Etiketten, Links, ein Schlüsselwort, Linien. Sparsam, nie als große Fläche (Ausnahme: Monogramm) |
| Navy hell | #3B4560 | Nebentext |
| Grau | #C9CEDA / #D5D8E0 | Linien, Platzhalter |

- **Schriften:**
  - Source Serif 4 (600) für Überschriften, Titel und den Lead-Absatz.
  - Inter (400/500/600) für den Fließtext.
- **Lesespalte:** max. 720px, Fließtext 17px, Zeilenhöhe 1,65.
- **Etiketten:** Inter 12px, Großbuchstaben, Laufweite 0,1em, Dunkelrot. Das sind die Säulen: STRATEGIE, RECHT IM ALLTAG, KI & TOOLS.
- **Monogramm:** „CJ“ in Source Serif auf dunkelrotem Kreis.
- **Dark Mode:** Navy-Töne als Hintergrund, Akzent aufgehellt (#C8566A). Siehe Entwurf.
- **Mobile first:** Die Seite muss bei 360 bis 400px Breite perfekt aussehen und darf nie horizontal scrollen.

## Seitenstruktur

1. **Startseite:**
   - Kurzes Intro mit der Positionierung „Social Media für Selbständige. Strategisch und rechtlich auf der sicheren Seite.“
   - Darunter die Artikelliste: Säulen-Etikett, Titel, Teaser, Lesezeit.
2. **Artikelseite:** Aufbau von oben nach unten:
   - Etikett, Titel, Datum und Lesezeit, Lead-Absatz
   - Beitragsbild 16:9 (optional)
   - Text mit Zwischenüberschriften
   - Box „Das Wichtigste in Kürze“
   - Link zur Kurzversion auf Instagram
3. **Über mich:** kurzer Text ohne Foto. Hinweis: allgemeine Informationen, keine Einzelfallbeurteilung, keine Rechtsberatung.
4. **Offenlegung:** Pflichtangaben nach § 25 Mediengesetz. Der Text kommt von der Inhaberin, nicht selbst formulieren.
5. **Datenschutz:** Der Text kommt von der Inhaberin, nicht selbst formulieren. Gliederung siehe Entwurf.
6. **Footer** auf allen Seiten:
   - „Allgemeine Informationen, keine Rechtsberatung.“
   - Links zu Offenlegung, Datenschutz und Instagram.
   - Offenlegung muss von jeder Seite mit einem Klick erreichbar sein.

## Artikel als Markdown-Datei

Jeder Artikel ist eine Markdown-Datei mit diesen Angaben am Anfang:

```yaml
titel: "Einen Monat Content in 30 Minuten planen"
saeule: "Strategie"          # Strategie | Recht im Alltag | KI & Tools
datum: 2026-12-01
lesezeit: 5
teaser: "Ein fester Ablauf für den Monatsanfang ..."
instagram: "https://www.instagram.com/p/..."   # Link zum passenden Post
bild: ""                     # optional, WebP, 16:9
# nur bei Recht im Alltag:
stand: "Dezember 2026"
quellen:
  - titel: "WKO: ..."
    url: "https://..."
```

**Bei Artikeln der Säule „Recht im Alltag“:**
- Navy-Hinweisbox automatisch einfügen: „Allgemeine Information, keine Rechtsberatung. Stand: [stand]. Bitte prüf immer den aktuellen Stand.“
- Am Ende automatisch eine Quellenliste aus `quellen` anzeigen.
- Wenn `stand` oder `quellen` fehlen, soll der Build eine Warnung ausgeben.

**Bilder:** WebP, max. 1600px breit, mit Alt-Text.

## Erster Auftrag an Claude Code (zum Kopieren)

> Lies die Bauanleitung (blog-bauanleitung.md) und den Entwurf (blog-entwurf.html). Richte damit eine Eleventy-Website in diesem Repository ein: lokale Schriften, alle Seiten aus der Struktur, eine Artikelvorlage mit Markdown und dem Beispielartikel „Einen Monat Content in 30 Minuten planen“ aus dem Entwurf. Richte das automatische Veröffentlichen über GitHub Pages ein. Halte dich strikt an die Datenschutz-Regeln: keine externen Anfragen, keine Cookies. Formuliere Offenlegung und Datenschutz nicht selbst, lass die Platzhalter stehen. Erklär mir am Ende in einfachen Worten, wie ich einen neuen Artikel hinzufüge.

## Checkliste vor dem Livegang

- [ ] Domain registriert und mit dem Hosting verbunden (HTTPS aktiv)
- [ ] Offenlegung ausgefüllt und gegen § 25 MedienG geprüft (ggf. § 5 ECG)
- [ ] Datenschutzerklärung fertig, inkl. Hosting-Anbieter und Server-Logfiles
- [ ] Im Browser geprüft: keine Anfragen an fremde Server (Entwicklertools, Reiter Netzwerk)
- [ ] Zwei bis drei Artikel fertig
- [ ] Link in der Instagram-Bio und Story-Vorlagen „Neu im Blog“ vorbereitet
