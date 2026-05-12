import { useState } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { XLogo } from './XLogo';
import { LanguageSelector } from './LanguageSelector';

const navLinks = [
  { label: 'Módulos', href: '#modulos' },
  { label: 'Precios', href: '#precios' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contacto', href: '#contacto' }
];

export function NavbarGoru() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'transparent',
          height: '72px',
          paddingTop: '12px'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-center gap-4">
          {/* Logo Island (Izquierda) */}
          <div
            className="flex items-center justify-center px-4 py-3 border border-[var(--border-default)] absolute left-8"
            style={{
              background: 'rgba(13, 13, 13, 0.7)',
              backdropFilter: 'blur(8px)',
              borderRadius: '28px',
              width: '160px',
              height: '56px'
            }}
          >
            <img
              src="/src/imports/GRUPO-GR-LOGO-SLOGAN.png"
              alt="Goru"
              className="cursor-pointer hover:scale-105 transition-transform h-[36px]"
            />
          </div>

          {/* Nav Links Island (Centro - absolutamente centrado) */}
          <div
            className="hidden lg:flex items-center justify-center gap-6 px-6 py-3 border border-[var(--border-default)]"
            style={{
              background: 'rgba(13, 13, 13, 0.7)',
              backdropFilter: 'blur(8px)',
              borderRadius: '28px',
              width: '420px',
              height: '56px'
            }}
          >
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

          {/* Language Island */}
          <div
            className="hidden lg:flex items-center justify-center px-4 py-3 border border-[var(--border-default)] absolute"
            style={{
              background: 'rgba(13, 13, 13, 0.7)',
              backdropFilter: 'blur(8px)',
              borderRadius: '28px',
              width: '100px',
              height: '56px',
              right: 'calc(160px + 16px + 32px)'
            }}
          >
            <LanguageSelector />
          </div>

          {/* Redes Sociales Island (Derecha) */}
          <div
            className="hidden lg:flex items-center justify-center gap-4 px-4 py-3 border border-[var(--border-default)] absolute right-8"
            style={{
              background: 'rgba(13, 13, 13, 0.7)',
              backdropFilter: 'blur(8px)',
              borderRadius: '28px',
              width: '160px',
              height: '56px'
            }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
              aria-label="X (Twitter)"
            >
              <XLogo size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[var(--text-primary)] px-4 py-2 border border-[var(--border-default)] absolute right-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'rgba(13, 13, 13, 0.7)',
              backdropFilter: 'blur(8px)',
              borderRadius: '28px'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-[var(--bg-surface)] pt-24 px-6"
          style={{
            top: '72px',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px'
          }}
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

            {/* Redes Sociales Mobile */}
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

            <div className="border-t border-[var(--border-default)] pt-6 mt-2" />

            {/* Language Selector Mobile */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--text-muted)]" style={{ fontFamily: 'var(--font-body)' }}>
                Idioma
              </span>
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
