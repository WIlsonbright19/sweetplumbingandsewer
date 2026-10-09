import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ADDRESS_LINE, NAME, PHONE_DISPLAY, PHONE_TEL } from '../config/business';
import { content } from '../config/content';

interface BottomSheetMenuProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'es';
  onToggleLang: () => void;
  hamburgerRef: React.RefObject<HTMLButtonElement | null>;
}

export const BottomSheetMenu: React.FC<BottomSheetMenuProps> = ({
  isOpen,
  onClose,
  lang,
  onToggleLang,
  hamburgerRef,
}) => {
  const t = content[lang];
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Esc key closes & focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab') {
        if (!drawerRef.current) return;
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, hamburgerRef]);

  // Listen to hash change to close menu
  useEffect(() => {
    const handleHashChange = () => {
      if (isOpen) {
        onClose();
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isOpen, onClose]);

  const handleLinkClick = () => {
    onClose();
    hamburgerRef.current?.focus();
  };

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#warning-signs', label: t.warningSigns.label },
    { href: '#property-types', label: t.residentialCommercial.label },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#why-choose-us', label: t.whyChooseUs.label },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#areas', label: t.nav.areas },
    { href: '#faq', label: t.nav.faq },
    { href: '#quote-form', label: t.buttons.getQuote },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop over --deep at 55% opacity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              onClose();
              hamburgerRef.current?.focus();
            }}
            className="fixed inset-0 bg-[var(--deep)] cursor-pointer"
            aria-hidden="true"
          />

          {/* Minimal Slide-In Drawer from the right for mobile & desktop */}
          <motion.div
            ref={drawerRef}
            id="mobile-bottom-sheet"
            role="dialog"
            aria-modal="true"
            aria-label={lang === 'es' ? 'Menú de navegación' : 'Navigation menu'}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[88vw] sm:w-[380px] max-w-md h-[100dvh] bg-[var(--surface)] border-l border-[var(--line)] app-shadow-soft flex flex-col z-10 px-5 sm:px-7 py-5 overflow-y-auto"
          >
            {/* Top Bar of the Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-[var(--line)] shrink-0">
              {/* Brand Wordmark in Drawer */}
              <span className="font-['Outfit'] font-semibold text-lg text-[var(--ink)] tracking-tight truncate max-w-[190px]">
                {NAME}
              </span>

              <div className="flex items-center gap-2">
                {/* Language Switcher */}
                <button
                  type="button"
                  onClick={onToggleLang}
                  className="h-9 px-3 rounded-full border border-[var(--line)] bg-[var(--bg)] font-['Nunito_Sans'] font-semibold text-xs text-[var(--ink)] flex items-center justify-center cursor-pointer hover:border-[var(--primary)] transition-colors min-h-[40px]"
                  aria-label={`Switch language to ${lang === 'en' ? 'Spanish' : 'English'}`}
                >
                  <span className={lang === 'en' ? 'text-[var(--primary)] font-bold' : 'text-[var(--ink-soft)]'}>EN</span>
                  <span className="mx-1 text-[var(--line)]">|</span>
                  <span className={lang === 'es' ? 'text-[var(--primary)] font-bold' : 'text-[var(--ink-soft)]'}>ES</span>
                </button>

                {/* Close Button with 48px touch target */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => {
                    onClose();
                    hamburgerRef.current?.focus();
                  }}
                  className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] flex items-center justify-center cursor-pointer hover:bg-[var(--tint)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
                  aria-label={t.buttons.closeMenu}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links with subtle slide-in stagger */}
            <nav className="flex flex-col py-3 flex-1" aria-label="Drawer Navigation">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ x: 16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-[var(--line)] last:border-b-0"
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between min-h-[48px] py-2.5 font-['Outfit'] font-semibold text-base sm:text-lg text-[var(--ink)] hover:text-[var(--primary)] transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-[var(--ink-soft)] text-sm" aria-hidden="true">→</span>
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Quick Action CTAs */}
            <div className="flex flex-col gap-2.5 pt-3 pb-3 border-t border-[var(--line)] shrink-0">
              <a
                href={`tel:${PHONE_TEL}`}
                className="btn-primary-pill w-full text-center min-h-[52px] text-base"
              >
                {t.buttons.callNow}
              </a>
              <a
                href="#quote-form"
                onClick={handleLinkClick}
                className="btn-secondary-pill w-full text-center min-h-[52px] text-base"
              >
                {t.buttons.getQuote}
              </a>
            </div>

            {/* Drawer Footer with Phone & Address */}
            <div className="pt-2 text-center border-t border-[var(--line)] shrink-0">
              <p className="font-['Outfit'] font-semibold text-base text-[var(--primary)] mb-0.5">
                {PHONE_DISPLAY}
              </p>
              <p className="font-['Nunito_Sans'] text-xs text-[var(--ink-soft)] leading-relaxed">
                {ADDRESS_LINE}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
