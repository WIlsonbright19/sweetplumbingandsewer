import React from 'react';
import { motion } from 'motion/react';
import { OFFERS_24_7, PHONE_TEL, SPEAKS_SPANISH } from '../config/business';
import { content } from '../config/content';
import { IMAGES } from '../config/images';
import { heroFloatVariants, floatingCardVariants } from '../utils/animations';

interface HeroProps {
  lang: 'en' | 'es';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = content[lang];
  const heroImg = IMAGES.heroImage;

  // Build the hero sentence with strict max 22 words limit
  const baseSentence = t.hero.sentence;
  const fullSentence = SPEAKS_SPANISH
    ? `${baseSentence} ${t.hero.spanishSentenceAppend}`
    : baseSentence;

  return (
    <section className="relative w-full bg-[var(--bg)] min-h-[100vh] lg:min-h-screen flex items-center justify-center pt-2 sm:pt-4 pb-8 sm:pb-12">
      <motion.div
        variants={heroFloatVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 h-full flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
          {/* Left Column: Text & Hero Phone & CTAs */}
          <motion.div
            variants={floatingCardVariants}
            className="lg:col-span-6 flex flex-col items-start text-left justify-center py-2 sm:py-4"
          >
            {/* Optional 24/7 status label */}
            {OFFERS_24_7 && (
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] animate-pulse" />
                <span className="font-['Nunito_Sans'] font-semibold text-xs tracking-wider uppercase text-[var(--primary)]">
                  {t.hero.emergencyBadge}
                </span>
              </div>
            )}

            {/* Location & category label */}
            <p className="font-label text-[var(--ink-soft)] mb-2">
              {t.hero.locationLabel}
            </p>

            {/* Display H1 */}
            <h1 className="font-display-hero text-[var(--ink)] mb-3">
              {t.hero.title}
            </h1>

            {/* Single explanatory sentence (max 22 words) */}
            <p className="font-body text-[var(--ink-soft)] mt-2 mb-6 max-w-xl">
              {fullSentence}
            </p>

            {/* Primary & Secondary Buttons: "Call us" and "Book or contact us" */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={`tel:${PHONE_TEL}`}
                className="btn-primary-pill w-full sm:w-auto text-center"
              >
                {t.buttons.callNow}
              </a>
              <a
                href="#quote-form"
                className="btn-secondary-pill w-full sm:w-auto text-center"
              >
                {t.buttons.getQuote}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Photo (Large image holder filling section height) */}
          <motion.div
            variants={floatingCardVariants}
            className="lg:col-span-6 w-full h-full flex items-center justify-center mt-2 lg:mt-0"
          >
            <div className="w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[1/1] xl:aspect-[4/3] min-h-[360px] sm:min-h-[460px] lg:min-h-[560px] xl:min-h-[620px] rounded-[32px] overflow-hidden bg-[var(--tint)] border border-[var(--line)] shadow-none">
              <img
                src={heroImg.src}
                alt={heroImg.alt}
                width={heroImg.width}
                height={heroImg.height}
                decoding="async"
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
