import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "identity-at-first-glance": {
    title: "Lo que dice la primera pantalla sin leer",
    excerpt:
      "El visitante mide diseño, tipografía y ritmo en menos de un segundo. Eso pasa antes de tu propuesta.",
    lead: "Muchas marcas usan el hero para un eslogan. El ojo hace otra cosa: revisa pesos, márgenes y cuántos elementos compiten. Si esas señales chocan, el copy no tiene oportunidad justa.",
    imageAlt: "Detalle de tipografía y maquetación en homepage premium",
    sections: [
      {
        heading: "La composición habla antes que el texto",
        paragraphs: [
          "Abre un sitio de boutique o servicios y fíjate qué registra primero. No suele ser el titular. Es la densidad: márgenes apretados, logo peleando con el menú, tres botones con el mismo peso visual. Eso se lee como competencia o ruido antes de parsear una frase.",
          "Estudios de credibilidad web llevan años mostrando lo mismo: la gente usa la calidad de interfaz como proxy de calidad de negocio. Un producto fuerte detrás de una primera vista desordenada arranca en desventaja. Una superficie calmada y legible compra tiempo para el argumento real.",
        ],
      },
      {
        heading: "Identidad aquí = tipo, ritmo, jerarquía",
        paragraphs: [
          "La identidad de primer vistazo no es el archivo del logo. Es el sistema que gobierna lo que aparece arriba del fold: escala tipográfica, uso del color de acento, ritmo de espaciado consistente versus huecos arbitrarios.",
          "El ritmo también comunica. Video autoplay, marquesinas y pop-ups al entrar dicen ansiedad. Un sitio que carga rápido, se queda quieto y ofrece un camino claro se lee seguro. La confianza es decisión de diseño, no truco de copy.",
          "Al construir sitios de marketing, fijamos estas reglas antes de ilustración o foto. Interfaces hechas a medida, no temas reempaquetados: la jerarquía vive en código, no en parches CSS de una sola vez.",
        ],
      },
      {
        heading: "Tres pruebas que puedes hacer hoy",
        paragraphs: [
          "Una tesis en el viewport. ¿Puedes decir a quién sirves y qué haces en una línea, y el layout la sostiene en vez de enterrarla? Si el hero intenta decir cinco cosas, ninguna queda.",
          "Una acción primaria. Los enlaces secundarios pueden existir, pero deben retroceder. Dos botones con igual peso es lo mismo que no decidir. En móvil, alcance del pulgar y tamaño de tap forman parte del test.",
          "Consistencia entre páginas. La home puede verse pulida mientras producto o contacto vuelven al estilo plantilla. Esa ruptura se ve en segundos y cuesta más confianza que un titular débil.",
        ],
      },
      {
        heading: "Cuando la primera pantalla coincide con la oferta",
        paragraphs: [
          "Categorías de alta consideración (moda, belleza, manufactura B2B, servicios profesionales) necesitan confianza antes del detalle. El visitante no compra un pixel; compra criterio. La primera pantalla debe sentirse como el mismo criterio aplicado a su problema.",
          "Velocidad, tipografía legible, promesas honestas y bases técnicas (contraste, estados de foco, metadata) van en la misma conversación que la estética. Lo probamos antes del handoff porque una página bonita que falla en móvil o carga tarde rompe el apretón de manos.",
          "Si la primera pantalla pasa las tres pruebas y aún se siente mal, el problema suele ser estrategia, no decoración. Aclara la frase única que el layout debe cargar y reconstruye el sistema alrededor. Es más lento que un hero nuevo y mucho más durable.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "El logo es la parte más chica de la identidad",
    excerpt:
      "Un símbolo nuevo en PDF no arregla firmas de email, páginas de producto ni un sitio en defaults de plantilla.",
    lead: "Los rebrands suelen empezar por el símbolo. Deberían empezar por reglas. Sin tipografía, color, espacio y comportamiento de componentes compartidos, el logo más fresco queda sobre una experiencia fracturada.",
    imageAlt: "Grid, muestras de color y especímenes tipográficos de sistema de marca",
    sections: [
      {
        heading: "Lo que la gente recuerda de verdad",
        paragraphs: [
          "Pide a un cliente que describa una marca en la que confía. Rara vez dibuja el logo. Menciona cómo se veía el email de confirmación, si la factura coincidía con el sitio, si el grid de Instagram se sentía la misma empresa que el empaque.",
          "Los touchpoints crecen más rápido que las versiones del logo. Un mark que funciona a 32px y en un camión es trabajo necesario, no el trabajo completo. El peso real está en cada superficie después del clic del anuncio.",
        ],
      },
      {
        heading: "Los sistemas convierten gusto en decisiones repetibles",
        paragraphs: [
          "Un sistema de identidad visual responde antes: peso de H1 vs H2, máximo de colores de acento por pantalla, ratio de crop fotográfico, radio de botones, escala mínima de padding. Diseño y desarrollo dejan de negociar desde cero en cada página.",
          "Buenos sistemas incluyen prohibiciones. Sin logos estirados, sin sombras en texto de cuerpo, sin fuentes de terceros en emails. Las restricciones aceleran porque el rechazo es obvio.",
          "Cuando hace falta, entregamos sitio y panel admin desde el mismo rule set. Un dashboard que ignora la marca pública enseña que la identidad es cosmética.",
        ],
      },
      {
        heading: "Núcleo, producción, superficie",
        paragraphs: [
          "Núcleo: tesis, familia tipográfica, tokens de color, área de respiro del logo, límites de voz. Se cierra antes de escalar.",
          "Producción: grid, componentes UI, estilo de íconos, dirección fotográfica, límites de motion. Aquí ocurre el trabajo diario.",
          "Superficie: web, plantillas sociales, decks de venta, señalética, packaging. Diseñar la web aislada produce dos marcas: una en Figma, otra en el browser. Debe ser un sistema, distintos lienzos.",
        ],
      },
      {
        heading: "Documentación que sí abren",
        paragraphs: [
          "Un brand book de ochenta páginas que nunca sale del drive no es sistema; es archivo. Documentación útil es corta, buscable y llena de ejemplos: haz esto, no aquello, con pantallas reales.",
          "Cuando aparece un canal nuevo (listing de marketplace, cover de video corto, lockup co-brand), extiende reglas en vez de romperlas. El test no cambia: ¿esta pieza hereda lógica tipográfica y de color del núcleo?",
          "Si vas a financiar otra exploración de logo mientras las páginas de producto usan tres estilos de botón, pausa. Audita superficies primero. Arregla el sistema, luego afina el mark.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "La estructura editorial vende más que botones más fuertes",
    excerpt:
      "La secuencia gana al apilado. Una página que ordena tesis, prueba y acción supera un folleto con más fotos.",
    lead: "Muchos sitios siguen leyéndose como flyers plegados: hero, grid de features, carrusel de testimonios, llamado al pie. El problema no son los bloques solos; es el orden. Sin ritmo editorial, la gente pasa la prueba y llega al botón sin convicción.",
    imageAlt: "Layout editorial de homepage con jerarquía tipográfica clara",
    sections: [
      {
        heading: "Folletos apilan; experiencias secuencian",
        paragraphs: [
          "Apilar suma módulos hasta que la página se siente llena. Secuenciar pregunta qué hay que creer después. Primero quién es esto para y qué cambia tras contacto. Luego evidencia de que la promesa es real. Recién entonces pedir acción.",
          "Cada sección debe ganarse el siguiente scroll. Si un bloque no puede decir por qué está en la historia, córtalo o muévelo. Editar no es quitar valor; es proteger atención.",
        ],
      },
      {
        heading: "La tipografía es el camino de venta",
        paragraphs: [
          "En sitios editoriales, tamaño y espaciado tipográfico son la navegación. Escalones claros H1-H2 crean ruta aunque el menú sea mínimo. Línea cerca de 65 caracteres, leading consistente y contraste suficiente ayudan más que contadores animados.",
          "Móvil rompe jerarquía débil más rápido de lo que desktop perdona. Si el titular se parte en cinco líneas y el subtítulo desaparece, la promesa se encoge. Mide en teléfono antes de firmar drama de escritorio.",
        ],
      },
      {
        heading: "Pon la prueba donde nace la duda",
        paragraphs: [
          "Prueba social atrapada en una banda genérica de confianza se salta fácil. Funciona cuando encuentra la objeción: línea de resultado tras la promesa, proyecto nombrado tras la lista de capacidades, cita breve tras contexto de precio.",
          "Un caso fuerte gana a diez stats vagas. Mostramos trabajo real en producción (manufactura, retail boutique, herramientas operativas) en contexto, no badges de porcentaje abstractos sin fuente.",
        ],
      },
      {
        heading: "Una acción primaria, enmarcada con calma",
        paragraphs: [
          "La acción primaria recibe peso: label, placement, whitespace alrededor. Caminos secundarios (catálogo, FAQ, portafolio) visibles pero más quietos. Botones Comprar y Explorar con igual peso se cancelan.",
          "Categorías de alta consideración necesitan tiempo. El ritmo editorial lo respeta. Timers de pánico y pop-ups agresivos enseñan desconfianza. Próximo paso claro más copy honesto convierte mejor que presión.",
          "Mapea tu homepage actual en columnas tesis, prueba, acción. Los huecos aparecen al instante. Llenarlos es trabajo de copy y layout, no instalar un plugin.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Quiet luxury online es contención con intención",
    excerpt:
      "Color apagado y fuente fina son atajos. El quiet luxury real es espacio, material y motion con disciplina.",
    lead: "Marcas quiet luxury a menudo traducen calma física a gris digital. Eso pierde el punto. Contener online significa que cada elemento justifique su lugar. El espacio vacío no es ausencia; es estructura.",
    imageAlt: "Still life minimal de producto con luz natural suave",
    sections: [
      {
        heading: "Menos ruido, mensaje más nítido",
        paragraphs: [
          "Reducir quita claims que compiten. Un mensaje hero, una línea de apoyo, un camino. Tres titulares iguales en una pantalla garantizan que ninguno se recuerda.",
          "Paletas estrechas están bien. Legibilidad no es opcional. Baja saturación aún debe cumplir contraste. Una página que susurra pero no se lee no es premium; es descuido.",
        ],
      },
      {
        heading: "Material en pantalla",
        paragraphs: [
          "Material digital viene de disciplina fotográfica: luz consistente, textura honesta, profundidad controlada, crops que respetan producto en vez de llenar espacio. Sonrisas stock y filtros pesados rompen lujo al instante.",
          "La tipografía también lleva material. Tracking, peso y margen respiran como packaging. Fuentes system pegadas a una historia de lujo se sienten etiqueta impresa en casa.",
        ],
      },
      {
        heading: "Motion con trabajo",
        paragraphs: [
          "Animación debe aclarar jerarquía, no actuar. Hovers sutiles, transiciones pensadas y scroll que mantiene texto legible ganan a parallax dramático que esconde contenido a mitad de lectura.",
          "Si el motion corre mientras el usuario aún lee, el layout falló. Pausa o quita. Lujo se lee como control.",
        ],
      },
      {
        heading: "Una marca en tienda y browser",
        paragraphs: [
          "Quiet luxury vive en consistencia. Copy corto en tienda y párrafos largos online parten la marca. Iguala longitud de frase, naming de producto y tono de la acción entre canales.",
          "Performance es parte del feel. Carga lenta se lee descuido. Tratamos velocidad y checks básicos de accesibilidad como criterio de release, igual que spacing y tipo, porque el cuidado también se ve en mecánica.",
          "Audita tu sitio contra tu mejor touchpoint físico. Si la pantalla grita donde la tienda susurra, alinea antes del próximo spend de campaña.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "Una nota de proyecto que acorta el trabajo",
    excerpt:
      "Metas, audiencia, límites y referencias claros convierten feedback subjetivo en decisiones construibles.",
    lead: "Discovery no es turismo de moodboards. Es escribir cómo se ve el éxito, a quién habla el trabajo y qué queda fuera. Input vago produce loops caros. Input específico deja avanzar diseño y código.",
    imageAlt: "Notas de proyecto en escritorio de estudio junto al teclado",
    sections: [
      {
        heading: "Cuatro bloques: meta, audiencia, constraints, referencias",
        paragraphs: [
          "Meta nombra un cambio observable: primera pantalla declara posicionamiento, formulario de contacto se completa, localizador de distribuidor se usa. No palabras de mood como moderno o premium.",
          "Audiencia nombra quién decide, qué teme, qué prueba necesita. Constraints listan timeline, rango de budget, assets existentes, integraciones, líneas legales intocables.",
          "Referencias muestran tempo y estructura, no objetivos de robo. Incluye anti-referencias: sitios o estilos que rechazas y por qué.",
        ],
      },
      {
        heading: "Buenas frases ganan a decks largos",
        paragraphs: [
          "Una página gana a diez docs dispersos. Si interesados discrepan, la nota de proyecto lo muestra temprano, no en la ronda cuatro de revisiones.",
          "Cambia queremos más limpio por necesitamos una acción primaria arriba del pliegue y specs descargables sin login. La segunda frase es construible.",
        ],
      },
      {
        heading: "Cierra temprano; si no, pagas tarde",
        paragraphs: [
          "Estrategia, identidad, interfaz, desarrollo, launch. Cada fase asume que la anterior está fijada. Cambiar posicionamiento con componentes hechos cuesta múltiplos de cambiar un sketch.",
          "la nota de proyecto es el primer lock. Un estudio dirigido por el fundador puede mover rápido con intent escrito; igual necesitamos ese ancla para entregar a medida sin desviarse del tema de tema.",
        ],
      },
      {
        heading: "Escríbanlo juntos",
        paragraphs: [
          "Las mejores notas de proyecto son co-autoría. Cliente trae conocimiento de dominio; estudio hace preguntas que exponen huecos. Lenguaje compartido reduce el no era eso lo que queríamos después.",
          "Antes de escribir al estudio, termina: Cuando lancemos, sabremos que funcionó porque ___. Si no puedes llenar el blank, discovery aún tiene trabajo.",
          "Manda esa frase con links, constraints y anti-referencias. Recibirás propuesta más nítida y camino más corto al launch.",
        ],
      },
    ],
  },
};

export default content;
