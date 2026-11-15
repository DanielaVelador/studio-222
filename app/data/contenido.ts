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