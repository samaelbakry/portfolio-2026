"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Layers3,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { skillCategories } from "@/data/cv";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const categoryIcons = [Braces, Layers3, Smartphone];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-32 -z-10 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Skills"
          title="What I build with"
          description="Grouped the way I actually reach for them — from markup to mobile."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];

            return (
              <motion.div
                key={category.id}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] dark:hover:shadow-black/30 sm:p-7"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-bg text-accent transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/10">
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <span className="font-mono text-[10px] text-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-6">
                  <h3 className="text-base font-semibold tracking-tight text-text">
                    {category.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-text-muted">
                    {category.description}
                  </p>
                </div>

                <div className="relative mt-7 space-y-4">
                  {category.items.map((item) => (
                    <SkillBar key={item.name} item={item} />
                  ))}
                </div>

                <div
                  aria-hidden
                  className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-accent/60 transition-transform duration-500 group-hover:scale-x-100"
                />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-center"
        >
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-accent" />

          <p className="text-xs leading-5 text-text-muted">
            Tools change. The goal stays the same — building thoughtful,
            maintainable experiences.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
