import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden transition-all"
      style={{
        borderRadius: '12px'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--bg-panel)] transition-colors"
      >
        <h3
          className="text-lg font-semibold text-[var(--text-primary)] pr-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {question}
        </h3>
        <ChevronDown
          size={24}
          className="text-[var(--accent-primary)] flex-shrink-0 transition-transform"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transitionDuration: 'var(--duration-normal)',
            transitionTimingFunction: 'var(--ease-smooth)'
          }}
        />
      </button>

      <div
        className="overflow-hidden transition-all"
        style={{
          maxHeight: isOpen ? '500px' : '0',
          transitionDuration: 'var(--duration-normal)',
          transitionTimingFunction: 'var(--ease-smooth)'
        }}
      >
        <div className="px-6 pb-6 pt-0">
          <p
            className="text-base text-[var(--text-muted)] leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
