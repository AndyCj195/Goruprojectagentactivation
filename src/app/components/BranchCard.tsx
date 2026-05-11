import { LucideIcon } from 'lucide-react';
import { Button } from './Button';

interface BranchCardProps {
  icon: LucideIcon;
  name: string;
  tagline: string;
  onClick?: () => void;
}

export function BranchCard({ icon: Icon, name, tagline, onClick }: BranchCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        flex flex-col items-center text-center p-8
        min-h-[320px] w-full
        bg-[var(--bg-surface)]
        border border-[var(--border-default)]
        rounded-xl
        cursor-pointer
        transition-all duration-300
        hover:border-[var(--accent-primary)]
        hover:scale-105
        hover:shadow-[var(--shadow-card),var(--shadow-glow-gold)]
        active:scale-98
      "
      style={{
        boxShadow: 'var(--shadow-card)',
        transition: 'all 0.3s var(--ease-smooth)'
      }}
    >
      <Icon size={48} className="text-[var(--accent-primary)] mb-6" />

      <h3
        className="text-xl font-semibold text-[var(--text-primary)] mb-3"
        style={{ fontFamily: 'var(--font-display)', lineHeight: '1.4' }}
      >
        {name}
      </h3>

      <p
        className="text-sm text-[var(--text-muted)] mb-6 line-clamp-2 flex-grow"
        style={{ fontFamily: 'var(--font-body)', lineHeight: '1.6' }}
      >
        {tagline}
      </p>

      {/* Separador */}
      <div className="w-full border-t border-[var(--border-default)] mb-5"></div>

      <Button variant="ghost">Explorar</Button>
    </div>
  );
}
