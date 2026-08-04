import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "what-is-seo": {
    title: "Qué es SEO: guía clara para sitios web de negocios",
    excerpt:
      "Qué significa SEO, cómo los buscadores rastrean y ordenan páginas, y qué hacen el SEO técnico, el SEO on-page y el contenido en un sitio de negocio. Sin promesas de ranking. Definiciones prácticas.",
    lead: "SEO significa optimización para motores de búsqueda. En lenguaje claro, es el trabajo de ayudar a que los buscadores encuentren sus páginas, entiendan de qué tratan y las muestren a quien ya busca lo que usted ofrece. En METEK Digital tratamos el SEO como parte de construir un sitio de negocio, no como un eslogan que se pega después del lanzamiento. Esta guía explica las piezas que importan, los mitos que gastan presupuesto y qué pedir al encargar un sitio.",
    imageAlt: "Portátil y lupa que sugieren investigación de optimización en buscadores",
    sections: [
      {
        heading: "Qué significa SEO en la práctica",
        paragraphs: [
          "Los buscadores premian páginas que responden a una consulta real, cargan bien y se ven confiables. El SEO no es un truco secreto de palabras clave. Es una mezcla de preparación técnica, estructura clara, contenido útil y señales de que el negocio es legítimo.",
          "Para una empresa de servicios, un fabricante, una clínica o una boutique, el SEO suele significar esto: cuando alguien busca el servicio que usted vende en el mercado que atiende, su sitio puede aparecer. Poder aparecer no es lo mismo que garantizar el primer puesto. Ninguna agencia honesta vende un ranking fijo.",
        ],
      },
      {
        heading: "Cómo funcionan los buscadores: rastreo, índice y ranking",
        paragraphs: [
          "Rastreo: los bots descubren URLs por enlaces, sitemaps y visitas anteriores. Si una página está bloqueada, huérfana o perdida tras una navegación rota, puede no verse nunca.",
          "Índice: el motor guarda lo que entendió de la página. Titles, encabezados, texto, datos estructurados y medios ayudan. Las páginas pobres o duplicadas son malas candidatas a una entrada fuerte en el índice.",
          "Ranking: cuando una persona busca, el motor ordena las páginas elegibles por relevancia y señales de calidad. Su trabajo es hacer que la página sea la mejor coincidencia honesta con la consulta, no engañar una puntuación misteriosa.",
        ],
      },
      {
        heading: "SEO técnico: la base de un sitio de negocio",
        paragraphs: [
          "El SEO técnico cubre si el sitio se puede rastrear y usar. Titles y meta descriptions únicos. Un H1 claro por página. Árbol de encabezados lógico. Buen rendimiento en móvil. Sitemap XML y robots.txt correctos. Canonicals coherentes. Redirecciones limpias cuando cambian las URLs.",
          "En sitios multilingües, hreflang debe apuntar a las versiones correctas de idioma y mercado. Un hreflang mal puesto confunde a usuarios y motores. En desarrollos a medida, estos puntos deben planearse antes del lanzamiento, no parchearse meses después.",
          "Si quiere una lista práctica para el día del lanzamiento, lea en este blog nuestra checklist de SEO técnico para sitios de negocio. Ese artículo es el compañero de campo de esta definición.",
        ],
      },
      {
        heading: "SEO on-page: titles, estructura y claridad",
        paragraphs: [
          "El SEO on-page es cómo cada página se explica a sí misma. El title debe nombrar el tema y, cuando sea natural, la marca. La meta description debe ganar el clic con una promesa clara. El H1 debe coincidir con el tema de la página. El cuerpo debe responder la consulta sin repetir la misma frase en cada oración.",
          "Los enlaces internos importan. Servicios, casos del portafolio y contacto deben conectarse en el contenido, no solo en el pie. Un visitante y un rastreador deben entender a dónde ir después.",
          "Las imágenes necesitan nombres descriptivos y texto alternativo cuando aportan significado. Las decorativas pueden quedarse calladas. Las capturas de producto y proyecto deben decir qué muestran.",
        ],
      },
      {
        heading: "Contenido e intención de búsqueda",
        paragraphs: [
          "La gente busca con intención. Las consultas informativas preguntan qué es algo. Las comerciales comparan opciones. Las transaccionales quieren contacto, cita o compra. Una portada, una página de servicio y un artículo de blog sirven intenciones distintas.",
          "El buen contenido SEO es específico. Nombra el servicio, el público y el siguiente paso. No alarga por alargar. Una página de servicio corta que responde la pregunta real vence a un ensayo largo que nunca dice para quién es la oferta.",
          "Un panel de gestión o CMS ayuda después del lanzamiento. El SEO no termina el día de publicar. Precios, horarios y líneas de servicio cambian. Su equipo necesita actualizar titles y textos sin esperar a un desarrollador en cada cambio.",
        ],
      },
      {
        heading: "Señales off-page y confianza",
        paragraphs: [
          "El SEO off-page trata sobre todo de confianza y menciones fuera de su sitio: enlaces reputables, fichas de negocio coherentes y referencias reales. Comprar paquetes de enlaces al azar es una forma habitual de salir perjudicado.",
          "Para negocios locales y oficios, el nombre, dirección y teléfono exactos en perfiles siguen importando. Para fabricantes B2B, casos claros y un sitio profesional suelen hacer más que un montón de directorios de baja calidad.",
        ],
      },
      {
        heading: "SEO frente a anuncios de pago",
        paragraphs: [
          "La búsqueda de pago puede ponerlo delante de una consulta hoy. Cuando deja de pagar, la visibilidad suele caer. El SEO acumula si el sitio y el contenido se mantienen sanos, pero tarda más y nunca sustituye una oferta débil.",
          "La mayoría de negocios usa ambos en etapas distintas. Los anuncios pueden probar mensajes mientras el sitio se construye listo para búsqueda. El SEO evita vivir para siempre solo del gasto publicitario. Ninguno de los dos arregla un sitio lento y confuso.",
        ],
      },
      {
        heading: "Mitos que gastan presupuesto",
        paragraphs: [
          "Mito: el SEO es una configuración de una sola vez. Realidad: la base se construye una vez y luego se mantiene cuando cambian contenido y estructura.",
          "Mito: más palabras clave siempre traen más tráfico. Realidad: el relleno hace las páginas más difíciles de leer y más fáciles de desconfiar.",
          "Mito: cualquier agencia puede garantizar la primera página en treinta días. Realidad: el ranking depende de competencia, demanda y calidad. Las garantías son táctica de venta, no método.",
          "Mito: una plantilla barata con un plugin de SEO basta. Realidad: el plugin no reemplaza arquitectura clara, páginas rápidas y contenido alineado con la intención.",
        ],
      },
      {
        heading: "Qué pedir al construir un sitio de negocio",
        paragraphs: [
          "Pregunte quién define titles, meta, encabezados y sitemap antes del lanzamiento. Pregunte cómo se comprobará la velocidad en móvil. Pregunte si las páginas de servicio apuntarán a frases de búsqueda reales en el idioma de su mercado, no a restos traducidos.",
          "Pregunte cómo actualizará el contenido tras la entrega. Pida ejemplos en vivo de sitios que sigan siendo manejables. En METEK Digital, la preparación de SEO técnico, la estructura legible y el control de contenido entran en el alcance del sitio cuando el proyecto debe competir en búsqueda.",
          "Si su próximo proyecto necesita un sitio corporativo listo para búsqueda, un panel de gestión, o ambos, escríbanos con su sector y objetivo. Devolvemos un alcance claro. El SEO es parte de la construcción, no una línea vaga al final.",
        ],
      },
    ],
  },
  "website-pricing-why-cheap-costs-more": {
    title: "Precios de sitios web: por qué lo a medida cuesta más y lo barato sale caro",
    excerpt:
      "Cuánto cuesta un sitio web depende del alcance. Qué encarece el diseño web a medida, qué recortan las ofertas baratas y cómo comparar propuestas de agencia.",
    lead: "Los precios de un sitio web no son un solo número. Dos cotizaciones pueden usar las mismas palabras y significar trabajos opuestos: recolorear una plantilla comprada frente a diseño a medida, código limpio, SEO técnico y soporte tras el lanzamiento. En METEK Digital fijamos el precio según el alcance, no según un catálogo. Este artículo muestra cómo leer propuestas y por qué un sitio barato suele terminar siendo el caro.",
    imageAlt: "Escritorio que ilustra precios de sitios web y alcance del proyecto",
    sections: [
      {
        heading: "Por qué “cuánto cuesta un sitio web” es la mala primera pregunta",
        paragraphs: [
          "Pregunte qué incluye el precio. Número de páginas, diseño a medida o plantilla, quién escribe el contenido, controles de móvil y velocidad, SEO técnico, panel de gestión, días de soporte. Un número sin esa lista es regateo, no una estimación.",
          "Un sitio corporativo, una tarjeta personal y un ecommerce no son el mismo paquete. Si suma un chatbot de WhatsApp o un panel CRM, el alcance crece otra vez. La mayoría de las diferencias de precio nacen ahí.",
        ],
      },
      {
        heading: "A dónde va el dinero",
        paragraphs: [
          "Descubrimiento y alcance: objetivos, público, límites y cómo se ve el éxito, por escrito. Si se salta, crecen las facturas de revisión.",
          "Diseño e interfaz: composición, tipografía y componentes para la marca. En una plantilla esas decisiones son de otro. En diseño web a medida son de su negocio.",
          "Desarrollo: código mantenible, móvil, formularios, panel cuando haga falta. SEO técnico: titles y meta únicos, estructura H1, sitemap, base de indexación. Entrega y soporte: después del lanzamiento, alguien es dueño de lo que se rompe.",
          "Cada punto pide horas. Si la cotización esconde las horas, algo se recortó: calidad, propiedad, o ambas.",
        ],
      },
      {
        heading: "Por qué no debería encargar un sitio web tirado de precio",
        paragraphs: [
          "Los precios muy bajos suelen ser una plantilla de marketplace con otro color. Las plantillas envejecen, los plugins chocan, baja la velocidad, se rompe el móvil. Se ve bien una semana. A los seis meses el sitio no parece suyo.",
          "Lo que se corta en el trabajo barato es previsible: sin descubrimiento, sin plan de contenido, sin SEO técnico, sin pase de accesibilidad, sin notas de entrega, sin soporte. Cuando el formulario falla o el sitio no aparece en búsqueda, nadie posee el arreglo.",
          "Una reconstrucción más cara a menudo cuesta menos que años de parches sobre una base débil. Arreglar un cimiento malo es más difícil que construirlo bien una vez.",
        ],
      },
      {
        heading: "Qué debe traer una cotización más alta",
        paragraphs: [
          "Alcance por escrito. Páginas, funciones y exclusiones claras. Diseño a medida llamado a medida, no un nombre de plantilla en la letra pequeña. Controles previos al lanzamiento de velocidad, móvil y SEO técnico.",
          "Quién actualiza el contenido. Sin panel o CMS, cada cambio de texto es otra factura. Duración del soporte y canal de contacto tras el lanzamiento. Trabajos en vivo que pueda abrir, no solo mockups.",
          "METEK Digital mantiene esos encabezados explícitos. Sitio, panel, chatbot o trabajo de marca se define según lo que necesita. No un catálogo de descuentos. Una lista real de entregables.",
        ],
      },
      {
        heading: "Cómo comparar propuestas",
        paragraphs: [
          "Ponga tres cotizaciones juntas y haga las mismas preguntas. Diseño a medida o plantilla. SEO técnico incluido. Panel incluido. Días de soporte. Cómo van las revisiones. De quién son el código y las cuentas.",
          "El número más bajo no es el menor riesgo. El más alto no es automáticamente el mejor trabajo. Gana quien escribe un alcance legible y sigue disponible después de la entrega.",
          "Antes de hablar de precio, escriba un párrafo: para quién es el sitio, qué acción quiere (cotización, cita, WhatsApp) y cuándo debe estar en línea. Sin eso, todo precio es aire.",
        ],
      },
      {
        heading: "El precio correcto es el alcance correcto",
        paragraphs: [
          "Una buena inversión en sitio web compra confianza, un camino claro de contacto y un sitio que su equipo pueda actualizar. Un sitio barato a menudo alquila solo la primera pantalla y no transfiere la propiedad.",
          "Si el presupuesto es justo, no pida todo a la vez. Empiece con un sitio corporativo sólido y un camino claro de consulta. Panel, chatbot o movimiento avanzado pueden venir después. Estrecho y correcto vence a amplio y a medias.",
          "¿Quiere un rango de precio claro para el alcance de su sitio? Contacte a METEK Digital. Cuente sector, objetivo y plazos. En un día recibe alcance y rango de precio.",
        ],
      },
    ],
  },
  "whatsapp-chatbot-for-business": {
    title: "Chatbot de WhatsApp para negocios: qué hace y cómo se configura",
    excerpt:
      "Qué debe hacer un chatbot de WhatsApp para negocios: preguntas frecuentes, citas, protección de horas ocupadas, recordatorios y enlace a CRM. Léalo antes de comprar automatización WhatsApp.",
    lead: "La mayoría de los negocios responde cada día las mismas preguntas por WhatsApp: precio, horario, dirección, disponibilidad. Un chatbot de WhatsApp asume esa carga. Agenda horas libres, protege las ocupadas y entrega chats poco claros al equipo con un resumen breve. En METEK Digital construimos chatbots como herramientas de operación conectadas a un CRM o panel de citas, no como demos.",
    imageAlt: "Teléfono en un escritorio para un artículo de chatbot WhatsApp para negocios",
    sections: [
      {
        heading: "Qué es un chatbot de WhatsApp",
        paragraphs: [
          "Un chatbot de WhatsApp es software que responde en la línea comercial según reglas que usted define. Es más que respuestas enlatadas. Conoce servicios y precios, revisa el calendario, abre o bloquea citas y escala a una persona cuando la conversación deja de ser rutina.",
          "La gente busca automatización WhatsApp o chatbot de citas. La etiqueta importa menos que el trabajo. Qué termina el bot y qué debe quedar en el equipo. Si ese límite es vago, el bot genera ruido.",
        ],
      },
      {
        heading: "A qué negocios les encaja",
        paragraphs: [
          "Encaja donde hay muchas preguntas y citas: clínicas, belleza, servicios boutique, hoteles pequeños, servicio de campo, showrooms. Si la mayoría de mensajes gira en torno a precio, horario y huecos libres, el chatbot es buen candidato.",
          "En ventas B2B donde cada trato pide negociación a medida, el bot debe ser solo un primer filtro. Detalle de cotización, precios excepcionales y quejas se quedan con personas. En proyectos METEK escribimos esos límites en la nota de proyecto desde el inicio.",
        ],
      },
      {
        heading: "Qué hace un buen chatbot de negocio",
        paragraphs: [
          "Responde preguntas frecuentes con su tono. Conoce horas libres y dirige las citas allí. No escribe en horas ocupadas. Reabre el hueco tras una cancelación. Envía un recordatorio antes de la cita.",
          "Si el chat es confuso o enfadado, el bot no inventa. Entrega el hilo: quién es el cliente, qué preguntó, en qué paso se quedó. Sin ese resumen, la automatización queda incompleta.",
          "Si los DM de Instagram usan el mismo calendario, un chatbot de Instagram debe seguir las mismas reglas. Dos canales, una disponibilidad. Si no, hay riesgo de doble reserva.",
        ],
      },
      {
        heading: "Por qué hace falta un CRM o panel de citas",
        paragraphs: [
          "Si el chatbot solo conversa, los registros se dispersan. Quién reservó, qué canal escribió, qué se canceló: eso pertenece a un CRM o panel de ventas. Chatbot de WhatsApp más panel CRM deja ver el día sin abrir tres apps.",
          "Se puede publicar un bot sin panel, pero es difícil de mantener. Cuando cambian precios, hay festivos o llega un servicio nuevo, la ruta de actualización debe ser obvia. METEK define chatbot y panel en el mismo alcance.",
        ],
      },
      {
        heading: "Pasos de configuración",
        paragraphs: [
          "Empiece con mensajes reales de las últimas dos semanas. Liste lo que el bot debe saber: servicios, rangos de precio, horarios, ubicación, reglas de cancelación. Luego escriba disparadores de traspaso: quejas, precio especial, intención poco clara.",
          "Pruebe los flujos: camino feliz, hora llena, cancelación, malentendido. Observe los primeros días tras el lanzamiento y ajuste respuestas antes de que se vuelvan bruscas. La necesidad de WhatsApp Business API o canal aprobado varía según el negocio y se aclara en el descubrimiento.",
        ],
      },
      {
        heading: "Checklist corta antes de publicar",
        paragraphs: [
          "Precios y servicios al día. Calendario correcto. Horas ocupadas protegidas. Las cancelaciones reabren huecos. Momento del recordatorio bien. Chats poco claros crean resumen para el equipo. Se crean registros en el panel.",
          "Si esos puntos no están en verde, no abra el bot a todo el mundo. Empiece con un escenario estrecho. La automatización amplia puede esperar. Si quiere un chatbot de WhatsApp, de Instagram o un panel CRM para su negocio, contacte a METEK Digital.",
        ],
      },
    ],
  },
  "technical-seo-checklist-business-website": {
    title: "Lista de SEO técnico para sitios web de negocios",
    excerpt:
      "Checklist de SEO técnico antes del lanzamiento: titles y meta, estructura H1, velocidad, móvil, indexación y panel de contenido. Pasos claros para sitios corporativos.",
    lead: "El SEO técnico no es una lista mágica de palabras clave. Es si los buscadores leen bien el sitio, si las páginas cargan rápido y si el equipo puede actualizar contenido. En METEK Digital estos controles son obligatorios antes de publicar. Use la lista si construye un sitio de negocio, con o sin panel de gestión.",
    imageAlt:
      "Portátil con analítica en un escritorio para revisión de SEO técnico",
    sections: [
      {
        heading: "Qué es el SEO técnico y qué no es",
        paragraphs: [
          "El SEO técnico cubre titles, meta descriptions, jerarquía de encabezados, velocidad, móvil, rastreo e indexación. No sustituye el buen contenido. Sin base técnica, la visibilidad sigue limitada.",
          "Al contratar una agencia de diseño web, pida un pase de SEO técnico previo al lanzamiento, no solo diseño. Los temas a menudo lo dejan a medias. El desarrollo a medida puede construirlo desde el inicio.",
        ],
      },
      {
        heading: "Titles, meta y estructura H1",
        paragraphs: [
          "Cada página importante necesita title y meta únicos. El title nombra marca y servicio con claridad. La meta gana el clic sin relleno de palabras clave.",
          "Un H1 por página. H2 y H3 llevan subtemas en orden. En la portada el H1 suele decir la oferta principal. Las páginas de servicios de diseño web, paneles o chatbots llevan su propio H1.",
          "No copie el mismo title en varias páginas. Los titles duplicados debilitan la experiencia y los resultados de búsqueda.",
        ],
      },
      {
        heading: "Velocidad, móvil y Core Web Vitals",
        paragraphs: [
          "La mayoría abre el sitio en el teléfono. Sirva imágenes en el tamaño correcto, recorte scripts y mantenga tipografías ligeras. Una primera pantalla rápida importa para ventas y SEO.",
          "Revise el diseño móvil en un dispositivo real antes de publicar. Menú, contacto y formularios deben usarse con el pulgar. Un acabado solo de escritorio que falla en móvil también es un problema de SEO técnico.",
        ],
      },
      {
        heading: "Estructura, enlaces internos y sitemap",
        paragraphs: [
          "Servicios, portafolio, blog y contacto deben conectarse por menú y contenido. Las páginas importantes no deben vivir solo en el pie. Los enlaces internos guían a personas y rastreadores.",
          "Publique con sitemap XML y robots.txt correctos. Corrija 404 con redirecciones. Mantenga canonicals coherentes. En sitios multilingües, hreflang debe ser preciso o se rompe el targeting de idioma.",
        ],
      },
      {
        heading: "Panel de gestión y contenido actualizable",
        paragraphs: [
          "El SEO técnico no es un evento único. Servicios y artículos cambian. Por eso importa un panel o CMS. El equipo debe actualizar titles, meta y textos sin esperar a un desarrollador en cada cambio.",
          "En proyectos METEK el panel de contenido se planifica con controles de velocidad y SEO. El objetivo no es un pico el día del lanzamiento. Es un sitio de negocio manejable un año después.",
        ],
      },
      {
        heading: "Checklist corta antes de publicar",
        paragraphs: [
          "Titles y meta únicos. Un H1 por página. Imágenes comprimidas al tamaño correcto. Camino de contacto claro en móvil. Sitemap y robots listos. Formularios y WhatsApp funcionando. 404 y redirecciones revisados.",
          "La mayoría de estos puntos deben hablarse antes de cerrar el diseño. El SEO dejado para el último día cuesta dinero y estrés. Si quiere SEO técnico dentro del alcance de un sitio, panel o chatbot, contacte a METEK Digital.",
        ],
      },
    ],
  },
  "identity-at-first-glance": {
    title: "Primera impresión del sitio web: confianza antes del titular",
    excerpt:
      "El visitante lee diseño, espacio y ritmo en el primer segundo. El diseño web profesional trata la identidad de marca como jerarquía y claridad, no solo como un logo.",
    lead: "En un sitio de negocio la primera pantalla no es un tablero de eslóganes. El visitante mide el desorden, el número de botones y si la marca se ve asentada. Si esas señales pelean con el texto, pierde el texto. En METEK Digital fijamos esa primera impresión antes de pulir las palabras.",
    imageAlt: "Detalle de tipografía y composición en una portada de marca",
    sections: [
      {
        heading: "Qué se registra en el primer segundo",
        paragraphs: [
          "Abra un sitio de servicios o de fabricación. Lo que llega primero casi nunca es el titular. Son márgenes apretados, logo contra menú, tres botones al mismo volumen. Eso aterriza antes de leer una frase.",
          "La gente usa la calidad de interfaz como señal de calidad del negocio. No siempre es justo. Así actúan. Una oferta fuerte detrás de una primera vista llena empieza en desventaja. Una superficie calmada y legible gana unos segundos para la oferta.",
        ],
      },
      {
        heading: "Identidad de marca en la web: tipo, ritmo, jerarquía",
        paragraphs: [
          "La identidad a primera vista no es el archivo del logo. Es cuántos tamaños de tipo compiten, con qué frecuencia aparece el color de acento y si el espacio sigue un sistema.",
          "El ritmo también afirma. Video automático, marquesinas y ventanas antes de leer señalan ansiedad. Una página rápida, quieta y con un camino claro se ve asentada.",
          "En plantillas compradas estas reglas se parchean después. En diseño web a medida la jerarquía vive en el código. En proyectos METEK esas reglas se fijan antes de abrir la carpeta de fotos.",
        ],
      },
      {
        heading: "Tres controles que puede hacer hoy",
        paragraphs: [
          "Una tesis en la primera pantalla. ¿Puede decir a quién sirve y qué hace en una línea, y el diseño la sostiene. Cinco afirmaciones en el mismo espacio no dejan ninguna.",
          "Una acción primaria. Los enlaces secundarios pueden quedar un paso atrás. Dos botones iguales no producen decisión. En el teléfono, el tamaño de toque cuenta.",
          "Consistencia después de la portada. Una home pulida que cae en defaults de plantilla en servicios o contacto rompe la confianza. Repare esa rotura antes de reescribir el eslogan.",
        ],
      },
      {
        heading: "Cuando la primera pantalla coincide con la oferta",
        paragraphs: [
          "En moda, fabricación, hotelería y servicios profesionales, el visitante compra primero el criterio. La primera pantalla es la muestra.",
          "Velocidad, tipo legible, afirmaciones honestas y contraste van con la estética. Una página bonita pero lenta o rota sigue fallando el apretón de manos.",
          "Si pasan los tres controles y algo sigue mal, el tema es estrategia. Escriba la frase que el diseño debe sostener y construya alrededor. METEK Digital puede ayudarle a fijar esa frase y el sistema.",
        ],
      },
    ],
  },
  "system-not-logo": {
    title: "Un logo no basta: necesita marca y sistema de diseño CSS",
    excerpt:
      "Un logo nuevo no arregla facturas ni fichas de producto. Para web y panel coherentes hacen falta reglas de color, tipografía, espacio y componentes.",
    lead: "Los rebrands suelen empezar por el símbolo. El camino durable empieza por reglas. Sin tipografía, color, espacio y comportamiento de componentes compartidos, el nuevo signo se sienta sobre una experiencia rota. En METEK Digital planificamos el logo con un sistema de diseño CSS y normas de uso.",
    imageAlt: "Retícula, muestras de color y tipografía para un sistema de marca",
    sections: [
      {
        heading: "Qué recuerda la gente de verdad",
        paragraphs: [
          "Pida a alguien que describa una marca en la que confía. Casi nadie dibuja el logo. Habla del correo de confirmación, de si la factura coincide con el sitio, de si la red social coincide con el empaque.",
          "Los puntos de contacto se multiplican más rápido que las variantes de logo. El signo debe aguantar en pequeño y en letreros. La carga real está después del clic: web, panel, email, social.",
        ],
      },
      {
        heading: "Los sistemas hacen repetibles las decisiones",
        paragraphs: [
          "Un sistema visual responde preguntas de producción pronto. Peso de H1 frente a H2, acentos por pantalla, ratio de foto, radio de botón, padding mínimo. El equipo deja de renegociar cada página.",
          "Los buenos sistemas también dicen no. Sin logos estirados. Sin sombras en el cuerpo de texto. Sin tipografías al azar en el email. Los límites aceleran porque el rechazo es claro.",
          "Cuando el sitio y el panel de gestión comparten un mismo set de reglas, el equipo ve la identidad como estructura. Lenguajes separados para sitio y panel parten la marca en dos.",
        ],
      },
      {
        heading: "Núcleo, producción, superficie",
        paragraphs: [
          "Núcleo: tesis, familias tipográficas, tokens de color, espacio libre del logo, límites de voz. Se fija antes de escalar.",
          "Producción: retícula, componentes de UI, lenguaje de iconos, dirección fotográfica, límites de movimiento. Aquí corre el día a día. Muchas guías de marca saltan esta capa.",
          "Superficie: web, social, presentaciones, señalética, empaque. Diseñar el sitio aislado crea dos marcas. Un sistema, distintos lienzos.",
        ],
      },
      {
        heading: "Un documento corto que sí se abre",
        paragraphs: [
          "Un libro de ochenta páginas que nadie abre es archivo. Una guía útil es corta, buscable y llena de ejemplos. Haga esto. Evite aquello. Muéstrelo en pantallas reales.",
          "Cuando aparece un canal nuevo, amplíe el sistema en lugar de parchear. La prueba sigue igual: ¿la pieza hereda la lógica tipográfica y de color del núcleo.",
          "Si las fichas de producto aún mezclan tres estilos de botón, pause la siguiente ronda de logo. Audite superficies, fije el sistema CSS y luego afine el signo. Unas líneas bastan si quiere que METEK Digital lleve ese trabajo.",
        ],
      },
    ],
  },
  "editorial-web-as-sales": {
    title: "Diseño web que vende: orden, prueba y una acción clara",
    excerpt:
      "La conversión en un sitio de negocio rara vez llega subiendo el volumen visual. Tesis, prueba y acción en el orden correcto aclaran el camino de venta.",
    lead: "Muchos sitios aún se leen como un folleto apilado para hacer scroll: portada, rejilla de funciones, franja de logos, botón abajo. Los bloques no siempre están mal. El orden sí. El visitante pasa por encima de la prueba y llega al botón sin convencimiento. En METEK Digital diseñamos páginas como camino de venta.",
    imageAlt: "Portada editorial con jerarquía tipográfica clara",
    sections: [
      {
        heading: "Secuencia frente a apilar",
        paragraphs: [
          "Apilar añade módulos hasta que la página se siente llena. Secuenciar pregunta qué debe creerse después: para quién es, qué cambia tras el contacto, luego prueba, luego acción.",
          "Cada sección debe ganar el siguiente scroll. Si no puede nombrar el trabajo de un bloque en el argumento, córtelo o muévalo. Las páginas más cortas a menudo protegen la atención en lugar de borrar valor.",
        ],
      },
      {
        heading: "El camino de venta es tipografía",
        paragraphs: [
          "El tamaño de tipo y el espacio hacen parte del trabajo de navegación. Escalones claros de H1 a H2 trazan la ruta. Longitud de línea legible y contraste honesto superan contadores animados.",
          "El móvil castiga rápido una jerarquía débil. Si el titular se parte en cinco líneas y empuja el texto de apoyo, la promesa se encoge. Termine la página en el teléfono antes de que el mockup de escritorio fije el drama.",
        ],
      },
      {
        heading: "Ponga la prueba donde aparece la duda",
        paragraphs: [
          "Los testimonios metidos en una franja genérica se saltan fácil. La prueba funciona junto a la objeción: una línea de resultado tras la promesa, un proyecto con nombre tras la lista de servicios, una cita breve cerca del precio.",
          "Un caso fuerte vence a diez estadísticas vagas sin fuente. Mostrar trabajo real en contexto, un sitio industrial, una vitrina boutique, un panel operativo, resulta más creíble.",
        ],
      },
      {
        heading: "Una acción primaria",
        paragraphs: [
          "La acción primaria carga peso con etiqueta, posición y espacio alrededor. Los caminos secundarios se ven, pero más callados. Dos botones iguales dejan la decisión en el visitante.",
          "El ritmo editorial respeta a quien piensa. Temporizadores y ventanas agresivas enseñan desconfianza.",
          "Mapee su portada en columnas de tesis, prueba y acción. Los huecos aparecen al instante. Llenarlos es trabajo de texto y composición, no otro plugin. Contacte a METEK Digital si quiere esa estructura en un sitio corporativo.",
        ],
      },
    ],
  },
  "quiet-luxury-online": {
    title: "Sitios web de marca de lujo: diseño quieto con motivo",
    excerpt:
      "El diseño web de lujo no es solo color pálido. Necesita espacio disciplinado, imagen honesta y movimiento con una función.",
    lead: "Las marcas que se sienten calmadas en tienda a menudo se vuelven grises en pantalla y se detienen ahí. Lo quieto en pantalla no es la ausencia de color. Es que cada elemento tenga un motivo. En METEK Digital atamos esa disciplina a un sistema de diseño para boutiques, hotelería y retail selectivo.",
    imageAlt: "Bodegón de producto sencillo con luz natural suave",
    sections: [
      {
        heading: "Menos ruido, mensaje más nítido",
        paragraphs: [
          "Reducir limpia afirmaciones en competencia. Un mensaje principal, una línea de apoyo, un camino adelante. Tres titulares iguales en una pantalla suelen no dejar ninguno memorable.",
          "Una paleta estrecha está bien. No poder leer no. La baja saturación igual debe superar el contraste. Una página demasiado callada para leer no es premium. Es descuidada.",
        ],
      },
      {
        heading: "Calidad material en pantalla",
        paragraphs: [
          "El material digital nace de la disciplina fotográfica: luz consistente, textura honesta, profundidad controlada. Sonrisas de stock y filtros duros rompen una posición de lujo en un fotograma.",
          "La tipografía también carga material. Tracking, peso y márgenes deben respirar. Una fuente de sistema metida en un relato de lujo se lee como etiqueta casera.",
        ],
      },
      {
        heading: "Movimiento con trabajo",
        paragraphs: [
          "La animación debe aclarar jerarquía, no actuar. Hover medido, transiciones pesadas y texto legible vencen al parallax que esconde la frase.",
          "Si el movimiento sigue mientras alguien lee, el diseño falló. Párelo o quítelo. El control se lee como lujo. El temblor constante, como inseguridad.",
        ],
      },
      {
        heading: "Una marca en tienda y en el navegador",
        paragraphs: [
          "Una marca que susurra en tienda y grita en línea se parte en dos. Alinee longitud de frase, nombres de producto y tono de llamado en ambos lados.",
          "La velocidad es parte del sentir. Un diseño elegante que carga lento sigue leyéndose como descuido. Trate velocidad y acceso como criterios de entrega junto con espacio y tipografía.",
          "Compare el sitio con su mejor punto de contacto físico. Si la tienda susurra y la pantalla grita, arréglelo antes de la siguiente campaña. Hable con METEK Digital si quiere un sitio de marca de lujo en esa línea.",
        ],
      },
    ],
  },
  "brief-that-works": {
    title: "Cómo escribir una nota de proyecto que acorta el desarrollo web",
    excerpt:
      "Objetivo, público, límites y referencias claras acortan proyectos de diseño web y software. Cuatro bloques para una nota útil a la agencia.",
    lead: "El descubrimiento no es un tour de moodboards. Es escribir cómo se ve el éxito, a quién hay que convencer y qué queda fuera de alcance. La entrada vaga crea revisiones caras. La entrada clara deja avanzar diseño y código en el primer pase. En METEK Digital fijamos esa nota juntos en el proceso.",
    imageAlt: "Notas de proyecto junto al teclado en un escritorio de estudio",
    sections: [
      {
        heading: "Cuatro bloques: objetivo, público, límites, referencias",
        paragraphs: [
          "Un objetivo nombra un cambio observable. La primera pantalla dice la oferta con claridad. El formulario se completa. El mapa de distribuidores se usa. Palabras de humor como moderno no son objetivos.",
          "El bloque de público nombra al decisor, su miedo y la prueba que necesita. Los límites listan calendario, rango de presupuesto, activos listos, integraciones y líneas legales.",
          "Las referencias muestran ritmo y estructura. No son blancos a copiar. Añada contrarreferencias: sitios o estilos que rechaza y por qué. Ese párrafo suele ser el más útil.",
        ],
      },
      {
        heading: "Una buena frase vence a un deck largo",
        paragraphs: [
          "Una página vence a diez documentos dispersos. Si los stakeholders no coinciden, la nota lo saca temprano. Sale más barato que descubrirlo en la cuarta revisión con componentes ya hechos.",
          "En lugar de que sea más simple, escriba: una acción primaria en la primera pantalla y una ficha técnica que se descarga sin login. La segunda versión ya es construible.",
        ],
      },
      {
        heading: "Fije temprano o pague después",
        paragraphs: [
          "Estrategia, identidad, interfaz, desarrollo, lanzamiento. Cada etapa asume que la anterior sostuvo. Cambiar el posicionamiento con componentes hechos cuesta más que cambiar un boceto.",
          "La nota de proyecto es el primer candado. Sitio, panel o chatbot: la intención escrita evita que el trabajo a medida se deslice hacia una plantilla.",
        ],
      },
      {
        heading: "Escribir la nota juntos",
        paragraphs: [
          "Las mejores notas se escriben juntos. Usted aporta el conocimiento del oficio. La agencia hace preguntas que revelan huecos. Un vocabulario compartido reduce el no pedimos esto al final.",
          "Antes de escribir a cualquier agencia, complete: sabremos que funcionó cuando ___. Si no puede llenar el blank, el descubrimiento no terminó.",
          "Envíe esa frase con enlaces, límites y contrarreferencias. Obtiene una propuesta más nítida y un camino más corto al lanzamiento. Unas líneas bastan para empezar con METEK Digital.",
        ],
      },
    ],
  },
};

export default content;
