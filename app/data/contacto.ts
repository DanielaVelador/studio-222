// Datos compartidos entre el formulario (cliente) y la acción de servidor.
// Para cambiar las opciones del cuestionario, edita este archivo.

export const MEDIOS = ["WhatsApp", "Correo", "Llamada", "Instagram"] as const;
export type Medio = (typeof MEDIOS)[number];

export const RETOS = [
    "Software",
    "Estrategia",
    "Redes sociales",
    "Ads",
    "Capacitación",
    "Otro",
] as const;
export type Reto = (typeof RETOS)[number];

// Cómo se muestra el campo de contacto según el medio elegido
export const CONFIG_MEDIO: Record<
    Medio,
    {
        etiqueta: string;
        placeholder: string;
        type: "tel" | "email" | "text";
        inputMode: "tel" | "email" | "text";
        autoComplete: string;
    }
> = {
    WhatsApp: {
        etiqueta: "Tu número de WhatsApp",
        placeholder: "10 dígitos",
        type: "tel",
        inputMode: "tel",
        autoComplete: "tel",
    },
    Correo: {
        etiqueta: "Tu correo",
        placeholder: "tu@correo.com",
        type: "email",
        inputMode: "email",
        autoComplete: "email",
    },
    Llamada: {
        etiqueta: "Tu número de teléfono",
        placeholder: "10 dígitos",
        type: "tel",
        inputMode: "tel",
        autoComplete: "tel",
    },
    Instagram: {
        etiqueta: "Tu usuario de Instagram",
        placeholder: "@tuusuario",
        type: "text",
        inputMode: "text",
        autoComplete: "off",
    },
};

export const LIMITES = {
    nombre: 80,
    proyecto: 100,
    contacto: 120,
    enlace: 200,
    detalles: 2000,
} as const;

export type CampoContacto = "nombre" | "contacto" | "proyecto" | "retos";

export type ValoresContacto = {
    nombre: string;
    medio: Medio;
    contacto: string;
    proyecto: string;
    enlace: string;
    retos: Reto[];
    detalles: string;
};

export type EstadoContacto = {
    estado: "inicial" | "error" | "ok";
    mensaje?: string;
    errores: Partial<Record<CampoContacto, string>>;
    valores?: ValoresContacto;
};

export const estadoInicial: EstadoContacto = { estado: "inicial", errores: {} };