import ContactForm from "./ContactForm";

export default function Cta() {
    return (
        <section className="cta" id="contacto">
            <h2>Cuéntanos tu idea y te decimos por dónde empezar.</h2>
            <p>
                Sin compromiso y sin letra chiquita.{" "}
                <span className="hl">De 2 a 22 horas hábiles</span> contestamos tu
                mensaje.
            </p>

            <ContactForm />

            <p className="cta-alt">
                ¿Prefieres escribirnos directo?{" "}
                <a href="mailto:info@studio222oficial.com">info@studio222oficial.com</a>
            </p>
        </section>
    );
}