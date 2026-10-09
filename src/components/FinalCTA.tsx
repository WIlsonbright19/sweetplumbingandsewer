import React from 'react';
import { motion } from 'motion/react';
import { PHONE_DISPLAY, PHONE_TEL } from '../config/business';
import { content } from '../config/content';
import { IMAGES } from '../config/images';
import { floatingSectionVariants } from '../utils/animations';

interface FinalCTAProps {
  lang: 'en' | 'es';
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ lang }) => {
  const t = content[lang];

  return (
    <section className="relative w-full bg-[var(--deep)] min-h-[75vh] flex items-center justify-center py-20 sm:py-24 lg:py-32 text-center text-white overflow-hidden">
      {/* Prominent, very visible background image of commercial pipe network */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.finalCtaBackground.src}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Measured deep forest overlay allowing copper pipe lines and gauges to be distinctly visible */}
        <div className="absolute inset-0 bg-[#0F3D2E] opacity-70" />
      </div>

      <motion.div
        variants={floatingSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="font-label text-[#DDEFE3] opacity-95 mb-3 tracking-widest uppercase">
            {t.cta.label}
          </p>

          <h2 className="font-h2 text-white mb-6">
            {t.cta.title}
          </h2>

          {/* Giant phone number in Phone display style in --sun */}
          <div className="my-4 sm:my-6 w-full">
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-phone-display text-[var(--sun)] hover:opacity-90 transition-opacity block no-underline"
              aria-label={`${t.buttons.callNow} ${PHONE_DISPLAY}`}
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Primary & Secondary Buttons: "Call us" and "Book or contact us" */}
          <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={`tel:${PHONE_TEL}`}
              className="btn-primary-pill w-full sm:w-auto text-center"
            >
              {t.buttons.callNow}
            </a>
            <a
              href="#quote-form"
              className="btn-secondary-on-deep w-full sm:w-auto text-center"
            >
              {t.buttons.getQuote}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
