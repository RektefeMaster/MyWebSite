import type { BlogArticle } from "../blog";

const content: Record<string, BlogArticle> = {
  "what-is-seo": {
    title: "Qué es SEO y cómo funciona para un sitio web empresarial",
    excerpt:
      "El SEO ayuda a que los buscadores encuentren, entiendan y clasifiquen páginas. Conozca sus bases técnicas, de contenido y autoridad.",
    lead: "SEO significa optimización para motores de búsqueda. Abarca el trabajo técnico y editorial que permite encontrar un sitio, comprender de qué trata y relacionarlo con consultas pertinentes. Para una empresa, el punto de partida es concreto: identificar qué busca el cliente, ofrecer una página que responda esa necesidad y mostrar evidencia que le permita avanzar.",
    imageAlt: "Computadora portátil y lupa como representación de la optimización para motores de búsqueda",
    sections: [
      {
        heading: "Cómo procesa un buscador su sitio",
        paragraphs: [
          "Un buscador descubre direcciones por medio de enlaces, mapas del sitio y visitas anteriores. Después rastrea el contenido, interpreta la página y decide si la incorpora a su índice. Cuando alguien hace una consulta, el sistema selecciona y ordena páginas de ese índice.",
          "Cada paso depende del anterior. Una página aislada puede tardar en descubrirse. Una instrucción canonical equivocada puede señalar otra URL como principal. Una página indexada puede quedar lejos de la consulta si su contenido es ambiguo. Por eso el SEO combina acceso técnico, estructura e intención de búsqueda.",
        ],
      },
      {
        heading: "La base técnica elimina obstáculos",
        paragraphs: [
          "Una navegación rastreable, códigos de estado correctos y un mapa XML actualizado ayudan a los buscadores a recorrer el sitio. También se revisan las redirecciones, la configuración de robots.txt y las etiquetas canonical. En un sitio multilingüe, hreflang debe indicar el idioma y mercado de cada versión.",
          "El desempeño en el celular forma parte de la misma base. Las imágenes deben llegar al tamaño adecuado, las fuentes deben cargarse con cuidado y el contenido principal debe aparecer sin depender de scripts innecesarios. Estas medidas facilitan el uso y evitan barreras técnicas; ninguna garantiza una posición específica.",
        ],
      },
      {
        heading: "Cada página responde a una intención",
        paragraphs: [
          "La persona que busca “qué es SEO” necesita una explicación. Quien escribe “agencia de diseño web para fabricantes” está comparando proveedores. Una búsqueda de “cotización para rediseñar sitio web” está más cerca de una conversación comercial. La página adecuada cambia según esa intención.",
          "El título de la página identifica el tema. La descripción para buscadores resume lo que encontrará el usuario. Un H1 claro establece el enfoque y los subtítulos organizan la respuesta. La estructura debe sonar natural; repetir la misma frase en cada párrafo dificulta la lectura.",
        ],
      },
      {
        heading: "El contenido debe aportar una respuesta completa",
        paragraphs: [
          "Una página de servicio explica a quién ayuda, qué incluye el trabajo y cómo se desarrolla.",
          "También debe dejar claro el siguiente paso. Un artículo especializado parte de una pregunta más estrecha y la desarrolla con ejemplos, límites y acciones que el lector puede aplicar.",
          "La extensión por sí sola no mejora una página. Revise qué aporta cada párrafo. Si agrega un dato, resuelve una duda o conecta una idea con la siguiente, cumple una función. Si solo repite la premisa con otras palabras, conviene eliminarlo.",
        ],
      },
      {
        heading: "La autoridad necesita fuentes pertinentes",
        paragraphs: [
          "Los buscadores también observan señales externas. Para una empresa local, los datos consistentes de nombre, dirección y teléfono ayudan a confirmar su presencia. Un fabricante puede beneficiarse de menciones del sector, páginas de distribuidores o casos que documenten una aplicación concreta. Priorice lugares donde un cliente realmente esperaría encontrar a la empresa; una referencia vinculada con el servicio pesa más que una lista extensa de directorios genéricos.",
        ],
      },
      {
        heading: "Qué debe pedir al desarrollar un sitio",
        paragraphs: [
          "Defina quién prepara los títulos, descripciones, encabezados y el mapa del sitio antes de publicar. Pida una explicación del proceso para revisar velocidad móvil, indexación y redirecciones. Si el sitio atiende varios mercados, cada idioma necesita contenido escrito para ese público.",
          "También debe existir una ruta de actualización. Un panel administrativo o un CMS puede permitir que su equipo mantenga servicios, ubicaciones y artículos sin tocar el código. Los campos disponibles deben corresponder a tareas reales de contenido.",
        ],
      },
      {
        heading: "La optimización continúa después de publicar",
        paragraphs: [
          "Los reportes de indexación y las consultas reales muestran qué partes del sitio necesitan atención. Los cambios de servicios requieren contenido actualizado. Las páginas retiradas necesitan una decisión sobre redirección, y los enlaces internos deben acompañar la nueva estructura.",
          "El SEO trabaja con competencia y demanda cambiantes. Una práctica responsable documenta lo que puede controlar. Después corrige problemas de indexación y ajusta las páginas según consultas reales.",
        ],
      },
    ],
  },

  "website-pricing-why-cheap-costs-more": {
    title: "Cuánto cuesta un sitio web y cómo comparar cotizaciones",
    excerpt:
      "El costo de un sitio depende del alcance, diseño, desarrollo, preparación para buscadores, administración de contenido y entrega técnica.",
    lead: "Una cifra aislada dice poco sobre el costo de un sitio web. Dos propuestas pueden usar la frase “diseño a medida” y cubrir tareas muy distintas. Para compararlas, necesita saber qué páginas se crearán, cuáles funciones están incluidas, quién prepara el contenido y cómo se administrará el sitio después de publicarlo.",
    imageAlt: "Escritorio con documentos para comparar costos y alcance de un sitio web",
    sections: [
      {
        heading: "El alcance determina la mayor parte del costo",
        paragraphs: [
          "Un sitio corporativo compacto requiere menos planificación que una plataforma multilingüe con servicios, casos, blog y panel administrativo. Los formularios conectados a un CRM, la lógica de citas y las migraciones de contenido agregan trabajo técnico específico.",
          "Una cotización útil enumera tipos de página, funciones, responsabilidades y exclusiones. También explica cuántas rutas de diseño se revisarán y qué sucede cuando una solicitud cambia el alcance aprobado.",
        ],
      },
      {
        heading: "Dónde se concentra el trabajo",
        paragraphs: [
          "La definición inicial aclara público, objetivos y recorridos principales.",
          "Con esa información se organiza el contenido y se diseñan los tipos de página esenciales. Una interfaz propia requiere decisiones consistentes sobre tipografía, color, espaciado y estados de interacción.",
          "El desarrollo convierte esas reglas en componentes adaptables, formularios y conexiones con otros sistemas. Antes de entregar se prueban rutas de contacto, experiencia móvil, accesibilidad básica y preparación técnica para buscadores. Los accesos y la documentación forman parte del cierre acordado.",
        ],
      },
      {
        heading: "Una oferta muy baja merece preguntas precisas",
        paragraphs: [
          "Un precio bajo puede ser adecuado para una primera etapa bien delimitada. El riesgo aparece cuando la propuesta promete muchas páginas y funciones sin asignar tiempo a contenido, pruebas o mantenimiento. En esos casos es frecuente encontrar una plantilla con ajustes visuales y poca atención a la estructura.",
          "Los problemas suelen aparecer cuando el negocio necesita cambiar algo. Componentes improvisados dificultan una página nueva, varios complementos entran en conflicto o cada corrección de texto requiere un desarrollador. La cotización debe indicar quién atiende estas situaciones y bajo qué condiciones.",
        ],
      },
      {
        heading: "Compare propiedad, administración y entrega",
        paragraphs: [
          "Confirme quién controla el dominio, el alojamiento, el repositorio y las cuentas de servicios externos. Revise las licencias recurrentes. Su empresa debe recibir acceso a los recursos que forman parte de la entrega.",
          "Entregue a cada proveedor la misma nota de proyecto y solicite detalles sobre diseño, experiencia móvil, preparación para buscadores, rondas de revisión y administración del contenido. Así las diferencias de alcance quedan visibles.",
          "Revise trabajos relacionados con su sector o con una necesidad semejante. Pregunte qué parte realizó el proveedor y qué sistema recibió el cliente. Una imagen atractiva no demuestra por sí sola la calidad técnica ni el proceso de entrega.",
        ],
      },
      {
        heading: "Cómo priorizar con un presupuesto limitado",
        paragraphs: [
          "Empiece por las páginas que explican la oferta, muestran evidencia y permiten el contacto. Un blog amplio, animaciones complejas o automatizaciones pueden quedar para una etapa posterior. Conviene registrar esa expansión prevista para que la base técnica pueda admitirla.",
          "Una primera versión enfocada permite estimar mejor el trabajo y revisar el resultado con claridad. Para solicitar una estimación a METEK Digital, comparta su sector, objetivo, funciones indispensables y plazo aproximado. Con esos datos podemos definir un alcance inicial.",
        ],
      },
    ],
  },

  "whatsapp-chatbot-for-business": {
    title: "Chatbot de WhatsApp para negocios: flujos, límites y CRM",
    excerpt:
      "Un chatbot de WhatsApp puede responder preguntas y gestionar citas. Necesita datos aprobados, transferencia humana y una conexión operativa clara.",
    lead: "Un chatbot de WhatsApp funciona mejor cuando recibe tareas estrechas y verificables. Puede responder información aprobada, consultar espacios disponibles o recopilar datos para una solicitud. Su valor operativo depende de fuentes actualizadas, límites explícitos y una transferencia ordenada a una persona.",
    imageAlt: "Teléfono sobre un escritorio para un artículo sobre chatbots de WhatsApp para negocios",
    sections: [
      {
        heading: "Use conversaciones reales para definir el alcance",
        paragraphs: [
          "Revise mensajes de un periodo representativo y agrúpelos por intención.",
          "Separe preguntas informativas, solicitudes de cita, cambios, cancelaciones y situaciones que requieren criterio humano. Ese inventario muestra qué parte del trabajo sigue reglas estables.",
          "Cada respuesta automatizada debe tener una fuente aprobada y una persona responsable. Precios, horarios y condiciones cambian. Anote dónde se actualizan y cómo llega la modificación al chatbot.",
        ],
      },
      {
        heading: "Los mejores flujos tienen un final comprobable",
        paragraphs: [
          "Un flujo de citas consulta disponibilidad, presenta opciones y registra una elección confirmada. Una cancelación debe afectar la cita correcta y devolver el espacio al calendario. En un flujo informativo, el final puede ser una respuesta completa o el contacto con el área correspondiente.",
          "Las quejas, negociaciones especiales y solicitudes ambiguas suelen necesitar una persona. Defina esas condiciones antes de desarrollar. El chatbot debe reconocer el límite de sus reglas y detenerse al transferir el caso.",
        ],
      },
      {
        heading: "La transferencia debe incluir el contexto",
        paragraphs: [
          "Una alerta aislada obliga al equipo a leer todo desde el principio. Una buena transferencia reúne los datos conocidos, la intención detectada, las opciones elegidas y la pregunta pendiente. Así la persona puede continuar la conversación con menos repeticiones.",
          "Explique al cliente que alguien continuará la atención. El sistema también debe evitar nuevas respuestas automáticas dentro de ese mismo caso hasta que se cierre o se reasigne.",
        ],
      },
      {
        heading: "Calendario y CRM sostienen la operación",
        paragraphs: [
          "Cada conversación puede generar un contacto, una cita, una cancelación o una nota. Estos registros necesitan un destino definido en el CRM o panel de citas. Dejar parte en WhatsApp y parte en hojas de cálculo dificulta conocer el estado real.",
          "Cuando WhatsApp e Instagram comparten agenda, ambos canales deben consultar la misma fuente de disponibilidad. El calendario decide qué espacio está libre; el chatbot presenta esa información y registra la selección según las reglas aprobadas.",
        ],
      },
      {
        heading: "Pruebe errores antes de ampliar el flujo",
        paragraphs: [
          "Pruebe también horarios ocupados, mensajes duplicados, respuestas tardías y cambios durante una reserva. Confirme que el sistema asigna la zona horaria correcta y que una cancelación no afecta otro registro.",
          "Comience con un solo flujo importante. Durante la primera etapa de uso, revise conversaciones que terminaron en transferencia o abandono. Esos casos muestran qué redacción o regla necesita ajuste.",
          "Para evaluar un proyecto con METEK Digital, prepare las preguntas frecuentes y las reglas actuales de citas. Incluya una descripción del calendario o CRM y aclare quién atiende casos especiales. La revisión inicial separa configuración, integración y desarrollo propio.",
        ],
      },
    ],
  },

  "technical-seo-checklist-business-website": {
    title: "Checklist de SEO técnico para un sitio web empresarial",
    excerpt:
      "Revise rastreo, metadatos, desempeño móvil, indexación, mapa del sitio, redirecciones y administración antes de publicar.",
    lead: "El SEO técnico permite que los buscadores recorran y comprendan las páginas importantes de una empresa. La revisión comienza con la arquitectura y continúa después de publicar. Esta lista organiza los controles por etapa para detectar problemas antes de que afecten muchas páginas.",
    imageAlt: "Computadora portátil con datos para revisar el SEO técnico de un sitio empresarial",
    sections: [
      {
        heading: "Antes de diseñar: asigne una función a cada página",
        paragraphs: [
          "Enumere los tipos de página que necesita el sitio: inicio, servicios, casos, ubicaciones, artículos y contacto. Asigne a cada uno un propósito y un encabezado principal. Esta vista revela contenidos duplicados y vacíos antes de trabajar en la interfaz.",
          "Defina también las URL finales. En un rediseño, cada dirección anterior necesita una decisión documentada: conservarla, redirigirla a un destino pertinente o retirarla cuando ya no tenga reemplazo.",
        ],
      },
      {
        heading: "Durante el desarrollo: controle el rastreo",
        paragraphs: [
          "Proteja los entornos de prueba para que no se indexen. En producción, conecte las páginas importantes mediante enlaces HTML normales. Revise en conjunto robots.txt, meta robots y canonical para evitar instrucciones contradictorias.",
          "Genere un mapa XML con las páginas principales que sí deben indexarse. Excluya vistas previas, filtros sin valor y rutas del sistema. Para varios idiomas, cada hreflang debe apuntar a la versión correcta y recibir una referencia de regreso.",
        ],
      },
      {
        heading: "Títulos, descripciones y encabezados",
        paragraphs: [
          "Cada página importante necesita un título propio y una descripción útil para los resultados de búsqueda. El título identifica el tema. La descripción explica qué información encontrará la persona. Ambos deben leerse con naturalidad.",
          "Use un H1 claro y organice los subtemas con H2 y H3 en orden lógico. El nivel del encabezado comunica estructura. Su tamaño visual se controla con estilos, no cambiando el nivel para lograr una apariencia determinada.",
        ],
      },
      {
        heading: "Desempeño móvil y accesibilidad básica",
        paragraphs: [
          "Pruebe las páginas principales en un celular real y con una conexión limitada.",
          "Observe el tamaño de las imágenes descargadas, los scripts que bloquean la vista y las fuentes que se cargan. El contenido principal debe aparecer sin una espera innecesaria.",
          "Revise menú, formularios y acciones de contacto con teclado y pantalla táctil. Los campos necesitan etiquetas, estados de enfoque y mensajes de error comprensibles. Muchas barreras de uso también afectan la calidad técnica general del sitio.",
        ],
      },
      {
        heading: "Antes de publicar: estados, enlaces y datos estructurados",
        paragraphs: [
          "Recorra la lista completa de URL y confirme los códigos de estado esperados. Simplifique cadenas de redirecciones y actualice los enlaces internos para que apunten al destino final. Compruebe también correo, teléfono, WhatsApp y formularios.",
          "Use datos estructurados solo cuando coincidan con la información visible. Evite marcar reseñas, ubicaciones o servicios que la página no presenta. Después valide el resultado con las herramientas correspondientes.",
        ],
      },
      {
        heading: "Después de publicar: monitoreo y mantenimiento",
        paragraphs: [
          "Envíe el mapa del sitio a las herramientas para webmasters y vigile errores de indexación. Tras una migración, preste atención a URL antiguas, redirecciones y páginas 404. Un aumento en errores puede señalar enlaces internos o externos pendientes.",
          "Asigne la administración de títulos, descripciones y contenido. Un panel administrativo o CMS debe ofrecer los campos que el equipo usa y proteger la estructura técnica.",
          "Guarde los resultados en una lista de verificación para el lanzamiento. Repita la revisión después de cambios técnicos o editoriales importantes.",
        ],
      },
    ],
  },

  "identity-at-first-glance": {
    title: "La primera impresión de un sitio web empieza con su sistema visual",
    excerpt:
      "Tipografía, jerarquía, espacio e imágenes definen la primera impresión del sitio. Aprenda a revisar la identidad en la primera pantalla.",
    lead: "Un visitante percibe orden y prioridad antes de leer cada frase. La primera pantalla debe ubicar la oferta, mostrar el carácter de la marca y señalar una acción razonable. El logo participa en esa lectura, pero la jerarquía completa determina si la página se siente coherente.",
    imageAlt: "Detalle de tipografía y composición en la página de inicio de una marca",
    sections: [
      {
        heading: "La primera pantalla establece el contexto",
        paragraphs: [
          "Un sitio de manufactura, una clínica y un hotel boutique necesitan entradas distintas. El visitante debe reconocer el tipo de oferta mediante el mensaje, la imagen y la acción principal. Esa combinación establece una expectativa para el resto del recorrido.",
          "Cuando el menú, una barra promocional y varias acciones compiten con el titular, la persona tiene que reconstruir el orden. Reduzca el peso de lo secundario y proteja una lectura principal.",
        ],
      },
      {
        heading: "La tipografía convierte contenido en jerarquía",
        paragraphs: [
          "La identidad tipográfica incluye más que una fuente.",
          "El tamaño, peso y espacio entre el H1, el texto de apoyo y la navegación muestran qué debe leerse primero. Un conjunto limitado de reglas produce una voz más estable que muchas variaciones decorativas.",
          "Abra la página en un celular estrecho. Si el titular ocupa casi toda la altura, el apoyo visual y la acción desaparecen del primer vistazo. Ajuste el texto o la composición antes de reducir la letra hasta comprometer la lectura.",
        ],
      },
      {
        heading: "Las imágenes deben comprobar algo",
        paragraphs: [
          "Un fabricante puede mostrar materiales, proceso o instalaciones. Una propiedad de hospitalidad necesita imágenes que describan el espacio con honestidad. Para servicios profesionales, una interfaz o un entregable real suele aportar más que una fotografía genérica de oficina.",
          "Defina la función de cada imagen. Si sirve como ambiente, debe proteger la legibilidad. Si actúa como evidencia, necesita tamaño suficiente y un recorte que conserve la información importante.",
        ],
      },
      {
        heading: "La estabilidad también comunica calidad",
        paragraphs: [
          "Una composición cuidadosa pierde credibilidad si el contenido salta durante la carga o si el medio principal permanece vacío. Reserve dimensiones para imágenes y video, cargue las fuentes con moderación y revise la primera vista bajo condiciones móviles. La animación puede presentar el orden, pero después debe permitir una lectura estable.",
        ],
      },
      {
        heading: "Revise el recorrido completo",
        paragraphs: [
          "Observe la primera pantalla sin leer el cuerpo. ¿La composición indica qué tipo de empresa está viendo? Lea luego el titular y la acción principal. ¿Describen la oferta que existe en las páginas de servicio?",
          "Continúe hacia una página interna y contacto. Tipografía, espaciado y prioridades deben conservar una relación reconocible. Una página de inicio pulida no puede compensar un sistema que cambia en cada sección.",
          "Documente el uso del color de acento y la acción principal. Cuando esas reglas se repitan, conviértalas en tokens y componentes compartidos.",
        ],
      },
    ],
  },

  "system-not-logo": {
    title: "Del logo a un sistema de diseño para el sitio y el panel",
    excerpt:
      "Un sistema CSS convierte la identidad en reglas de color, tipografía, espaciado, estados y componentes para interfaces consistentes.",
    lead: "El logo identifica a la marca, pero la experiencia digital depende de muchas decisiones repetidas. Tamaños de texto, colores funcionales, espacios, formularios y estados interactivos forman el sistema que el usuario encuentra todos los días. Un sistema de diseño guarda esas decisiones en código y documentación breve.",
    imageAlt: "Cuadrícula, muestras de color y tipografía para un sistema de diseño de marca",
    sections: [
      {
        heading: "La marca gráfica y la interfaz resuelven tareas distintas",
        paragraphs: [
          "La marca gráfica debe conservarse en tamaños y fondos definidos. El sitio necesita reglas para navegar, leer y completar acciones. Un panel interno maneja más datos y tareas repetitivas, aunque todavía debe sentirse relacionado con la identidad pública.",
          "La relación puede vivir en tipografía, colores funcionales y formas. La densidad y los componentes cambian según el contexto. Un panel no necesita copiar la composición de la página de inicio para pertenecer a la misma marca.",
        ],
      },
      {
        heading: "Empiece con tokens que tengan una función",
        paragraphs: [
          "Defina colores para fondo, texto, borde, acento, éxito y error. Organice la escala tipográfica por uso y establezca una serie limitada de espacios. Los radios y las sombras también necesitan valores comunes cuando forman parte de la identidad.",
          "Estos tokens concentran los cambios. Si se ajusta un color de texto, las superficies relacionadas pueden actualizarse desde la misma fuente. Los valores sueltos repartidos por varios archivos producen inconsistencias difíciles de rastrear.",
        ],
      },
      {
        heading: "Los componentes incluyen comportamiento",
        paragraphs: [
          "Documente primero navegación, botones, enlaces, campos, alertas y tarjetas de contenido.",
          "Para cada control, contemple los estados normal, enfocado, con error y desactivado. El estado de enfoque permite navegar y debe conservar contraste suficiente.",
          "Pruebe los componentes con textos largos, errores y datos faltantes. Una muestra perfecta rara vez revela lo que ocurre con una dirección extensa, un producto sin imagen o una traducción que ocupa dos líneas.",
        ],
      },
      {
        heading: "Comparta reglas sin forzar componentes idénticos",
        paragraphs: [
          "El sitio público organiza oferta, evidencia y contacto. El panel organiza registros, estados y acciones frecuentes. Ambos pueden compartir tipografía y significado de color, pero necesitan composiciones propias.",
          "Reutilice un componente cuando su propósito y comportamiento coincidan. Una tarjeta de proyecto pública y una fila de datos interna sirven a usuarios distintos. Unificarlas por apariencia puede volver más difícil mantener ambas.",
        ],
      },
      {
        heading: "Revise una identidad que ya está en uso",
        paragraphs: [
          "Reúna capturas del sitio, panel, correos y redes. Marque variaciones en botones, tipografía y color. Después separe las diferencias justificadas por el contexto de las que surgieron por falta de una regla.",
          "Construya un núcleo con los patrones que funcionan y aparecen con frecuencia. Amplíelo cuando una nueva necesidad se repita. La documentación debe responder preguntas de producción.",
        ],
      },
      {
        heading: "Mantenga el sistema cerca del producto",
        paragraphs: [
          "Los tokens y componentes se versionan junto con la interfaz. Ejemplos breves explican cuándo usar cada variante y qué contenido admite.",
          "La decisión de diseño permanece así conectada con la implementación. METEK Digital desarrolla sistemas CSS específicos para sitios y paneles.",
          "Para evaluar un proyecto, comparta capturas de las inconsistencias y las superficies que necesitan reglas comunes.",
        ],
      },
    ],
  },

  "editorial-web-as-sales": {
    title: "Cómo estructurar un sitio web que apoye la venta",
    excerpt:
      "Una página de inicio útil organiza oferta, evidencia, objeciones y acción. Revise la secuencia y la jerarquía de su sitio empresarial.",
    lead: "Un sitio apoya la venta cuando responde las preguntas del comprador en un orden lógico. Los bloques visualmente atractivos no forman una conversación por sí solos. La página debe presentar la oferta, probar su relevancia, atender dudas y facilitar una acción principal.",
    imageAlt: "Página de inicio editorial con jerarquía tipográfica clara",
    sections: [
      {
        heading: "Presente una oferta que se pueda reconocer",
        paragraphs: [
          "La primera pantalla debe indicar qué ofrece la empresa y para quién. Una descripción amplia obliga al visitante a interpretar demasiado. Un fabricante puede nombrar su categoría y mercado; una clínica puede indicar el servicio y la forma adecuada de solicitar una cita.",
          "La acción principal debe corresponder a esa oferta. Puede ser solicitar una cotización, revisar disponibilidad o iniciar una consulta. Los enlaces secundarios permanecen disponibles con menor énfasis.",
        ],
      },
      {
        heading: "Ubique la evidencia junto a la afirmación",
        paragraphs: [
          "Después de una promesa de calidad, muestre el detalle que la respalda: un proyecto identificado, una explicación del proceso o una imagen del producto en uso. Una fila genérica de logos deja sin explicar qué demuestra cada relación.",
          "La evidencia depende del negocio. En manufactura pueden importar materiales y aplicaciones. Una boutique necesita fotografía de producto y políticas claras. Un servicio profesional puede mostrar alcance, responsables y un caso documentado.",
        ],
      },
      {
        heading: "Responda las objeciones en el momento adecuado",
        paragraphs: [
          "Una vez que la oferta resulta pertinente, aparecen preguntas sobre capacidad, proceso y riesgo. La página debe responderlas antes de pedir un compromiso mayor. El orden puede colocar alcance antes de casos detallados, proceso antes del formulario y mantenimiento cerca de la decisión final.",
          "No existe una secuencia universal. Las conversaciones de ventas, búsquedas del sitio y dudas frecuentes indican qué necesita saber su público primero. Use esa evidencia para organizar el contenido.",
        ],
      },
      {
        heading: "La jerarquía visual sostiene el argumento",
        paragraphs: [
          "Los encabezados marcan etapas y el texto explica lo necesario para pasar a la siguiente.",
          "El tamaño, el contraste y el espacio deben revelar esa relación. La decoración no debe ocultar condiciones o información útil.",
          "Los botones necesitan etiquetas específicas. “Solicitar cotización” explica mejor la consecuencia que “Conocer más”. Mantenga el mismo significado cuando la acción principal se repita en otra parte de la página.",
        ],
      },
      {
        heading: "Revise la página de inicio como un argumento",
        paragraphs: [
          "Asigne una función a cada sección: explicar la oferta, mostrar evidencia, resolver una objeción o permitir una acción. Si una sección no cumple una de esas tareas, revise su lugar. Los bloques que repiten la misma función pueden combinarse.",
          "Después observe el orden en el celular. Una imagen o carrusel no debe separar la afirmación de su prueba. Al terminar cada pantalla, el visitante debería entender por qué sigue el próximo contenido.",
          "Con el argumento definido, la composición puede explorar escala e imágenes sin perder orientación. Antes de publicar, confirme que cada sección responda una pregunta o prepare la acción siguiente.",
        ],
      },
    ],
  },

  "quiet-luxury-online": {
    title: "Diseño web para marcas de lujo: sobrio, claro y legible",
    excerpt:
      "Un diseño sobrio necesita tipografía legible, contraste, fotografía precisa, espacio funcional y movimiento que se detenga a tiempo.",
    lead: "Una interfaz sobria puede comunicar cuidado sin sacrificar información. El problema aparece cuando el intento de verse exclusivo produce texto pequeño, contraste débil o grandes espacios sin orientación. La moderación funciona cuando cada decisión ayuda a mirar el producto y entender la oferta.",
    imageAlt: "Composición sencilla de producto con luz natural suave",
    sections: [
      {
        heading: "La moderación conserva la información esencial",
        paragraphs: [
          "Un sitio de boutique todavía debe explicar producto, material, medidas, precio o forma de consulta. El espacio puede dar protagonismo a esos datos, pero no debe obligar a buscarlos. Ordene el contenido por relevancia y mantenga en la primera vista el contexto necesario para orientar al visitante.",
        ],
      },
      {
        heading: "Tipografía y contraste sostienen el tono",
        paragraphs: [
          "Elija una familia con formas claras y los pesos necesarios. Los titulares pueden tener personalidad; el texto descriptivo y los controles necesitan tamaños cómodos. Los trazos demasiado finos se deterioran con facilidad en pantallas pequeñas.",
          "Una paleta discreta todavía debe ofrecer contraste. Revise texto, enlaces, botones y enfoque sobre cada fondo. El color de acento se percibe mejor cuando cumple una función consistente.",
        ],
      },
      {
        heading: "La fotografía demuestra la calidad material",
        paragraphs: [
          "La luz, la perspectiva y el encuadre deben permitir observar textura y acabado.",
          "Una dirección fotográfica constante conecta mejor el catálogo que un filtro aplicado después. Prepare archivos con resolución suficiente para el tamaño donde se mostrarán.",
          "Si una imagen llevará texto, considere esa necesidad durante la sesión. Colocar texto sobre una zona ocupada obliga a oscurecer la foto o reduce la legibilidad. La composición puede reservar espacio desde el origen.",
        ],
      },
      {
        heading: "El espacio debe explicar relaciones",
        paragraphs: [
          "Los espacios amplios separan grupos y dirigen la atención. Dentro de cada grupo, título, descripción y acción deben conservar cercanía. Una escala de espaciado evita que cada sección invente su propio ritmo.",
          "Adapte esa escala al celular. El espacio vertical del escritorio puede empujar información esencial demasiado abajo en una pantalla pequeña. Pruebe la primera vista y las fichas de producto en ambos contextos.",
        ],
      },
      {
        heading: "Alinee movimiento y experiencia de marca",
        paragraphs: [
          "Una transición puede mostrar que cambió la vista o revelar un detalle de producto. Cuando la persona empieza a leer o comparar, la pantalla debe quedar estable. Respete también la preferencia de movimiento reducido.",
          "Revise el sitio junto con empaque, tienda y comunicación al cliente. El color, el tratamiento fotográfico y el tono pueden crear continuidad mientras la interfaz conserva sus requisitos de lectura.",
          "Antes de entregar, revise la lectura en celular y los estados de enfoque. Compruebe también la calidad de las imágenes y la estabilidad de la primera pantalla durante la carga.",
        ],
      },
    ],
  },

  "brief-that-works": {
    title: "Qué información necesita una agencia para definir su proyecto",
    excerpt:
      "Prepare problema, usuarios, acciones, contenido, integraciones, límites y responsable de decisiones para un sitio, panel o chatbot.",
    lead: "Una nota de proyecto útil comienza con el problema que la empresa necesita resolver. Las referencias visuales y la lista de funciones se vuelven más claras cuando tienen ese contexto. La agencia también necesita conocer usuarios, contenido disponible, sistemas actuales y quién aprueba las decisiones.",
    imageAlt: "Notas con requisitos de proyecto junto a un teclado",
    sections: [
      {
        heading: "Describa el problema y al usuario principal",
        paragraphs: [
          "Use situaciones observables. Los clientes no encuentran el servicio adecuado, las solicitudes llegan sin datos básicos o el equipo transfiere citas entre varias herramientas. Estas frases permiten evaluar si el proyecto responde a una tarea concreta.",
          "Identifique al usuario principal y su contexto. Un comprador que consulta desde el celular necesita otra estructura que un empleado que procesa muchos registros. Las audiencias secundarias pueden incluirse con una prioridad clara.",
        ],
      },
      {
        heading: "Escriba las acciones requeridas con verbos",
        paragraphs: [
          "Indique qué debe poder completar cada usuario: enviar una solicitud de cotización, elegir una cita, aprobar un registro o publicar un artículo. Estas acciones se traducen en pantallas, campos y estados.",
          "Para los recorridos principales, explique qué datos se solicitan y qué ocurre después. ¿A qué sistema llega la consulta? ¿Quién la atiende? ¿Qué confirmación recibe la persona? Las respuestas revelan integraciones y responsabilidades.",
        ],
      },
      {
        heading: "Haga un inventario del contenido disponible",
        paragraphs: [
          "Liste textos, imágenes, datos de producto y reglas de marca.",
          "Asigne un responsable a lo que falta. La cantidad y el formato del contenido influyen en la arquitectura y en la producción visual.",
          "Agregue referencias con una nota sobre lo que le resulta útil: jerarquía, ritmo, navegación o tratamiento de imágenes. Incluya ejemplos que desea evitar y explique la razón. Esa información vale más que una carpeta de enlaces sin comentario.",
        ],
      },
      {
        heading: "Documente integraciones y restricciones",
        paragraphs: [
          "Mencione el CRM, calendario, sistema de pagos o herramienta de medición que ya utiliza. Indique cuál conserva el registro principal y si existe una API disponible. Una integración requiere acceso y una persona responsable de cada sistema.",
          "Añada restricciones legales, de seguridad o de organización. Pueden incluir región de alojamiento, niveles de acceso o un proceso interno de aprobación. Estas condiciones afectan la arquitectura desde el inicio.",
        ],
      },
      {
        heading: "Aclare plazos, decisiones y exclusiones",
        paragraphs: [
          "Explique qué evento determina la fecha deseada y cuáles dependencias ya conoce. La fotografía, la migración de datos o una revisión legal pueden definir el calendario. Nombre a la persona que aprobará alcance, contenido y diseño.",
          "Registre lo que quedará fuera de la primera etapa. Una app móvil, una cuenta de cliente o un idioma adicional pueden planearse para después. Así la base puede considerar esas necesidades sin incluirlas en la estimación actual.",
          "Un ejemplo compacto sería: “Nuestros distribuidores tardan en encontrar fichas técnicas. Los compradores deben filtrar productos por aplicación y descargar un PDF sin crear una cuenta. Los datos están en una hoja de cálculo; las fotos y el contenido en español están aprobados. Las consultas deben llegar al CRM actual. La directora de ventas aprueba el proyecto. La cuenta de cliente queda fuera de esta etapa.”",
          "La nota permite formular preguntas específicas. Agregue las referencias y fechas disponibles. Indique también quién aprueba el alcance para delimitar la primera etapa.",
        ],
      },
    ],
  },
};

export default content;
