"use client";

import { fadeUp } from "@/lib/motion";
import type { TimelineEntry } from "@/types";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Plus,
} from "lucide-react";

const iconByType: Record<
  TimelineEntry["type"],
  React.ComponentType<{ className?: string }>
> = {
  education: GraduationCap,
  certification: Award,
  training: BookOpen,
  experience: Briefcase,
  placeholder: Plus,
};

export function TimelineItem({
  entry,
  isLast,
}: {
  entry: TimelineEntry;
  isLast: boolean;
}) {
  const Icon = iconByType[entry.type];

  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex gap-5 pb-10 sm:gap-7"
    >
      <div className="relative flex w-10 shrink-0 flex-col items-center">
        <motion.span
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent shadow-[0_0_0_6px_var(--color-bg)] transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/15"
        >
          <Icon className="h-4 w-4" />

          <span className="absolute inset-0 rounded-full bg-accent/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        </motion.span>

        {!isLast && (
          <span className="mt-1 w-px flex-1 bg-linear-to-b from-accent/30 via-border to-border" />
        )}
      </div>

      <div className="min-w-0 flex-1 pb-2">
        <div className="rounded-2xl border border-transparent p-2 transition-all duration-300 group-hover:border-border group-hover:bg-surface/60 group-hover:px-5 group-hover:py-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-base font-semibold tracking-tight text-text sm:text-lg">
              {entry.title}
            </h3>

            <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
              {entry.period}
            </span>
          </div>

          <p className="mt-1 text-sm font-medium text-text-muted">
            {entry.organization}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-text-muted">
            {entry.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
