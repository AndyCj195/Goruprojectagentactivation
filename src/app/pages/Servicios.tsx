import { useState, useEffect } from "react";
import { X } from "lucide-react";

const SUBMODULES = [
  {
    name: "Recursos Humanos",
    color: "#EC4899",
    description: "Gestión de nómina, asistencia, vacaciones y reportes completos de tu equipo.",
  },
  {
    name: "Punto de Venta",
    color: "#EF4444",
    description: "Sistema POS completo con ventas rápidas e inventario en tiempo real.",
  },
  {
    name: "Control de Acceso",
    color: "#A855F7",
    description: "Gestión de permisos, roles y niveles de seguridad para cada usuario.",
  },
  {
    name: "Bancos",
    color: "#3B82F6",
    description: "Conciliación bancaria automática y control de cuentas múltiples.",
  },
  {
    name: "Facturación Electrónica",
    color: "#7C3AED",
    description: "Emisión de comprobantes electrónicos cumpliendo normativas del SRI.",
  },
  {
    name: "CRM",
    color: "#06B6D4",
    description: "Gestión de relaciones con clientes, seguimiento de ventas y oportunidades.",
  },
  {
    name: "Pago de Proveedores",
    color: "#9333EA",
    description: "Gestión de cuentas por pagar, calendario de pagos e historial completo.",
  },
  {
    name: "Profesionales Independientes",
    color: "#F59E0B",
    description: "Herramientas para freelancers y consultores: proyectos, tiempos y facturación.",
  },
  {
    name: "Tickets",
    color: "#6B7280",
    description: "Sistema de soporte interno para gestionar incidencias y solicitudes.",
  },
  {
    name: "Contabilidad",
    color: "#10B981",
    description: "Contabilidad automatizada: balance general, libro diario y estados financieros.",
  },
  {
    name: "Gestión de Citas",
    color: "#F472B6",
    description: "Agendamiento inteligente de citas, reservas y gestión de calendarios.",
  },
];

const MAIN_MODULES = [
  {
    id: "empresarial",
    name: "Gestión Empresarial",
    description:
      "El núcleo de tu empresa. Integra y unifica todos los submódulos especializados en una sola plataforma centralizada para un control total.",
    color: "#C9A84C",
    colorRgb: "201, 168, 76",
    submodules: SUBMODULES,
  },
  {
    id: "portafolio",
    name: "Gestión de Portafolio y Proyectos",
    description:
      "Administra proyectos, portafolios y recursos de manera eficiente. Visualiza el avance, asigna tareas y controla presupuestos en tiempo real.",
    color: "#84CC16",
    colorRgb: "132, 204, 22",
    submodules: SUBMODULES,
  },
];

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function SubmoduleChip({ sub }: { sub: (typeof SUBMODULES)[0] }) {
  const [hovered, setHovered] = useState(false);
  const rgb = hexToRgb(sub.color);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-3 py-1.5 text-xs font-medium cursor-default select-none"
      style={{
        background: hovered ? `rgba(${rgb}, 0.2)` : `rgba(${rgb}, 0.1)`,
        color: sub.color,
        border: `1px solid rgba(${rgb}, ${hovered ? "0.5" : "0.25"})`,
        borderRadius: "999px",
        fontFamily: "var(--font-body)",
        transform: hovered ? "translateY(-2px) scale(1.04)" : "translateY(0) scale(1)",
        boxShadow: hovered ? `0 4px 12px rgba(${rgb}, 0.25)` : "none",
        transition: "all 0.18s ease",
      }}
    >
      {sub.name}
    </span>
  );
}

type Module = (typeof MAIN_MODULES)[0];

function SubmodulesModal({
  mod,
  onClose,
}: {
  mod: Module;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 280);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{
        background: `rgba(5, 3, 2, ${visible ? "0.82" : "0"})`,
        backdropFilter: `blur(${visible ? "12px" : "0px"})`,
        transition: "background 0.28s ease, backdrop-filter 0.28s ease",
      }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      {/* Modal card */}
      <div
        className="relative w-full max-w-[860px] max-h-[85vh] flex flex-col bg-[var(--bg-panel)] border border-[var(--border-default)] overflow-hidden"
        style={{
          borderRadius: "24px",
          boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(${mod.colorRgb}, 0.08)`,
          transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.28s cubic-bezier(0.22,1,0.36,1), opacity 0.28s ease",
        }}
      >
        {/* Accent line top */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${mod.color}, transparent)`,
          }}
        />

        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-[var(--border-default)] shrink-0">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{
                background: `rgba(${mod.colorRgb}, 0.12)`,
                color: mod.color,
                borderRadius: "999px",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: mod.color }} />
              Módulo Principal
            </div>
            <h2
              className="text-2xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {mod.name}
            </h2>
            <p
              className="text-sm text-[var(--text-muted)] mt-1 max-w-[560px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {mod.description}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="shrink-0 ml-4 flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border-default)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>
        </div>

        {/* Submodules grid — scrollable */}
        <div className="overflow-y-auto px-8 py-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: mod.color, fontFamily: "var(--font-body)" }}
          >
            {mod.submodules.length} submódulos incluidos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {mod.submodules.map((sub, i) => {
              const rgb = hexToRgb(sub.color);
              return (
                <div
                  key={sub.name}
                  className="group flex flex-col gap-2 p-4 cursor-default"
                  style={{
                    background: `rgba(${rgb}, 0.05)`,
                    border: `1px solid rgba(${rgb}, 0.15)`,
                    borderRadius: "14px",
                    opacity: 0,
                    animation: "fadeReveal 0.4s var(--ease-smooth) forwards",
                    animationDelay: `${0.04 * i}s`,
                    transition: "background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = `rgba(${rgb}, 0.1)`;
                    el.style.borderColor = `rgba(${rgb}, 0.35)`;
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = `0 8px 24px rgba(${rgb}, 0.15)`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = `rgba(${rgb}, 0.05)`;
                    el.style.borderColor = `rgba(${rgb}, 0.15)`;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: sub.color, boxShadow: `0 0 6px rgba(${rgb}, 0.6)` }}
                    />
                    <p
                      className="text-sm font-semibold"
                      style={{ color: sub.color, fontFamily: "var(--font-display)" }}
                    >
                      {sub.name}
                    </p>
                  </div>
                  <p
                    className="text-xs text-[var(--text-muted)] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {sub.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Servicios() {
  const [activeModal, setActiveModal] = useState<Module | null>(null);

  return (
    <>
      <section className="py-24 px-8 bg-[var(--bg-deep)] min-h-screen pt-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nuestros Servicios
            </h1>
            <p
              className="text-lg text-[var(--text-muted)] max-w-[600px] mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Dos módulos principales que cubren cada área de tu empresa, integrados y listos para escalar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MAIN_MODULES.map((mod, index) => (
              <div
                key={mod.id}
                className="relative flex flex-col bg-[var(--bg-panel)] border border-[var(--border-default)] p-8 overflow-hidden"
                style={{
                  borderRadius: "24px",
                  opacity: 0,
                  animation: `fadeReveal 0.6s var(--ease-smooth) forwards`,
                  animationDelay: `${0.15 * (index + 1)}s`,
                  boxShadow: `0 0 60px rgba(${mod.colorRgb}, 0.06)`,
                }}
              >
                {/* Accent line */}
                <div
                  className="absolute top-0 left-8 right-8 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, ${mod.color}, transparent)`,
                    borderRadius: "0 0 2px 2px",
                  }}
                />

                {/* Header */}
                <div className="mb-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest"
                    style={{
                      background: `rgba(${mod.colorRgb}, 0.12)`,
                      color: mod.color,
                      borderRadius: "999px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: mod.color }} />
                    Módulo Principal
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {mod.name}
                  </h2>
                  <p
                    className="text-base text-[var(--text-muted)] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {mod.description}
                  </p>
                </div>

                {/* Chips */}
                {mod.submodules.length > 0 && (
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Incluye {mod.submodules.length} submódulos
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mod.submodules.map((sub) => (
                        <SubmoduleChip key={sub.name} sub={sub} />
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-[var(--border-default)]">
                  <button
                    onClick={() => setActiveModal(mod)}
                    className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                    style={{ color: mod.color, fontFamily: "var(--font-body)" }}
                  >
                    Conocer más
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeModal && (
        <SubmodulesModal mod={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
