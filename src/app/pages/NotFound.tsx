import { Link } from "react-router";
import { ButtonGoru } from "../components/ButtonGoru";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-8">
      <p
        className="text-7xl font-bold text-[var(--accent-primary)] mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        404
      </p>
      <h1
        className="text-3xl font-bold text-[var(--text-primary)] mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Página no encontrada
      </h1>
      <p
        className="text-[var(--text-muted)] mb-8 max-w-[400px]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        La página que buscas no existe o fue movida.
      </p>
      <Link to="/">
        <ButtonGoru variant="primary">Ir al inicio</ButtonGoru>
      </Link>
    </div>
  );
}
