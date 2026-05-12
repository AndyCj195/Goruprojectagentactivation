import { useEffect, useState } from 'react';
import { NavbarGoru } from './components/NavbarGoru';
import { ButtonGoru } from './components/ButtonGoru';
import { ModuleCardGoru } from './components/ModuleCardGoru';
import { FAQItem } from './components/FAQItem';
import { LanguageProvider } from './context/LanguageContext';
import { ChevronDown, MapPin, Settings, Headphones, Link2, TrendingUp, Facebook, Instagram } from 'lucide-react';
import { XLogo } from './components/XLogo';

const MODULES_DATA = [
  {
    id: 'empresarial' as const,
    name: 'Gestión Empresarial',
    description: 'Control total de tu empresa: facturación, inventario, reportes.',
    color: '#F59E0B',
    colorRgb: '245, 158, 11'
  },
  {
    id: 'rrhh' as const,
    name: 'Gestión de Recursos Humanos',
    description: 'Nómina, asistencia, vacaciones, reportes de RRHH completos.',
    color: '#EC4899',
    colorRgb: '236, 72, 153'
  },
  {
    id: 'portafolio' as const,
    name: 'Gestión de Portafolio y Proyectos',
    description: 'Administra proyectos, portafolios y recursos de manera eficiente.',
    color: '#84CC16',
    colorRgb: '132, 204, 22'
  },
  {
    id: 'pos' as const,
    name: 'Gestión de Punto de Venta',
    description: 'Sistema POS completo: ventas rápidas, inventario en tiempo real.',
    color: '#EF4444',
    colorRgb: '239, 68, 68'
  },
  {
    id: 'acceso' as const,
    name: 'Control de Acceso',
    description: 'Gestión de permisos, roles y seguridad de acceso al sistema.',
    color: '#A855F7',
    colorRgb: '168, 85, 247'
  },
  {
    id: 'bancos' as const,
    name: 'Gestión de Bancos',
    description: 'Conciliación bancaria automática, control de cuentas múltiples.',
    color: '#3B82F6',
    colorRgb: '59, 130, 246'
  },
  {
    id: 'facturacion' as const,
    name: 'Gestión de Facturación Electrónica',
    description: 'Emisión de facturas electrónicas cumpliendo normativas locales.',
    color: '#7C3AED',
    colorRgb: '124, 58, 237'
  },
  {
    id: 'crm' as const,
    name: 'CRM',
    description: 'Gestión de relaciones con clientes, ventas y seguimiento.',
    color: '#1F2937',
    colorRgb: '31, 41, 55'
  },
  {
    id: 'proveedores' as const,
    name: 'Gestión de Pago de Proveedores',
    description: 'Gestión de cuentas por pagar, calendario de pagos, historial.',
    color: '#06B6D4',
    colorRgb: '6, 182, 212'
  },
  {
    id: 'profesionales' as const,
    name: 'Gestión de Profesionales Independientes',
    description: 'Gestión para freelancers y consultores: proyectos, facturación.',
    color: '#9333EA',
    colorRgb: '147, 51, 234'
  },
  {
    id: 'tickets' as const,
    name: 'Tickets',
    description: 'Sistema de tickets para soporte, incidencias y solicitudes.',
    color: '#6B7280',
    colorRgb: '107, 114, 128'
  },
  {
    id: 'contable' as const,
    name: 'Gestión Contable',
    description: 'Contabilidad automatizada: balance, libro diario, estados financieros.',
    color: '#10B981',
    colorRgb: '16, 185, 129'
  },
  {
    id: 'citas' as const,
    name: 'Gestión Citas',
    description: 'Agendamiento y gestión de citas, reservas y calendarios.',
    color: '#F472B6',
    colorRgb: '244, 114, 182'
  }
];

const FEATURES = [
  {
    icon: MapPin,
    title: 'Desarrollo Nacional',
    description: 'Software hecho en Ecuador para el mercado local. Entendemos tus necesidades reales.'
  },
  {
    icon: Settings,
    title: 'Personalización Total',
    description: 'Adaptamos Goru a las necesidades específicas de tu empresa.'
  },
  {
    icon: Headphones,
    title: 'Soporte Local',
    description: 'Equipo en Ecuador, respuesta inmediata y training presencial.'
  },
  {
    icon: Link2,
    title: 'Integración Completa',
    description: 'Todos los módulos se comunican entre sí. Datos unificados.'
  },
  {
    icon: TrendingUp,
    title: 'Escalable',
    description: 'Desde PYMES hasta empresas grandes. Crece con tu negocio.'
  }
];

const FAQS = [
  {
    question: '¿Qué es Goru?',
    answer: 'Goru es un ecosistema modular de software de gestión empresarial desarrollado en Ecuador. Incluye 13 módulos especializados que se adaptan a las necesidades específicas de tu empresa, desde facturación hasta gestión de recursos humanos.'
  },
  {
    question: '¿Cuántos módulos puedo contratar?',
    answer: 'Puedes contratar los módulos que necesites. Goru es completamente modular, lo que significa que solo pagas por las funcionalidades que realmente utilizas. Puedes empezar con uno o dos módulos y agregar más conforme tu negocio crece.'
  },
  {
    question: '¿Goru cumple con las normativas ecuatorianas?',
    answer: 'Sí, Goru está desarrollado específicamente para el mercado ecuatoriano y cumple con todas las normativas locales, incluyendo facturación electrónica según las disposiciones del SRI, gestión de nómina según el código de trabajo, y más.'
  },
  {
    question: '¿Necesito conocimientos técnicos para usar Goru?',
    answer: 'No. Goru está diseñado para ser intuitivo y fácil de usar. Ofrecemos capacitación completa a tu equipo y soporte técnico continuo para asegurar que aproveches al máximo todas las funcionalidades del sistema.'
  },
  {
    question: '¿Puedo personalizar Goru para mi empresa?',
    answer: 'Absolutamente. Goru se puede personalizar según las necesidades específicas de tu empresa. Nuestro equipo trabaja contigo para adaptar los módulos, reportes, flujos de trabajo y más, asegurando que el sistema se ajuste perfectamente a tus procesos.'
  },
  {
    question: '¿Qué tipo de soporte ofrecen?',
    answer: 'Ofrecemos soporte técnico completo que incluye capacitación inicial, actualizaciones regulares, asistencia telefónica y por correo, resolución de problemas técnicos y acompañamiento continuo para optimizar el uso del sistema en tu empresa.'
  },
  {
    question: '¿Mis datos están seguros?',
    answer: 'La seguridad es nuestra prioridad. Goru utiliza encriptación de datos, backups automáticos diarios, control de acceso basado en roles, y cumple con estándares internacionales de seguridad para proteger la información de tu empresa.'
  },
  {
    question: '¿Cómo es el proceso de implementación?',
    answer: 'El proceso incluye: 1) Reunión inicial para entender tus necesidades, 2) Configuración y personalización del sistema, 3) Migración de datos existentes, 4) Capacitación de tu equipo, 5) Puesta en marcha con acompañamiento continuo. El tiempo varía según los módulos contratados.'
  }
];

export default function App() {
  const [revealHero, setRevealHero] = useState(false);

  useEffect(() => {
    setTimeout(() => setRevealHero(true), 100);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--bg-deep)] text-[var(--text-primary)]">
        <NavbarGoru />

      {/* HERO SECTION */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-8 py-24 min-h-[90vh]"
        style={{
          background: 'linear-gradient(180deg, rgba(5, 3, 2, 1) 0%, rgba(13, 13, 13, 0.95) 100%)'
        }}
      >
        <div className="max-w-[1280px] mx-auto pt-16">
          <h1
            className={`
              text-5xl md:text-6xl lg:text-7xl font-bold mb-6
              transition-all duration-[800ms]
              ${revealHero ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}
            `}
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-1px',
              transitionTimingFunction: 'var(--ease-smooth)',
              transitionDelay: '0.2s'
            }}
          >
            Gestiona tu empresa desde<br />un solo lugar
          </h1>

          <p
            className={`
              text-lg md:text-xl text-[var(--text-muted)] mb-8 max-w-[680px] mx-auto
              transition-all duration-[800ms]
              ${revealHero ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}
            `}
            style={{
              fontFamily: 'var(--font-body)',
              lineHeight: '1.7',
              transitionTimingFunction: 'var(--ease-smooth)',
              transitionDelay: '0.4s'
            }}
          >
            Software de gestión empresarial personalizable, desarrollado en Ecuador para empresas que crecen.
          </p>

          <div
            className={`
              flex flex-col sm:flex-row items-center justify-center gap-4 mb-12
              transition-all duration-[800ms]
              ${revealHero ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}
            `}
            style={{
              transitionTimingFunction: 'var(--ease-smooth)',
              transitionDelay: '0.6s'
            }}
          >
            <ButtonGoru variant="primary">Solicitar demo</ButtonGoru>
            <ButtonGoru variant="secondary">Ver módulos</ButtonGoru>
          </div>

          {/* Visual placeholder */}
          <div
            className={`
              max-w-[800px] mx-auto bg-[var(--bg-panel)] p-8 border border-[var(--border-default)]
              transition-all duration-[800ms]
              ${revealHero ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}
            `}
            style={{
              boxShadow: 'var(--shadow-card)',
              transitionTimingFunction: 'var(--ease-smooth)',
              transitionDelay: '0.8s',
              minHeight: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px'
            }}
          >
            <p className="text-[var(--text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>
              [Mockup del Dashboard Goru]
            </p>
          </div>
        </div>

        <ChevronDown
          size={24}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[var(--accent-primary)]"
          style={{ animation: 'bounce 2s ease-in-out infinite' }}
        />
      </section>

      {/* MÓDULOS SECTION */}
      <section id="modulos" className="py-24 px-8 bg-[var(--bg-deep)]">
        <div className="max-w-[1280px] mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Módulos del Ecosistema Goru
          </h2>
          <p
            className="text-lg text-[var(--text-muted)] text-center mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Soluciones integradas para cada área de tu empresa
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MODULES_DATA.map((module, index) => (
              <div
                key={module.id}
                style={{
                  opacity: 0,
                  animation: `fadeReveal 0.6s var(--ease-smooth) forwards`,
                  animationDelay: `${0.1 * (index + 1)}s`
                }}
              >
                <ModuleCardGoru module={module} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ GORU? */}
      <section className="py-24 px-8 bg-[var(--bg-deep)]">
        <div className="max-w-[1120px] mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ¿Por qué elegir Goru?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-[var(--bg-panel)] p-8"
                style={{
                  fontFamily: 'var(--font-body)',
                  borderRadius: '20px'
                }}
              >
                <feature.icon size={32} className="text-[var(--accent-primary)] mb-4" />
                <h3
                  className="text-xl font-semibold mb-3 text-[var(--text-primary)]"
                  style={{ fontFamily: 'var(--font-display)' }}
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

      {/* DEMO FORM */}
      <section id="contacto" className="py-24 px-8 bg-[var(--bg-deep)]">
        <div
          className="max-w-[640px] mx-auto bg-[var(--bg-panel)] p-12 border border-[var(--border-default)]"
          style={{ borderRadius: '24px' }}
        >
          <h2
            className="text-3xl font-bold text-center mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Solicita una demo personalizada
          </h2>
          <p
            className="text-lg text-[var(--text-muted)] text-center mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Te contactamos en menos de 24 horas
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre de la empresa"
              className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
              style={{
                fontFamily: 'var(--font-body)',
                borderRadius: '12px'
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                style={{
                  fontFamily: 'var(--font-body)',
                  borderRadius: '12px'
                }}
              />
              <input
                type="email"
                placeholder="Email corporativo"
                className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                style={{
                  fontFamily: 'var(--font-body)',
                  borderRadius: '12px'
                }}
              />
            </div>

            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
              style={{
                fontFamily: 'var(--font-body)',
                borderRadius: '12px'
              }}
            />

            <div className="pt-4">
              <ButtonGoru variant="primary" fullWidth>
                Solicitar demo
              </ButtonGoru>
            </div>
          </form>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-24 px-8 bg-[var(--bg-deep)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Preguntas Frecuentes
            </h2>
            <p
              className="text-xl text-[var(--text-muted)] max-w-[600px] mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Resolvemos tus dudas sobre Goru
            </p>
          </div>

          <div className="max-w-[900px] mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border-default)] bg-[var(--bg-deep)] py-16 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <img
                src="/src/imports/GRUPO-GR-LOGO-SLOGAN.png"
                alt="Goru"
                className="h-[48px] mb-3"
              />
              <p className="text-base text-[var(--text-muted)] max-w-[240px]" style={{ fontFamily: 'var(--font-body)' }}>
                Software de gestión empresarial hecho en Ecuador.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Producto
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
                <li>
                  <a href="#" className="text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    Módulos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    Integraciones
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Empresa
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
                <li>
                  <a href="#" className="text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Legal
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
                <li>
                  <a href="#" className="text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--border-default)] pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[var(--text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>
                © 2026 Goru. Todos los derechos reservados.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                  aria-label="X (Twitter)"
                >
                  <XLogo size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </LanguageProvider>
  );
}
