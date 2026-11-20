"use client";

import { useActionState, useState } from "react";
import { enviarContacto } from "../actions/contacto";
import {
    CONFIG_MEDIO,
    LIMITES,
    MEDIOS,
    RETOS,
    estadoInicial,
    type EstadoContacto,
    type Medio,
} from "../data/contacto";

export default function ContactForm() {
    const [estado, accion, enviando] = useActionState<EstadoContacto, FormData>(
        enviarContacto,
        estadoInicial,
    );
    const [medio, setMedio] = useState<Medio>("WhatsApp");

    const v = estado.valores;
    const errores = estado.errores;
    const cfg = CONFIG_MEDIO[medio];

    // ── Mensaje de agradecimiento ──
    if (estado.estado === "ok") {
        return (
            <div className="f-ok" role="status">
                <h3>¡Gracias{v?.nombre ? `, ${v.nombre}` : ""}!</h3>
                <p>
                    Recibimos tu mensaje.{" "}
                    {v
                        ? `Te contactamos por ${v.medio === "Instagram" ? "Instagram" : v.medio.toLowerCase()} en un lapso de 2 a 22 horas hábiles.`
                        : "Te respondemos pronto."}
                </p>
            </div>
        );
    }

    return (
        <form action={accion} className="cta-form">
            {estado.estado === "error" && estado.mensaje && (
                <p className="f-alerta" role="alert">
                    {estado.mensaje}
                </p>
            )}

            {/* Nombre y proyecto */}
            <div className="f-row">
                <div className="f-field">
                    <label htmlFor="nombre">¿Cómo te llamas?</label>
                    <input
                        id="nombre"
                        name="nombre"
                        className="f-input"
                        type="text"
                        autoComplete="name"
                        maxLength={LIMITES.nombre}
                        required
                        defaultValue={v?.nombre}
                        aria-invalid={!!errores.nombre}
                        aria-describedby={errores.nombre ? "nombre-error" : undefined}
                    />
                    {errores.nombre && (
                        <p className="f-error" id="nombre-error">
                            {errores.nombre}
                        </p>
                    )}
                </div>

                <div className="f-field">
                    <label htmlFor="proyecto">¿Cómo se llama tu proyecto o marca?</label>
                    <input
                        id="proyecto"
                        name="proyecto"
                        className="f-input"
                        type="text"
                        autoComplete="organization"
                        maxLength={LIMITES.proyecto}
                        required
                        defaultValue={v?.proyecto}
                        aria-invalid={!!errores.proyecto}
                        aria-describedby={errores.proyecto ? "proyecto-error" : undefined}
                    />
                    {errores.proyecto && (
                        <p className="f-error" id="proyecto-error">
                            {errores.proyecto}
                        </p>
                    )}
                </div>
            </div>

            {/* Medio de contacto */}
            <fieldset className="f-group">
                <legend>¿Por dónde prefieres que te contactemos?</legend>
                <div className="f-chips">
                    {MEDIOS.map((m) => (
                        <label key={m} className="f-chip">
                            <input
                                type="radio"
                                name="medio"
                                value={m}
                                checked={medio === m}
                                onChange={() => setMedio(m)}
                            />
                            <span>{m}</span>
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="f-field">
                <label htmlFor="contacto">{cfg.etiqueta}</label>
                <input
                    key={medio}
                    id="contacto"
                    name="contacto"
                    className="f-input"
                    type={cfg.type}
                    inputMode={cfg.inputMode}
                    autoComplete={cfg.autoComplete}
                    placeholder={cfg.placeholder}
                    maxLength={LIMITES.contacto}
                    required
                    defaultValue={v?.medio === medio ? v.contacto : ""}
                    aria-invalid={!!errores.contacto}
                    aria-describedby={errores.contacto ? "contacto-error" : undefined}
                />
                {errores.contacto && (
                    <p className="f-error" id="contacto-error">
                        {errores.contacto}
                    </p>
                )}
            </div>

            {/* Dónde ver lo que hace hoy */}
            <div className="f-field">
                <label htmlFor="enlace">
                    ¿Dónde podemos stalkear un poco lo que haces actualmente?
                </label>
                <p className="f-hint">
                    Instagram, sitio web, Facebook… lo que tengas. Si aún no tienes nada,
                    déjalo vacío.
                </p>
                <input
                    id="enlace"
                    name="enlace"
                    className="f-input"
                    type="text"
                    autoComplete="off"
                    maxLength={LIMITES.enlace}
                    defaultValue={v?.enlace}
                />
            </div>

            {/* Reto o necesidad */}
            <fieldset className="f-group">
                <legend>¿Qué reto o necesidad quieres resolver con nosotros hoy?</legend>
                <div
                    className="f-chips"
                    aria-describedby={errores.retos ? "retos-error" : undefined}
                >
                    {RETOS.map((r) => (
                        <label key={r} className="f-chip">
                            <input
                                type="checkbox"
                                name="retos"
                                value={r}
                                defaultChecked={v?.retos.includes(r)}
                            />
                            <span>{r}</span>
                        </label>
                    ))}
                </div>
                {errores.retos && (
                    <p className="f-error" id="retos-error">
                        {errores.retos}
                    </p>
                )}
            </fieldset>

            {/* Detalles */}
            <div className="f-field">
                <label htmlFor="detalles">Platícanos un poco más sobre el proyecto</label>
                <textarea
                    id="detalles"
                    name="detalles"
                    className="f-input"
                    rows={5}
                    maxLength={LIMITES.detalles}
                    defaultValue={v?.detalles}
                />
            </div>

            {/* Trampa para bots: las personas no ven ni llenan este campo */}
            <div className="f-trampa" aria-hidden="true">
                <label>
                    No llenes este campo
                    <input type="text" name="sitio_web" tabIndex={-1} autoComplete="off" />
                </label>
            </div>

            <button type="submit" className="btn f-enviar" disabled={enviando}>
                {enviando ? "Enviando…" : "Enviar mensaje"}
            </button>
            {/* Cuando tengas la página de aviso de privacidad, enlázala aquí */}
            <p className="f-nota">Usamos estos datos solo para responder tu mensaje.</p>
        </form>
    );
}