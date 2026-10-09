import React from 'react';
import { motion } from 'motion/react';
import { content } from '../config/content';
import { floatingSectionVariants, floatingCardVariants } from '../utils/animations';

interface HowItWorksProps {
  lang: 'en' | 'es';
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const t = content[lang];

  return (
    <section id="how-it-works" className="w-full bg-[var(--bg)] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <motion.div
        variants={floatingSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-10 sm:mb-12 text-left">
          <p className="font-label text-[var(--ink-soft)] mb-2">
            {t.howItWorks.label}
          </p>
          <h2 className="font-h2 text-[var(--ink)]">
            {t.howItWorks.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.howItWorks.steps.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={floatingCardVariants}
              className="bg-[var(--surface)] border border-[var(--line)] rounded-[20px] p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--primary)] transition-colors"
            >
              <div>
                <span className="font-['Outfit'] font-semibold text-2xl text-[var(--primary)] tabular-nums mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-h3 text-[var(--ink)] mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-[var(--ink-soft)]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
