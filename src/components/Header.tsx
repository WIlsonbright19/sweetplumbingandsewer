import React from 'react';
import { NAME, PHONE_TEL } from '../config/business';
import { content } from '../config/content';

interface HeaderProps {
  lang: 'en' | 'es';
  onToggleLang: () => void;
  onToggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
  hamburgerRef: React.RefObject<HTMLButtonElement | null>;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onToggleMobileMenu,
  mobileMenuOpen,
  hamburgerRef,
}) => {
  const t = content[lang];

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Wordmark */}
        <div className="flex-1 min-w-0 pr-1 sm:pr-4">
          <a
            href="#"
            className="font-['Outfit'] font-semibold text-base sm:text-xl lg:text-2xl text-[var(--ink)] tracking-tight truncate block hover:opacity-90 transition-opacity"
          >
            {NAME}
          </a>
        </div>

        {/* Right: Actions & High-Visibility Hamburger Menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Bilingual Toggle Button (EN | ES) */}
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={`Switch language to ${lang === 'en' ? 'Spanish' : 'English'}`}
            className="h-10 sm:h-11 px-2.5 sm:px-3.5 rounded-full border border-[var(--line)] bg-[var(--surface)] font-['Nunito_Sans'] font-semibold text-xs sm:text-sm text-[var(--ink)] hover:border-[var(--primary)] transition-colors flex items-center justify-center cursor-pointer min-w-[56px] sm:min-w-[68px] shadow-sm"
          >
            <span className={lang === 'en' ? 'text-[var(--primary)] font-bold' : 'text-[var(--ink-soft)]'}>EN</span>
            <span className="mx-1 text-[var(--line)]">|</span>
            <span className={lang === 'es' ? 'text-[var(--primary)] font-bold' : 'text-[var(--ink-soft)]'}>ES</span>
          </button>

          {/* Desktop & Tablet Call Button (Hidden on small mobile so hamburger has full spotlight & zero overcrowding) */}
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[var(--sun)] text-[var(--ink)] font-['Nunito_Sans'] font-semibold text-base px-5 lg:px-6 h-11 lg:h-12 hover:bg-[var(--sun-hover)] transition-colors whitespace-nowrap shrink-0 shadow-none"
          >
            {t.buttons.callNow}
          </a>

          {/* Unmissable, prominent Hamburger menu button on mobile & desktop */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={onToggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-bottom-sheet"
            aria-label={
              mobileMenuOpen
                ? lang === 'es'
                  ? 'Cerrar menú de navegación'
                  : 'Close navigation menu'
                : lang === 'es'
                ? 'Abrir menú de navegación'
                : 'Open navigation menu'
            }
            className="h-10 sm:h-11 px-3 sm:px-3.5 shrink-0 flex items-center gap-2 rounded-xl sm:rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] cursor-pointer hover:border-[var(--primary)] hover:bg-[var(--tint)] active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--primary)] transition-all shadow-sm"
          >
            {/* The 3-bar hamburger icon */}
            <div className="w-5 h-4 flex flex-col justify-between py-0.5 shrink-0" aria-hidden="true">
              <span
                className={`block h-0.5 w-full bg-[var(--ink)] rounded-full transition-transform duration-200 origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[var(--ink)] rounded-full transition-opacity duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[var(--ink)] rounded-full transition-transform duration-200 origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>

            {/* Clear "MENU" / "MENÚ" text label so users instantly recognize it */}
            <span className="font-['Nunito_Sans'] font-bold text-xs sm:text-sm uppercase tracking-wider text-[var(--ink)] select-none">
              {mobileMenuOpen ? (lang === 'es' ? 'Cerrar' : 'Close') : (lang === 'es' ? 'Menú' : 'Menu')}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
