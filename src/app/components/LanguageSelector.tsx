import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LANGUAGES = [
  { code: 'es', name: 'Español', shortCode: 'ES' },
  { code: 'en', name: 'English', shortCode: 'EN' }
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentLang = LANGUAGES.find(lang => lang.code === language);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLang?.shortCode}</span>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 border border-[var(--border-default)] overflow-hidden"
          style={{
            background: 'rgba(13, 13, 13, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            minWidth: '200px',
            boxShadow: 'var(--shadow-panel)',
            marginTop: '10px'
          }}
        >
          {LANGUAGES.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'es' | 'en');
                setIsOpen(false);
              }}
              className={`
                w-full flex items-center justify-between px-5 py-3 text-left
                transition-all
                ${language === lang.code
                  ? 'bg-[var(--bg-panel)]'
                  : 'hover:bg-[rgba(26,26,26,0.6)]'
                }
                ${index === 0 ? 'pt-4' : ''}
                ${index === LANGUAGES.length - 1 ? 'pb-4' : ''}
              `}
              style={{
                fontFamily: 'var(--font-body)',
                transitionDuration: 'var(--duration-fast)'
              }}
            >
              <span className="text-sm text-[var(--text-primary)]">{lang.name}</span>
              <span className="text-sm font-medium text-[var(--text-muted)]">{lang.shortCode}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
