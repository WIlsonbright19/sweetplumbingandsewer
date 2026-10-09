import React from 'react';
import { motion } from 'motion/react';
import { AREAS, PHONE_TEL } from '../config/business';
import { content } from '../config/content';
import { IMAGES } from '../config/images';
import { floatingSectionVariants, floatingCardVariants } from '../utils/animations';

interface AreasProps {
  lang: 'en' | 'es';
}

export const Areas: React.FC<AreasProps> = ({ lang }) => {
  const t = content[lang];
  const areaImg = IMAGES.areaImage;

  return (
    <section id="areas" className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-[var(--bg)]">
      {/* Highly visible panoramic aerial background of North Miami Beach */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.areaBackground.src}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Pale sage tint overlay ensuring the neighborhood and waterways are distinctly visible */}
        <div className="absolute inset-0 bg-[#F3F7F2] opacity-80" />
      </div>

      <motion.div
        variants={floatingSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Information Card */}
          <motion.div
            variants={floatingCardVariants}
            className="lg:col-span-6 bg-[var(--surface)] border border-[var(--line)] rounded-[24px] p-6 sm:p-10 flex flex-col items-start text-left"
          >
            <p className="font-label text-[var(--ink-soft)] mb-2">
              {t.areas.label}
            </p>
            <h2 className="font-h2 text-[var(--ink)] mb-4">
              {t.areas.title}
            </h2>
            <p className="font-body text-[var(--ink-soft)] mb-6">
              {t.areas.description}
            </p>

            {/* Area chips/list (sturdy rounded pills) */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {AREAS.map((area, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--tint)] border border-[var(--line)] text-[var(--ink)] font-['Nunito_Sans'] font-semibold text-sm"
                >
                  <svg
                    className="w-4 h-4 text-[var(--primary)] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{area}</span>
                </div>
              ))}
            </div>

            {/* Quick action button */}
            <a
              href={`tel:${PHONE_TEL}`}
              className="btn-secondary-pill"
            >
              {t.buttons.confirmArea}
            </a>
          </motion.div>

          {/* Right Column: Large Service Van Image in North Miami Beach */}
          <motion.div
            variants={floatingCardVariants}
            className="lg:col-span-6 w-full"
          >
            <div className="w-full aspect-[4/3] min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] rounded-[32px] overflow-hidden bg-[var(--surface)] border border-[var(--line)]">
              <img
                src={areaImg.src}
                alt={areaImg.alt}
                width={areaImg.width}
                height={areaImg.height}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
