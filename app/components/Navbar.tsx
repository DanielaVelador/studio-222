"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Clover from "./Clover";
import { useTheme } from "./ThemeProvider";

const enlaces = [
  { etiqueta: "Servicios", href: "/#servicios" },
  { etiqueta: "Portafolio", href: "/#proyectos" },
  { etiqueta: "Preguntas frecuentes", href: "/#faq" },
  { etiqueta: "Contacto", href: "/#contacto" },
];

// Secciones que se observan para resaltar el enlace activo
const SECCIONES = ["inicio", "servicios", "proyectos", "faq", "contacto"];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState("");
  const { theme, toggleTheme } = useTheme();

  // Resalta el enlace de la sección que está a media pantalla
  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setActivo(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECCIONES.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observador.observe(el);
    });
    return () => observador.disconnect();
  }, []);

  // Cierra el menú móvil con Escape
  useEffect(() => {
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierto]);

  const irA = (id: string) => {
    setActivo(id);
    setAbierto(false);
  };

  return (
    <header className="nav">
      <div className="wrap nav-row">
        <a className="brand" href="/#inicio" onClick={() => irA("inicio")}>
          <Image
            src="/logostudio222.ico"
            alt=""
            width={40}
            height={40}
            priority
          />
          Studio 222
        </a>

        <div className={`menu${abierto ? " open" : ""}`} id="menu">
          <ul>
            {enlaces.map(({ etiqueta, href }) => {
              const id = href.split("#")[1];
              const esActivo = activo === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={esActivo ? "on" : undefined}
                    aria-current={esActivo ? "location" : undefined}
                    onClick={() => irA(id)}
                  >
                    {etiqueta}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* Botón dentro del panel (solo en móvil) */}
          <a
            className="btn sm menu-cta"
            href="/#contacto"
            onClick={() => irA("contacto")}
          >
            <Clover className="ni" size={18} />
            Hablemos
          </a>
        </div>

        <div className="nav-end">
          <button
            type="button"
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Cambiar a tema claro"
                : "Cambiar a tema oscuro"
            }
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Botón en la barra (solo en escritorio) */}
          <a
            className="btn sm nav-cta"
            href="/#contacto"
            onClick={() => irA("contacto")}
          >
            <Clover className="ni" size={18} />
            Hablemos
          </a>

          <button
            type="button"
            className="burger"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            aria-controls="menu"
            onClick={() => setAbierto((a) => !a)}
          >
            {abierto ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}