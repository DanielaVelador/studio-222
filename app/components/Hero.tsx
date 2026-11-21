import Stickers from "./Stickers";

export default function Hero() {
    return (
        <section className="hero" id="inicio">
            <h1>
                <span className="hl">Marketing &amp; Software</span> para crear
                soluciones digitales
            </h1>

            <div className="stage">
                <Stickers />
            </div>
            <p className="hint">Haz clic en una estampa para conocer al equipo.</p>

            <div className="ctas">
                <a className="btn" href="#servicios">
                    Conoce nuestros servicios
                </a>
                <a className="btn alt" href="#contacto">
                    Hablemos
                </a>
            </div>
        </section>
    );
}