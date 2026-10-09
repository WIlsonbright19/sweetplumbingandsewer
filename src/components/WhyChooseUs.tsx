import React from 'react';
import { motion } from 'motion/react';
import { content } from '../config/content';
import { IMAGES } from '../config/images';
import { floatingSectionVariants, floatingCardVariants } from '../utils/animations';

interface WhyChooseUsProps {
  lang: 'en' | 'es';
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const t = content[lang];

  return (
    <section id="why-choose-us" className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden bg-[var(--tint)]">
      {/* Highly visible background image of Sweet Plumbing & Sewer field crew and service truck */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.serviceSewer.src}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft tint overlay so the Sweet Plumbing truck, team and equipment remain clearly visible */}
        <div className="absolute inset-0 bg-[#DDEFE3] opacity-80" />
      </div>

      <motion.div
        variants={floatingSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mb-10 sm:mb-12 text-left">
          <p className="font-label text-[var(--ink-soft)] mb-2">
            {t.whyChooseUs.label}
          </p>
          <h2 className="font-h2 text-[var(--ink)] mb-3">
            {t.whyChooseUs.title}
          </h2>
          <p className="font-body text-[var(--ink-soft)]">
            {t.whyChooseUs.subhead}
          </p>
        </div>

        {/* 4 Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {t.whyChooseUs.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={floatingCardVariants}
              className="bg-[var(--surface)] border border-[var(--line)] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--primary)] transition-colors shadow-sm"
            >
              <div>
                <span className="font-['Outfit'] font-semibold text-xl text-[var(--primary)] mb-3 block tabular-nums">
                  0{idx + 1}
                </span>
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

        {/* Large Sweet Plumbing & Sewer Field Team & Equipment Image */}
        <motion.div
          variants={floatingCardVariants}
          className="w-full aspect-[16/7] sm:aspect-[21/8] min-h-[260px] sm:min-h-[360px] rounded-[32px] overflow-hidden bg-[var(--surface)] border border-[var(--line)] shadow-none"
        >
          <img
            src={IMAGES.serviceSewer.src}
            alt="Sweet Plumbing & Sewer team and specialized service equipment on-site in North Miami Beach"
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
