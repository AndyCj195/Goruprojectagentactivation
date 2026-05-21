import { Eye, Target } from "lucide-react";

export function Nosotros() {
  return (
    <>
      {/* VISIÓN Y MISIÓN */}
      <section className="py-24 px-8 bg-[var(--bg-deep)] min-h-screen pt-32">
        <div className="max-w-[1120px] mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)] mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Quiénes somos
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              El ecosistema que impulsa
              <br />
              a las empresas ecuatorianas
            </h1>
            <p
              className="text-lg text-[var(--text-muted)] max-w-[640px] mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Goru nació con la convicción de que las empresas ecuatorianas merecen
              software de clase mundial, construido para su realidad.
            </p>
          </div>

          {/* Visión y Misión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* Misión */}
            <div
              className="relative bg-[var(--bg-panel)] border border-[var(--border-default)] p-10 overflow-hidden"
              style={{
                borderRadius: "24px",
                opacity: 0,
                animation: "fadeReveal 0.6s var(--ease-smooth) forwards",
                animationDelay: "0.15s",
              }}
            >
              <div
                className="absolute top-0 left-8 right-8 h-[2px]"
                style={{
                  background: "linear-gradient(90deg, #C9A84C, transparent)",
                  borderRadius: "0 0 2px 2px",
                }}
              />
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6"
                style={{ background: "rgba(201, 168, 76, 0.12)" }}
              >
                <Target size={24} className="text-[var(--accent-primary)]" />
              </div>
              <h2
                className="text-2xl font-bold text-[var(--text-primary)] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nuestra Misión
              </h2>
              <p
                className="text-base text-[var(--text-muted)] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Democratizar el acceso a tecnología de gestión empresarial de alto
                nivel para las empresas ecuatorianas. Desarrollamos software
                modular, accesible y personalizable que simplifica los procesos
                operativos, potencia la toma de decisiones y acompaña el
                crecimiento de cada negocio, desde la PYME hasta la corporación.
              </p>
            </div>

            {/* Visión */}
            <div
              className="relative bg-[var(--bg-panel)] border border-[var(--border-default)] p-10 overflow-hidden"
              style={{
                borderRadius: "24px",
                opacity: 0,
                animation: "fadeReveal 0.6s var(--ease-smooth) forwards",
                animationDelay: "0.3s",
              }}
            >
              <div
                className="absolute top-0 left-8 right-8 h-[2px]"
                style={{
                  background: "linear-gradient(90deg, #84CC16, transparent)",
                  borderRadius: "0 0 2px 2px",
                }}
              />
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6"
                style={{ background: "rgba(132, 204, 22, 0.12)" }}
              >
                <Eye size={24} style={{ color: "#84CC16" }} />
              </div>
              <h2
                className="text-2xl font-bold text-[var(--text-primary)] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nuestra Visión
              </h2>
              <p
                className="text-base text-[var(--text-muted)] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Ser el ecosistema de software empresarial de referencia en
                Latinoamérica, reconocido por su capacidad de adaptación,
                profundidad funcional e impacto real en la productividad de las
                organizaciones. Aspiramos a un futuro donde cada empresa en la
                región tenga las herramientas para competir con excelencia.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div
            className="text-center mb-12"
            style={{
              opacity: 0,
              animation: "fadeReveal 0.6s var(--ease-smooth) forwards",
              animationDelay: "0.45s",
            }}
          >
            <h2
              className="text-3xl font-bold text-[var(--text-primary)] mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Lo que nos define
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Innovación", value: "Tecnología de vanguardia aplicada al contexto local" },
                { label: "Transparencia", value: "Procesos claros, precios justos y comunicación directa" },
                { label: "Compromiso", value: "Acompañamos a nuestros clientes en cada etapa" },
                { label: "Excelencia", value: "Estándares internacionales con sensibilidad ecuatoriana" },
              ].map((v) => (
                <div
                  key={v.label}
                  className="bg-[var(--bg-panel)] border border-[var(--border-default)] p-6"
                  style={{ borderRadius: "16px" }}
                >
                  <p
                    className="text-sm font-semibold text-[var(--accent-primary)] mb-2 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {v.label}
                  </p>
                  <p
                    className="text-sm text-[var(--text-muted)] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {v.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
