import { ButtonGoru } from "../components/ButtonGoru";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contacto() {
  return (
    <section className="py-24 px-8 bg-[var(--bg-deep)] min-h-screen pt-32">
      <div className="max-w-[1120px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)] mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Hablemos
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contáctanos
          </h1>
          <p
            className="text-lg text-[var(--text-muted)] max-w-[560px] mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Cuéntanos sobre tu empresa y te asesoramos en los módulos que mejor se ajustan a tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Info lateral */}
          <div
            className="lg:col-span-2 flex flex-col gap-6"
            style={{
              opacity: 0,
              animation: "fadeReveal 0.6s var(--ease-smooth) forwards",
              animationDelay: "0.1s",
            }}
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "contacto@goru.ec",
              },
              {
                icon: Phone,
                label: "Teléfono",
                value: "+593 99 999 9999",
              },
              {
                icon: MapPin,
                label: "Ubicación",
                value: "Ecuador",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-[var(--bg-panel)] border border-[var(--border-default)] p-6"
                style={{ borderRadius: "16px" }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl"
                  style={{ background: "rgba(201, 168, 76, 0.12)" }}
                >
                  <item.icon size={18} className="text-[var(--accent-primary)]" />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-base text-[var(--text-primary)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Tiempo de respuesta */}
            <div
              className="bg-[var(--bg-panel)] border border-[var(--border-default)] p-6"
              style={{
                borderRadius: "16px",
                borderColor: "rgba(201, 168, 76, 0.3)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full mb-3"
                style={{
                  background: "#C9A84C",
                  boxShadow: "0 0 8px rgba(201, 168, 76, 0.6)",
                }}
              />
              <p
                className="text-sm font-semibold text-[var(--text-primary)] mb-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Respuesta en menos de 24 horas
              </p>
              <p
                className="text-sm text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Nuestro equipo está disponible de lunes a viernes, 8h00–18h00.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div
            className="lg:col-span-3 bg-[var(--bg-panel)] border border-[var(--border-default)] p-10"
            style={{
              borderRadius: "24px",
              opacity: 0,
              animation: "fadeReveal 0.6s var(--ease-smooth) forwards",
              animationDelay: "0.2s",
            }}
          >
            <div
              className="absolute top-0 left-8 right-8 h-[2px] hidden"
              style={{
                background: "linear-gradient(90deg, #C9A84C, transparent)",
              }}
            />
            <h2
              className="text-2xl font-bold text-[var(--text-primary)] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Solicita una demo personalizada
            </h2>
            <p
              className="text-sm text-[var(--text-muted)] mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Completa el formulario y nos ponemos en contacto contigo.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre de la empresa"
                className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                style={{ fontFamily: "var(--font-body)", borderRadius: "12px" }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                  style={{ fontFamily: "var(--font-body)", borderRadius: "12px" }}
                />
                <input
                  type="email"
                  placeholder="Email corporativo"
                  className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                  style={{ fontFamily: "var(--font-body)", borderRadius: "12px" }}
                />
              </div>
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                style={{ fontFamily: "var(--font-body)", borderRadius: "12px" }}
              />
              <textarea
                rows={4}
                placeholder="¿En qué módulos estás interesado? Cuéntanos brevemente sobre tu empresa."
                className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors resize-none"
                style={{ fontFamily: "var(--font-body)", borderRadius: "12px" }}
              />
              <div className="pt-2">
                <ButtonGoru variant="primary" fullWidth>
                  Enviar solicitud
                </ButtonGoru>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
