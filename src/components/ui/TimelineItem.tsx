"use client";

import { fadeUp } from "@/lib/motion";
import type { TimelineEntry } from "@/types";
import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap, Plus } from "lucide-react";

const iconByType: Record<TimelineEntry["type"], React.ComponentType<{ className?: string }>> = {
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
    <motion.div variants={fadeUp} className="relative flex gap-6 pb-10 last:pb-0">
      <div className="flex flex-col items-center">
        <span
          className= "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent-dark dark:text-accent">
          <Icon className="h-4 w-4" />
        </span>
        {!isLast && <span className="mt-1 w-px flex-1 bg-border" />}
      </div>

      <div className="pb-2">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold text-text">{entry.title}</h3>
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            {entry.period}
          </span>
        </div>
        <p className="mt-0.5 text-sm text-text-muted">{entry.organization}</p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-muted">
          {entry.description}
        </p>
      </div>
    </motion.div>
  );
}
