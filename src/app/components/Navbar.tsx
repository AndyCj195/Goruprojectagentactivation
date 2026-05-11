import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

const navLinks = [
  { label: 'Quiénes Somos', href: '#' },
  { label: 'Ramas', href: '#ramas' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'RSE', href: '#' },
  { label: 'Publicaciones', href: '#' }
];

const quickAccess = [
  { label: 'Goru Tickets', href: '#' },
  { label: 'Goru Reservas', href: '#' }
];

export function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          border-b border-[var(--border-default)]
          transition-all duration-300
        `}
        style={{
          background: isSticky ? 'rgba(5, 3, 2, 0.9)' : 'rgba(13, 13, 13, 0.7)',
          backdropFilter: isSticky ? 'blur(12px)' : 'blur(8px)',
          height: '72px'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-12">
            <h1
              className="text-[32px] font-bold text-[var(--accent-primary)] cursor-pointer hover:scale-105 transition-transform"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Goru
            </h1>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    relative text-base text-[var(--text-primary)]
                    hover:text-[var(--accent-hover)]
                    transition-colors duration-200
                    after:absolute after:bottom-[-4px] after:left-0
                    after:w-0 after:h-[2px] after:bg-[var(--accent-hover)]
                    hover:after:w-full after:transition-all after:duration-300
                  "
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Quick Access + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {quickAccess.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </a>
            ))}
            <Button variant="ghost">Iniciar sesión</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[var(--text-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-[var(--bg-surface)] pt-24 px-6"
          style={{ top: '72px' }}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg text-[var(--text-primary)] hover:text-[var(--accent-hover)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="border-t border-[var(--border-default)] pt-6 mt-2" />

            {quickAccess.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Button variant="ghost">Iniciar sesión</Button>
          </div>
        </div>
      )}
    </>
  );
}
