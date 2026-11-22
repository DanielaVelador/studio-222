"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { enviarContacto } from "../actions/contacto";
import {
    CONFIG_MEDIO,
    LIMITES,
    MEDIOS,
    RETOS,
    estadoInicial,
    type CampoContacto,
    type EstadoContacto,
    type Medio,
} from "../data/contacto";

// Una pregunta por pantalla. `campos` indica qué errores del servidor pertenecen
// a cada paso (para volver a la pregunta que hay que corregir).
// El orden debe coincidir con el de los bloques <Paso> más abajo.
const PASOS: { campos: CampoContacto[] }[] = [
    { campos: ["nombre"] }, //   1. ¿Cómo te llamas?
    { campos: ["contacto"] }, // 2. Medio y dato de contacto
    { campos: ["proyecto"] }, // 3. Proyecto o marca
    { campos: [] }, //           4. Dónde ver lo que haces hoy (opcional)
    { campos: ["retos"] }, //    5. Reto o necesidad
    { campos: [] }, //           6. Más sobre el proyecto (opcional)
];
const TOTAL = PASOS.length;
const PASO_RETOS = 4;
const CAMPOS_DE_TEXTO = "input.f-input, textarea.f-input";

function pasoConError(errores: EstadoContacto["errores"]): number | null {
    const indice = PASOS.findIndex((p) => p.campos.some((c) => errores[c]));
    return indice === -1 ? null : indice;
}

function Paso({
    indice,
    activo,
    children,
}: {
    indice: number;
    activo: boolean;
    children: React.ReactNode;
}) {
    return (
        <div className="paso" data-paso={indice} hidden={!activo} tabIndex={-1}>
            {children}
        </div>
    );
}

export default function ContactForm() {
    const [estado, accion, enviando] = useActionState<EstadoContacto, FormData>(
        enviarContacto,
        estadoInicial,
    );
    const [paso, setPaso] = useState(0);
    const [direccion, setDireccion] = useState<"adelante" | "atras">("adelante");
    const [medio, setMedio] = useState<Medio>("WhatsApp");
    const [errorLocal, setErrorLocal] = useState<
        Partial<Record<CampoContacto, string>>
    >({});
    // Errores del servidor que la persona ya corrigió y pasó con "Siguiente"
    const [descartados, setDescartados] = useState<CampoContacto[]>([]);
    const [estadoVisto, setEstadoVisto] = useState(estado);

    const formRef = useRef<HTMLFormElement>(null);
    const pasoPrevio = useRef(paso);

    // Cuando el servidor devuelve errores, volvemos a la primera pregunta con error
    if (estado !== estadoVisto) {
        setEstadoVisto(estado);
        setDescartados([]);
        if (estado.estado === "error") {
            const indice = pasoConError(estado.errores);
            if (indice !== null) {
                setDireccion("atras");
                setPaso(indice);
            }
        }
    }

    // Al cambiar de pregunta, el foco pasa a su primer campo (o a la pregunta)
    useEffect(() => {
        if (pasoPrevio.current === paso) return;
        pasoPrevio.current = paso;
        const contenedor = formRef.current?.querySelector<HTMLElement>(
            `[data-paso="${paso}"]`,
        );
        const campo = contenedor?.querySelector<HTMLElement>(CAMPOS_DE_TEXTO);
        (campo ?? contenedor)?.focus({ preventScroll: true });
    }, [paso]);

    const v = estado.valores;
    const cfg = CONFIG_MEDIO[medio];
    const errorDe = (campo: CampoContacto) =>
        errorLocal[campo] ??
        (descartados.includes(campo) ? undefined : estado.errores[campo]);

    // Valida solo la pregunta actual, con las mismas reglas de los campos
    // (required, tipo, longitud) y la regla de elegir al menos un reto.
    const validarPaso = (indice: number): boolean => {
        const contenedor = formRef.current?.querySelector<HTMLElement>(
            `[data-paso="${indice}"]`,
        );
        if (!contenedor) return true;

        const campos = contenedor.querySelectorAll<
            HTMLInputElement | HTMLTextAreaElement
        >(CAMPOS_DE_TEXTO);
        for (const campo of campos) {
            if (!campo.checkValidity()) {
                campo.reportValidity();
                return false;
            }
        }

        if (
            indice === PASO_RETOS &&
            !contenedor.querySelector('input[name="retos"]:checked')
        ) {
            setErrorLocal({ retos: "Elige al menos una opción." });
            return false;
        }
        return true;
    };

    const siguiente = () => {
        if (!validarPaso(paso)) return;
        setErrorLocal({});
        setDescartados((d) => [...d, ...PASOS[paso].campos]);
        setDireccion("adelante");
        setPaso((p) => Math.min(p + 1, TOTAL - 1));
    };

    const anterior = () => {
        setErrorLocal({});
        setDireccion("atras");
        setPaso((p) => Math.max(p - 1, 0));
    };

    // Enter en un campo avanza a la siguiente pregunta (no envía el formulario)
    const alTeclear = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key !== "Enter" || e.nativeEvent.isComposing) return;
        if ((e.target as HTMLElement).tagName === "INPUT") {
            e.preventDefault();
            if (paso < TOTAL - 1) siguiente();
        }
    };

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
                <Link className="btn sm f-volver" href="/">
                    Volver al inicio
                </Link>
            </div>
        );
    }

    return (
        <form
            ref={formRef}
            action={accion}
            noValidate
            className="cta-form form-pasos"
            data-dir={direccion}
            onKeyDown={alTeclear}
        >
            {/* Progreso */}
            <div className="prog">
                <p className="prog-texto" aria-live="polite">
                    Pregunta {paso + 1} de {TOTAL}
                </p>
                <div
                    className="prog-barra"
                    role="progressbar"
                    aria-label="Progreso del formulario"
                    aria-valuemin={1}
                    aria-valuemax={TOTAL}
                    aria-valuenow={paso + 1}
                >
                    <span style={{ width: `${((paso + 1) / TOTAL) * 100}%` }} />
                </div>
            </div>

            {estado.estado === "error" && estado.mensaje && (
                <p className="f-alerta" role="alert">
                    {estado.mensaje}
                </p>
            )}

            {/* 1. Nombre */}
            <Paso indice={0} activo={paso === 0}>
                <div className="f-field">
                    <label htmlFor="f-nombre">¿Cómo te llamas?</label>
                    <input
                        id="f-nombre"
                        name="nombre"
                        className="f-input"
                        type="text"
                        autoComplete="name"
                        maxLength={LIMITES.nombre}
                        required
                        defaultValue={v?.nombre}
                        aria-invalid={!!errorDe("nombre")}
                        aria-describedby={errorDe("nombre") ? "f-nombre-error" : undefined}
                    />
                    {errorDe("nombre") && (
                        <p className="f-error" id="f-nombre-error">
                            {errorDe("nombre")}
                        </p>
                    )}
                </div>
            </Paso>

            {/* 2. Medio y dato de contacto */}
            <Paso indice={1} activo={paso === 1}>
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

                <div className="f-field f-field-sig">
                    <label htmlFor="f-contacto">{cfg.etiqueta}</label>
                    <input
                        key={medio}
                        id="f-contacto"
                        name="contacto"
                        className="f-input"
                        type={cfg.type}
                        inputMode={cfg.inputMode}
                        autoComplete={cfg.autoComplete}
                        placeholder={cfg.placeholder}
                        maxLength={LIMITES.contacto}
                        required
                        defaultValue={v?.medio === medio ? v.contacto : ""}
                        aria-invalid={!!errorDe("contacto")}
                        aria-describedby={
                            errorDe("contacto") ? "f-contacto-error" : undefined
                        }
                    />
                    {errorDe("contacto") && (
                        <p className="f-error" id="f-contacto-error">
                            {errorDe("contacto")}
                        </p>
                    )}
                </div>
            </Paso>

            {/* 3. Proyecto o marca */}
            <Paso indice={2} activo={paso === 2}>
                <div className="f-field">
                    <label htmlFor="f-proyecto">¿Cómo se llama tu proyecto o marca?</label>
                    <input
                        id="f-proyecto"
                        name="proyecto"
                        className="f-input"
                        type="text"
                        autoComplete="organization"
                        maxLength={LIMITES.proyecto}
                        required
                        defaultValue={v?.proyecto}
                        aria-invalid={!!errorDe("proyecto")}
                        aria-describedby={
                            errorDe("proyecto") ? "f-proyecto-error" : undefined
                        }
                    />
                    {errorDe("proyecto") && (
                        <p className="f-error" id="f-proyecto-error">
                            {errorDe("proyecto")}
                        </p>
                    )}
                </div>
            </Paso>

            {/* 4. Dónde ver lo que hace hoy */}
            <Paso indice={3} activo={paso === 3}>
                <div className="f-field">
                    <label htmlFor="f-enlace">
                        ¿Dónde podemos stalkear un poco lo que haces actualmente?
                    </label>
                    <p className="f-hint">
                        Instagram, sitio web, Facebook… lo que tengas. Si aún no tienes
                        nada, déjalo vacío.
                    </p>
                    <input
                        id="f-enlace"
                        name="enlace"
                        className="f-input"
                        type="text"
                        autoComplete="off"
                        maxLength={LIMITES.enlace}
                        defaultValue={v?.enlace}
                    />
                </div>
            </Paso>

            {/* 5. Reto o necesidad */}
            <Paso indice={4} activo={paso === 4}>
                <fieldset className="f-group">
                    <legend>¿Qué reto o necesidad quieres resolver con nosotros hoy?</legend>
                    <div
                        className="f-chips"
                        aria-describedby={errorDe("retos") ? "f-retos-error" : undefined}
                    >
                        {RETOS.map((r) => (
                            <label key={r} className="f-chip">
                                <input
                                    type="checkbox"
                                    name="retos"
                                    value={r}
                                    defaultChecked={v?.retos.includes(r)}
                                    onChange={() => setErrorLocal({})}
                                />
                                <span>{r}</span>
                            </label>
                        ))}
                    </div>
                    {errorDe("retos") && (
                        <p className="f-error" id="f-retos-error">
                            {errorDe("retos")}
                        </p>
                    )}
                </fieldset>
            </Paso>

            {/* 6. Más sobre el proyecto */}
            <Paso indice={5} activo={paso === 5}>
                <div className="f-field">
                    <label htmlFor="f-detalles">
                        Platícanos un poco más sobre el proyecto
                    </label>
                    <textarea
                        id="f-detalles"
                        name="detalles"
                        className="f-input"
                        rows={5}
                        maxLength={LIMITES.detalles}
                        defaultValue={v?.detalles}
                    />
                </div>
            </Paso>

            {/* Trampa para bots: las personas no ven ni llenan este campo */}
            <div className="f-trampa" aria-hidden="true">
                <label>
                    No llenes este campo
                    <input type="text" name="sitio_web" tabIndex={-1} autoComplete="off" />
                </label>
            </div>

            {/* Navegación (las llaves distintas hacen que "Siguiente" y "Enviar" sean
          botones separados, así un clic en "Siguiente" nunca envía el formulario) */}
            <div className="paso-nav">
                {paso > 0 && (
                    <button key="anterior" type="button" className="btn alt" onClick={anterior}>
                        ← Anterior
                    </button>
                )}
                {paso < TOTAL - 1 ? (
                    <button key="siguiente" type="button" className="btn" onClick={siguiente}>
                        Siguiente →
                    </button>
                ) : (
                    <button key="enviar" type="submit" className="btn" disabled={enviando}>
                        {enviando ? "Enviando…" : "Enviar mensaje"}
                    </button>
                )}
            </div>

            {paso === TOTAL - 1 && (
                /* Cuando tengas la página de aviso de privacidad, enlázala aquí */
                <p className="f-nota">Usamos estos datos solo para responder tu mensaje.</p>
            )}
        </form>
    );
}