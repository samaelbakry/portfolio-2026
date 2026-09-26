import { Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { personal } from "@/data/cv";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: GithubIcon, href: personal.githubUrl, label: "GitHub" },
  { icon: LinkedinIcon, href: personal.linkedinUrl, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"
      />

      <Container className="relative py-12 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs">
            <Link
              href="#top"
              className="group inline-flex items-center text-lg font-semibold tracking-tight text-text"
            >
              {personal.firstName}
              <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">
                .
              </span>
            </Link>

            <p className="mt-3 text-sm leading-6 text-text-muted">
              Frontend developer focused on building clean, thoughtful, and
              maintainable digital experiences.
            </p>

            <Link
              href="#contact"
              className="group mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent"
            >
              Let&apos;s work together
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-16">
            <div>
              <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted">
                Navigate
              </p>

              <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex w-fit items-center gap-1 text-xs font-medium text-text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}

                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-text-muted">
                Connect
              </p>

              <div className="flex items-center gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto:")
                        ? undefined
                        : "noreferrer noopener"
                    }
                    aria-label={label}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/10 hover:text-accent hover:shadow-[0_10px_25px_-15px_var(--color-accent-soft)]"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Built with
            <span className="text-text">Next.js</span>
            <span className="text-border">·</span>
            <span className="text-text">TypeScript</span>
            <span className="text-border">·</span>
            <span className="text-text">Tailwind CSS</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
