"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyButton } from "@/components/ui/CopyButton";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { personal } from "@/data/cv";
import Link from "next/link";

const contactLinks = [
  { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
  { icon: LinkedinIcon, label: personal.linkedin, href: personal.linkedinUrl },
  { icon: GithubIcon, label: personal.github, href: personal.githubUrl },
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-bg-subtle py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Keep In Touch"
          title="Let's build something together"
          description="Open to frontend roles and freelance work — reach out however's easiest."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="space-y-4">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4"
              >
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="flex min-w-0 items-center gap-3 text-sm font-medium text-text hover:text-accent"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark dark:text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="truncate">{label}</span>
                </Link>
                {Icon === Mail && <CopyButton value={personal.email} />}
              </div>
            ))}

            <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark dark:text-accent">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-text">
                {personal.location}
                {personal.locationIsPlaceholder}
              </span>
            </div>
          </FadeIn>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                placeholder="Tell me a bit about the role or project…"
              />
            </div>

            <Button type="submit" disabled={status === "sending"} className="w-full">
              {status === "sending" ? "Sending…" : "Send message"}
              <Send className="h-4 w-4" />
            </Button>

            {status === "sent" && (
              <p className="text-sm text-accent">Thanks — your message is in. I&apos;ll reply soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Try again, or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
