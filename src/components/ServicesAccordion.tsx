import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { content, ServiceItem } from '../config/content';
import { IMAGES } from '../config/images';
import { floatingSectionVariants } from '../utils/animations';

interface ServicesAccordionProps {
  lang: 'en' | 'es';
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const ServicesAccordion: React.FC<ServicesAccordionProps> = ({
  lang,
  onSelectServiceForQuote,
}) => {
  const t = content[lang];
  const [openIndex, setOpenIndex] = useState<number>(0);

  const activeService = t.services.items[openIndex] || t.services.items[0];
  const activeImage = IMAGES[activeService.imageKey] || IMAGES.serviceSewer;

  const handleRequestService = (e: React.MouseEvent, item: ServiceItem) => {
    e.preventDefault();
    onSelectServiceForQuote(item.id);
    const formElement = document.getElementById('quote-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="w-full bg-[var(--tint)] min-h-[90vh] lg:min-h-screen flex items-center py-16 sm:py-20 lg:py-28 overflow-hidden">
      <motion.div
        variants={floatingSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header with Intersection Observer Fade-in / Slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-12"
        >
          <p className="font-label text-[var(--ink-soft)] mb-2">
            {t.services.label}
          </p>
          <h2 className="font-h2 text-[var(--ink)]">
            {t.services.title}
          </h2>
        </motion.div>

        {/* 2-Column Split: Accordion at Left, Large Image at Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Exactly 6 Accordion Items with subtle entry animations */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-[var(--line)] border-y border-[var(--line)] bg-[var(--surface)] rounded-[20px] overflow-hidden">
            {t.services.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `service-panel-${item.id}`;
              const headerId = `service-header-${item.id}`;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="transition-colors"
                >
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-[var(--bg)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      <span className="font-['Outfit'] font-semibold text-base sm:text-lg text-[var(--primary)] shrink-0 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-h3 text-[var(--ink)] tracking-tight truncate">
                        {item.name}
                      </h3>
                    </div>

                    <span
                      className="w-8 h-8 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] flex items-center justify-center font-['Outfit'] font-semibold text-lg shrink-0 transition-transform"
                      aria-hidden="true"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Panel with smooth expand transition */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden bg-[var(--surface)] border-t border-[var(--line)]"
                      >
                        <div className="px-6 sm:px-8 pb-6 pt-3">
                          <p className="font-body text-[var(--ink-soft)] mb-4">
                            {item.description}
                          </p>
                          <a
                            href="#quote-form"
                            onClick={(e) => handleRequestService(e, item)}
                            className="link-primary text-base inline-flex items-center gap-1 font-['Nunito_Sans']"
                          >
                            <span>{t.buttons.requestThis}</span>
                            <span aria-hidden="true">→</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Synchronized Large Service Image with Observer entry animation */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full sticky top-28"
          >
            <div className="w-full aspect-[4/3] min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] rounded-[32px] overflow-hidden bg-[var(--surface)] border border-[var(--line)] shadow-none">
              <img
                key={activeService.imageKey}
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeImage.width}
                height={activeImage.height}
                decoding="async"
                loading="lazy"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="mt-4 px-2">
              <p className="font-['Outfit'] font-semibold text-lg text-[var(--ink)]">
                {activeService.name}
              </p>
              <p className="font-['Nunito_Sans'] text-base text-[var(--ink-soft)] mt-1">
                {activeService.description}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
