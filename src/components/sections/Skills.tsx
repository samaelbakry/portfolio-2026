"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { skillCategories } from "@/data/cv";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function Skills() {
  return (
    <section id="skills" className="bg-bg-subtle py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="What I build with"
          description="Grouped the way I actually reach for them — from markup to mobile."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.12)]"
            >
              <h3 className="text-base font-semibold text-text">{category.title}</h3>
              <p className="mt-1 text-xs text-text-muted">{category.description}</p>

              <div className="mt-5 space-y-4">
                {category.items.map((item) => (
                  <SkillBar key={item.name} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
