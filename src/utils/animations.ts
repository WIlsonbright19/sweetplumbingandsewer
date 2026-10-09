import type { Variants } from 'motion/react';

/**
 * Subtle floating entrance animation variants for major section containers.
 * Enhances visual depth with a soft upward glide and slight scale transition.
 */
export const floatingSectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.99,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Gentle ease-out curve
    },
  },
};

/**
 * Container variant with stagger effect for child elements inside sections.
 */
export const floatingStaggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

/**
 * Child element float-in variant for cards and content blocks.
 */
export const floatingCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Subtle hero specific floating entrance.
 */
export const heroFloatVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
