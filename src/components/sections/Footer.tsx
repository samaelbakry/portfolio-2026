import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { personal } from "@/data/cv";
import Link from "next/link";

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
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#top" className="font-display text-base font-semibold text-text">
          {personal.firstName}
          <span className="text-accent">.</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </Container>

      <Container className="mt-8 flex flex-col items-center gap-2 border-t border-border pt-6 text-center text-xs text-text-muted sm:flex-row sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p>Built with Next.js + TypeScript + Tailwind CSS</p>
      </Container>
    </footer>
  );
}
