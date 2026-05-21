import { FAQItem } from "../components/FAQItem";

const FAQS = [
  {
    question: "¿Qué es Goru?",
    answer:
      "Goru es un ecosistema de software de gestión empresarial desarrollado en Ecuador. Está organizado en dos módulos principales: Gestión Empresarial —que integra 11 submódulos especializados— y Gestión de Portafolio y Proyectos, cada uno adaptable a las necesidades específicas de tu empresa.",
  },
  {
    question: "¿Qué incluye el módulo de Gestión Empresarial?",
    answer:
      "Gestión Empresarial es el núcleo del ecosistema Goru. Integra 11 submódulos: Recursos Humanos, Punto de Venta, Control de Acceso, Bancos, Facturación Electrónica, CRM, Pago de Proveedores, Profesionales Independientes, Tickets, Contabilidad y Gestión de Citas. Puedes activar los submódulos que necesites.",
  },
  {
    question: "¿Goru cumple con las normativas ecuatorianas?",
    answer:
      "Sí, Goru está desarrollado específicamente para el mercado ecuatoriano y cumple con todas las normativas locales, incluyendo facturación electrónica según las disposiciones del SRI, gestión de nómina según el código de trabajo, y más.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar Goru?",
    answer:
      "No. Goru está diseñado para ser intuitivo y fácil de usar. Ofrecemos capacitación completa a tu equipo y soporte técnico continuo para asegurar que aproveches al máximo todas las funcionalidades del sistema.",
  },
  {
    question: "¿Puedo personalizar Goru para mi empresa?",
    answer:
      "Absolutamente. Goru se puede personalizar según las necesidades específicas de tu empresa. Nuestro equipo trabaja contigo para adaptar los módulos, reportes, flujos de trabajo y más, asegurando que el sistema se ajuste perfectamente a tus procesos.",
  },
  {
    question: "¿Qué tipo de soporte ofrecen?",
    answer:
      "Ofrecemos soporte técnico completo que incluye capacitación inicial, actualizaciones regulares, asistencia telefónica y por correo, resolución de problemas técnicos y acompañamiento continuo para optimizar el uso del sistema en tu empresa.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "La seguridad es nuestra prioridad. Goru utiliza encriptación de datos, backups automáticos diarios, control de acceso basado en roles, y cumple con estándares internacionales de seguridad para proteger la información de tu empresa.",
  },
  {
    question: "¿Cómo es el proceso de implementación?",
    answer:
      "El proceso incluye: 1) Reunión inicial para entender tus necesidades, 2) Configuración y personalización del sistema, 3) Migración de datos existentes, 4) Capacitación de tu equipo, 5) Puesta en marcha con acompañamiento continuo. El tiempo varía según los módulos contratados.",
  },
];

export function FAQs() {
  return (
    <section className="py-24 px-8 bg-[var(--bg-deep)] min-h-screen pt-32">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Preguntas Frecuentes
          </h1>
          <p
            className="text-xl text-[var(--text-muted)] max-w-[600px] mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
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
  );
}
