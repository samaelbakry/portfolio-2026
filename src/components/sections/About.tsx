"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { aboutParagraphs, aboutStats } from "@/data/cv";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="From ancient artifacts to reusable components"
          description="A quick look at how I got here, and what I care about as a developer."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-text-muted sm:text-lg">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4 self-start"
          >
            {aboutStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <p className="font-display text-3xl font-semibold text-accent">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
