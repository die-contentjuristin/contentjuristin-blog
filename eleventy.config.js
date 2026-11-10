import { HtmlBasePlugin } from "@11ty/eleventy";

const SAEULEN = ["Strategie", "Recht im Alltag", "KI & Tools"];

export default function (eleventyConfig) {
  // Pfad-Präfix (z. B. /contentjuristin-blog/ auf GitHub Pages) automatisch in alle Links einsetzen
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Dateien unverändert übernehmen
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/bilder");

  // Alle Artikel, neueste zuerst
  eleventyConfig.addCollection("artikel", (api) =>
    api
      .getFilteredByGlob("src/artikel/*.md")
      .sort((a, b) => new Date(b.data.datum) - new Date(a.data.datum))
  );

  // Datum auf Deutsch, z. B. „1. Dezember 2026“
  eleventyConfig.addFilter("datumDeutsch", (wert) => {
    if (!wert) return "";
    return new Intl.DateTimeFormat("de-AT", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(wert));
  });

  // Datum maschinenlesbar für <time datetime="…">
  eleventyConfig.addFilter("datumIso", (wert) =>
    wert ? new Date(wert).toISOString().slice(0, 10) : ""
  );

  // Checklisten: Listenpunkte, die mit „[ ]“ oder „[x]“ beginnen, werden als
  // Liste mit Kästchen dargestellt (nur zum Ansehen, nicht anklickbar).
  eleventyConfig.amendLibrary("md", (md) => {
    md.core.ruler.after("inline", "checkliste", (state) => {
      const t = state.tokens;
      const listen = [];
      for (let i = 0; i < t.length; i++) {
        if (t[i].type === "bullet_list_open") listen.push(i);
        else if (t[i].type === "bullet_list_close") listen.pop();
        else if (
          t[i].type === "inline" &&
          t[i - 1]?.type === "paragraph_open" &&
          t[i - 2]?.type === "list_item_open" &&
          listen.length
        ) {
          const m = /^\[([ xX])\]\s+/.exec(t[i].content);
          const erstes = t[i].children?.[0];
          if (!m || erstes?.type !== "text" || !erstes.content.startsWith(m[0])) continue;
          erstes.content = erstes.content.slice(m[0].length);
          t[i].content = t[i].content.slice(m[0].length);
          t[i - 2].attrJoin("class", m[1] === " " ? "offen" : "erledigt");
          const liste = t[listen[listen.length - 1]];
          if (!(liste.attrGet("class") || "").includes("checkliste")) liste.attrJoin("class", "checkliste");
        }
      }
    });
  });

  // Schritt mit Minutenangabe, wie im Entwurf:
  // {% schritt "5 Min.", "Zurückschauen" %}Text in Markdown{% endschritt %}
  eleventyConfig.addPairedShortcode("schritt", function (inhalt, minuten, titel) {
    const md = eleventyConfig.markdownLibrary;
    const text = md ? md.render(inhalt.trim()) : `<p>${inhalt.trim()}</p>`;
    return `<div class="step"><span class="min">${minuten}</span><div><h3>${titel}</h3>${text}</div></div>`;
  });

  // Prüfungen beim Bauen: Warnungen bei fehlenden Angaben
  eleventyConfig.addCollection("_pruefung", (api) => {
    for (const a of api.getFilteredByGlob("src/artikel/*.md")) {
      const d = a.data;
      const datei = a.inputPath;
      const warn = (text) => console.warn(`[Warnung] ${datei}: ${text}`);
      if (!d.titel) warn("„titel“ fehlt.");
      if (!d.datum) warn("„datum“ fehlt.");
      if (!SAEULEN.includes(d.saeule))
        warn(`„saeule“ ist „${d.saeule ?? ""}“, erlaubt sind: ${SAEULEN.join(" | ")}.`);
      if (d.saeule === "Recht im Alltag") {
        if (!d.stand) warn("Rechts-Artikel ohne „stand“.");
        if (!Array.isArray(d.quellen) || d.quellen.length === 0)
          warn("Rechts-Artikel ohne „quellen“.");
      }
      if (d.bild && !d.bild_alt) warn("Bild ohne Alt-Text („bild_alt“).");
    }
    return [];
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
