"use client";

import { useState } from "react";
import Clover from "./Clover";
import { extras, type Extra } from "../data/contenido";

function CartaExtra({ titulo, descripcion, color }: Extra) {
    const [volteada, setVolteada] = useState(false);

    return (
        <button
            type="button"
            className={`pk${volteada ? " on" : ""}`}
            aria-pressed={volteada}
            aria-label={`${titulo}. Toca para ver la descripción`}
            style={{ "--cc": color } as React.CSSProperties}
            onClick={() => setVolteada((v) => !v)}
        >
            <span className="fl">
                <span className="cf">
                    <Clover className="cr tl" />
                    <Clover className="big" />
                    <b>{titulo}</b>
                    <Clover className="cr br" />
                </span>
                <span className="cf bk">
                    <Clover className="big" />
                    <span className="dsc">{descripcion}</span>
                </span>
            </span>
        </button>
    );
}

export default function Extras() {
    return (
        <div className="pks">
            {extras.map((e) => (
                <CartaExtra key={e.titulo} {...e} />
            ))}
        </div>
    );
}