import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
    title: "Cuéntanos tu idea – Studio 222",
    description:
        "Responde unas preguntas rápidas y te decimos por dónde empezar. Contestamos de 2 a 22 horas hábiles.",
};

export default function PaginaContacto() {
    return (
        <main className="wrap flex-1 pagina-form">
            <section className="cta">
                <div className="cta-top">
                    <Link className="volver" href="/">
                        ← Volver al inicio
                    </Link>
                </div>

                <h1>Cuéntanos tu idea y te decimos por dónde empezar.</h1>
                <p>
                    Responde unas preguntas rápidas, una a la vez.{" "}
                    <span className="hl">De 2 a 22 horas hábiles</span> contestamos tu
                    mensaje.
                </p>

                <ContactForm />
            </section>
        </main>
    );
}