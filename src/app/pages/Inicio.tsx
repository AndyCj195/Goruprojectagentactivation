import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import { ButtonGoru } from "../components/ButtonGoru";
import { MapPin, Settings, Headphones, Link2, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: MapPin,
    title: "Desarrollo Nacional",
    description:
      "Software hecho en Ecuador para el mercado local. Entendemos tus necesidades reales.",
  },
  {
    icon: Settings,
    title: "Personalización Total",
    description:
      "Adaptamos Goru a las necesidades específicas de tu empresa.",
  },
  {
    icon: Headphones,
    title: "Soporte Local",
    description:
      "Equipo en Ecuador, respuesta inmediata y training presencial.",
  },
  {
    icon: Link2,
    title: "Integración Completa",
    description:
      "Todos los módulos se comunican entre sí. Datos unificados.",
  },
  {
    icon: TrendingUp,
    title: "Escalable",
    description:
      "Desde PYMES hasta empresas grandes. Crece con tu negocio.",
  },
];

export function Inicio() {
  const [revealHero, setRevealHero] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealHero(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-8 py-24 min-h-[90vh]"
        style={{
          background:
            "linear-gradient(180deg, rgba(5, 3, 2, 1) 0%, rgba(13, 13, 13, 0.95) 100%)",
        }}
      >
        <div className="max-w-[1280px] mx-auto pt-16">
          <h1
            className={`
              text-5xl md:text-6xl lg:text-7xl font-bold mb-6
              transition-all duration-[800ms]
              ${revealHero ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"}
            `}
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-1px",
              transitionTimingFunction: "var(--ease-smooth)",
              transitionDelay: "0.2s",
            }}
          >
            Gestiona tu empresa desde
            <br />
            un solo lugar
          </h1>

          <p
            className={`
              text-lg md:text-xl text-[var(--text-muted)] mb-8 max-w-[680px] mx-auto
              transition-all duration-[800ms]
              ${revealHero ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"}
            `}
            style={{
              fontFamily: "var(--font-body)",
              lineHeight: "1.7",
              transitionTimingFunction: "var(--ease-smooth)",
              transitionDelay: "0.4s",
            }}
          >
            Software de gestión empresarial personalizable,
            desarrollado en Ecuador para empresas que crecen.
          </p>

          <div
            className={`
              flex flex-col sm:flex-row items-center justify-center gap-4 mb-12
              transition-all duration-[800ms]
              ${revealHero ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"}
            `}
            style={{
              transitionTimingFunction: "var(--ease-smooth)",
              transitionDelay: "0.6s",
            }}
          >
            <Link to="/contacto">
              <ButtonGoru variant="primary">Solicitar demo</ButtonGoru>
            </Link>
            <Link to="/servicios">
              <ButtonGoru variant="secondary">Ver servicios</ButtonGoru>
            </Link>
          </div>

          {/* Dashboard mockup */}
          <div
            className={`
              max-w-[800px] mx-auto bg-[var(--bg-panel)] p-8 border border-[var(--border-default)]
              transition-all duration-[800ms]
              ${revealHero ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"}
            `}
            style={{
              boxShadow: "var(--shadow-card)",
              transitionTimingFunction: "var(--ease-smooth)",
              transitionDelay: "0.8s",
              minHeight: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <p
              className="text-[var(--text-muted)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              [Mockup del Dashboard Goru]
            </p>
          </div>
        </div>

        <ChevronDown
          size={24}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[var(--accent-primary)]"
          style={{ animation: "bounce 2s ease-in-out infinite" }}
        />
      </section>

      {/* ¿POR QUÉ GORU? */}
      <section className="py-24 px-8 bg-[var(--bg-deep)]">
        <div className="max-w-[1120px] mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ¿Por qué elegir Goru?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-[var(--bg-panel)] p-8"
                style={{
                  fontFamily: "var(--font-body)",
                  borderRadius: "20px",
                  opacity: 0,
                  animation: "fadeReveal 0.6s var(--ease-smooth) forwards",
                  animationDelay: `${0.1 * (i + 1)}s`,
                }}
              >
                <feature.icon
                  size={32}
                  className="text-[var(--accent-primary)] mb-4"
                />
                <h3
                  className="text-xl font-semibold mb-3 text-[var(--text-primary)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-base text-[var(--text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
