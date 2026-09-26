"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Heart,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { aboutParagraphs, aboutStats } from "@/data/cv";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-32 -z-10 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
      />

      <Container>
        <SectionHeading
          eyebrow="About"
          title="From ancient artifacts to reusable components"
          description="A quick look at how I got here, and what I care about as a developer."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <div className="relative">
              <div
                aria-hidden
                className="absolute left-0 top-1 bottom-1 hidden w-px bg-linear-to-b from-accent via-border to-transparent sm:block"
              />

              <div className="space-y-6 sm:pl-8">
                {aboutParagraphs.map((paragraph, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <p
                      className={`text-base leading-8 text-text-muted sm:text-lg ${
                        i === 0 ? "text-text" : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="group mt-10 overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Code2 className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-text">
                        How I like to build
                      </p>

                      <ArrowUpRight className="h-3.5 w-3.5 text-text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>

                    <p className="mt-1.5 text-sm leading-6 text-text-muted">
                      Clean interfaces, reusable components, thoughtful
                      interactions, and code that stays maintainable as a
                      project grows.
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>

          <div className="self-start">
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 sm:p-6"
                >
                 
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative">
                    <span className="mb-5 block font-mono text-[10px] text-text-muted">
                      0{index + 1}
                    </span>

                    <p className="font-display text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-sm leading-5 text-text-muted">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <FadeIn delay={0.3}>
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-dashed border-border px-5 py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Sparkles className="h-4 w-4" />
                </span>

                <p className="text-xs leading-5 text-text-muted">
                  Always curious, always experimenting, always learning.
                </p>

                <Heart className="ml-auto h-4 w-4 shrink-0 text-accent/70" />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
