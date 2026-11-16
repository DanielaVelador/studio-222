"use client";

import { useEffect } from "react";

const COLORES = ["#70F1AC", "#CFF5E0", "#D9B8F0", "#C305D3", "#4A1D4F"];
const INTERVALO_MS = 50; // un trébol cada 50 ms como máximo
const DURACION_MS = 1000; // debe coincidir con la animación en globals.css

// Deja una estela de tréboles que sigue al cursor.
export default function CloverTrail() {
    useEffect(() => {
        const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
        const temporizadores = new Set<number>();
        let ultimo = 0;

        const onMove = (e: PointerEvent) => {
            if (sinMovimiento.matches || e.pointerType === "touch") return;

            const ahora = performance.now();
            if (ahora - ultimo < INTERVALO_MS) return;
            ultimo = ahora;

            const trebol = document.createElement("div");
            trebol.className = "clv";
            trebol.setAttribute("aria-hidden", "true");
            trebol.style.left = `${e.clientX}px`;
            trebol.style.top = `${e.clientY}px`;
            trebol.style.color = COLORES[Math.floor(Math.random() * COLORES.length)];

            const ns = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(ns, "svg");
            svg.setAttribute("width", "36");
            svg.setAttribute("height", "36");
            const uso = document.createElementNS(ns, "use");
            uso.setAttribute("href", "#clover");
            svg.appendChild(uso);
            trebol.appendChild(svg);
            document.body.appendChild(trebol);

            const id = window.setTimeout(() => {
                trebol.remove();
                temporizadores.delete(id);
            }, DURACION_MS);
            temporizadores.add(id);
        };

        window.addEventListener("pointermove", onMove);

        return () => {
            window.removeEventListener("pointermove", onMove);
            temporizadores.forEach((id) => window.clearTimeout(id));
            document.querySelectorAll(".clv").forEach((el) => el.remove());
        };
    }, []);

    return null;
}