import { ModuleIcon } from './ModuleIcon';
import { ButtonGoru } from './ButtonGoru';

type ModuleType =
  | 'empresarial'
  | 'pos'
  | 'contable'
  | 'bancos'
  | 'proveedores'
  | 'rrhh'
  | 'profesionales'
  | 'portafolio'
  | 'acceso'
  | 'facturacion'
  | 'crm'
  | 'tickets'
  | 'citas';

interface Module {
  id: ModuleType;
  name: string;
  description: string;
  color: string;
  colorRgb: string;
}

interface ModuleCardGoruProps {
  module: Module;
  onClick?: () => void;
}

export function ModuleCardGoru({ module, onClick }: ModuleCardGoruProps) {
  return (
    <div
      onClick={onClick}
      className="
        flex flex-col items-center text-center p-8
        w-full
        bg-[var(--bg-surface)]
        border border-[var(--border-default)]
        cursor-pointer
        transition-all duration-300
        hover:scale-105
        active:scale-98
      "
      style={{
        boxShadow: 'var(--shadow-card)',
        transition: 'all 0.3s var(--ease-smooth)',
        borderRadius: '20px',
        height: '360px',
        ['--module-color' as string]: module.color,
        ['--module-color-rgb' as string]: module.colorRgb
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = module.color;
        e.currentTarget.style.boxShadow = `var(--shadow-card), 0px 0px 24px rgba(${module.colorRgb}, 0.4)`;
        const icon = e.currentTarget.querySelector('.module-icon-transform') as HTMLElement;
        if (icon) icon.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-default)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
        const icon = e.currentTarget.querySelector('.module-icon-transform') as HTMLElement;
        if (icon) icon.style.transform = 'scale(1)';
      }}
    >
      <div className="module-icon-transform mb-5">
        <ModuleIcon module={module.id} size="md" />
      </div>

      <h3
        className="text-xl font-semibold text-[var(--text-primary)] mb-3"
        style={{
          fontFamily: 'var(--font-display)',
          lineHeight: '1.4'
        }}
      >
        {module.name}
      </h3>

      <p
        className="text-sm text-[var(--text-muted)] mb-6 line-clamp-3 flex-grow"
        style={{
          fontFamily: 'var(--font-body)',
          lineHeight: '1.6'
        }}
      >
        {module.description}
      </p>

      <div className="w-full border-t border-[var(--border-default)] mb-5"></div>

      <ButtonGoru variant="ghost">Ver más</ButtonGoru>
    </div>
  );
}
