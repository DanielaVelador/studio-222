import Clover from "./Clover";
import { proyectos } from "../data/contenido";

export default function Portafolio() {
    return (
        <div className="grid-cards">
            {proyectos.map((p) => (
                <article className="card pf" key={p.nombre}>
                    <div className="art" style={{ background: p.fondo, color: p.texto }}>
                        <Clover />
                    </div>
                    <div className="body">
                        <span className="tag">{p.tipo}</span>
                        <h3>{p.nombre}</h3>
                        <p>{p.descripcion}</p>
                    </div>
                </article>
            ))}
        </div>
    );
}