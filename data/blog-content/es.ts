import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "identity-at-first-glance": {
    title: "Lo que dice la primera pantalla sin leer",
    excerpt:
      "El visitante juzga peso, espacio y ritmo en menos de un segundo. Ese veredicto llega antes que tu oferta.",
    lead: "Muchas marcas tratan el hero como un hueco para el eslogan. El ojo hace otra cosa primero: mide densidad, cuántas cosas compiten y si la marca se ve calmada o ansiosa. Si esas señales chocan, el texto nunca tiene una audiencia justa.",
    imageAlt: "Detalle tipográfico y de layout en la home de una marca premium",
    sections: [
      {
        heading: "La composición responde antes que el texto",
        paragraphs: [
          "Abre un sitio boutique o de servicios y mira qué se registra primero. No el titular: la densidad de la pantalla — márgenes apretados, un logo peleando con el menú, tres botones con el mismo volumen visual. Esas pistas se leen como competencia o ruido antes de parsear una frase.",
          "La gente usa la calidad de la interfaz como proxy de la calidad del negocio. Una oferta fuerte detrás de una primera vista saturada sigue empezando en desventaja. Una superficie calmada y legible compra tiempo para el argumento real.",
        ],
      },
      {
        heading: "Identidad aquí es tipo, ritmo y jerarquía",
        paragraphs: [
          "La identidad de primer vistazo no es el archivo del logo. Es el sistema arriba del pliegue: cuántos niveles tipográficos gritan a la vez, si el acento aparece una vez o en todas partes, si el espacio sigue una unidad o huecos al azar.",
          "El ritmo también es una afirmación. Video en autoplay, texto en marquesina y pop-ups de entrada dicen que la marca está nerviosa. Un sitio que carga rápido, se queda quieto y ofrece un camino claro se lee como seguro — y la seguridad es una decisión de diseño, no un truco de copy.",
          "Cuando construimos sitios de marketing, cerramos estas reglas antes de la ilustración o la fotografía. Las interfaces a medida lo permiten: la jerarquía va en el código, no en parches CSS de un solo uso.",
        ],
      },
      {
        heading: "Tres chequeos que puedes correr hoy",
        paragraphs: [
          "Una tesis en el viewport. ¿Puedes decir a quién sirves y qué haces en una línea — y el layout sostiene esa línea en vez de enterrarla? Cinco afirmaciones compitiendo no dejan ninguna.",
          "Una acción primaria. Los enlaces secundarios pueden existir, pero dan un paso atrás. Dos botones de igual peso equivalen a ninguna decisión. En móvil, el alcance del pulgar y el tamaño del toque son parte de la prueba.",
          "Consistencia entre páginas. Una home pulida que cae en defaults de plantilla en producto o contacto cuesta más confianza que un titular débil. Arregla la ruptura antes de reescribir el eslogan.",
        ],
      },
      {
        heading: "Cuando la primera pantalla coincide con la oferta",
        paragraphs: [
          "Categorías de alta consideración — moda, belleza, alianzas manufactureras, servicios profesionales — necesitan confianza antes del detalle. El visitante compra juicio. La primera pantalla debería sentirse como ese mismo juicio aplicado a su problema.",
          "Velocidad, tipografía legible, afirmaciones honestas y bases técnicas (contraste, foco, metadata) van en la misma conversación que la estética. Las probamos antes del handoff porque una página bonita que falla en móvil igual rompe el apretón de manos.",
          "Si los tres chequeos pasan y aún se siente mal, el problema suele ser estrategia, no decoración. Escribe la única frase que el layout debe cargar y reconstruye el sistema alrededor de ella.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "El logo es la parte más chica de la identidad",
    excerpt:
      "Una marca nueva en un PDF no arregla firmas de email, páginas de producto ni un sitio que sigue en defaults de plantilla.",
    lead: "Los rebrands suelen empezar por el símbolo. Deberían empezar por reglas. Sin tipografía, color, espacio y comportamiento de componentes compartidos, el logo más fresco sigue sentado sobre una experiencia fracturada.",
    imageAlt: "Grilla, muestras de color y especímenes tipográficos de un sistema de marca",
    sections: [
      {
        heading: "Lo que la gente realmente recuerda",
        paragraphs: [
          "Pide a alguien describir una marca en la que confía. Rara vez dibuja el logo. Menciona el email de confirmación, si la factura coincidía con el sitio, si Instagram se sentía como la misma empresa que el empaque.",
          "Los puntos de contacto se multiplican más rápido que las versiones del logo. Un símbolo que funciona a 32px y en un camión importa — pero la carga real es cada superficie después del clic del anuncio.",
        ],
      },
      {
        heading: "Los sistemas convierten el gusto en decisiones repetibles",
        paragraphs: [
          "Un sistema visual responde preguntas de producción temprano: peso de H1 vs H2, cuántos acentos en una pantalla, ratio de recorte, radio del botón, padding mínimo. Los equipos dejan de negociar desde cero en cada página.",
          "Los buenos sistemas incluyen prohibiciones — sin logos estirados, sin sombras en el cuerpo, sin fuentes al azar en el email. Las restricciones aceleran porque el rechazo es obvio.",
          "Entregamos sitios y paneles admin desde el mismo set de reglas cuando el cliente necesita ambos. Un dashboard que ignora la marca pública enseña que la identidad es cosmética.",
        ],
      },
      {
        heading: "Núcleo, producción, superficie",
        paragraphs: [
          "El núcleo sostiene tesis, familia tipográfica, tokens de color, clear space del logo y límites de voz. Ciérralo antes de escalar.",
          "La producción sostiene grilla, componentes UI, estilo de iconos, dirección fotográfica y límites de motion — la capa del trabajo diario.",
          "La superficie es web, social, decks, señalética, empaque. Diseñar la web en aislamiento crea dos marcas: una en Figma, otra en el navegador. Deberían ser un sistema en lienzos distintos.",
        ],
      },
      {
        heading: "Documentación que sí se abre",
        paragraphs: [
          "Un brand book de ochenta páginas que nunca sale del drive es archivo, no sistema. La documentación útil es corta, buscable y cargada de ejemplos: haz esto, no aquello, con pantallas reales.",
          "Cuando aparece un canal nuevo — listing de marketplace, cover de short-form, lockup con partner — extiende las reglas en vez de romperlas. La prueba se mantiene: ¿esta pieza hereda la lógica de tipo y color del núcleo?",
          "Si estás financiando otra exploración de logo mientras las páginas de producto usan tres estilos de botón, pausa. Audita superficies primero. Arregla el sistema, luego afina el símbolo.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "La estructura editorial vende más que botones más fuertes",
    excerpt:
      "La secuencia gana al apilado. Una página que ordena tesis, prueba y acción supera a un brochure con más imágenes.",
    lead: "Muchos sitios todavía se leen como folletos doblados: hero, grilla de features, carrusel de testimonios, CTA del footer. Nada malo en esos bloques solos. El problema es el orden. Sin ritmo editorial, el visitante pasa la prueba y llega al botón sin convencerse.",
    imageAlt: "Layout editorial de homepage con jerarquía tipográfica clara",
    sections: [
      {
        heading: "Los brochures apilan; las experiencias secuencian",
        paragraphs: [
          "Apilar agrega módulos hasta que la página se siente llena. Secuenciar pregunta qué hay que creer después. Primero a quién va y qué cambia después del contacto. Luego evidencia. Solo entonces la acción.",
          "Cada sección debe ganar el siguiente scroll. Si un bloque no puede responder por qué existe en la historia, córtalo o muévelo. Editar protege la atención; no quita valor.",
        ],
      },
      {
        heading: "La tipografía es el camino de venta",
        paragraphs: [
          "En sitios editoriales, tamaño y espacio son navegación. Escalones claros de H1 a H2 crean un camino aunque el menú sea mínimo. ~65 caracteres por línea, leading consistente y contraste suficiente hacen más por la comprensión que contadores animados.",
          "El móvil rompe una jerarquía débil más rápido de lo que el desktop la perdona. Si el titular se envuelve en cinco líneas y el subhead desaparece, la promesa se encoge. Cierra en el teléfono antes de aprobar drama de desktop.",
        ],
      },
      {
        heading: "Pon la prueba donde aparece la duda",
        paragraphs: [
          "La prueba social atrapada en una banda genérica de trust es fácil de saltar. La prueba funciona cuando encuentra la objeción: una línea de resultado después de la promesa, un proyecto con nombre después de capacidades, una cita corta después del contexto de precio.",
          "Un caso fuerte gana a diez stats vagas. Mostramos trabajo real en producción — sitios manufacturereros, retail boutique, herramientas operativas — en contexto, no badges de porcentaje sin fuente.",
        ],
      },
      {
        heading: "Una acción primaria, con calma",
        paragraphs: [
          "La llamada primaria lleva peso: etiqueta, ubicación, whitespace. Los caminos secundarios se ven pero más quietos. Botones Buy y Learn de igual peso se cancelan.",
          "Las categorías de alta consideración necesitan tiempo. El ritmo editorial lo respeta. Timers de pánico y pop-ups agresivos entrenan desconfianza. Un siguiente paso claro y copy honesto convierte mejor que la presión.",
          "Mapea tu homepage en columnas de tesis, prueba y acción. Los huecos aparecen de inmediato — y llenarlos es trabajo de copy y layout, no instalar un plugin.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Quiet luxury online es contención con intención",
    excerpt:
      "Color apagado y tipo fino son atajos. El quiet luxury real es espacio, material y motion disciplinados.",
    lead: "Las marcas de quiet luxury suelen traducir la calma física en gris digital. Se pierde el punto. Contenerse online significa que cada elemento justifica su presencia. El espacio vacío no es ausencia: es estructura.",
    imageAlt: "Bodegón mínimo de producto con luz natural suave",
    sections: [
      {
        heading: "Menos ruido, mensaje más nítido",
        paragraphs: [
          "Reducir limpia afirmaciones que compiten. Un mensaje hero, una línea de apoyo, un camino adelante. Tres titulares iguales en una pantalla garantizan que no se recuerde ninguno.",
          "Las paletas estrechas están bien. La legibilidad no es opcional. La baja saturación aún debe cumplir contraste. Una página que susurra pero no se puede leer no es premium: está descuidada.",
        ],
      },
      {
        heading: "Material en pantalla",
        paragraphs: [
          "El material digital viene de disciplina fotográfica: luz consistente, textura honesta, profundidad controlada, crops que respetan el producto. Sonrisas de stock y filtros pesados rompen el lujo en un frame.",
          "El tipo también carga material. Tracking, peso y margen deberían respirar como el packaging. Fuentes de sistema al azar en una historia de lujo se sienten como una etiqueta impresa en casa.",
        ],
      },
      {
        heading: "Motion con un trabajo",
        paragraphs: [
          "La animación debe aclarar jerarquía, no actuar. Hovers sutiles, transiciones consideradas y scroll que mantiene el texto legible ganan al parallax que esconde contenido a mitad de lectura.",
          "Si el motion corre mientras el visitante aún lee, el layout falló. Pausa o quítalo. El lujo se lee como control.",
        ],
      },
      {
        heading: "Una marca en tienda y en el navegador",
        paragraphs: [
          "Quiet luxury vive de la consistencia. Copy corto en la tienda y párrafos largos online parten la marca. Alinea longitud de frase, nombres de producto y tono de llamada entre canales.",
          "El performance es parte del feeling. Las cargas lentas se leen como descuido. Tratamos velocidad y accesibilidad básica como criterios de release — igual que espacio y tipo — porque el cuidado también se ve en la mecánica.",
          "Audita tu sitio contra tu mejor punto de contacto físico. Si la pantalla grita donde la tienda susurra, alinéalos antes del próximo gasto de campaña.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "Una nota de proyecto que acorta el trabajo",
    excerpt:
      "Metas claras, audiencia, límites y referencias convierten el feedback subjetivo en decisiones que se pueden construir.",
    lead: "El discovery no es turismo de moodboards. Es escribir cómo se ve el éxito, a quién le habla el trabajo y qué queda fuera del alcance. Input vago produce vueltas caras. Input específico deja mover el diseño y el código.",
    imageAlt: "Notas de proyecto en un escritorio de estudio junto a un teclado",
    sections: [
      {
        heading: "Cuatro bloques: meta, audiencia, límites, referencias",
        paragraphs: [
          "La meta nombra un cambio observable: la primera pantalla declara el posicionamiento, el formulario se completa, el localizador de dealers se usa — no una palabra de mood como moderno o premium.",
          "La audiencia nombra quién decide, qué teme, qué prueba necesita. Los límites listan timeline, banda de presupuesto, assets existentes, integraciones y líneas legales que no se cruzan.",
          "Las referencias muestran tempo y estructura, no targets de robo. Incluye anti-referencias: sitios o estilos que rechazas y por qué.",
        ],
      },
      {
        heading: "Buenas frases ganan a decks largos",
        paragraphs: [
          "Una página gana a diez docs dispersos. Si los stakeholders no están de acuerdo, la nota lo saca temprano en vez de en la ronda cuatro de revisiones.",
          "Cambia queremos que se vea más limpio por necesitamos una llamada primaria arriba del fold y specs descargables sin login. La segunda frase se puede construir.",
        ],
      },
      {
        heading: "Cierra temprano — o pagas después",
        paragraphs: [
          "Estrategia, identidad, interfaz, desarrollo, lanzamiento. Cada fase asume que la anterior quedó. Cambiar posicionamiento con componentes ya hechos cuesta múltiplos de cambiar un boceto.",
          "La nota de proyecto es el primer cierre. Un estudio liderado por el fundador puede moverse rápido cuando la intención está escrita; igual necesitamos ese ancla para entregar trabajo a medida sin que se desvíe al tema genérico.",
        ],
      },
      {
        heading: "Escríbanlo juntos",
        paragraphs: [
          "Las mejores notas se co-escriben. Tú traes el dominio; el estudio hace las preguntas que exponen huecos. El lenguaje compartido reduce esto no es lo que queríamos después.",
          "Antes de escribirle a un estudio, termina esta frase: Cuando lancemos, sabremos que funcionó porque ___. Si no puedes llenar el blank, discovery todavía tiene trabajo.",
          "Manda esa frase con links, límites y anti-referencias. Vas a recibir una propuesta más nítida y un camino más corto al lanzamiento.",
        ],
      },
    ],
  },
};

export default content;
