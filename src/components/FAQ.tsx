import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { content } from '../config/content';
import { floatingSectionVariants, floatingCardVariants } from '../utils/animations';

interface FAQProps {
  lang: 'en' | 'es';
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const t = content[lang];
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="w-full bg-[var(--bg)] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <motion.div
        variants={floatingSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mb-10 sm:mb-12 text-left">
          <p className="font-label text-[var(--ink-soft)] mb-2">
            {t.faq.label}
          </p>
          <h2 className="font-h2 text-[var(--ink)] mb-3">
            {t.faq.title}
          </h2>
          <p className="font-body text-[var(--ink-soft)]">
            {t.faq.subhead}
          </p>
        </div>

        <motion.div
          variants={floatingCardVariants}
          className="max-w-3xl divide-y divide-[var(--line)] border-y border-[var(--line)] bg-[var(--surface)] rounded-[20px] overflow-hidden"
        >
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const faqHeaderId = `faq-header-${idx}`;
            const faqPanelId = `faq-panel-${idx}`;

            return (
              <div key={idx} className="transition-colors">
                <button
                  id={faqHeaderId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  aria-controls={faqPanelId}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-[var(--bg)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
                >
                  <span className="font-['Outfit'] font-semibold text-base sm:text-lg text-[var(--ink)]">
                    {item.question}
                  </span>
                  <span
                    className="w-8 h-8 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] flex items-center justify-center font-['Outfit'] font-semibold text-lg shrink-0 transition-transform"
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={faqPanelId}
                      role="region"
                      aria-labelledby={faqHeaderId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-[var(--surface)] border-t border-[var(--line)]"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-2">
                        <p className="font-body text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
