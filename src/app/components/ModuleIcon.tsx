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

interface ModuleIconProps {
  module: ModuleType;
  size?: 'sm' | 'md' | 'lg';
  inactive?: boolean;
}

const SIZES = {
  sm: 48,
  md: 64,
  lg: 80
};

const FONT_SIZES = {
  sm: 16,
  md: 20,
  lg: 24
};

const MODULE_COLORS: Record<ModuleType, string> = {
  empresarial: '#F59E0B',      // Naranja/dorado
  pos: '#EF4444',              // Rojo
  contable: '#10B981',         // Verde turquesa/teal
  bancos: '#3B82F6',           // Azul
  proveedores: '#06B6D4',      // Cyan/celeste
  rrhh: '#EC4899',             // Rosa/magenta
  profesionales: '#9333EA',    // Morado
  portafolio: '#84CC16',       // Verde lima
  acceso: '#A855F7',           // Morado claro
  facturacion: '#7C3AED',      // Morado oscuro
  crm: '#1F2937',              // Gris oscuro/negro
  tickets: '#6B7280',          // Gris
  citas: '#F472B6'             // Rosa
};

export function ModuleIcon({ module, size = 'md', inactive = false }: ModuleIconProps) {
  const dimension = SIZES[size];
  const fontSize = FONT_SIZES[size];
  const bgColor = MODULE_COLORS[module];

  return (
    <div
      className="flex flex-col items-center justify-center font-bold text-white leading-none gap-[2px] transition-transform"
      style={{
        width: dimension,
        height: dimension,
        fontSize: fontSize,
        backgroundColor: bgColor,
        fontFamily: 'var(--font-display)',
        filter: inactive ? 'grayscale(1)' : 'none',
        opacity: inactive ? 0.4 : 1,
        transitionDuration: 'var(--duration-normal)',
        transitionTimingFunction: 'var(--ease-smooth)',
        borderRadius: '18px'
      }}
    >
      <span>GO</span>
      <span>RU</span>
    </div>
  );
}
