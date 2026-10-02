"use client";

import { cn } from "@/lib/utils";
import type { SkillItem } from "@/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SkillBar({ item }: { item: SkillItem }) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span
          className={cn(
            "font-medium text-text",
            item.placeholder && "italic text-text-muted"
          )}
        >
          {item.name}
        </span>

        <span className="text-xs text-text-muted">
          {item.level}%
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-subtle">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: "0%" }}
          animate={{
            width: isInView ? `${item.level}%` : "0%",
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
        />
      </div>
    </div>
  );
}