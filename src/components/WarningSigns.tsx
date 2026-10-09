import React from 'react';
import { motion } from 'motion/react';
import { content } from '../config/content';
import { floatingSectionVariants, floatingCardVariants } from '../utils/animations';

interface WarningSignsProps {
  lang: 'en' | 'es';
}

export const WarningSigns: React.FC<WarningSignsProps> = ({ lang }) => {
  const t = content[lang];

  return (
    <section id="warning-signs" className="w-full bg-[var(--bg)] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <motion.div
        variants={floatingSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mb-10 sm:mb-12 text-left">
          <p className="font-label text-[var(--ink-soft)] mb-2">
            {t.warningSigns.label}
          </p>
          <h2 className="font-h2 text-[var(--ink)] mb-3">
            {t.warningSigns.title}
          </h2>
          <p className="font-body text-[var(--ink-soft)]">
            {t.warningSigns.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.warningSigns.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={floatingCardVariants}
              className="bg-[var(--surface)] border border-[var(--line)] rounded-[20px] p-6 flex flex-col justify-between hover:border-[var(--primary)] transition-colors shadow-none"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[var(--tint)] text-[var(--primary)] flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <h3 className="font-['Outfit'] font-semibold text-lg text-[var(--ink)] mb-2.5">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-[var(--ink-soft)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
