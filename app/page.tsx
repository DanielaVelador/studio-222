import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Extras from "./components/Extras";
import Portafolio from "./components/Portafolio";
import Faq from "./components/Faq";
import Cta from "./components/Cta";

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

      {/* Extras a la carta */}
      <section className="sec" id="extras">
        <h2>
          <span className="hl">Extras a la carta</span>
        </h2>
        <p className="lead">
          Piezas sueltas para cuando necesitas algo puntual. Toca una carta
          para ver de qué trata.
        </p>
        <Extras />
      </section>

      {/* Proyectos (el id coincide con el enlace actual del Navbar) */}
      <section className="sec" id="proyectos">
        <h2>
          Proyectos que{" "}
          <span className="hl">convierten ideas en soluciones</span>
        </h2>
        <p className="lead">Algunos de los proyectos en los que hemos trabajado.</p>
        <Portafolio />
      </section>

      {/* Preguntas frecuentes */}
      <section className="sec" id="faq">
        <h2>Preguntas frecuentes</h2>
        <p className="lead">Lo que más nos preguntan antes de empezar.</p>
        <Faq />
      </section>

      {/* Contacto */}
      <Cta />
    </main>
  );
}