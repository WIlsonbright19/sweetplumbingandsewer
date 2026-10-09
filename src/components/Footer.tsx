import React from 'react';
import {
  ADDRESS_LINE,
  GOOGLE_REVIEWS_URL,
  HOURS_LINE,
  LICENSE_LINE,
  NAME,
  OFFERS_24_7,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '../config/business';
import { content } from '../config/content';

interface FooterProps {
  lang: 'en' | 'es';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = content[lang];

  return (
    <footer className="w-full bg-[var(--deep)] border-t border-[rgba(207,224,211,0.15)] text-white pt-16 pb-28 lg:pb-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[rgba(207,224,211,0.12)]">
          {/* Brand & Address */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-['Outfit'] font-semibold text-2xl text-white tracking-tight mb-3">
              {NAME}
            </span>
            <p className="font-['Nunito_Sans'] text-sm text-[#DDEFE3] opacity-85 leading-relaxed max-w-sm mb-4">
              {ADDRESS_LINE}
            </p>

            <a
              href={`tel:${PHONE_TEL}`}
              className="font-['Outfit'] font-semibold text-xl text-[var(--sun)] hover:underline inline-block mb-3"
            >
              {PHONE_DISPLAY}
            </a>

            {/* Optional Hours line */}
            {HOURS_LINE && HOURS_LINE.trim().length > 0 && (
              <p className="font-['Nunito_Sans'] text-xs text-[#DDEFE3] opacity-80 mb-2">
                {HOURS_LINE}
              </p>
            )}

            {/* Optional License line */}
            {LICENSE_LINE && LICENSE_LINE.trim().length > 0 && (
              <p className="font-['Nunito_Sans'] text-xs text-[#DDEFE3] opacity-80 mb-2">
                {LICENSE_LINE}
              </p>
            )}

            {/* Optional 24/7 Emergency footer line */}
            {OFFERS_24_7 && (
              <p className="font-['Nunito_Sans'] font-semibold text-xs text-[var(--sun)] tracking-wide uppercase mt-1">
                {t.footer.emergencyLine}
              </p>
            )}
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-4 flex flex-col">
            <p className="font-label text-[#DDEFE3] opacity-60 mb-4">
              {lang === 'es' ? 'Navegación' : 'Navigation'}
            </p>
            <ul className="space-y-3 font-['Nunito_Sans'] text-sm font-semibold">
              <li>
                <a
                  href="#services"
                  className="text-white hover:text-[var(--sun)] transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-white hover:text-[var(--sun)] transition-colors"
                >
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-white hover:text-[var(--sun)] transition-colors"
                >
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  className="text-white hover:text-[var(--sun)] transition-colors"
                >
                  {t.nav.areas}
                </a>
              </li>
              <li>
                <a
                  href="#quote-form"
                  className="text-white hover:text-[var(--sun)] transition-colors"
                >
                  {t.buttons.getQuote}
                </a>
              </li>
            </ul>
          </div>

          {/* External links & Reviews */}
          <div className="lg:col-span-3 flex flex-col">
            <p className="font-label text-[#DDEFE3] opacity-60 mb-4">
              {t.reviews.label}
            </p>
            <p className="font-['Nunito_Sans'] text-xs text-[#DDEFE3] opacity-80 mb-4 leading-relaxed">
              {t.reviews.googlePrompt}
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-['Nunito_Sans'] text-sm text-[var(--sun)] hover:underline font-semibold"
            >
              <span>{t.buttons.readGoogleReviews}</span>
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Nunito_Sans'] text-[#DDEFE3] opacity-70">
          <p>
            © {new Date().getFullYear()} {NAME}. {t.footer.rightsReserved}
          </p>
          <p>
            {ADDRESS_LINE}
          </p>
        </div>
      </div>
    </footer>
  );
};
