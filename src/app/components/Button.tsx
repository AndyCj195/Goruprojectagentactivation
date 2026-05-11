import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 font-medium transition-all cursor-pointer tracking-wide';

  const variantStyles = {
    primary: 'bg-[var(--accent-primary)] text-[var(--bg-deep)] hover:bg-[var(--accent-hover)] hover:scale-105 hover:shadow-[var(--shadow-glow-gold)] active:scale-98',
    secondary: 'bg-transparent border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[rgba(201,168,76,0.1)] hover:text-[var(--accent-hover)]',
    ghost: 'bg-transparent text-[var(--accent-primary)] hover:text-[var(--accent-hover)] group'
  };

  const sizeStyles = {
    md: 'px-6 py-3 text-base rounded-md',
    lg: 'px-8 py-4 text-lg rounded-md'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      style={{ transition: 'all 0.2s var(--ease-smooth)' }}
    >
      {children}
      <ArrowRight
        size={20}
        className={variant === 'ghost' ? 'transition-transform group-hover:translate-x-1' : ''}
      />
    </button>
  );
}
