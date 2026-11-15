"use client";

import { useState } from "react";

function AvatarDaniela() {
    return (
        <svg viewBox="0 0 100 112" aria-hidden="true"><defs><g id="e1"><path d="M34 44c3-2.2 7-2.4 11-1.2" stroke="#9E2F17" strokeWidth="1.6" fill="none" strokeLinecap="round" /><ellipse cx="41" cy="54" rx="6.6" ry="8" fill="#fff" /><ellipse cx="41.3" cy="55" rx="5.2" ry="7" fill="#2FAE7A" /><ellipse cx="41.3" cy="56" rx="2.7" ry="4" fill="#1C1020" /><circle cx="39.2" cy="51.5" r="2" fill="#fff" /><circle cx="43.2" cy="59" r=".9" fill="#fff" /><path d="M33.8 52c2-5.6 11-6.4 14.4-.4" stroke="#2A1230" strokeWidth="2.4" fill="none" strokeLinecap="round" /><path d="M34 52l-2.4-1.6" stroke="#2A1230" strokeWidth="2" strokeLinecap="round" /></g></defs><path d="M12 112c2-20 18-28 38-28s36 8 38 28z" fill="#1E9E5A" /><path d="M40 85l10 12 10-12z" fill="#CFF5E0" /><path d="M43 70h14v15c-3 4-11 4-14 0z" fill="#EFC3A2" /><path d="M20 60C12 26 30 6 50 6s38 20 30 54c-1 14-4 24-10 30-4-10-4-18-4-26H34c0 8 0 16-4 26-6-6-9-16-10-30z" fill="#C93A1E" /><path d="M27 46C27 30 37 24 50 24s23 6 23 22c0 14-8 28-23 30C35 74 27 60 27 46z" fill="#F7D3B8" /><path d="M26 48C22 26 34 12 50 12s28 14 24 36c-3-8-6-14-10-18-2 6-8 12-16 14 2-4 2-8 0-12-4 8-10 14-22 16z" fill="#E04A25" /><path d="M36 19c8-5 20-5 28 0" stroke="#FF9A6E" strokeWidth="2.4" fill="none" strokeLinecap="round" /><use href="#e1" /><use href="#e1" transform="translate(100 0) scale(-1 1)" /><path d="M50 63l-1 2" stroke="#D9A07F" strokeWidth="1.2" strokeLinecap="round" /><path d="M46 69q4 3.4 8 0" stroke="#B5473F" strokeWidth="1.7" fill="none" strokeLinecap="round" /><ellipse cx="34" cy="64" rx="4" ry="2" fill="#FF8FA3" opacity=".5" /><ellipse cx="66" cy="64" rx="4" ry="2" fill="#FF8FA3" opacity=".5" /><path d="M88 20l1.6 4.4 4.4 1.6-4.4 1.6L88 32l-1.6-4.4L82 26l4.4-1.6z" fill="#fff" /></svg>
    );
}

function AvatarSayoongis() {
    return (
        <svg viewBox="0 0 100 112" aria-hidden="true"><defs><g id="e2"><ellipse cx="41" cy="54" rx="6.4" ry="7.6" fill="#fff" /><ellipse cx="41.3" cy="55" rx="5" ry="6.6" fill="#8A3FD6" /><ellipse cx="41.3" cy="56" rx="2.6" ry="3.8" fill="#1C1020" /><circle cx="39.2" cy="51.8" r="1.9" fill="#fff" /><circle cx="43.2" cy="58.8" r=".9" fill="#fff" /><path d="M34.2 52c2-5 10.4-5.8 13.6-.4" stroke="#1C1020" strokeWidth="2.4" fill="none" strokeLinecap="round" /><circle cx="41" cy="54" r="9" fill="#fff" fillOpacity=".14" stroke="#1C1020" strokeWidth="1.8" /><path d="M34.5 50a8 8 0 0 1 4-3.2" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity=".8" /></g></defs><path d="M12 112c2-20 18-28 38-28s36 8 38 28z" fill="#4A1D4F" /><path d="M40 85l10 12 10-12z" fill="#C305D3" /><path d="M43 70h14v15c-3 4-11 4-14 0z" fill="#EFC3A2" /><path d="M18 64C10 28 30 6 50 6s40 22 32 58c-1 12-4 20-12 24-6-6-4-16-4-24H34c0 8 2 18-4 24-8-4-11-12-12-24z" fill="#1C1020" /><path d="M27 46C27 30 37 24 50 24s23 6 23 22c0 14-8 28-23 30C35 74 27 60 27 46z" fill="#F7D3B8" /><path d="M25 50C21 24 34 11 50 11s29 13 25 39c-2-6-4-10-7-13-6 3-12 4-18 4s-12-1-18-4c-3 3-5 7-7 13z" fill="#2A1830" /><path d="M36 18c8-5 20-5 28 0" stroke="#7B5C8C" strokeWidth="2.4" fill="none" strokeLinecap="round" /><use href="#e2" /><use href="#e2" transform="translate(100 0) scale(-1 1)" /><path d="M50 63l-1 2" stroke="#D9A07F" strokeWidth="1.2" strokeLinecap="round" /><path d="M47 69q3 2.6 6 0" stroke="#B5473F" strokeWidth="1.7" fill="none" strokeLinecap="round" /><ellipse cx="34" cy="65" rx="4" ry="2" fill="#FF8FA3" opacity=".5" /><ellipse cx="66" cy="65" rx="4" ry="2" fill="#FF8FA3" opacity=".5" /><path d="M12 22l1.6 4.4 4.4 1.6-4.4 1.6L12 34l-1.6-4.4L6 28l4.4-1.6z" fill="#fff" /></svg>
    );
}

type StickerProps = {
    numero: string;
    etiqueta: string;
    clase: string;
    frente: string;
    reverso: string;
    usuario: string;
    avatar: React.ReactNode;
};

function Sticker({ numero, etiqueta, clase, frente, reverso, usuario, avatar }: StickerProps) {
    const [volteada, setVolteada] = useState(false);

    return (
        <button
            type="button"
            className={`stk ${clase}${volteada ? " on" : ""}`}
            aria-pressed={volteada}
            aria-label={etiqueta}
            onClick={() => setVolteada((v) => !v)}
        >
            <span className="flip">
                <span className={`face ${frente}`}>
                    <b className="num">{numero}</b>
                </span>
                <span className={`face back ${reverso}`}>
                    {avatar}
                    <span className="who">{usuario}</span>
                </span>
            </span>
        </button>
    );
}

export default function Stickers() {
    return (
        <div className="stickers">
            <Sticker
                numero="2"
                etiqueta="Estampa número 2. Haz clic para ver al equipo"
                clase="s1"
                frente="f1"
                reverso="b1"
                usuario="@daniela.velador"
                avatar={<AvatarDaniela />}
            />
            <Sticker
                numero="22"
                etiqueta="Estampa número 22. Haz clic para ver al equipo"
                clase="s2"
                frente="f2"
                reverso="b2"
                usuario="@sayoongis"
                avatar={<AvatarSayoongis />}
            />
        </div>
    );
}