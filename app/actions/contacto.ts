"use server";

import {
    LIMITES,
    MEDIOS,
    RETOS,
    type CampoContacto,
    type EstadoContacto,
    type Medio,
    type Reto,
    type ValoresContacto,
} from "../data/contacto";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const AVISO_ERROR =
    "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a info@studio222oficial.com.";

function leer(datos: FormData, campo: string, max: number): string {
    const valor = datos.get(campo);
    return typeof valor === "string" ? valor.trim().slice(0, max) : "";
}

function escapar(texto: string): string {
    return texto
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function enUnaLinea(texto: string): string {
    return texto.replace(/[\r\n]+/g, " ");
}

export async function enviarContacto(
    _previo: EstadoContacto,
    datos: FormData,
): Promise<EstadoContacto> {
    // Trampa para bots: este campo está oculto y una persona nunca lo llena.
    if (leer(datos, "sitio_web", 200) !== "") {
        return { estado: "ok", errores: {} };
    }

    const medioCrudo = leer(datos, "medio", 20);
    const medio: Medio = (MEDIOS as readonly string[]).includes(medioCrudo)
        ? (medioCrudo as Medio)
        : "WhatsApp";

    const retos = datos
        .getAll("retos")
        .filter(
            (r): r is Reto =>
                typeof r === "string" && (RETOS as readonly string[]).includes(r),
        );

    const valores: ValoresContacto = {
        nombre: leer(datos, "nombre", LIMITES.nombre),
        medio,
        contacto: leer(datos, "contacto", LIMITES.contacto),
        proyecto: leer(datos, "proyecto", LIMITES.proyecto),
        enlace: leer(datos, "enlace", LIMITES.enlace),
        retos,
        detalles: leer(datos, "detalles", LIMITES.detalles),
    };

    // ── Validación ──
    const errores: Partial<Record<CampoContacto, string>> = {};

    if (valores.nombre.length < 2) errores.nombre = "Cuéntanos cómo te llamas.";
    if (valores.proyecto.length < 2)
        errores.proyecto = "Dinos cómo se llama tu proyecto o marca.";
    if (retos.length === 0) errores.retos = "Elige al menos una opción.";

    const digitos = valores.contacto.replace(/\D/g, "");
    if (medio === "Correo") {
        if (!EMAIL.test(valores.contacto)) errores.contacto = "Escribe un correo válido.";
    } else if (medio === "Instagram") {
        if (valores.contacto.replace("@", "").length < 2)
            errores.contacto = "Escribe tu usuario de Instagram.";
    } else if (digitos.length < 8 || digitos.length > 15) {
        errores.contacto = "Escribe un número válido.";
    }

    if (Object.keys(errores).length > 0) {
        return {
            estado: "error",
            mensaje: "Revisa los campos marcados.",
            errores,
            valores,
        };
    }

    // ── Configuración (variables de entorno) ──
    const clave = process.env.RESEND_API_KEY;
    const para = process.env.CONTACT_TO_EMAIL;
    const de = process.env.CONTACT_FROM_EMAIL;

    if (!clave || !para || !de) {
        console.error(
            "[contacto] Faltan variables de entorno: RESEND_API_KEY, CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL.",
        );
        return { estado: "error", mensaje: AVISO_ERROR, errores: {}, valores };
    }

    // ── Mensaje ──
    const lineas: [string, string][] = [
        ["Nombre", valores.nombre],
        ["Proyecto o marca", valores.proyecto],
        ["Quiere que lo contactemos por", `${medio}: ${valores.contacto}`],
        ["Dónde ver lo que hace hoy", valores.enlace || "—"],
        ["Reto o necesidad", retos.join(", ")],
        ["Sobre el proyecto", valores.detalles || "—"],
    ];

    const text = [
        "Nuevo mensaje desde el sitio de Studio 222",
        "",
        ...lineas.map(([k, v]) => `${k}: ${v}`),
    ].join("\n");

    const filas = lineas
        .map(
            ([k, v]) =>
                `<tr><td style="padding:6px 14px 6px 0;vertical-align:top;font-weight:bold;white-space:nowrap">${escapar(k)}</td><td style="padding:6px 0;white-space:pre-wrap">${escapar(v)}</td></tr>`,
        )
        .join("");

    const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#2b1230;max-width:560px"><h2 style="margin:0 0 16px;color:#4a1d4f">Nuevo mensaje desde el sitio</h2><table style="border-collapse:collapse">${filas}</table></div>`;

    const cuerpo: Record<string, unknown> = {
        from: de,
        to: [para],
        subject: `Nuevo contacto: ${enUnaLinea(valores.nombre)} · ${enUnaLinea(valores.proyecto)}`,
        html,
        text,
    };
    // Si dejó su correo, al responder el mensaje le contestas directo a esa persona.
    if (medio === "Correo") cuerpo.reply_to = valores.contacto;

    // ── Envío con Resend ──
    try {
        const respuesta = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${clave}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cuerpo),
            signal: AbortSignal.timeout(10_000),
        });

        if (!respuesta.ok) {
            console.error("[contacto] Resend respondió", respuesta.status, await respuesta.text());
            return { estado: "error", mensaje: AVISO_ERROR, errores: {}, valores };
        }
    } catch (error) {
        console.error("[contacto] Error al enviar con Resend:", error);
        return { estado: "error", mensaje: AVISO_ERROR, errores: {}, valores };
    }

    return { estado: "ok", errores: {}, valores };
}