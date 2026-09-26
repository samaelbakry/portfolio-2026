"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/cv";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
        <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-32 -z-10 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
      />
      <Container>
        <SectionHeading
          eyebrow="Hands-on Experience"
          title="Projects I've shipped"
          description="Three builds that cover mobile, e-commerce, and social — each with real authentication, state management, and reusable components."
        />


        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
