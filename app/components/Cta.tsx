import Link from "next/link";
import Clover from "./Clover";

export default function Cta() {
    return (
        <section className="cta" id="contacto">
            <h2>Cuéntanos tu idea y te decimos por dónde empezar.</h2>
            <p>
                Sin compromiso y sin letra chiquita.{" "}
                <span className="hl">De 2 a 22 horas hábiles</span> contestamos tu
                mensaje.
            </p>

            <Link className="btn cta-comenzar" href="/contacto">
                <Clover className="ni" size={24} />
                Comenzar <span className="flecha" aria-hidden="true">→</span>
            </Link>

            <p className="cta-alt">
                ¿Prefieres escribirnos directo?{" "}
                <a href="mailto:info@studio222oficial.com">info@studio222oficial.com</a>
            </p>
        </section>
    );
}