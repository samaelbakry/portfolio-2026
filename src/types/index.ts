export interface SkillItem {
  name: string;
  level: number; // 0-100, used for the animated indicator
  placeholder?: boolean; // true if this is a suggested skill, not confirmed from the CV
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  accent: string;
}

export interface TimelineEntry {
  id: string;
  type: "education" | "certification" | "training" | "experience" | "placeholder";
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  year: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  location: string;
  locationIsPlaceholder: boolean;
  resumeFileName: string;
  portfolioUrl: string;
}

export interface StatItem {
  label: string;
  value: string;
}
