"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personal } from "@/data/cv";

const links = [
  { href: "#about", label: "About", number: "01" },
  { href: "#skills", label: "Skills", number: "02" },
  { href: "#projects", label: "Projects", number: "03" },
  { href: "#experience", label: "Experience", number: "04" },
  { href: "#contact", label: "Contact", number: "05" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <Container>
        <div
          className={`relative flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "rounded-2xl border border-border bg-bg/80 px-3 py-2 shadow-[0_15px_45px_-30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-4"
              : "px-0"
          }`}
        >
          <Link
            href="#top"
            className="group flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface font-mono text-xs font-semibold text-accent transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
              {personal.firstName?.charAt(0)}
            </span>

            <span className="hidden text-sm font-semibold tracking-tight text-text sm:block">
              {personal.firstName}
              <span className="text-accent">.</span>
            </span>
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-border bg-surface/80 p-1 shadow-sm backdrop-blur-md lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-xs font-medium text-text-muted transition-all duration-300 hover:bg-bg hover:text-text"
              >
                <span className="relative z-10">{link.label}</span>

                <span className="absolute inset-x-3 bottom-1 h-px origin-center scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            <Link
              href="#contact"
              className="group hidden items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_12px_30px_var(--color-accent-soft)] sm:inline-flex"
            >
              Let&apos;s talk

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:text-accent lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-0 -z-10 bg-black/20 backdrop-blur-sm lg:hidden"
                onClick={() => setOpen(false)}
              />

              <motion.div
                initial={{
                  opacity: 0,
                  y: -12,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-3 right-3 top-[calc(100%+0.75rem)] overflow-hidden rounded-3xl border border-border bg-surface/95 p-3 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:left-5 sm:right-5 lg:hidden"
              >
                <div className="grid gap-1">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.25,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-colors duration-200 hover:bg-bg-subtle"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[10px] text-text-muted">
                            {link.number}
                          </span>

                          <span className="text-sm font-medium text-text transition-colors group-hover:text-accent">
                            {link.label}
                          </span>
                        </div>

                        <ArrowUpRight className="h-4 w-4 text-text-muted opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-border px-3 pt-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                    Theme
                  </span>

                  <ThemeToggle />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
