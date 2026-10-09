import React from 'react';
import { PHONE_DISPLAY, PHONE_TEL } from '../config/business';
import { content } from '../config/content';

interface StickyMobileBarProps {
  lang: 'en' | 'es';
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ lang }) => {
  const t = content[lang];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[var(--surface)] border-t border-[var(--line)] app-shadow-soft px-3 py-2"
      style={{ height: '60px' }}
      role="region"
      aria-label={lang === 'es' ? 'Acciones rápidas' : 'Quick Actions'}
    >
      <div className="max-w-md mx-auto h-full flex items-center justify-between gap-2.5">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex-1 h-11 inline-flex items-center justify-center rounded-full bg-[var(--sun)] text-[var(--ink)] font-['Nunito_Sans'] font-semibold text-sm px-3 hover:bg-[var(--sun-hover)] transition-colors text-center whitespace-nowrap min-w-0"
        >
          <svg
            className="w-4 h-4 mr-1.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="truncate">{t.buttons.callNow}</span>
        </a>

        <a
          href="#quote-form"
          className="flex-1 h-11 inline-flex items-center justify-center rounded-full border-2 border-[var(--ink)] bg-transparent text-[var(--ink)] font-['Nunito_Sans'] font-semibold text-sm px-3 hover:bg-[rgba(20,40,29,0.05)] transition-colors text-center whitespace-nowrap min-w-0"
        >
          <span className="truncate">{t.buttons.getQuote}</span>
        </a>
      </div>
    </div>
  );
};
