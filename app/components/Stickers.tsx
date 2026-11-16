"use client";

import { useState } from "react";

function AvatarDaniela() {
    return (
        <svg
            viewBox="0 0 100 112"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
        >
            <defs>
                <pattern
                    id="daniela-plaid-3q"
                    width="9"
                    height="9"
                    patternUnits="userSpaceOnUse"
                >
                    <rect width="9" height="9" fill="#FFFFFF" />
                    <rect x="0" y="0" width="4.5" height="4.5" fill="#706B67" />
                    <rect x="4.5" y="4.5" width="4.5" height="4.5" fill="#706B67" />
                    <rect x="4.5" y="0" width="4.5" height="4.5" fill="#B6B2AD" />
                    <rect x="0" y="4.5" width="4.5" height="4.5" fill="#B6B2AD" />
                </pattern>
            </defs>

            {/* Cabello trasero largo con extremos completamente redondeados y suaves */}
            <path
                d="M 15 44 C 12 65, 11 86, 15 98 C 17 104, 24 105, 34 105 L 68 105 C 78 105, 84 103, 86 97 C 90 84, 90 63, 85 41 C 80 18, 66 9, 50 9 C 33 9, 19 20, 15 44 Z"
                fill="#761C3C"
            />

            {/* Hombros, mangas y torso (camisa blanca + chaleco de cuadros) */}
            <g>
                {/* Manga / hombro derecho (fondo, lado derecho del SVG) */}
                <path
                    d="M 65 89 C 72 93, 76 102, 78 112 L 66 112 Z"
                    fill="#FFFFFF"
                    stroke="#CFCFCF"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                />

                {/* Base de la camisa blanca */}
                <path
                    d="M 33 112 L 36 89 L 47 85 L 62 85 L 67 89 L 71 112 Z"
                    fill="#FFFFFF"
                    stroke="#D6D6D6"
                    strokeWidth="0.7"
                />

                {/* Chaleco de cuadros ajustado a la perspectiva 3/4 */}
                <path
                    d="M 38 88.5 L 44.5 87 L 55.5 103.5 L 63.5 87.5 L 68 89.5 C 70.5 96, 71.5 104, 72 112 L 33.5 112 C 34.5 104, 36 95, 38 88.5 Z"
                    fill="url(#daniela-plaid-3q)"
                    stroke="#3E3C3A"
                    strokeWidth="0.7"
                />

                {/* Ribete oscuro en V del escote del chaleco */}
                <path
                    d="M 43.8 87.2 L 55.5 103.8 L 64.2 87.5"
                    fill="none"
                    stroke="#2E2D2C"
                    strokeWidth="2.3"
                    strokeLinejoin="round"
                />

                {/* Ribete oscuro sisa izquierda (adelante) */}
                <path
                    d="M 38.5 88.5 C 40.5 96, 39 105, 34 112"
                    fill="none"
                    stroke="#2E2D2C"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                />

                {/* Ribete oscuro sisa derecha (atrás) */}
                <path
                    d="M 67.2 89.2 C 69.2 96, 70.2 104, 70.8 112"
                    fill="none"
                    stroke="#2E2D2C"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                />

                {/* Manga / hombro izquierdo (adelante, ligeramente flexionado hacia afuera) */}
                <path
                    d="M 38.5 88.5 C 27 93, 18 100, 15 112 L 33.5 112 C 38.5 105, 40 96, 38.5 88.5 Z"
                    fill="#FFFFFF"
                    stroke="#CFCFCF"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                />

                {/* Cuello de la camisa blanca (solapas y costura central) */}
                <line
                    x1="55.5"
                    y1="93.5"
                    x2="55.5"
                    y2="102.5"
                    stroke="#DCDCDC"
                    strokeWidth="0.9"
                />
                <polygon
                    points="44,87 47.5,84.5 55.5,93.5 50.5,97.5"
                    fill="#FFFFFF"
                    stroke="#CCCCCC"
                    strokeWidth="0.7"
                    strokeLinejoin="round"
                />
                <polygon
                    points="64,87 61,84.5 55.5,93.5 60.5,97"
                    fill="#FFFFFF"
                    stroke="#CCCCCC"
                    strokeWidth="0.7"
                    strokeLinejoin="round"
                />

                {/* Pin de trébol verde menta en el lado derecho del pecho */}
                <g transform="translate(65.5, 100.5) scale(1.25)">
                    <circle cx="-1.3" cy="-1.3" r="1.4" fill="#88A99B" />
                    <circle cx="1.3" cy="-1.3" r="1.4" fill="#88A99B" />
                    <circle cx="-1.3" cy="1.3" r="1.4" fill="#88A99B" />
                    <circle cx="1.3" cy="1.3" r="1.4" fill="#88A99B" />
                </g>
            </g>

            {/* Cuello sombreado integrado */}
            <path d="M 47.5 82 L 61.5 82 L 61.5 86 L 55.5 93.5 L 47.5 86 Z" fill="#B6825D" />

            {/* Cabeza y rostro girados 3/4 hacia la derecha */}
            <g>
                {/* Contorno facial */}
                <path
                    d="M 30 46 C 30 26, 43 18, 61 18 C 77 18, 86 30, 86 50 C 86 68, 75 83, 56 83 C 43 83, 35 80, 31 76 C 29 66, 29 55, 30 46 Z"
                    fill="#E1AC84"
                />

                {/* Cabello frontal con mechón lateral entre la oreja y la cara, y terminaciones redondeadas */}
                <path
                    d="M 64 20 C 75 26, 82 37, 83 55 C 84 70, 81 84, 76 96 C 74.5 99.5, 78 103, 82 102 C 85 101, 86.5 98, 87.5 94 C 91 80, 90.5 58, 86 39 C 81 18, 67 9, 50 9 C 29 9, 16 25, 14 51 C 12 68, 12 85, 15 97 C 16.5 102, 22 104, 28 103 C 33 102, 36.5 99, 35.5 94 C 32.5 81, 31.5 64, 32 51 C 32.5 36, 43 28, 64 20 Z"
                    fill="#761C3C"
                />

                {/* Oreja izquierda visible */}
                <path
                    d="M 29.5 50 C 21 46, 16 51, 16 59 C 16 67, 22 71, 29.5 67 Z"
                    fill="#E1AC84"
                />
                {/* Pliegue interno de la oreja */}
                <path
                    d="M 26.5 53.5 C 22 53, 21 58.5, 24 61 M 22.2 57.5 L 26.2 57"
                    fill="none"
                    stroke="#B57E58"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                {/* Arete argolla plateada */}
                <path
                    d="M 22.8 66.5 A 3 3.8 0 1 0 27.2 66.5"
                    fill="none"
                    stroke="#D4D7DD"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                />

                {/* Broche de flor crema */}
                <g transform="translate(39.5, 29.5) scale(1.45)">
                    <circle cx="0" cy="-2.4" r="1.9" fill="#FAF4DF" />
                    <circle cx="2.3" cy="-0.8" r="1.9" fill="#FAF4DF" />
                    <circle cx="1.4" cy="2" r="1.9" fill="#FAF4DF" />
                    <circle cx="-1.4" cy="2" r="1.9" fill="#FAF4DF" />
                    <circle cx="-2.3" cy="-0.8" r="1.9" fill="#FAF4DF" />
                    <circle cx="0" cy="0" r="1.3" fill="#761C3C" />
                </g>

                {/* Rubor ovalado en mejillas */}
                <ellipse cx="42" cy="63.5" rx="6.2" ry="3.1" fill="#CF8783" opacity="0.65" />
                <ellipse cx="81.5" cy="63.5" rx="4.2" ry="2.8" fill="#CF8783" opacity="0.65" />

                {/* Cejas expresivas */}
                <path
                    d="M 45.5 46 C 48.5 44, 53.5 44, 56.5 46"
                    fill="none"
                    stroke="#4A1A28"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
                <path
                    d="M 70.5 46 C 73.5 44, 78 44, 81 46"
                    fill="none"
                    stroke="#4A1A28"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />

                {/* Ojos con brillo blanco */}
                <g>
                    <circle cx="53" cy="53" r="3" fill="#46221E" />
                    <circle cx="54" cy="52" r="0.95" fill="#FFFFFF" />
                </g>
                <g>
                    <circle cx="76.5" cy="53" r="3" fill="#46221E" />
                    <circle cx="77.5" cy="52" r="0.95" fill="#FFFFFF" />
                </g>

                {/* Nariz pequeña */}
                <path
                    d="M 63 59.5 C 64.5 61, 67 61, 68 59.5"
                    fill="none"
                    stroke="#B57E58"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                />

                {/* Sonrisa curva */}
                <path
                    d="M 55.5 68.5 C 60 72, 67 72, 71.5 68.5"
                    fill="none"
                    stroke="#A84C52"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
}

function AvatarSayoongis() {
    return (
        <svg
            viewBox="0 0 100 112"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
        >
            {/* Cabello trasero: silueta tipo bob ancho en forma de campana */}
            <path
                d="M 12 58 C 11 22, 26 5, 47 5 C 69 5, 84 22, 85 58 C 86 78, 86 93, 81 97.5 C 78 100, 72 99, 66 98 L 24 98 C 18 99, 14 98, 12.5 92 C 11 84, 11.5 70, 12 58 Z"
                fill="#1D1E24"
            />

            {/* Torso, mangas y escote de encaje */}
            <g>
                {/* Base del torso y manga izquierda */}
                <path
                    d="M 22 112 L 27.5 93 C 29.5 87.5, 34 85, 39 84.5 L 52 84.5 C 57 85, 61 88, 62.5 94 L 65.5 112 Z"
                    fill="#15161B"
                />
                {/* Brazo izquierdo (borde inferior izquierdo) */}
                <path
                    d="M 21.5 112 L 26.5 94 C 28 89, 31 86.5, 34.5 85.5 L 32 112 Z"
                    fill="#1D1E24"
                />
                {/* Zona piel del pecho bajo el cuello */}
                <path
                    d="M 34.5 85.5 C 40 89, 49 89, 54.5 85.5 L 54.5 94 C 49 96, 46 98, 44.5 99.5 C 43 98, 40 96, 34.5 94 Z"
                    fill="#E1AC84"
                />
                {/* Encaje marrón/negro semitransparente */}
                <path
                    d="M 34.5 86 C 40 89.2, 49 89.2, 54.5 86 L 54.5 94 C 49 96, 46 98, 44.5 99.5 C 43 98, 40 96, 34.5 94 Z"
                    fill="#4A3931"
                    opacity="0.88"
                />
                {/* Detalle calado del encaje */}
                <path
                    d="M 35.5 88.5 Q 44.5 92 53.5 88.5 M 35.5 91.5 Q 44.5 95 53.5 91.5 M 38 94.5 Q 44.5 97 51 94.5"
                    fill="none"
                    stroke="#15161B"
                    strokeWidth="1.3"
                    strokeDasharray="1.8 1.3"
                    strokeLinecap="round"
                />
                {/* Tirantes / bordes del top negro */}
                <path
                    d="M 32.5 86 L 35.2 85.5 L 34.8 95.5 L 31.8 95 Z"
                    fill="#15161B"
                />
                <path
                    d="M 56.5 86 L 53.8 85.5 L 54.2 95.5 L 57.2 95 Z"
                    fill="#15161B"
                />
                {/* Tres botones blancos verticales */}
                <circle cx="42.2" cy="102.5" r="0.85" fill="#D8DCE6" />
                <circle cx="42.2" cy="106" r="0.85" fill="#D8DCE6" />
                <circle cx="42.2" cy="109.5" r="0.85" fill="#D8DCE6" />
            </g>

            {/* Brazo derecho flexionado (mano en la cintura) */}
            <path
                d="M 56.5 85.5 C 66 88, 75.5 95, 77.5 103 C 78.5 107, 78 110, 77 112 L 66.5 112 C 67.5 109, 67.5 106, 65.5 103.5 C 63 100.5, 59 98.5, 56.5 97 Z"
                fill="#1D1E24"
            />
            {/* Pequeño triángulo de piel de la mano/muñeca en la cintura */}
            <path
                d="M 62 112 L 64.2 108.5 L 66.5 112 Z"
                fill="#E1AC84"
            />

            {/* Cuello y sombra bajo la barbilla */}
            <path
                d="M 37.5 76 L 51.5 76 L 53 86.5 C 48 89.5, 41 89.5, 36 86.5 Z"
                fill="#E1AC84"
            />
            <path
                d="M 37.2 76 L 51.8 76 L 52.2 81.5 C 47.5 83.8, 41.5 83.8, 36.8 81.5 Z"
                fill="#BA825B"
            />

            {/* Rostro ancho y redondeado en vista 3/4 */}
            <path
                d="M 16.5 34 C 15.5 56, 20.5 78.5, 42.5 79 C 56 79.2, 64.5 72.5, 65.5 64 C 66.5 54, 65.5 42, 64.5 34 Z"
                fill="#E1AC84"
            />

            {/* Rubor en ambas mejillas */}
            <ellipse
                cx="20.2"
                cy="61.5"
                rx="3.4"
                ry="2.5"
                fill="#CF8783"
                opacity="0.65"
            />
            <ellipse
                cx="54.2"
                cy="61"
                rx="6.2"
                ry="3.3"
                fill="#CF8783"
                opacity="0.65"
            />

            {/* Flequillo recto con ligera curva y mechones laterales */}
            <path
                d="M 12 56 C 11 22, 26 5, 47 5 C 69 5, 84 22, 85 56 L 65.5 56 L 64 34.5 C 50 38.5, 31 38.5, 17.5 35 L 15.8 56 Z"
                fill="#1D1E24"
            />

            {/* Ojos marrón oscuro con brillo blanco */}
            <g>
                {/* Ojo izquierdo */}
                <circle cx="23.2" cy="51.2" r="2.5" fill="#46221E" />
                <circle cx="22.3" cy="50.3" r="0.75" fill="#FFFFFF" />
                {/* Ojo derecho */}
                <circle cx="46.2" cy="51.2" r="2.5" fill="#46221E" />
                <circle cx="45.3" cy="50.3" r="0.75" fill="#FFFFFF" />
            </g>

            {/* Nariz pequeña */}
            <path
                d="M 33.2 59.2 C 34.4 60.8, 36.2 60.8, 37.4 59.2"
                fill="none"
                stroke="#BA825B"
                strokeWidth="1.25"
                strokeLinecap="round"
            />

            {/* Sonrisa suave */}
            <path
                d="M 30.8 66.5 C 33.8 69.2, 38.2 69.2, 41.2 66.5"
                fill="none"
                stroke="#A84C52"
                strokeWidth="1.65"
                strokeLinecap="round"
            />

            {/* Lentes redondos grandes color lila */}
            <g fill="none" stroke="#C79CE8" strokeLinecap="round">
                {/* Aro izquierdo */}
                <circle cx="24.5" cy="51.2" r="11.2" strokeWidth="2.5" />
                {/* Aro derecho */}
                <circle cx="48.5" cy="51.2" r="11.2" strokeWidth="2.5" />
                {/* Puente */}
                <path d="M 35.7 50 Q 36.5 49.2 37.3 50" strokeWidth="2.4" />
                {/* Patilla izquierda corta */}
                <line x1="13.3" y1="49.2" x2="12.2" y2="48.8" strokeWidth="2.3" />
                {/* Patilla derecha larga hacia el cabello */}
                <line x1="59.7" y1="49.5" x2="66.8" y2="47.8" strokeWidth="2.4" />
            </g>

            {/* Trébol de cuatro hojas rojo oscuro (apoyado en el lente derecho como en la referencia) */}
            <g transform="translate(52.2, 57.2) rotate(12) scale(1.25)">
                <path
                    d="M -0.2 -0.2 C -0.4 -2.1, -2.5 -2.5, -2.7 -1.1 C -2.9 0.1, -1.5 0.3, -0.2 -0.2 Z"
                    fill="#A82433"
                />
                <path
                    d="M 0.2 -0.2 C 0.4 -2.1, 2.5 -2.5, 2.7 -1.1 C 2.9 0.1, 1.5 0.3, 0.2 -0.2 Z"
                    fill="#A82433"
                />
                <path
                    d="M -0.2 0.2 C -1.5 -0.3, -2.9 -0.1, -2.7 1.1 C -2.5 2.5, -0.4 2.1, -0.2 0.2 Z"
                    fill="#A82433"
                />
                <path
                    d="M 0.2 0.2 C 1.5 -0.3, 2.9 -0.1, 2.7 1.1 C 2.5 2.5, 0.4 2.1, 0.2 0.2 Z"
                    fill="#A82433"
                />
                <circle cx="0" cy="0" r="0.5" fill="#A82433" />
            </g>
        </svg>
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