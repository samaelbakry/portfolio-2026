"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { Badge } from "./Badge";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.16)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-subtle">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-text">{project.title}</h3>
          <p className="text-sm text-accent">{project.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-text-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="grid gap-3 border-t border-border pt-4 text-sm">
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-text-muted">
              Features
            </p>
            <ul className="space-y-1 text-text-muted">
              {project.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-text-muted">
              Challenges solved
            </p>
            <ul className="space-y-1 text-text-muted">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto flex gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-accent px-3 py-2 text-xs font-medium text-black transition-colors hover:bg-accent-dark"
            >
              Live Demo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span
              title="Add a live demo link in src/data/cv.ts"
              className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-xl bg-bg-subtle px-3 py-2 text-xs font-medium text-text-muted"
            >
              Live Demo soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
