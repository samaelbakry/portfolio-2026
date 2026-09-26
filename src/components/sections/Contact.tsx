"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyButton } from "@/components/ui/CopyButton";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { personal } from "@/data/cv";
import Link from "next/link";

const contactLinks = [
  {
    icon: Mail,
    label: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: LinkedinIcon,
    label: personal.linkedin,
    href: personal.linkedinUrl,
  },
  {
    icon: GithubIcon,
    label: personal.github,
    href: personal.githubUrl,
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
     
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-72 w-72 rounded-full bg-accent/[0.035] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-72 w-72 rounded-full bg-accent/[0.035] blur-3xl"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Keep In Touch"
          title="Let's build something together"
          description="Open to frontend roles and freelance work — reach out however's easiest."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeIn className="flex flex-col">
            <div>
              <p className="max-w-md text-sm leading-7 text-text-muted sm:text-base">
                Have a project in mind, a role you'd like to discuss, or just
                want to say hello? My inbox is always open.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <div
                  key={label}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_12px_30px_-20px_rgba(0,0,0,0.2)]"
                >
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="flex min-w-0 items-center gap-3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-4 w-4" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                        {Icon === Mail
                          ? "Email"
                          : Icon === LinkedinIcon
                            ? "LinkedIn"
                            : "GitHub"}
                      </span>

                      <span className="mt-0.5 block truncate text-sm font-medium text-text transition-colors group-hover:text-accent">
                        {label}
                      </span>
                    </span>
                  </Link>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-text-muted opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100" />

                  {Icon === Mail && (
                    <CopyButton value={personal.email} />
                  )}
                </div>
              ))}

              <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted">
                    Based in
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-text">
                    {personal.location}
                    {personal.locationIsPlaceholder}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto hidden pt-10 lg:block">
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Usually responds within 24–48 hours.
              </div>
            </div>
          </FadeIn>

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
            />

            <div className="relative">
              <div className="mb-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Start a conversation
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-text">
                  Tell me about your idea.
                </h3>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium text-text-muted"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-all duration-200 placeholder:text-text-muted/60 focus:border-accent focus:ring-4 focus:ring-accent/10"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-text-muted"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-all duration-200 placeholder:text-text-muted/60 focus:border-accent focus:ring-4 focus:ring-accent/10"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-text-muted"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm leading-6 text-text outline-none transition-all duration-200 placeholder:text-text-muted/60 focus:border-accent focus:ring-4 focus:ring-accent/10"
                    placeholder="Tell me a bit about the role or project…"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="group w-full"
                >
                  {status === "sending"
                    ? "Sending…"
                    : status === "sent"
                      ? "Message sent"
                      : "Send message"}

                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </div>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-accent"
                >
                  Thanks — your message is in. I'll reply soon.
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-red-500"
                >
                  Something went wrong. Try again, or email me directly.
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
