import React from 'react';
import { motion } from 'motion/react';
import { content } from '../config/content';
import { IMAGES } from '../config/images';
import { floatingSectionVariants, floatingCardVariants } from '../utils/animations';

interface ResidentialCommercialProps {
  lang: 'en' | 'es';
}

const PROPERTY_IMAGES = [
  {
    src: IMAGES.heroImage.src,
    alt: 'Sweet Plumbing & Sewer technician inspecting residential pipes',
  },
  {
    src: IMAGES.serviceSewer.src,
    alt: 'Sweet Plumbing & Sewer crew performing multi-family sewer line repairs',
  },
  {
    src: IMAGES.commercialWork.src,
    alt: 'Sweet Plumbing & Sewer commercial plumbing service and valve maintenance',
  },
];

export const ResidentialCommercial: React.FC<ResidentialCommercialProps> = ({ lang }) => {
  const t = content[lang];

  return (
    <section id="property-types" className="w-full bg-[var(--tint)] py-16 sm:py-20 lg:py-28">
      <motion.div
        variants={floatingSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mb-10 sm:mb-12 text-left">
          <p className="font-label text-[var(--ink-soft)] mb-2">
            {t.residentialCommercial.label}
          </p>
          <h2 className="font-h2 text-[var(--ink)] mb-3">
            {t.residentialCommercial.title}
          </h2>
          <p className="font-body text-[var(--ink-soft)]">
            {t.residentialCommercial.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.residentialCommercial.items.map((item, idx) => {
            const img = PROPERTY_IMAGES[idx] || PROPERTY_IMAGES[0];

            return (
              <motion.div
                key={idx}
                variants={floatingCardVariants}
                className="bg-[var(--surface)] border border-[var(--line)] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Large Image Holder about Sweet Plumbing & Sewer */}
                  <div className="w-full aspect-[16/10] min-h-[220px] rounded-2xl overflow-hidden bg-[var(--tint)] border border-[var(--line)] mb-5">
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={1400}
                      height={1050}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--tint)] border border-[var(--line)] text-xs font-['Nunito_Sans'] font-semibold text-[var(--ink)] uppercase tracking-wider mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-h3 text-[var(--ink)] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--ink-soft)] mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 border-t border-[var(--line)] pt-4">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-sm font-['Nunito_Sans'] text-[var(--ink)]">
                        <svg
                          className="w-4 h-4 text-[var(--primary)] shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--line)]">
                  <a
                    href="#quote-form"
                    className="link-primary text-sm font-['Nunito_Sans'] inline-flex items-center gap-1"
                  >
                    <span>{t.buttons.getQuote}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
