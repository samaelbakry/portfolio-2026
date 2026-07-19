import type {
  PersonalInfo,
  Project,
  SkillCategory,
  TimelineEntry,
  StatItem,
} from "@/types";


export const personal: PersonalInfo = {
  name: "Samaa ElBakry",
  firstName: "Samaa",
  title: "Frontend Developer",
  tagline: "React.js · Next.js · TypeScript",
  summary:
    "Frontend developer who builds fast, accessible, well-structured web and mobile apps with React, Next.js and TypeScript — from authentication flows to reusable component systems.",
  email: "samaabakry68@gmail.com",
  github: "github.com/samaelbakry",
  githubUrl: "https://github.com/samaelbakry",
  linkedin: "in/sama-ibrahim-elbakry-b76b05371",
  linkedinUrl: "https://linkedin.com/in/sama-ibrahim-elbakry-b76b05371",
  location: "Egypt",
  locationIsPlaceholder: true,
  resumeFileName: "Frontend_developer_Samaa_elbakry.pdf",
  portfolioUrl: "samaaelbakry.dev", 
};

export const aboutStats: StatItem[] = [
  { label: "Years Learning", value: "1+" },
  { label: "Completed Projects", value: "3+" },
  { label: "Technologies", value: "20+" },
  { label: "Certifications", value: "4" },
];

export const aboutParagraphs: string[] = [
  "I'm a frontend developer with a background that's a little unusual for the field: a Bachelor's degree in Greek & Roman Archaeology, finished with High Distinction. What archaeology teaches you — patience, structure, and the discipline to build a clear picture from many small pieces — turned out to translate surprisingly well into building interfaces.",
  "Since moving into frontend development, I've focused on React, Next.js and TypeScript, completing intensive tracks at Mahara Tech and Route Academy. I like working across the full slice of a product: component architecture, state management, authentication, and the small performance details that make an app feel fast.",
  "I'm especially interested in design systems and reusable component libraries — building things once, building them well, and reusing them everywhere. Right now I'm looking for a frontend role where I can keep growing alongside a product team.",
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Core languages and markup",
    items: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    id: "react-ecosystem",
    title: "React Ecosystem",
    description: "Frameworks, state and data-fetching",
    items: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "React Query", level: 80 },
      { name: "Context API", level: 85 },
      { name: "React Hooks", level: 90 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Cross-platform app development",
    items: [
      { name: "React Native", level: 78 },
      { name: "Expo", level: 78 },
    ],
  },
  {
    id: "styling",
    title: "Styling",
    description: "Design systems and UI libraries",
    items: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    id: "backend-basics",
    title: "Backend Basics",
    description: "APIs and authentication",
    items: [
      { name: "REST APIs", level: 82 },
      { name: "Authentication (NextAuth)", level: 80 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Backend database platforms",
    items: [
      { name: "Supabase & Appwrite", level: 60, placeholder: true },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Day-to-day workflow",
    items: [
      { name: "NPM", level: 88 },
      { name: "Vite", level: 85 },
    ],
  },
  {
    id: "version-control",
    title: "Version Control",
    description: "Source control & collaboration",
    items: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "recurrly",
    title: "Recurrly",
    tagline: "Mobile Subscription Tracker",
    description:
      "A mobile app for keeping track of recurring subscriptions, built with React Native and Expo. Focused on a responsive, mobile-first interface with a smooth authentication flow.",
    technologies: ["React Native", "Expo", "TypeScript", "Authentication"],
    features: [
      "Subscription tracking with renewal reminders",
      "Authentication workflow for account access",
      "Mobile-first, responsive interface",
      "Centralized state management across screens",
    ],
    challenges: [
      "Structuring navigation and state for a smooth cross-platform experience",
      "Designing a mobile-first UI that stays clear on different screen sizes",
    ],
    githubUrl: "https://github.com/samaelbakry/Recurlly",
    liveUrl: undefined,
    image: "/images/projects/recurrly.svg",
    accent: "#FE8C00",
  },
  {
    slug: "gocart",
    title: "GoCart",
    tagline: "E-Commerce Application",
    description:
      "A scalable e-commerce platform built with Next.js and TypeScript, using the App Router and NextAuth for secure, protected checkout and account flows.",
    technologies: ["Next.js", "TypeScript", "NextAuth", "Tailwind CSS", "App Router"],
    features: [
      "NextAuth-based authentication with protected routes",
      "App Router architecture for scalable routing",
      "Reusable, composable UI components",
      "Tailwind CSS design system",
    ],
    challenges: [
      "Protecting checkout and account routes with session-aware middleware",
      "Keeping the component library consistent across a growing catalog of pages",
    ],
    githubUrl: "https://github.com/samaelbakry/E-commerce-application",
    liveUrl: "https://e-commerce-gocart.vercel.app/",
    image: "/images/projects/gocart.svg",
    accent: "#FE8C00",
  },
  {
    slug: "echo",
    title: "Echo",
    tagline: "Social Media Application",
    description:
      "A responsive social platform built with React and Vite, with a dynamic feed, authentication, and a set of reusable UI components powering the whole app.",
    technologies: ["React", "Vite", "REST APIs", "Authentication"],
    features: [
      "Dynamic, API-driven content feed",
      "Authentication and session handling",
      "Reusable UI component library",
      "Fully responsive layout",
    ],
    challenges: [
      "Keeping the feed responsive and fast while fetching live API data",
      "Building a component library flexible enough for multiple feed layouts",
    ],
    githubUrl: "https://github.com/samaelbakry/Echo-v.2",
    liveUrl: "https://echo-v-2.vercel.app/",
    image: "/images/projects/echo.svg",
    accent: "#FE8C00",
  },
];

export const timeline: TimelineEntry[] = [
  {
    id: "education",
    type: "education",
    title: "Bachelor of Arts in Greek & Roman Archaeology",
    organization: "Very Good (High Distinction)",
    period: "2021 – 2025",
    description:
      "Four-year degree focused on research, analysis and structured argument — a foundation that carries directly into methodical frontend development.",
  },
  {
    id: "mahara-tech",
    type: "training",
    title: "Frontend Track",
    organization: "Mahara Tech",
    period: "2025",
    description:
      "Intensive frontend track covering modern JavaScript, React fundamentals, and responsive, accessible UI development.",
  },
  {
    id: "route-academy",
    type: "certification",
    title: "Frontend Diploma",
    organization: "Route Academy",
    period: "2026",
    description:
      "Diploma programme covering React, Next.js, TypeScript, state management and real-world project building.",
  },
   {
    id: "udemy-react",
    type: "certification",
    title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    organization: "Udemy • Jonas Schmedtmann",
    period: "July 2026",
    description:
      "Completed an 84-hour comprehensive course covering modern React, Next.js, performance optimization, advanced patterns",
  },
  {
  id: "udemy-react-native",
  type: "certification",
  title: "React Native - The Practical Guide",
  organization: "Udemy • Maximilian Schwarzmüller",
  period: "2026",
  description:
    "Completed a 28-hour comprehensive course covering React Native, Expo, native iOS and Android development, Expo Router, navigation, device APIs, push notifications, state management with Redux, React Hooks, and publishing production-ready mobile applications.",
}
];
