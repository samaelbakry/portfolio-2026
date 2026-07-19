"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { timeline } from "@/data/cv";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="bg-bg-subtle py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Education, training & certifications"
          description="Ordered from where I started to where I'm headed next."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 max-w-2xl"
        >
          {timeline.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} isLast={i === timeline.length - 1} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
