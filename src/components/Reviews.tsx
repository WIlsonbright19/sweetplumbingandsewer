import React from 'react';
import { motion } from 'motion/react';
import { GOOGLE_REVIEWS_URL } from '../config/business';
import { content } from '../config/content';
import { floatingSectionVariants, floatingCardVariants } from '../utils/animations';

interface ReviewsProps {
  lang: 'en' | 'es';
}

export const Reviews: React.FC<ReviewsProps> = ({ lang }) => {
  const t = content[lang];

  return (
    <section id="reviews" className="w-full bg-[var(--bg)] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <motion.div
        variants={floatingSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <p className="font-label text-[var(--ink-soft)] mb-2">
              {t.reviews.label}
            </p>
            <h2 className="font-h2 text-[var(--ink)]">
              {t.reviews.title}
            </h2>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-pill self-start sm:self-auto inline-flex items-center gap-2"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.reviews.items.map((rev, index) => (
            <motion.div
              key={index}
              variants={floatingCardVariants}
              className="bg-[var(--surface)] border border-[var(--line)] rounded-[20px] p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--primary)] transition-colors"
            >
              <div className="mb-6">
                <span className="inline-block text-xs font-['Nunito_Sans'] font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">
                  {rev.service}
                </span>
                <p className="font-body text-[var(--ink)] text-base leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="border-t border-[var(--line)] pt-4 flex items-center justify-between">
                <div>
                  <p className="font-['Outfit'] font-semibold text-base text-[var(--ink)]">
                    {rev.author}
                  </p>
                  <p className="font-['Nunito_Sans'] text-xs text-[var(--ink-soft)]">
                    {rev.location}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-[var(--tint)] flex items-center justify-center text-[var(--primary)] shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
