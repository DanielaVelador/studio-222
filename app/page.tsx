import Hero from "./components/Hero";
import Servicios from "./components/Servicios";

export default function Home() {
  return (
    <main className="wrap flex-1">
      <Hero />

      {/* Servicios */}
      <section className="sec" id="servicios">
        <h2>
          Soluciones para <span className="hl">hacer crecer tu negocio</span>
        </h2>
        <p className="lead">
          Elige lo que quieres lograr y te mostramos qué podemos hacer por ti.
        </p>
        <Servicios />
      </section>

      {/* Extras a la carta — siguiente paso: <Extras /> */}

      {/* Proyectos (el id coincide con el enlace actual del Navbar) */}
      <section className="sec" id="proyectos">
        <h2>
          Proyectos que{" "}
          <span className="hl">convierten ideas en soluciones</span>
        </h2>
        <p className="lead">Algunos de los proyectos en los que hemos trabajado.</p>
        {/* Siguiente paso: <Portafolio /> */}
      </section>

      {/* Preguntas frecuentes */}
      <section className="sec" id="faq">
        <h2>Preguntas frecuentes</h2>
        <p className="lead">Lo que más nos preguntan antes de empezar.</p>
        {/* Siguiente paso: <Faq /> */}
      </section>

      {/* Contacto */}
      <section className="sec" id="contacto">
        <h2>Cuéntanos tu idea y te decimos por dónde empezar.</h2>
        <p className="lead">
          Sin compromiso y sin letra chiquita.{" "}
          <span className="hl">De 2 a 22 horas hábiles</span> contestamos tu
          mensaje.
        </p>
        {/* Siguiente paso: <Cta /> con el botón de contacto */}
      </section>
    </main>
  );
}