import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonGoruProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  fullWidth?: boolean;
}

export function ButtonGoru({
  children,
  variant = 'primary',
  onClick,
  fullWidth = false
}: ButtonGoruProps) {
  const baseStyles = 'inline-flex items-center gap-2 font-medium tracking-wide transition-all cursor-pointer';

  const variantStyles = {
    primary: `
      bg-[var(--accent-primary)] text-[var(--bg-deep)]
      hover:bg-[var(--accent-hover)] hover:scale-105
      active:scale-98
    `,
    secondary: `
      bg-transparent border border-[var(--accent-primary)] text-[var(--accent-primary)]
      hover:bg-[rgba(201,168,76,0.1)] hover:text-[var(--accent-hover)]
    `,
    ghost: `
      bg-transparent text-[var(--accent-primary)]
      hover:text-[var(--accent-hover)]
      group
    `
  };

  const sizeStyles = 'px-6 py-3 text-base h-12';
  const borderRadiusStyle = { borderRadius: '12px' };

  return (
    <button
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles}
        ${fullWidth ? 'w-full justify-center' : ''}
      `}
      style={{
        fontFamily: 'var(--font-body)',
        transition: 'all var(--duration-fast) var(--ease-smooth)',
        ...borderRadiusStyle
      }}
    >
      {children}
      <ArrowRight
        size={20}
        className={variant === 'ghost' ? 'transition-transform group-hover:translate-x-1' : ''}
      />
    </button>
  );
}
