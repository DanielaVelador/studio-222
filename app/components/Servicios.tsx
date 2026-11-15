"use client";

import { useId, useState } from "react";
import Clover from "./Clover";
import { servicios, type Servicio } from "../data/contenido";

function TarjetaServicio({ titulo, descripcion, items }: Servicio) {
    const [abierta, setAbierta] = useState(false);
    const id = useId();

    return (
        <article className="card">
            <h3>
                <Clover />
                {titulo}
            </h3>
            <p>{descripcion}</p>
            <button
                type="button"
                className="btn alt sm"
                aria-expanded={abierta}
                aria-controls={id}
                onClick={() => setAbierta((a) => !a)}
            >
                {abierta ? "Ocultar servicios" : "Ver servicios"}
            </button>
            <ul className="chips" id={id} hidden={!abierta}>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    );
}

export default function Servicios() {
    return (
        <div className="grid-cards">
            {servicios.map((s) => (
                <TarjetaServicio key={s.titulo} {...s} />
            ))}
        </div>
    );
}