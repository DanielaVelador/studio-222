export type Servicio = {
    titulo: string;
    descripcion: string;
    items: string[];
};

export const servicios: Servicio[] = [
    {
        titulo: "Que me encuentren",
        descripcion: "Aparece en Google y redes justo cuando te buscan.",
        items: [
            "Sitio a la medida",
            "Landing con SEO",
            "Google Business",
            "Meta Business",
            "Gestión de reseñas y reputación",
            "Mantenimiento web",
        ],
    },
    {
        titulo: "Vender en línea",
        descripcion: "Vende y agenda sin ir y venir en chats.",
        items: [
            "Catálogo/menú digital",
            "E-commerce",
            "Tomar pedidos en línea",
            "Recibir cotizaciones",
            "Sistema de reservas online",
            "Sistema de citas",
        ],
    },
    {
        titulo: "Atender y automatizar",
        descripcion: "Responde y da seguimiento sin hacerlo todo a mano.",
        items: [
            "Chatbot WhatsApp",
            "Automatizar correos",
            "Automatizar procesos a la medida",
            "CRM básico",
            "Herramientas internas",
        ],
    },
    {
        titulo: "Marca y contenido",
        descripcion: "Una marca que se reconoce y redes con rumbo.",
        items: [
            "Identidad de marca",
            "Plantillas editables",
            "Producción ligera de contenido",
            "Diseño web",
            "Manejo de redes sociales",
        ],
    },
    {
        titulo: "Marketing y publicidad",
        descripcion: "Atrae clientes que sí compran.",
        items: [
            "Estrategia de marketing",
            "Campaña",
            "Meta Ads",
            "Google Ads",
            "Plan de lanzamiento",
            "Colaboraciones locales",
        ],
    },
    {
        titulo: "Entender y aprender",
        descripcion: "Decide con datos y domina tus herramientas.",
        items: [
            "Estudio de mercado",
            "Asesorías",
            "Capacitaciones por temas",
            "Tableros de métricas",
            "Auditoría técnica de sitio web",
        ],
    },
];

export type Extra = {
    titulo: string;
    descripcion: string;
    color: string;
};

export const extras: Extra[] = [
    {
        titulo: "Invitaciones digitales",
        descripcion:
            "Invitaciones con tu estilo, listas para compartir por mensaje o redes.",
        color: "#70F1AC",
    },
    {
        titulo: "Adaptación de libro digital",
        descripcion:
            "Pasamos tu libro físico a formato digital, listo para pedirse en línea y descargarse.",
        color: "#C305D3",
    },
    {
        titulo: "Diseños individuales",
        descripcion:
            "Piezas sueltas (post, portada, flyer) para cuando necesitas algo puntual.",
        color: "#D9B8F0",
    },
    {
        titulo: "Capacitación",
        descripcion:
            "Te enseñamos a usar tus herramientas y tus redes para que no dependas de nadie.",
        color: "#4A1D4F",
    },
];

export type Proyecto = {
    tipo: string;
    nombre: string;
    descripcion: string;
    fondo: string;
    texto: string;
};

export const proyectos: Proyecto[] = [
    {
        tipo: "Página de cotización rápida",
        nombre: "Landing para Keki",
        descripcion:
            "Una página pensada para que los clientes pidan su cotización sin esperar mensajes. Ahorra tiempo al responder.",
        fondo: "var(--mint)",
        texto: "var(--plum)",
    },
    {
        tipo: "Estudio de mercado",
        nombre: "Fitness Manzanillo 2025",
        descripcion:
            "Hallazgos clave del mercado fitness de Manzanillo, en formato corto, para dueños de gimnasios y entrenadores.",
        fondo: "var(--lila)",
        texto: "var(--plum)",
    },
    {
        tipo: "Campaña de lanzamiento",
        nombre: "El trébol de Studio 222",
        descripcion:
            "Tréboles con QR y llaveros para que la gente encuentre el estudio, con video en Manzanillo y Colima.",
        fondo: "var(--mag)",
        texto: "#fff",
    },
];

export type Pregunta = {
    pregunta: string;
    respuesta: string;
};

export const preguntas: Pregunta[] = [
    {
        pregunta: "¿Y si no sé qué necesito?",
        respuesta:
            "Cuéntanos cómo funciona tu negocio y qué quieres lograr. Te proponemos por dónde empezar.",
    },
    {
        pregunta: "¿Trabajan con negocios pequeños?",
        respuesta:
            "Sí. Armamos soluciones que se ajustan a la etapa de tu negocio, desde una página sencilla hasta sistemas más completos.",
    },
    {
        pregunta: "¿Cuánto cuesta un proyecto?",
        respuesta:
            "Depende de lo que necesites. Después de conocer tu caso, te enviamos una propuesta clara.",
    },
    {
        pregunta: "¿Me enseñan a usar lo que construyen?",
        respuesta:
            "Sí. También ofrecemos asesorías y capacitaciones para que sepas usar y dar mantenimiento a tus herramientas.",
    },
    {
        pregunta: "¿Cómo empiezo?",
        respuesta:
            "Presiona “Hablemos”, cuéntanos tu idea y te respondemos con los siguientes pasos.",
    },
];