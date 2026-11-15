import { preguntas } from "../data/contenido";

export default function Faq() {
    return (
        <div className="faq">
            {preguntas.map((q) => (
                <details key={q.pregunta}>
                    <summary>{q.pregunta}</summary>
                    <p>{q.respuesta}</p>
                </details>
            ))}
        </div>
    );
}