import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "identity-at-first-glance": {
    title: "Was der erste Screen sagt, bevor gelesen wird",
    excerpt:
      "Besucher bewerten Gewicht, Abstand und Tempo in unter einer Sekunde. Das Urteil kommt vor dem Angebot.",
    lead: "Viele Marken behandeln den Hero als Slogan-Slot. Das Auge macht zuerst etwas anderes: es misst Dichte, wie viele Dinge konkurrieren und ob die Marke ruhig oder angespannt wirkt. Kollidieren diese Signale, bekommt der Text keine faire Chance.",
    imageAlt: "Typografie- und Layout-Detail auf einer Premium-Marken-Homepage",
    sections: [
      {
        heading: "Komposition antwortet vor dem Text",
        paragraphs: [
          "Öffne eine Boutique- oder Service-Site und beobachte, was zuerst ankommt. Nicht die Headline — die Dichte des Screens: enge Ränder, ein Logo im Clinch mit dem Menü, drei Buttons mit gleichem Volumen. Das liest sich als Kompetenz oder Lärm, bevor ein Satz geparst wird.",
          "Menschen nutzen Interface-Qualität als Proxy für Geschäftsqualität. Ein starkes Angebot hinter einer überladenen ersten Ansicht startet trotzdem im Minus. Eine ruhige, lesbare Fläche kauft Zeit für das eigentliche Argument.",
        ],
      },
      {
        heading: "Identität hier heißt Type, Tempo, Hierarchie",
        paragraphs: [
          "First-Glance-Identität ist nicht die Logo-Datei. Es ist das System über dem Fold: wie viele Type-Stufen gleichzeitig schreien, ob Akzentfarbe einmal oder überall erscheint, ob Abstände einer Einheit folgen oder zufällig sind.",
          "Tempo ist eine Behauptung. Autoplay-Video, Marquee-Text und Entry-Pop-ups sagen: die Marke ist nervös. Eine Site, die schnell lädt, still hält und einen klaren Pfad bietet, liest sich als selbstsicher — und Selbstsicherheit ist Designentscheidung, kein Copy-Trick.",
          "Wenn wir Marketing-Sites bauen, fixieren wir diese Regeln vor Illustration oder Fotografie. Custom-Interfaces machen das möglich: Hierarchie ist im Code, nicht in einmaligen CSS-Patches.",
        ],
      },
      {
        heading: "Drei Checks für heute",
        paragraphs: [
          "Eine These im Viewport. Kannst du in einer Zeile sagen, wen du bedienst und was du tust — und trägt das Layout diese Zeile, statt sie zu begraben? Fünf konkurrierende Claims lassen keinen übrig.",
          "Eine Primäraktion. Sekundäre Links dürfen existieren, treten aber zurück. Zwei gleich gewichtete Buttons sind keine Entscheidung. Auf Mobile gehören Daumenreichweite und Tap-Größe zum Test.",
          "Konsistenz über Seiten. Eine polierte Home, die auf Produkt- oder Kontaktseiten in Template-Defaults fällt, kostet mehr Vertrauen als eine schwache Headline. Repariere den Bruch, bevor du den Slogan neu schreibst.",
        ],
      },
      {
        heading: "Wenn der erste Screen zum Angebot passt",
        paragraphs: [
          "Kategorien mit hoher Abwägung — Mode, Beauty, Fertigungspartnerschaften, Professional Services — brauchen Vertrauen vor Detail. Der Besucher kauft Urteil. Der erste Screen sollte sich anfühlen wie dasselbe Urteil auf sein Problem angewandt.",
          "Tempo, lesbare Schrift, ehrliche Claims und technische Basics (Kontrast, Fokus, Metadata) gehören in dasselbe Gespräch wie Ästhetik. Wir prüfen das vor der Übergabe — eine schöne Seite, die auf dem Handy scheitert, bricht den Handshake trotzdem.",
          "Bestehen die drei Checks und es fühlt sich trotzdem falsch an, liegt es meist an Strategie, nicht an Dekoration. Schreib den einen Satz, den das Layout tragen muss, und baue das System darum neu.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "Das Logo ist der kleinste Identitätsteil",
    excerpt:
      "Ein neues Zeichen in einem PDF repariert weder E-Mail-Signaturen noch Produktseiten noch eine Site auf Template-Defaults.",
    lead: "Rebrands starten oft beim Symbol. Sie sollten bei Regeln starten. Ohne gemeinsame Type, Farbe, Abstände und Komponentenverhalten sitzt das frischeste Logo weiter auf einer gebrochenen Experience.",
    imageAlt: "Grid, Farbmuster und Type-Specimen für ein Markensystem",
    sections: [
      {
        heading: "Was Menschen wirklich erinnern",
        paragraphs: [
          "Bitte jemanden, eine Marke zu beschreiben, der er vertraut. Selten zeichnet er das Logo. Er nennt die Bestätigungsmail, ob die Rechnung zur Site passte, ob Instagram sich wie dieselbe Firma anfühlte wie die Verpackung.",
          "Touchpoints wachsen schneller als Logo-Versionen. Ein Zeichen, das bei 32px und auf dem LKW funktioniert, zählt — die eigentliche Last ist jede Fläche nach dem Ad-Klick.",
        ],
      },
      {
        heading: "Systeme machen Geschmack wiederholbar",
        paragraphs: [
          "Ein visuelles System beantwortet Produktionsfragen früh: H1- vs. H2-Gewicht, wie viele Akzente pro Screen, Crop-Ratio, Button-Radius, Mindest-Padding. Teams verhandeln nicht mehr von null auf jeder Seite.",
          "Gute Systeme haben Verbote — keine gestreckten Logos, keine Schatten auf Body-Text, keine Zufallsfonts in Mails. Constraints beschleunigen, weil Ablehnung klar ist.",
          "Wir liefern Sites und Admin-Panels aus demselben Regelset, wenn der Client beides braucht. Ein Dashboard, das die öffentliche Marke ignoriert, lehrt: Identität ist Kosmetik.",
        ],
      },
      {
        heading: "Kern, Produktion, Oberfläche",
        paragraphs: [
          "Kern hält These, Type-Familie, Farb-Tokens, Logo-Clearspace und Voice-Grenzen. Das fixieren, bevor skaliert wird.",
          "Produktion hält Grid, UI-Komponenten, Icon-Stil, Foto-Richtung und Motion-Limits — die Schicht der täglichen Arbeit.",
          "Oberfläche ist Web, Social, Decks, Signage, Packaging. Web isoliert zu designen erzeugt zwei Marken: eine in Figma, eine im Browser. Ein System, verschiedene Canvas.",
        ],
      },
      {
        heading: "Doku, die man öffnet",
        paragraphs: [
          "Ein achtzigseitiges Brand Book, das nie den Drive verlässt, ist Archiv, kein System. Nützliche Doku ist kurz, suchbar und beispielstark: so, nicht so — mit echten Screens.",
          "Kommt ein neuer Kanal — Marketplace-Listing, Short-Form-Cover, Partner-Lockup — Regeln erweitern, nicht brechen. Der Test bleibt: erbt dieses Stück Type- und Farb-Logik vom Kern?",
          "Finanzierst du eine weitere Logo-Exploration, während Produktseiten noch drei Button-Stile haben, pause. Surfaces zuerst auditieren. System reparieren, dann das Zeichen feinjustieren.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "Editorial-Struktur verkauft besser als lautere Buttons",
    excerpt:
      "Sequenz schlägt Stapel. Eine Seite mit These, Beweis und Aktion schlägt eine Broschüre mit mehr Bildern.",
    lead: "Viele Sites lesen sich noch wie gefaltete Flyer: Hero, Feature-Grid, Testimonial-Karussell, Footer-CTA. Die Blöcke allein sind nicht falsch. Das Problem ist die Reihenfolge. Ohne Editorial-Tempo scrollt der Besucher am Beweis vorbei und trifft den Button unüberzeugt.",
    imageAlt: "Editorial-Homepage mit klarer typografischer Hierarchie",
    sections: [
      {
        heading: "Broschüren stapeln; Erlebnisse sequenzieren",
        paragraphs: [
          "Stapeln fügt Module hinzu, bis die Seite voll wirkt. Sequenzieren fragt, was als Nächstes geglaubt werden muss. Zuerst für wen und was sich nach dem Kontakt ändert. Dann Beweis. Erst dann Aktion.",
          "Jeder Abschnitt sollte den nächsten Scroll verdienen. Kann ein Block nicht erklären, warum er in der Story steht, kürzen oder verschieben. Editieren schützt Aufmerksamkeit; es entfernt keinen Wert.",
        ],
      },
      {
        heading: "Typografie ist der Verkaufspfad",
        paragraphs: [
          "Auf Editorial-Sites sind Schriftgröße und Abstand Navigation. Klare H1–H2-Stufen schaffen einen Pfad, auch wenn das Menü minimal ist. ~65 Zeichen Zeilenlänge, konsistentes Leading und genug Kontrast leisten mehr für Verständnis als animierte Counter.",
          "Mobile bricht schwache Hierarchie schneller, als Desktop sie verzeiht. Wickelt sich die Headline in fünf Zeilen und verschwindet der Subhead, schrumpft das Versprechen mit. Am Handy freigeben, bevor Desktop-Drama genehmigt wird.",
        ],
      },
      {
        heading: "Beweis dort, wo Zweifel entsteht",
        paragraphs: [
          "Social Proof in einer generischen Trust-Band ist leicht zu überspringen. Beweis wirkt, wenn er dem Einwand begegnet: Ergebniszeile nach dem Versprechen, benanntes Projekt nach Capabilities, kurzes Zitat nach Preis-Kontext.",
          "Ein starker Case schlägt zehn vage Stats. Wir zeigen echte Live-Arbeit — Fertigungs-Sites, Boutique-Retail, Ops-Tools — im Kontext, keine Prozent-Badges ohne Quelle.",
        ],
      },
      {
        heading: "Eine Primäraktion, ruhig gerahmt",
        paragraphs: [
          "Der Primär-Call bekommt Gewicht: Label, Platzierung, Whitespace. Sekundäre Pfade bleiben sichtbar, aber leiser. Gleich gewichtete Buy- und Learn-Buttons löschen sich aus.",
          "Hochabwägende Kategorien brauchen Zeit. Editorial-Tempo respektiert das. Panik-Timer und aggressive Pop-ups trainieren Misstrauen. Klarer nächster Schritt plus ehrlicher Text konvertiert besser als Druck.",
          "Mappe deine Homepage in These-, Beweis- und Aktions-Spalten. Lücken erscheinen sofort — und füllen ist Copy- und Layout-Arbeit, keine Plugin-Installation.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Quiet Luxury online = Zurückhaltung mit Absicht",
    excerpt:
      "Gedämpfte Farbe und dünne Schrift sind Abkürzungen. Echtes Quiet Luxury ist disziplinierter Raum, Material und Motion.",
    lead: "Quiet-Luxury-Marken übersetzen physische Ruhe oft in digitales Grau. Das verfehlt den Punkt. Zurückhaltung online heißt: jedes Element rechtfertigt seine Präsenz. Leerraum ist nicht Abwesenheit — er ist Struktur.",
    imageAlt: "Minimales Produkt-Stillleben mit weichem Tageslicht",
    sections: [
      {
        heading: "Weniger Lärm, schärfere Botschaft",
        paragraphs: [
          "Reduktion entfernt konkurrierende Claims. Eine Hero-Botschaft, eine Support-Zeile, ein Weg vorwärts. Drei gleich starke Headlines auf einem Screen garantieren, dass keine erinnert wird.",
          "Enge Paletten sind in Ordnung. Lesbarkeit ist nicht optional. Niedrige Sättigung muss trotzdem Kontrast erfüllen. Eine Seite, die flüstert, aber nicht lesbar ist, ist vernachlässigt — nicht premium.",
        ],
      },
      {
        heading: "Material auf dem Screen",
        paragraphs: [
          "Digitales Material kommt aus Foto-Disziplin: konsistentes Licht, ehrliche Textur, kontrollierte Tiefe, Crops, die das Produkt respektieren. Stock-Grinsen und schwere Filter brechen Luxury in einem Frame.",
          "Type trägt Material mit. Letterspacing, Gewicht und Margin sollten atmen wie Packaging. Zufällige Systemfonts auf einer Luxury-Story wirken wie ein Zuhause-gedrucktes Etikett.",
        ],
      },
      {
        heading: "Motion mit Auftrag",
        paragraphs: [
          "Animation soll Hierarchie klären, nicht performen. Subtile Hovers, bedachte Transitions und Scroll, der Text lesbar hält, schlagen Parallax, der Content mitten im Lesen versteckt.",
          "Läuft Motion, während der Besucher noch liest, ist das Layout gescheitert. Pausieren oder entfernen. Luxury liest sich als Kontrolle.",
        ],
      },
      {
        heading: "Eine Marke in Store und Browser",
        paragraphs: [
          "Quiet Luxury lebt von Konsistenz. Kurzer Copy im Shop und lange Absätze online teilen die Marke. Satzlänge, Produktnamen und Call-Ton über Kanäle angleichen.",
          "Performance ist Teil des Feelings. Langsame Loads lesen sich als nachlässig. Tempo und grundlegende Accessibility behandeln wir als Release-Kriterien — wie Abstand und Type — weil Sorgfalt auch in der Mechanik sichtbar ist.",
          "Auditiere die Site gegen deinen besten physischen Touchpoint. Schreit der Screen, wo der Store flüstert, vor dem nächsten Kampagnen-Budget angleichen.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "Eine Projektnotiz, die das Projekt kürzer macht",
    excerpt:
      "Klare Ziele, Zielgruppe, Grenzen und Referenzen machen subjektives Feedback zu baubaren Entscheidungen.",
    lead: "Discovery ist kein Moodboard-Tourismus. Es heißt aufschreiben, wie Erfolg aussieht, wen die Arbeit anspricht und was außerhalb des Scopes liegt. Vages Input erzeugt teure Schleifen. Spezifisches Input lässt Design und Code laufen.",
    imageAlt: "Projektnotizen auf einem Studio-Schreibtisch neben einer Tastatur",
    sections: [
      {
        heading: "Vier Blöcke: Ziel, Zielgruppe, Grenzen, Referenzen",
        paragraphs: [
          "Das Ziel nennt eine beobachtbare Änderung: der erste Screen sagt Positioning klar, das Formular wird abgeschlossen, der Händler-Locator wird genutzt — kein Mood-Wort wie modern oder premium.",
          "Die Zielgruppe nennt, wer entscheidet, was er fürchtet, welchen Beweis er braucht. Grenzen listen Timeline, Budget-Band, vorhandene Assets, Integrationen und rechtliche Linien, die nicht überschritten werden.",
          "Referenzen zeigen Tempo und Struktur, keine Diebstahl-Ziele. Anti-Referenzen mitnehmen: Sites oder Stile, die du ablehnst — und warum.",
        ],
      },
      {
        heading: "Gute Sätze schlagen lange Decks",
        paragraphs: [
          "Eine Seite schlägt zehn verstreute Docs. Wenn Stakeholder uneinig sind, kommt die Notiz früh raus — nicht in Runde vier der Revisions.",
          "Ersetze wir wollen es cleaner durch wir brauchen einen Primär-Call über dem Fold und Specs ohne Login downloadbar. Der zweite Satz ist baubar.",
        ],
      },
      {
        heading: "Früh fixieren — oder später zahlen",
        paragraphs: [
          "Strategie, Identität, Interface, Entwicklung, Launch. Jede Phase setzt voraus, dass die letzte sitzt. Positioning nach Komponenten zu ändern kostet Vielfache einer Skizzen-Änderung.",
          "Die Projektnotiz ist der erste Lock. Ein gründergeführtes Studio kann schnell sein, wenn Intent geschrieben ist; wir brauchen diesen Anker trotzdem, um Custom-Arbeit ohne Theme-Drift zu shippen.",
        ],
      },
      {
        heading: "Zusammen schreiben",
        paragraphs: [
          "Beste Notizen sind co-authored. Du bringst Domain-Wissen; das Studio stellt die Fragen, die Lücken öffnen. Gemeinsame Sprache reduziert später das war nicht gemeint.",
          "Bevor du ein Studio anschreibst, beende diesen Satz: Wenn wir live gehen, wissen wir, dass es funktioniert hat, weil ___. Kannst du die Lücke nicht füllen, hat Discovery noch Arbeit.",
          "Schick diesen Satz mit Links, Constraints und Anti-Referenzen. Du bekommst einen schärferen Vorschlag und einen kürzeren Weg zum Launch.",
        ],
      },
    ],
  },
};

export default content;
