"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { SkillItem } from "@/types";

export function SkillBar({ item }: { item: SkillItem }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className={cn("font-medium text-text", item.placeholder && "italic text-text-muted")}>
          {item.name}
        </span>
        <span className="text-xs text-text-muted">{item.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-subtle">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${item.level}%` }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}
