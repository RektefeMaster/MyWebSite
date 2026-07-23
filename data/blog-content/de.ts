import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "identity-at-first-glance": {
    title: "Was der erste Screen sagt, bevor gelesen wird",
    excerpt:
      "Besucher bewerten Layout, Typo und Tempo in unter einer Sekunde. Das passiert vor Ihrem Angebot.",
    lead: "Viele Marken reservieren den Hero für einen Slogan. Das Auge macht etwas anderes: Es scannt Gewicht, Abstände und wie viele Elemente gleichzeitig fordern. Kollidieren die Signale, bekommt der Text keine faire Chance.",
    imageAlt: "Typografie- und Layout-Detail auf Premium-Homepage",
    sections: [
      {
        heading: "Komposition spricht vor dem Text",
        paragraphs: [
          "Öffnen Sie eine Boutique- oder Service-Site und beobachten Sie, was zuerst registriert. Selten die Headline. Eher die Dichte: enge Ränder, Logo im Konflikt mit dem Menü, drei Buttons mit gleichem Gewicht. Das liest sich als Kompetenz oder Lärm, bevor ein Satz verarbeitet ist.",
          "Credibility-Forschung zeigt seit Jahren dasselbe Muster: Interface-Qualität gilt als Proxy für Business-Qualität. Starkes Produkt hinter unordentlicher Erstansicht startet im Minus. Ruhige, lesbare Fläche kauft Zeit für das eigentliche Argument.",
        ],
      },
      {
        heading: "Identität = Typo, Tempo, Hierarchie",
        paragraphs: [
          "Erstblick-Identität ist nicht die Logo-Datei. Es ist das System über dem Fold: wie viele Typo-Stufen gleich schreien, ob Akzentfarbe einmal oder überall sitzt, ob Abstände konsistent skaliert sind.",
          "Tempo sendet mit. Autoplay-Video, Lauftext, Pop-ups beim Eintritt signalisieren Nervosität. Schneller Start, Ruhe, ein klarer Weg wirken souverän. Souveränität ist Designentscheidung, kein Copy-Trick.",
          "Bei Marketing-Sites fixieren wir diese Regeln vor Illustration und Foto. Custom Interfaces statt Reskin: Hierarchie sitzt im Code, nicht in Einmal-CSS.",
        ],
      },
      {
        heading: "Drei Checks für heute",
        paragraphs: [
          "Eine These im Viewport. Können Sie in einer Zeile sagen, wem Sie dienen und was Sie tun, und stützt das Layout diese Zeile? Fünf Botschaften im Hero bedeuten: keine bleibt.",
          "Eine primäre Aktion. Sekundäre Links dürfen existieren, müssen zurücktreten. Zwei gleich starke Buttons = keine Entscheidung. Mobil: Daumenreichweite und Tap-Größe gehören zum Test.",
          "Konsistenz über Seiten. Home poliert, Produkt oder Kontakt im Template-Look: sichtbar in Sekunden, teurer als schwache Headline.",
        ],
      },
      {
        heading: "Wenn Erstscreen und Angebot passen",
        paragraphs: [
          "High-Consideration (Mode, Beauty, B2B-Fertigung, Services) braucht Vertrauen vor Detail. Besucher kaufen kein Pixel, sondern Urteilsvermögen. Der Erstscreen soll dasselbe Urteil auf ihr Problem anwenden.",
          "Speed, lesbare Schrift, ehrliche Claims und Basics (Kontrast, Fokus, Metadata) gehören zur Ästhetik dazu. Wir testen vor Handoff; hübsche Seite, die mobil scheitert oder spät lädt, bricht den Händedruck.",
          "Bestehen die drei Checks und es fühlt sich trotzdem falsch an, liegt es meist an Strategie, nicht Dekor. Klären Sie den einen Satz fürs Layout, bauen Sie das System darum. Langsamer als neues Hero-Bild, deutlich haltbarer.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "Das Logo ist der kleinste Identitätsteil",
    excerpt:
      "Neues Zeichen im PDF repariert weder Mail-Signatur noch Produktseite noch Template-Defaults.",
    lead: "Rebrands starten oft beim Symbol. Sie sollten bei Regeln starten. Ohne gemeinsame Typo, Farbe, Raum und Komponentenverhalten bleibt selbst das frischeste Logo auf gebrochener Experience.",
    imageAlt: "Grid, Farbfelder und Typo-Specimens für Markensystem",
    sections: [
      {
        heading: "Was Menschen wirklich behalten",
        paragraphs: [
          "Lassen Sie Kunden eine vertraute Marke beschreiben. Selten zeichnen sie das Logo. Sie nennen Bestätigungsmail, Rechnung vs. Site, ob Instagram-Grid und Packaging dieselbe Firma fühlen.",
          "Touchpoints wachsen schneller als Logo-Versionen. Mark für 32px und LKW ist nötig, nicht der ganze Aufwand. Der Rest ist jede Fläche nach dem Ad-Klick.",
        ],
      },
      {
        heading: "Systeme machen Geschmack wiederholbar",
        paragraphs: [
          "Visuelles System beantwortet vorab: H1/H2-Gewicht, max. Akzentfarben pro Screen, Crop-Ratio, Button-Radius, Padding-Skala. Design und Dev verhandeln nicht jede Seite neu.",
          "Gute Systeme verbieten: gestrecktes Logo, Schatten im Fließtext, Fremdfonts in Mails. Grenzen beschleunigen, weil Ablehnung offensichtlich ist.",
          "Site und Admin-Panel aus demselben Rule Set, wenn nötig. Dashboard ohne Public Brand lehrt: Identität ist Kosmetik.",
        ],
      },
      {
        heading: "Kern, Produktion, Oberfläche",
        paragraphs: [
          "Kern: These, Schriftfamilie, Color Tokens, Logo-Clearspace, Voice-Grenzen. Vor Skalierung schließen.",
          "Produktion: Grid, UI-Komponenten, Icons, Fotosprache, Motion-Limits. Hier läuft Tagesarbeit.",
          "Oberfläche: Web, Social-Templates, Sales-Decks, Signage, Packaging. Web isoliert = zwei Marken (Figma vs. Browser). Ein System, verschiedene Leinwände.",
        ],
      },
      {
        heading: "Doku, die geöffnet wird",
        paragraphs: [
          "Achtzig Seiten Brand Book im Drive = Archiv, kein System. Nützliche Doku: kurz, suchbar, viele Beispiele (tu / lass).",
          "Neuer Kanal (Marketplace, Short-Video-Cover, Co-Brand): Regeln erweitern, nicht brechen. Test bleibt: erbt das Stück Typo- und Farblogik vom Kern?",
          "Neue Logo-Exploration finanzieren, während Produktseiten drei Button-Stile haben? Pause. Surfaces auditieren. System fixen, dann Mark verfeinern.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "Editorial-Struktur verkauft besser als lautere Buttons",
    excerpt:
      "Sequenz schlägt Stapel. Seite mit These, Beweis, Aktion schlägt Broschüre mit mehr Bildern.",
    lead: "Viele Sites lesen sich wie gefaltete Flyer: Hero, Feature-Grid, Testimonial-Karussell, Footer-Aufruf. Problem ist die Reihenfolge. Ohne editorialen Takt scrollt man am Beweis vorbei und kommt unüberzeugt am Button an.",
    imageAlt: "Editoriales Homepage-Layout mit klarer Typo-Hierarchie",
    sections: [
      {
        heading: "Broschüren stapeln, Experiences sequenzieren",
        paragraphs: [
          "Stapeln füllt Module bis die Seite voll wirkt. Sequenzieren fragt, was als Nächstes geglaubt werden muss. Erst für wen und was sich nach Kontakt ändert. Dann Evidenz. Dann Aktion.",
          "Jeder Block muss den nächsten Scroll verdienen. Keine Story-Rolle? Cut oder Move. Editieren schützt Aufmerksamkeit, nicht Wert.",
        ],
      },
      {
        heading: "Typo ist der Sales-Pfad",
        paragraphs: [
          "Bei editorialen Sites sind Größe und Abstand Navigation. Klare H1-H2-Stufen bauen Pfad auch bei minimalem Menü. ~65 Zeichen Zeilenlänge, konstantes Leading, Kontrast helfen mehr als animierte Counter.",
          "Mobil bricht schwache Hierarchie schneller als Desktop verzeiht. Fünfzeilige Headline, verschwundener Subhead = geschrumpftes Versprechen. Erst am Phone messen.",
        ],
      },
      {
        heading: "Beweis dort, wo Zweifel entsteht",
        paragraphs: [
          "Social Proof in generischer Trust-Band = leicht übersprungen. Beweis trifft Einwand: Ergebniszeile nach Promise, benanntes Projekt nach Capability-Liste, kurzes Zitat nach Preis-Kontext.",
          "Ein starker Case schlägt zehn vage Stats. Wir zeigen echte Live-Arbeit (Fertigung, Boutique-Retail, Ops-Tools) im Kontext, keine source-losen Prozent-Badges.",
        ],
      },
      {
        heading: "Eine primäre Aktion, ruhig gerahmt",
        paragraphs: [
          "Primärer Aufruf bekommt Gewicht: Label, Platz, Whitespace. Sekundär (Katalog, FAQ, Portfolio) sichtbar, aber leiser. Kaufen und Entdecken gleich stark = Cancel.",
          "High-Consideration braucht Zeit. Editorialer Takt respektiert das. Panik-Timer und aggressive Pop-ups trainieren Misstrauen. Klarer Next Step + ehrlicher Copy schlägt Druck.",
          "Homepage in These / Beweis / Aktion mappen. Lücken sofort sichtbar. Füllen = Copy- und Layout-Arbeit, kein Plugin.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Quiet Luxury online = Zurückhaltung mit Absicht",
    excerpt:
      "Gedeckte Farbe und dünne Schrift sind Shortcuts. Echtes Quiet Luxury: disziplinierter Raum, Material, Motion.",
    lead: "Quiet-Luxury-Marken übersetzen physische Ruhe oft in digitales Grau. Verfehlt. Zurückhaltung online heißt: jedes Element rechtfertigt sich. Leerraum ist Struktur, nicht Abwesenheit.",
    imageAlt: "Minimales Produkt-Stillleben mit weichem Tageslicht",
    sections: [
      {
        heading: "Weniger Lärm, schärfere Message",
        paragraphs: [
          "Reduktion entfernt konkurrierende Claims. Eine Hero-Message, eine Support-Zeile, ein Weg. Drei gleich laute Headlines = keine Erinnerung.",
          "Schmale Palette ok. Lesbarkeit Pflicht. Niedrige Sättigung muss Kontrast halten. Unlesbare Premium-Seite = Vernachlässigung, nicht Luxus.",
        ],
      },
      {
        heading: "Material am Screen",
        paragraphs: [
          "Digitales Material aus Foto-Disziplin: konsistentes Licht, ehrliche Textur, kontrollierte Tiefe, Crops die Produkt respektieren. Stock-Grinsen und Heavy-Filter killen Luxus sofort.",
          "Typo trägt Material: Tracking, Gewicht, Margin atmen wie Packaging. Systemfont auf Luxus-Story = Heimdruck-Etikett.",
        ],
      },
      {
        heading: "Motion mit Job",
        paragraphs: [
          "Animation klärt Hierarchie, nicht Show. Subtile Hovers, durchdachte Transitions, scrollbares Lesbares schlagen Parallax, das Mid-Read Content versteckt.",
          "Motion während User noch liest = Layout-Fail. Pause oder weg. Luxus liest sich als Kontrolle.",
        ],
      },
      {
        heading: "Eine Marke in Store und Browser",
        paragraphs: [
          "Quiet Luxury lebt von Konsistenz. Kurzer Copy im Laden, lange Absätze online = Split. Satzlänge, Product Naming, Aufruf-Ton angleichen.",
          "Performance ist Feel. Langsamer Load = Nachlässigkeit. Speed und Accessibility-Basics sind Release-Kriterium wie Spacing und Typo.",
          "Site gegen besten physischen Touchpoint prüfen. Screen schreit, Store flüstert? Erst alignen, dann Campaign-Budget.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "Eine Projektnotiz, die das Projekt kürzer macht",
    excerpt:
      "Klare Ziele, Zielgruppe, Grenzen und Referenzen machen Feedback baubar statt subjektiv.",
    lead: "Discovery ist kein Moodboard-Tourismus. Es schreibt Erfolg, Zielgruppe und Out-of-Scope fest. Vage Input = teure Loops. Spezifische Input lässt Design und Code laufen.",
    imageAlt: "Projektnotizen am Studiotisch neben Tastatur",
    sections: [
      {
        heading: "Vier Blöcke: Ziel, Zielgruppe, Constraints, Referenzen",
        paragraphs: [
          "Ziel = beobachtbare Änderung: Erstscreen positioniert klar, Formular completed, Händler-Finder genutzt. Keine Mood-Wörter wie modern oder premium.",
          "Zielgruppe: wer entscheidet, wovor Angst, welcher Proof nötig. Constraints: Timeline, Budget-Band, Assets, Integrationen, rechtliche Linien.",
          "Referenzen zeigen Tempo und Struktur, kein Diebstahl-Ziel. Anti-Referenzen: was abgelehnt wird und warum.",
        ],
      },
      {
        heading: "Gute Sätze schlagen lange Decks",
        paragraphs: [
          "Eine Seite schlägt zehn verstreute Docs. Streit unter Stakeholdern? Die Notiz zeigt es früh, nicht in Revision Runde vier.",
          "Statt wir wollen cleaner: ein primärer Aufruf oberhalb der Falz, Specs ohne Login downloadbar. Zweiter Satz ist baubar.",
        ],
      },
      {
        heading: "Früh locken, sonst spät zahlen",
        paragraphs: [
          "Strategie, Identität, Interface, Dev, Launch. Jede Phase setzt die vorherige voraus. Position nach Komponenten ändern kostet Vielfaches vs. Skizze.",
          "Notiz = erstes Lock. Gründergeführtes Studio braucht geschriebenen Intent für Custom ohne Theme-Drift.",
        ],
      },
      {
        heading: "Gemeinsam schreiben",
        paragraphs: [
          "Beste Projektnotizen sind gemeinsames Schreiben. Der Kunde bringt Fachwissen, Studio die Lücken-Fragen. Gemeinsame Sprache reduziert das war nicht gemeint.",
          "Vor der Mail: Wenn wir launchen, wissen wir, es klappte, weil ___. Blank nicht füllbar? Discovery unvollständig.",
          "Diesen Satz plus Links, Constraints, Anti-Referenzen senden. Schärferes Angebot, kürzerer Weg zum Launch.",
        ],
      },
    ],
  },
};

export default content;
