import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "what-is-seo": {
    title: "Was ist SEO? Suchmaschinenoptimierung verständlich erklärt",
    excerpt:
      "SEO hilft Suchmaschinen, Unternehmensseiten zu finden, zu verstehen und passenden Suchanfragen zuzuordnen. Die wichtigsten Grundlagen im Überblick.",
    lead: "SEO steht für Suchmaschinenoptimierung. Gemeint ist die Arbeit, mit der eine Website technisch erreichbar, inhaltlich verständlich und für passende Suchanfragen relevant wird. Für Unternehmen beginnt das bereits bei der Seitenplanung: Welche Leistung sucht ein Kunde, welche Seite beantwortet seine Frage und welche Belege braucht er für den nächsten Schritt?",
    imageAlt: "Laptop und Lupe als Motiv für Suchmaschinenoptimierung",
    sections: [
      {
        heading: "Wie eine Suchmaschine mit Ihrer Website arbeitet",
        paragraphs: [
          "Zuerst entdeckt ein Suchdienst eine URL über Links, eine XML-Sitemap oder einen früheren Besuch. Dieser Vorgang heißt Crawling. Danach verarbeitet der Suchdienst den Inhalt und entscheidet, ob die Seite in den Index aufgenommen wird. Erst aus diesem Bestand wählt er Ergebnisse für eine konkrete Suchanfrage aus.",
          "Jede Stufe kann scheitern. Eine wichtige Seite ohne internen Link wird womöglich spät entdeckt. Widersprüchliche Canonical-Angaben erschweren die Einordnung. Ein vager Text kann technisch sauber indexiert sein und trotzdem an der Suchabsicht vorbeigehen. SEO betrachtet daher Technik, Struktur und Inhalt gemeinsam.",
        ],
      },
      {
        heading: "Technisches SEO schafft die Voraussetzung",
        paragraphs: [
          "Eine crawlbare Navigation, eindeutige Statuscodes und eine aktuelle Sitemap bilden die technische Grundlage. Hinzu kommen konsistente Canonicals, sinnvolle Weiterleitungen und Regeln in der robots.txt. Bei mehrsprachigen Websites muss hreflang die richtige Sprach- und Marktversion ausweisen.",
          "Auch die Nutzung auf dem Smartphone gehört dazu. Bilder sollten passend dimensioniert sein, Schriften sparsam geladen werden und zentrale Inhalte ohne unnötige Skripte erscheinen. Eine schnelle Seite erhält dadurch keinen garantierten Rang. Sie vermeidet jedoch technische Hindernisse, die Besucher und Suchdienste gleichermaßen betreffen.",
        ],
      },
      {
        heading: "Jede Seite braucht eine eindeutige Aufgabe",
        paragraphs: [
          "Der Seitentitel benennt Thema und gegebenenfalls Marke. Die Meta-Beschreibung fasst den Nutzen des Ergebnisses zusammen. Eine klare H1 ordnet den Inhalt ein, während H2- und H3-Überschriften die Argumentation gliedern. Diese Elemente sollten zueinander passen, ohne dieselbe Wortfolge ständig zu wiederholen.",
          "Entscheidend ist die Suchabsicht. Eine Person mit der Frage „Was ist SEO?“ erwartet eine Erklärung. Wer „Webdesign-Agentur für Hersteller“ sucht, prüft Anbieter und Referenzen. Eine Anfrage nach „Angebot Website Relaunch“ liegt näher an einer Kontaktentscheidung. Ein einzelner Seitentyp kann diese verschiedenen Aufgaben kaum gleich gut erfüllen.",
        ],
      },
      {
        heading: "Inhalt beantwortet die nächste echte Frage",
        paragraphs: [
          "Guter SEO-Inhalt beginnt beim Informationsbedarf des Lesers. Eine Leistungsseite nennt Umfang, Zielgruppe, Ablauf und einen nachvollziehbaren Kontaktweg. Ein Fachartikel erklärt ein enges Thema so weit, dass der Leser eine Entscheidung treffen oder eine Prüfung selbst durchführen kann.",
          "Länge ist dafür kein Qualitätsmaß. Ein kurzer, präziser Abschnitt kann hilfreicher sein als mehrere Seiten allgemeiner Text. Prüfen Sie jeden Absatz: Liefert er eine neue Information, ein Beispiel oder eine notwendige Einschränkung? Wiederholt er nur die Überschrift, kann er entfallen.",
        ],
      },
      {
        heading: "Vertrauen entsteht auch außerhalb der Website",
        paragraphs: [
          "Suchdienste berücksichtigen Signale, die über die eigene Website hinausgehen. Für lokale Unternehmen sind korrekte Angaben zu Name, Adresse und Telefonnummer wichtig. Für einen Hersteller können fachlich passende Erwähnungen, Händlerseiten oder nachvollziehbare Referenzprojekte mehr Aussagekraft besitzen als beliebige Verzeichniseinträge.",
          "Gekaufte Linkpakete ersetzen diese Glaubwürdigkeit nicht. Prüfen Sie stattdessen, wo Kunden Ihren Betrieb tatsächlich erwarten und welche unabhängige Quelle Ihre Arbeit sachlich bestätigen kann. Der Wert liegt im Zusammenhang zur Branche und zum Angebot.",
        ],
      },
      {
        heading: "Was beim Website-Auftrag geklärt sein sollte",
        paragraphs: [
          "Fragen Sie, wer Seitentitel, Meta-Beschreibungen, Überschriften und Sitemap vor der Veröffentlichung prüft. Lassen Sie sich erklären, wie mobile Leistung, Weiterleitungen und Indexierbarkeit getestet werden. Für internationale Seiten gehört eine eigene Sprachfassung pro Markt in den Plan.",
          "Klären Sie außerdem den Pflegeweg. Ihr Team sollte vereinbarte Inhalte ändern können, ohne bei jeder Korrektur in den Quellcode einzugreifen. Ein Admin-Panel oder eine CMS-Anbindung ist sinnvoll, wenn Leistungen, Standorte oder Fachartikel regelmäßig aktualisiert werden.",
        ],
      },
      {
        heading: "SEO bleibt laufende Arbeit",
        paragraphs: [
          "Nach der Veröffentlichung zeigen Suchanfragen, Indexierungsberichte und das Verhalten auf wichtigen Seiten, wo Lücken bestehen. Neue Leistungen benötigen eigene Inhalte. Veraltete Informationen werden korrigiert, interne Links angepasst und technische Fehler nach Änderungen erneut geprüft.",
          "Feste Spitzenpositionen lassen sich nicht zusagen, weil Wettbewerb und Nachfrage veränderlich sind. Seriöse SEO-Arbeit hält die technischen Grundlagen prüfbar und verbessert Seiten anhand tatsächlicher Suchfragen.",
        ],
      },
    ],
  },

  "website-pricing-why-cheap-costs-more": {
    title: "Was kostet eine Website? So vergleichen Sie Angebote",
    excerpt:
      "Website-Kosten folgen dem Umfang. Erfahren Sie, wie Design, Entwicklung, SEO-Vorbereitung, Pflege und Übergabe ein Angebot bestimmen.",
    lead: "Der Preis einer Website lässt sich erst beurteilen, wenn der Leistungsumfang lesbar ist. Zwei Angebote können beide „individuelles Webdesign“ nennen und völlig verschiedene Arbeiten enthalten. Entscheidend sind die geplanten Seiten, Funktionen, Inhalte, Qualitätsprüfungen und der Pflegeweg nach der Veröffentlichung.",
    imageAlt: "Schreibtisch als Motiv für Website-Kosten und Projektumfang",
    sections: [
      {
        heading: "Der Umfang erklärt den Preis",
        paragraphs: [
          "Eine kompakte Unternehmenswebsite braucht eine andere Planung als ein mehrsprachiger Auftritt mit Leistungsarchiv, Blog und Admin-Panel. Formulare, CRM-Anbindungen oder Terminlogik erweitern die Entwicklung. Auch die Frage, wer Texte und Bilder vorbereitet, verändert den Aufwand deutlich.",
          "Verlangen Sie deshalb mehr als eine Gesamtsumme. Ein Angebot sollte Seitenarten, Funktionen, Zuständigkeiten und ausdrücklich ausgeschlossene Leistungen nennen. Erst diese Angaben machen Preise vergleichbar.",
        ],
      },
      {
        heading: "Wofür Design- und Entwicklungszeit benötigt wird",
        paragraphs: [
          "Zu Beginn werden Zielgruppen, Inhalte und zentrale Nutzerwege geklärt. Daraus entstehen Informationsarchitektur und Entwürfe für die wichtigsten Seitentypen. Eine individuelle Oberfläche benötigt Regeln für Typografie, Abstände, Farben und Zustände. Diese Regeln tragen später weitere Seiten und interne Bereiche.",
          "In der Entwicklung folgen responsive Layouts, Komponenten, Formulare und gegebenenfalls Schnittstellen. Danach müssen Kontaktwege, mobile Darstellung, grundlegende Barrierefreiheit und technische SEO-Voraussetzungen geprüft werden. Die Übergabe umfasst außerdem Zugänge, Dokumentation und den vereinbarten Pflegeweg.",
        ],
      },
      {
        heading: "Warum sehr niedrige Angebote genauer geprüft werden müssen",
        paragraphs: [
          "Ein niedriger Preis kann zu einem kleinen, klar abgegrenzten Projekt passen. Problematisch wird er, wenn ein umfangreicher Anspruch versprochen wird, aber die notwendigen Arbeitsschritte fehlen. Häufig werden dann eine vorgefertigte Vorlage angepasst, Inhalte übernommen und Prüfungen auf den Veröffentlichungstag verschoben.",
          "Die Folgekosten zeigen sich bei Änderungen. Unklare Komponenten erschweren neue Seiten, ein Plugin-Konflikt blockiert Funktionen oder jede Textkorrektur benötigt Entwicklung. Fragen Sie im Angebot, wer solche Fälle übernimmt und wie die technische Grundlage gepflegt werden kann.",
        ],
      },
      {
        heading: "Ein Angebot vollständig prüfen",
        paragraphs: [
          "Klären Sie, wem Domain, Hosting-Konto, Quellcode und Drittanbieterzugänge gehören. Das Unternehmen sollte nach der Übergabe auf die vereinbarten Konten und Inhalte zugreifen können. Lizenzkosten für Schriften, Plugins oder Dienste müssen sichtbar sein.",
          "Geben Sie allen Anbietern dieselbe Projektbeschreibung. Nennen Sie das geschäftliche Ziel, die wichtigsten Nutzer und die erforderlichen Handlungen. Fragen Sie außerdem nach Designgrundlage, technischer SEO-Vorbereitung, mobilen Prüfungen, Revisionen und Übergabe.",
          "Sehen Sie sich veröffentlichte oder dokumentierte Arbeiten im passenden Zusammenhang an. Ein Hersteller braucht andere Belege als eine Boutique. Lassen Sie sich erklären, welche Rolle der Anbieter im gezeigten Projekt übernommen hat und wie der spätere Pflegeweg aussieht.",
        ],
      },
      {
        heading: "Ein knappes Budget sinnvoll einsetzen",
        paragraphs: [
          "Priorisieren Sie zuerst die Seiten, die Angebot, Beleg und Kontaktweg tragen. Zusätzliche Animationen, ein umfangreicher Inhaltsbereich oder Automatisierungen können als spätere Ausbaustufe geplant werden. Diese Reihenfolge sollte im technischen Aufbau bereits berücksichtigt sein.",
          "Ein klar begrenzter erster Umfang ist besser kalkulierbar als eine lange Wunschliste ohne Prioritäten. Wenn Sie METEK Digital anfragen, reichen für den Einstieg Branche, Ziel, benötigte Funktionen und ein ungefährer Zeitrahmen. Daraus lässt sich ein nachvollziehbarer Umfang ableiten.",
        ],
      },
    ],
  },

  "whatsapp-chatbot-for-business": {
    title: "WhatsApp-Chatbot für Unternehmen: Aufgaben, Grenzen, CRM",
    excerpt:
      "Ein WhatsApp-Chatbot kann Fragen und Termine bearbeiten. Entscheidend sind klare Regeln, menschliche Übergabe und eine passende CRM-Anbindung.",
    lead: "Ein WhatsApp-Chatbot lohnt sich, wenn wiederkehrende Nachrichten nach eindeutigen Regeln bearbeitet werden können. Dazu zählen freigegebene Fragen, verfügbare Termine oder der Status einer Anfrage. Der Nutzen hängt weniger von langen Dialogen ab als von sauberen Daten, klaren Grenzen und einer verlässlichen Übergabe an Mitarbeitende.",
    imageAlt: "Smartphone auf einem Schreibtisch zum Thema WhatsApp-Chatbot für Unternehmen",
    sections: [
      {
        heading: "Mit echten Gesprächsverläufen beginnen",
        paragraphs: [
          "Sammeln Sie zunächst wiederkehrende Fragen aus einem repräsentativen Zeitraum. Ordnen Sie diese nach Absicht: Information, Termin, Änderung, Absage oder persönlicher Klärungsbedarf. So wird sichtbar, welche Aufgaben festen Regeln folgen und wo eine Person entscheiden muss.",
          "Für jede automatisierte Antwort braucht es eine freigegebene Quelle. Preise, Leistungen, Öffnungszeiten und Standorte sollten einen Verantwortlichen und ein Änderungsdatum haben. Ohne diesen Pflegeprozess veraltet ein Chatbot schneller als die Website.",
        ],
      },
      {
        heading: "Geeignete Abläufe sind eng und überprüfbar",
        paragraphs: [
          "Ein Terminablauf kann freie Zeiten abfragen, eine Auswahl bestätigen und nach einer Absage das Zeitfenster wieder freigeben. Ein Informationsablauf kann Leistungen erklären und anschließend zur passenden Kontaktperson führen. Beide Prozesse haben einen klaren Anfang und ein prüfbares Ende.",
          "Individuelle Preisverhandlungen, Beschwerden und unklare Anfragen benötigen meist menschliche Bearbeitung. Definieren Sie diese Übergabepunkte vor der Entwicklung. Der Chatbot soll früh erkennen, wann seine Regeln nicht ausreichen.",
        ],
      },
      {
        heading: "Die Übergabe muss Kontext erhalten",
        paragraphs: [
          "Bei einer Übergabe braucht das Team mehr als eine Benachrichtigung. Sinnvoll sind Name oder bekannte Kontaktdaten, die erkannte Absicht, bereits gewählte Optionen und die letzte offene Frage. Mitarbeitende können das Gespräch dann fortsetzen, ohne alles erneut abzufragen.",
          "Die Formulierung gegenüber dem Kunden sollte ebenso eindeutig sein. Teilen Sie mit, dass eine Person übernimmt, und vermeiden Sie weitere automatische Antworten im selben Vorgang. So bleiben Zuständigkeit und Gesprächsstand nachvollziehbar.",
        ],
      },
      {
        heading: "CRM und Kalender bilden die betriebliche Grundlage",
        paragraphs: [
          "Ein Chatbot erzeugt Daten: neue Kontakte, Terminwünsche, Absagen und Gesprächsnotizen. Diese Informationen sollten in das vereinbarte CRM- oder Terminpanel fließen. Sonst verteilt sich der Arbeitsstand auf WhatsApp, Tabellen und persönliche Notizen.",
          "Nutzen WhatsApp und Instagram denselben Kalender, benötigen beide Kanäle eine gemeinsame Verfügbarkeitslogik. Der Kalender bleibt dabei die maßgebliche Quelle. Der Chatbot zeigt nur Zeiten an, die das System tatsächlich freigibt.",
        ],
      },
      {
        heading: "Vor der Freigabe mit Randfällen testen",
        paragraphs: [
          "Prüfen Sie neben dem normalen Ablauf auch belegte Zeiten, verspätete Antworten, doppelte Nachrichten und eine Änderung während der Buchung. Testen Sie, ob eine Absage den richtigen Termin betrifft und ob die menschliche Übergabe zuverlässig stoppt, was automatisiert wurde.",
          "Beginnen Sie mit einem begrenzten Anwendungsfall. Nach der ersten Nutzung können unklare Formulierungen und fehlende Regeln anhand echter Verläufe korrigiert werden. Eine Ausweitung sollte erst folgen, wenn Datenquelle und Zuständigkeit stabil sind.",
          "Bearbeitet Ihr Team viele ähnliche Nachrichten und kann es die zugrunde liegenden Informationen verlässlich pflegen, lässt sich der Umfang konkret prüfen. METEK Digital benötigt dafür die häufigsten Anfragen, die gewünschte Übergabe und eine Beschreibung von Kalender oder CRM.",
        ],
      },
    ],
  },

  "technical-seo-checklist-business-website": {
    title: "Technische SEO-Checkliste für Unternehmenswebsites",
    excerpt:
      "Prüfen Sie vor der Veröffentlichung Crawling, Metadaten, mobile Leistung, Indexierung, Sitemap, Weiterleitungen und den späteren Pflegeweg.",
    lead: "Technisches SEO entscheidet, ob Suchdienste wichtige Unternehmensseiten zuverlässig erreichen und einordnen können. Die Prüfung beginnt vor der Entwicklung und endet nicht mit der Veröffentlichung. Diese Checkliste ordnet die Arbeit nach Projektphasen, damit Fehler früh sichtbar werden.",
    imageAlt: "Laptop mit Analyseansicht zur technischen SEO-Prüfung einer Unternehmenswebsite",
    sections: [
      {
        heading: "Vor dem Design: Seiten und Suchabsichten zuordnen",
        paragraphs: [
          "Listen Sie alle wichtigen Seitentypen auf: Startseite, Leistungen, Referenzen, Standorte, Fachbeiträge und Kontakt. Jede Seite erhält eine eindeutige Aufgabe und eine Hauptüberschrift. Doppelungen werden bereits in dieser Karte sichtbar.",
          "Planen Sie außerdem die endgültigen URLs. Kurze, beschreibende Pfade erleichtern interne Links und spätere Auswertungen. Bei einem Relaunch braucht jede alte URL eine Entscheidung: behalten, gezielt weiterleiten oder bewusst entfernen.",
        ],
      },
      {
        heading: "Während der Entwicklung: Crawling kontrollieren",
        paragraphs: [
          "Testumgebungen gehören vor Suchdiensten geschützt. Die veröffentlichte Website muss dagegen wichtige Seiten über normale Links erreichbar machen. Prüfen Sie robots.txt, Meta-Robots-Angaben und Canonicals gemeinsam, da widersprüchliche Regeln die Indexierung erschweren.",
          "Erstellen Sie eine XML-Sitemap mit den indexierbaren Hauptseiten. Nicht benötigte Filter-, Vorschau- oder System-URLs gehören nicht hinein. Bei mehreren Sprachen müssen hreflang-Verweise wechselseitig und auf die richtige Marktversion zeigen.",
        ],
      },
      {
        heading: "Seitentitel, Beschreibungen und Überschriften",
        paragraphs: [
          "Jede wichtige Seite benötigt einen eigenen Seitentitel und eine passende Meta-Beschreibung. Der Titel nennt das konkrete Thema. Die Beschreibung fasst zusammen, was der Suchende auf der Seite findet. Beide bleiben lesbar und vermeiden unnötige Wiederholungen.",
          "Verwenden Sie eine eindeutige H1 pro Seite und ordnen Sie Unterthemen logisch darunter. Überschriften dienen dem Inhalt, nicht der optischen Größe. Wenn ein Text nur wegen des Aussehens als H3 markiert wird, verliert die Dokumentstruktur ihren Sinn.",
        ],
      },
      {
        heading: "Mobile Leistung und Bedienbarkeit prüfen",
        paragraphs: [
          "Messen Sie die wichtigsten Seiten auf einem realen Smartphone und unter gedrosselter Verbindung. Kontrollieren Sie die Größe ausgelieferter Bilder, blockierende Skripte und unnötige Schriftdateien. Der erste sichtbare Inhalt sollte ohne lange Verzögerung erscheinen.",
          "Menü, Formular und primäre Kontaktaktion müssen mit Tastatur und Berührung erreichbar sein. Prüfen Sie Fokuszustände, Beschriftungen und Fehlermeldungen. Technische SEO-Bereitschaft und grundlegende Barrierefreiheit überschneiden sich an vielen dieser Stellen.",
        ],
      },
      {
        heading: "Vor der Veröffentlichung: Statuscodes und Weiterleitungen",
        paragraphs: [
          "Rufen Sie alle geplanten URLs automatisiert oder anhand einer vollständigen Liste ab. Wichtige Seiten sollten den erwarteten Statuscode liefern. Ketten aus mehreren Weiterleitungen werden auf ein direktes Ziel verkürzt, interne Links zeigen ebenfalls auf dieses Ziel.",
          "Testen Sie Formulare, Telefonnummern, E-Mail- und WhatsApp-Links. Prüfen Sie strukturierte Daten nur dort, wo der sichtbare Inhalt sie stützt. Eine Markierung darf keine Leistungen, Bewertungen oder Standorte erfinden.",
        ],
      },
      {
        heading: "Nach dem Start: Indexierung und Pflege beobachten",
        paragraphs: [
          "Melden Sie die Sitemap in den verfügbaren Webmaster-Werkzeugen an und beobachten Sie Indexierungsfehler. Kontrollieren Sie nach einem Relaunch besonders alte URLs und Weiterleitungen. Auffällige 404-Aufrufe können auf vergessene interne oder externe Links hinweisen.",
          "Legen Sie fest, wer Seitentitel, Beschreibungen und Inhalte später pflegt. Ein Admin-Panel oder CMS sollte nur die Felder öffnen, die das Team tatsächlich benötigt.",
          "Dokumentieren Sie die Prüfergebnisse in einer Freigabeliste. Nach größeren technischen oder inhaltlichen Änderungen sollte dieselbe Prüfung erneut laufen.",
        ],
      },
    ],
  },

  "identity-at-first-glance": {
    title: "Der erste Eindruck einer Website: Identität im ersten Bildschirm",
    excerpt:
      "Typografie, Hierarchie, Abstände und Bildwahl prägen den ersten Eindruck einer Website. So prüfen Sie die Markenidentität im ersten Bildschirm.",
    lead: "Besucher erfassen eine Website zunächst als Gesamtbild. Noch bevor sie jedes Wort lesen, erkennen sie Ordnung, Gewichtung und mögliche Handlungen. Der erste Bildschirm muss deshalb Angebot und Markenhaltung sichtbar strukturieren. Ein Logo allein kann diese Aufgabe nicht übernehmen.",
    imageAlt: "Typografie und Layoutdetail auf der Startseite einer Marke",
    sections: [
      {
        heading: "Der erste Bildschirm setzt eine Erwartung",
        paragraphs: [
          "Eine Unternehmenswebsite wirkt anders als ein Online-Shop oder ein Boutique-Hotel. Der erste Bildschirm sollte diese Rolle unmittelbar erkennen lassen. Dazu gehören eine verständliche Aussage, ein passender visueller Beleg und eine klar gewichtete nächste Handlung. Wenn Menü, Hinweisleiste, Überschrift und mehrere Schaltflächen gleichzeitig Aufmerksamkeit verlangen, muss der Besucher die Reihenfolge dagegen selbst herstellen.",
        ],
      },
      {
        heading: "Typografie macht Hierarchie sichtbar",
        paragraphs: [
          "Schriftwahl allein erzeugt noch keine Identität.",
          "Entscheidend ist das Verhältnis von Überschrift, Fließtext, Navigation und Beschriftungen. Wiederkehrende Größen und Abstände zeigen, welche Information zuerst gelesen werden soll.",
          "Prüfen Sie den ersten Bildschirm auf einem schmalen Smartphone. Eine lange Überschrift kann dort den Beleg und die Handlung vollständig verdrängen. Kürzen Sie den Satz oder ändern Sie die Gewichtung, bevor Sie die Schrift so klein setzen, dass sie ihre Funktion verliert.",
        ],
      },
      {
        heading: "Bilder müssen eine Behauptung belegen",
        paragraphs: [
          "Ein Hersteller kann Material, Fertigung oder ein abgeschlossenes Projekt zeigen. Eine Unterkunft braucht Bilder, die Raum und Zustand nachvollziehbar machen. Für professionelle Dienstleistungen können Arbeitsoberflächen oder konkrete Ergebnisse geeigneter sein als austauschbare Stockmotive.",
          "Fragen Sie bei jedem Bild, welche Aussage es stützt. Dient es nur als farbige Fläche, sollte es die Lesbarkeit nicht beeinträchtigen. Trägt es Belegwert, braucht es genügend Größe und einen sinnvollen Bildausschnitt.",
        ],
      },
      {
        heading: "Tempo und Stabilität gehören zur Wahrnehmung",
        paragraphs: [
          "Ein sorgfältiges Layout verliert Wirkung, wenn der Hauptinhalt beim Laden springt oder ein schweres Medium lange leer bleibt. Dimensionierte Bilder, zurückhaltend geladene Schriften und eine belastbare mobile Darstellung schützen den ersten Eindruck.",
          "Bewegung sollte die Reihenfolge erklären. Eine kurze Einführung kann den Blick führen, doch der Inhalt muss anschließend ruhig lesbar bleiben. Dauernde Bewegung konkurriert mit Text und Bedienung.",
        ],
      },
      {
        heading: "Die bestehende Startseite prüfen",
        paragraphs: [
          "Blenden Sie für einen Moment den Fließtext aus. Lassen Bild, Typografie und Anordnung noch erkennen, um welche Art von Unternehmen es geht? Lesen Sie danach nur Überschrift und primäre Aktion. Passen beide zum tatsächlichen Angebot?",
          "Öffnen Sie anschließend eine Leistungs- und die Kontaktseite. Dieselben Regeln für Schrift, Abstand und Handlung sollten weiterführen. Ein starker erster Bildschirm hilft wenig, wenn die folgenden Seiten in ein anderes System wechseln.",
          "Dokumentieren Sie den Einsatz der Akzentfarbe und die Gewichtung der Hauptaktion. Wiederkehrende Muster gehören in gemeinsame Tokens und Komponenten.",
        ],
      },
    ],
  },

  "system-not-logo": {
    title: "Vom Logo zum Marken-Designsystem für Website und Panel",
    excerpt:
      "Ein CSS-Designsystem übersetzt Markenidentität in Regeln für Farbe, Typografie, Abstand, Zustände und Komponenten auf Website und Panel.",
    lead: "Ein Logo kennzeichnet die Marke. Im digitalen Alltag bestimmen jedoch zahlreiche weitere Entscheidungen den Eindruck: Textgrößen, Farben, Abstände, Formzustände und Komponenten. Ein Marken-Designsystem hält diese Entscheidungen im Quellcode und in einer kurzen Dokumentation fest.",
    imageAlt: "Raster, Farbfelder und Schriftproben für ein Marken-Designsystem",
    sections: [
      {
        heading: "Markenzeichen und Oberfläche erfüllen verschiedene Aufgaben",
        paragraphs: [
          "Das Markenzeichen muss in vereinbarten Größen und Umgebungen funktionieren. Eine Website benötigt zusätzlich Regeln für Navigation, Inhalte und Interaktion. Ein Admin-Panel stellt andere Informationsmengen dar, braucht aber eine erkennbare Verbindung zur öffentlichen Marke.",
          "Diese Verbindung entsteht durch wiederkehrende Grundentscheidungen. Typografie, Farbrollen und Formensprache können gemeinsam sein, während Dichte und Komponenten je nach Oberfläche variieren. Gleichheit ist dafür nicht erforderlich.",
        ],
      },
      {
        heading: "Mit wenigen belastbaren Tokens beginnen",
        paragraphs: [
          "Definieren Sie Farben nach Funktion: Hintergrund, Text, Linie, Akzent, Erfolg und Fehler.",
          "Benennen Sie Schriftgrößen nach Rolle und legen Sie eine begrenzte Abstandsfolge fest. Radien und Schatten erhalten ebenfalls feste Werte, sofern die Marke sie verwendet.",
          "Solche Tokens machen Änderungen nachvollziehbar. Wenn eine Textfarbe angepasst wird, sollte sie an den relevanten Stellen aus einer Quelle stammen. Einzelne Farbwerte in vielen Dateien führen dagegen schnell zu sichtbaren Abweichungen.",
        ],
      },
      {
        heading: "Komponenten brauchen Zustände und Inhaltstests",
        paragraphs: [
          "Beginnen Sie mit Navigation, Schaltflächen, Links, Formularfeldern, Hinweisen und Inhaltskarten. Dokumentieren Sie Normal-, Fokus-, Fehler- und deaktivierte Zustände. Der Fokuszustand ist dabei eine Bedienanforderung und kein optionales Detail.",
          "Testen Sie Komponenten mit realistischen Inhalten. Lange deutsche Überschriften, Fehlermeldungen und leere Datensätze decken Schwächen auf, die in einer idealisierten Musteransicht verborgen bleiben.",
        ],
      },
      {
        heading: "Gemeinsame Regeln, eigenständige Komponenten",
        paragraphs: [
          "Die öffentliche Website priorisiert Angebot, Belege und Kontakt. Ein internes Panel priorisiert Datendichte, wiederkehrende Aufgaben und Rückmeldung zum Systemstatus. Beide können dieselbe Schriftfamilie und Farbsemantik verwenden, ohne dieselbe Seitenstruktur zu kopieren. Teilen Sie deshalb nur Bausteine, deren Verhalten tatsächlich übereinstimmt. Ein öffentlicher Projektteaser und eine interne Datentabelle haben unterschiedliche Aufgaben.",
        ],
      },
      {
        heading: "Eine bestehende Marke prüfen und Regeln sichern",
        paragraphs: [
          "Sammeln Sie Screenshots aus Website, Panel, E-Mail und Social Media. Markieren Sie unterschiedliche Schaltflächen, Schriftgrößen und Farbbedeutungen. Prüfen Sie anschließend, welche Abweichung sachlich begründet ist und welche nur historisch gewachsen ist.",
          "Erstellen Sie aus den häufigsten, gut funktionierenden Mustern einen kleinen Kern. Versionieren Sie diesen zusammen mit den Oberflächen und ergänzen Sie kurze Anwendungsbeispiele. Ein nutzbares System beantwortet Fragen der täglichen Produktion.",
          "METEK Digital entwickelt projektbezogene Tokens und Komponenten für Websites und interne Oberflächen. Einige Screenshots und eine Beschreibung der wiederkehrenden Inkonsistenzen helfen, den notwendigen Umfang einzugrenzen.",
        ],
      },
    ],
  },

  "editorial-web-as-sales": {
    title: "Eine verkaufsstarke Website sinnvoll strukturieren",
    excerpt:
      "Eine gute Startseite ordnet Angebot, Beleg, Einwand und Handlung. So prüfen Sie Inhalt und Hierarchie einer Unternehmenswebsite.",
    lead: "Eine Website unterstützt den Verkauf, wenn sie die Fragen eines Interessenten in einer sinnvollen Reihenfolge beantwortet. Eine Sammlung ansprechender Abschnitte reicht dafür nicht aus. Angebot, Belege, Einwände und nächste Handlung müssen als zusammenhängende Argumentation lesbar sein.",
    imageAlt: "Editoriale Startseite mit klarer typografischer Hierarchie",
    sections: [
      {
        heading: "Mit dem konkreten Angebot beginnen",
        paragraphs: [
          "Der erste Bildschirm sollte erkennen lassen, welche Leistung für wen angeboten wird. Eine breite Selbstbeschreibung zwingt Besucher, die Bedeutung selbst abzuleiten. Ein Hersteller kann Produktgruppe und Zielmarkt benennen, eine Praxis ihre Behandlung und den passenden Kontaktweg.",
          "Die primäre Handlung folgt dieser Aussage. Bei erklärungsbedürftigen Leistungen kann das eine Anfrage sein, bei einer Unterkunft eine Verfügbarkeitsprüfung. Weitere Links bleiben erreichbar, erhalten aber weniger visuelles Gewicht.",
        ],
      },
      {
        heading: "Belege an die passende Aussage setzen",
        paragraphs: [
          "Ein Beleg wirkt dort, wo eine konkrete Frage entsteht. Nach einer Qualitätsaussage kann ein benanntes Projekt, ein Prozessdetail oder ein nachvollziehbares Produktbild folgen. Ein allgemeiner Logo-Streifen erklärt selten, was die gezeigte Zusammenarbeit belegt.",
          "Wählen Sie den Beleg nach Branche.",
          "Für Fertigung zählen Material, Kapazität oder Referenzanwendungen. Bei einer Boutique können Produktfotografie, Größeninformation und Rückgabeweg wichtiger sein. Dienstleistungen benötigen häufig Ablauf, Zuständigkeit und ein Beispiel aus der Praxis.",
        ],
      },
      {
        heading: "Einwände in der richtigen Reihenfolge beantworten",
        paragraphs: [
          "Nach dem ersten Interesse folgen Fragen zu Eignung, Aufwand und Risiko. Die Seite sollte diese Fragen dort aufnehmen, wo sie im Gedankenablauf auftauchen. Leistungsumfang vor Detailreferenzen, Ablauf vor Kontakt und Pflegeweg vor der endgültigen Entscheidung sind häufig sinnvolle Übergänge.",
          "Diese Reihenfolge ist kein universelles Schema. Gespräche mit Kunden, Suchanfragen und Vertriebserfahrung zeigen, welche Unsicherheit zuerst geklärt werden muss. Die Seitenstruktur sollte diesen Erkenntnissen folgen.",
        ],
      },
      {
        heading: "Typografie und Text führen gemeinsam",
        paragraphs: [
          "Überschriften geben der Argumentation Stationen. Der Fließtext erklärt nur, was für die nächste Entscheidung nötig ist. Ein klarer Größenunterschied und ausreichender Abstand helfen beim Überfliegen, dürfen jedoch wichtige Einschränkungen nicht verstecken.",
          "Schaltflächen brauchen konkrete Beschriftungen. „Angebot anfragen“ oder „Verfügbarkeit prüfen“ beschreibt die Folge besser als „Mehr erfahren“. Wiederholen Sie die primäre Aktion an sinnvollen Stellen mit derselben Bedeutung.",
        ],
      },
      {
        heading: "Die Startseite als Argument prüfen",
        paragraphs: [
          "Schreiben Sie neben jeden Abschnitt eine Aufgabe: Angebot erklären, Eignung belegen, Einwand beantworten oder Handlung ermöglichen. Bleibt die Aufgabe unklar, wird der Abschnitt gekürzt, verschoben oder entfernt. Mehrere Abschnitte mit derselben Aufgabe sollten zusammengeführt werden.",
          "Prüfen Sie danach die mobile Reihenfolge. Bilder, Karten und Animationen dürfen den Zusammenhang zwischen Aussage und Beleg nicht trennen. Der Nutzer sollte nach jedem Bildschirm verstehen, warum der nächste Abschnitt folgt.",
          "Wenn die Argumentation steht, kann die Gestaltung mit Maßstab und Bild arbeiten, ohne die Orientierung zu verlieren. Prüfen Sie zuletzt, ob jeder Abschnitt eine Frage beantwortet oder den nächsten Schritt vorbereitet.",
        ],
      },
    ],
  },

  "quiet-luxury-online": {
    title: "Webdesign für Luxusmarken: reduziert und gut lesbar",
    excerpt:
      "Reduziertes Webdesign braucht lesbare Typografie, belastbare Kontraste, präzise Bilder und gezielte Bewegung. Ein Leitfaden für Boutique-Marken.",
    lead: "Ein zurückhaltender Markenauftritt wirkt online nur dann hochwertig, wenn er Information klar ordnet. Kleine Schrift, schwacher Kontrast und große leere Flächen sind keine Zeichen für Qualität. Reduktion bedeutet, dass Raum, Bild und Bewegung eine erkennbare Aufgabe übernehmen.",
    imageAlt: "Reduziertes Produktstillleben in weichem Tageslicht",
    sections: [
      {
        heading: "Reduktion darf keine Information entfernen",
        paragraphs: [
          "Eine Boutique-Website muss Produkt, Material, Größe, Preis oder Anfrageweg verständlich darstellen. Großzügiger Raum kann diese Angaben rahmen, solange der Besucher nicht nach grundlegenden Informationen suchen muss. Fehlende Orientierung wirkt schnell unfertig.",
          "Ordnen Sie Inhalte nach ihrer Bedeutung und lassen Sie nachrangige Angaben zurücktreten. Die Hauptaussage bleibt sichtbar, während Details an der Stelle erscheinen, an der sie für die Entscheidung gebraucht werden.",
        ],
      },
      {
        heading: "Typografie und Kontrast tragen den ruhigen Eindruck",
        paragraphs: [
          "Wählen Sie eine Schrift mit gut lesbaren Formen und passenden Schnitten. Große Überschriften können Charakter zeigen, doch Fließtext und Bedienhinweise benötigen belastbare Größen und Zeilenabstände. Sehr dünne Schnitte verlieren auf kleinen Displays schnell an Klarheit.",
          "Gedämpfte Farben brauchen weiterhin ausreichenden Kontrast. Prüfen Sie Text, Links und Fokuszustände in hellen und dunklen Bereichen. Ein Akzent gewinnt an Wirkung, wenn er sparsam und konsistent eingesetzt wird.",
        ],
      },
      {
        heading: "Fotografie liefert den materiellen Beleg",
        paragraphs: [
          "Licht, Perspektive und Ausschnitt sollten Material und Verarbeitung nachvollziehbar zeigen. Eine einheitliche Bildrichtung verbindet Produktseiten stärker als ein nachträglicher Filter. Aufnahmen benötigen genügend Auflösung für den vorgesehenen Bildausschnitt.",
          "Leere Bildflächen können Text aufnehmen, wenn sie bereits bei der Produktion berücksichtigt wurden. Wird Text später über ein unruhiges Motiv gelegt, leiden Lesbarkeit und Bildwirkung zugleich.",
        ],
      },
      {
        heading: "Abstand zeigt Beziehungen",
        paragraphs: [
          "Große Abstände funktionieren, wenn sie Gruppen trennen und den Blick auf das Produkt lenken. Innerhalb einer Gruppe müssen Überschrift, Beschreibung und Handlung dagegen erkennbar zusammengehören. Ein einheitliches Abstandssystem verhindert zufällige Lücken.",
          "Auf dem Smartphone ist die verfügbare Höhe begrenzt. Übertragen Sie Desktop-Leerräume deshalb nicht unverändert. Der erste Bildschirm sollte weiterhin Marke, Angebot und den nächsten sinnvollen Schritt erkennen lassen.",
        ],
      },
      {
        heading: "Bewegung und Markenerlebnis abgleichen",
        paragraphs: [
          "Eine Übergangsanimation kann eine neue Ansicht verorten oder ein Produktdetail öffnen. Sobald gelesen oder verglichen wird, sollte die Oberfläche stabil bleiben. Berücksichtigen Sie außerdem die Systemeinstellung für reduzierte Bewegung.",
          "Vergleichen Sie Website, Verpackung, Ladenraum und Kundenkommunikation. Materialfarben, Bildausschnitte oder sprachliche Entscheidungen können eine Verbindung schaffen, während die digitale Oberfläche ihre eigenen Bedienanforderungen erfüllt.",
          "Prüfen Sie vor der Übergabe Lesbarkeit und Tastaturbedienung auf mobilen Geräten. Kontrollieren Sie anschließend Bildqualität und Ladeverhalten unter realen Bedingungen.",
        ],
      },
    ],
  },

  "brief-that-works": {
    title: "Projektanforderungen für Website, Panel oder Chatbot",
    excerpt:
      "Eine gute Projektnotiz beschreibt Problem, Nutzer, Aufgaben, Inhalte, Integrationen, Grenzen und Entscheidungsträger. So bereiten Sie ein Agenturgespräch vor.",
    lead: "Eine brauchbare Projektnotiz erklärt zuerst die geschäftliche Aufgabe. Referenzseiten und Funktionswünsche werden dadurch einordenbar. Für Website, Admin-Panel oder Chatbot braucht die Agentur außerdem Informationen zu Nutzern, Inhalten, vorhandenen Systemen und dem Entscheidungsweg.",
    imageAlt: "Projektanforderungen neben einer Tastatur auf einem Arbeitstisch",
    sections: [
      {
        heading: "Problem und Hauptnutzer benennen",
        paragraphs: [
          "Beschreiben Sie die aktuelle Situation in beobachtbaren Begriffen. Kunden finden die passende Leistung nicht, Anfragen enthalten zu wenig Angaben oder Mitarbeitende übertragen Termine zwischen mehreren Systemen. Diese Sätze geben dem Projekt eine prüfbare Aufgabe.",
          "Nennen Sie anschließend den wichtigsten Nutzer und seinen Kontext. Ein Einkäufer auf dem Smartphone benötigt andere Informationen als ein Mitarbeiter, der täglich viele Datensätze bearbeitet. Weitere Nutzergruppen können folgen, erhalten aber eine erkennbare Priorität.",
        ],
      },
      {
        heading: "Erforderliche Handlungen konkret beschreiben",
        paragraphs: [
          "Listen Sie auf, was ein Nutzer abschließen können muss.",
          "Eine Angebotsanfrage senden, einen Termin wählen, einen Datensatz freigeben oder einen Fachbeitrag veröffentlichen sind konkrete Anforderungen. Verben machen sie baubar.",
          "Ergänzen Sie für jede wichtige Handlung die notwendigen Daten und den nächsten Systemschritt. Wohin geht eine Anfrage? Wer bestätigt sie? Welche Informationen müssen gespeichert werden? Daraus ergeben sich Formulare, Zustände und Schnittstellen.",
        ],
      },
      {
        heading: "Inhalte und vorhandene Materialien erfassen",
        paragraphs: [
          "Notieren Sie, welche Texte, Bilder, Produktdaten und Markenregeln bereits vorliegen. Weisen Sie für fehlende Inhalte einen Verantwortlichen zu. Ein Layout kann erst verlässlich geplant werden, wenn Umfang und Beschaffenheit des Inhalts bekannt sind.",
          "Referenzseiten helfen bei Struktur und gestalterischer Richtung. Schreiben Sie zu jedem Link, was Sie daran relevant finden. Ergänzen Sie Gegenbeispiele, wenn bestimmte Muster für Ihre Marke oder Ihre Nutzer ungeeignet sind.",
        ],
      },
      {
        heading: "Integrationen und technische Grenzen offenlegen",
        paragraphs: [
          "Nennen Sie bestehende CRM-, Kalender-, Zahlungs- oder Analysesysteme sowie verfügbare Zugänge. Halten Sie fest, welches System die maßgebliche Datenquelle bleibt. Eine Integration lässt sich nur bewerten, wenn Schnittstelle und Zuständigkeit bekannt sind.",
          "Führen Sie außerdem rechtliche, sicherheitsbezogene oder organisatorische Grenzen auf. Dazu können freigegebene Hosting-Regionen, Rollenmodelle oder verbindliche Veröffentlichungsschritte gehören.",
        ],
      },
      {
        heading: "Zeit, Entscheidung und Ausschlüsse festhalten",
        paragraphs: [
          "Ein gewünschter Termin braucht seinen Anlass und bekannte Abhängigkeiten. Produktfotografie, interne Freigaben oder Datenmigration können den Plan bestimmen. Nennen Sie die Person, die Inhalt, Design und Umfang verbindlich freigibt.",
          "Ausschlüsse schützen die erste Projektphase. Wenn eine Mobile-App, Mehrsprachigkeit oder ein Kundenkonto später folgen soll, schreiben Sie das ausdrücklich. Die technische Planung kann die Erweiterung berücksichtigen, ohne sie in den aktuellen Umfang zu rechnen.",
          "Ein kompaktes Beispiel: „Unsere Händler finden technische Unterlagen auf dem bestehenden Auftritt nur über die Suche. Einkäufer sollen Produkte nach Einsatzgebiet filtern und ein Datenblatt ohne Anmeldung laden können. Produktdaten liegen als Tabelle vor; Fotos und deutsche Texte sind freigegeben. Anfragen gehen an das bestehende CRM. Die Vertriebsleitung entscheidet, ein Kundenkonto gehört nicht zur ersten Phase.“",
          "Der Absatz enthält genug Kontext für gezielte Rückfragen. Links und Zeitrahmen können danach ergänzt werden. Für ein erstes Gespräch mit METEK Digital genügt diese Form, um einen sinnvollen Umfang vorzubereiten.",
        ],
      },
    ],
  },
};

export default content;
