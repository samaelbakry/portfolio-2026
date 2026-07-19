"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/cv";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
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
