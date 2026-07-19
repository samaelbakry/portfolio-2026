import type { Variants } from "framer-motion";

/** Fade + rise, used for headings and standalone blocks entering on scroll. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Parent wrapper that staggers its children's fadeUp animations. */
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/** Slightly softer fade for large images / illustrations. */
export const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Hover / tap micro-interaction shared by buttons and cards. */
export const pressable = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

export const viewportOnce = { once: true, margin: "-80px" };
