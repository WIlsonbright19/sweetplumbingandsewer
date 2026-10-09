/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { BottomSheetMenu } from './components/BottomSheetMenu';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesAccordion } from './components/ServicesAccordion';
import { WarningSigns } from './components/WarningSigns';
import { ResidentialCommercial } from './components/ResidentialCommercial';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Areas } from './components/Areas';
import { FAQ } from './components/FAQ';
import { QuoteForm } from './components/QuoteForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

const getInitialLanguage = (): 'en' | 'es' => {
  try {
    const saved = localStorage.getItem('sweet_plumbing_lang');
    if (saved === 'en' || saved === 'es') {
      return saved;
    }
  } catch {
    // Ignore storage errors in restricted contexts
  }

  if (
    typeof navigator !== 'undefined' &&
    navigator.language &&
    navigator.language.toLowerCase().startsWith('es')
  ) {
    return 'es';
  }
  return 'en';
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'es'>(getInitialLanguage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('sewer');
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Sync <html lang> attribute
  useEffect(() => {
    try {
      document.documentElement.lang = lang;
    } catch {
      // Ignore
    }
  }, [lang]);

  const handleToggleLang = () => {
    const nextLang = lang === 'en' ? 'es' : 'en';
    setLang(nextLang);
    try {
      localStorage.setItem('sweet_plumbing_lang', nextLang);
    } catch {
      // Ignore
    }
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] flex flex-col font-['Nunito_Sans'] selection:bg-[var(--tint)] selection:text-[var(--primary)]">
      {/* 1. HEADER */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
        mobileMenuOpen={mobileMenuOpen}
        hamburgerRef={hamburgerRef}
      />

      {/* 2. BOTTOM SHEET MENU (below 1024px) */}
      <BottomSheetMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        lang={lang}
        onToggleLang={handleToggleLang}
        hamburgerRef={hamburgerRef}
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 3. HERO */}
        <Hero lang={lang} />

        {/* 4. TRUST STRIP */}
        <TrustStrip lang={lang} />

        {/* 5. SERVICES (interactive accordion) */}
        <ServicesAccordion
          lang={lang}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* 6. WARNING SIGNS (New Section 1) */}
        <WarningSigns lang={lang} />

        {/* 7. RESIDENTIAL & COMMERCIAL CAPABILITIES (New Section 2) */}
        <ResidentialCommercial lang={lang} />

        {/* 8. HOW IT WORKS */}
        <HowItWorks lang={lang} />

        {/* 9. WHY CHOOSE SWEET PLUMBING (New Section 3) */}
        <WhyChooseUs lang={lang} />

        {/* 10. REVIEWS (Real authentic customer reviews) */}
        <Reviews lang={lang} />

        {/* 11. AREAS */}
        <Areas lang={lang} />

        {/* 12. FAQ (New Section 4) */}
        <FAQ lang={lang} />

        {/* 13. QUOTE FORM / REQUEST A QUOTE (Zod-validated) */}
        <QuoteForm
          lang={lang}
          selectedServiceId={selectedServiceId}
          onSelectService={setSelectedServiceId}
        />

        {/* 14. FINAL CTA BAND */}
        <FinalCTA lang={lang} />
      </main>

      {/* 15. FOOTER */}
      <Footer lang={lang} />

      {/* 16. STICKY MOBILE CALL BAR */}
      <StickyMobileBar lang={lang} />
    </div>
  );
}
