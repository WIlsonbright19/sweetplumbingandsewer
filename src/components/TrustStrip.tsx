import React from 'react';
import { motion } from 'motion/react';
import { LICENSE_LINE, OFFERS_24_7, SPEAKS_SPANISH } from '../config/business';
import { content } from '../config/content';
import { floatingSectionVariants } from '../utils/animations';

interface TrustStripProps {
  lang: 'en' | 'es';
}

export const TrustStrip: React.FC<TrustStripProps> = ({ lang }) => {
  const t = content[lang];

  // Dynamic items based strictly on business config flags
  const items: string[] = [
    t.trustStrip.oneCall,
    t.trustStrip.basedIn,
  ];

  if (LICENSE_LINE && LICENSE_LINE.trim().length > 0) {
    items.push(LICENSE_LINE);
  }

  if (OFFERS_24_7) {
    items.push(t.trustStrip.emergency);
  }

  if (SPEAKS_SPANISH) {
    items.push(t.trustStrip.speaksSpanish);
  }

  return (
    <section className="w-full bg-[var(--bg)] pb-12 sm:pb-16">
      <motion.div
        variants={floatingSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-[20px] p-4 sm:p-6 lg:p-8">
          <div
            className={`grid gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)] ${
              items.length === 2
                ? 'grid-cols-1 sm:grid-cols-2'
                : items.length === 3
                ? 'grid-cols-1 sm:grid-cols-3'
                : items.length === 4
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
            }`}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-center text-center px-4 py-2 sm:py-0 ${
                  index > 0 ? 'pt-4 sm:pt-0' : ''
                }`}
              >
                <p className="font-['Outfit'] font-semibold text-base sm:text-lg text-[var(--ink)] tracking-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
