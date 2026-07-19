"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { personal } from "@/data/cv";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, var(--color-accent-soft), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(60% 50% at 50% 20%, black, transparent 80%)",
        }}
      />

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-subtle px-3 py-1.5 text-xs font-medium text-text-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              {!shouldReduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for frontend roles
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl font-semibold leading-[1.08] text-text sm:text-5xl lg:text-6xl"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-lg font-medium text-accent sm:text-xl"
          >
            {personal.title} — {personal.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg"
          >
            {personal.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              href={`/${personal.resumeFileName}`}
              download
            >
              Download CV
              <Download className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="#about"
            className="group mt-12 inline-flex items-center gap-2 text-xs font-medium text-text-muted transition-colors hover:text-accent"
          >
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 motion-safe:animate-bounce" />
            Scroll to explore
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        ></motion.div>
      </Container>
    </section>
  );
}
