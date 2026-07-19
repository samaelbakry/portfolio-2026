import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ThemeProvider, themeInitScript } from "@/components/ui/ThemeProvider";
import { personal } from "@/data/cv";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://samaaelbakry.dev"; 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — ${personal.title}`,
    template: `%s · ${personal.name}`,
  },
  description: personal.summary,
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    personal.name,
  ],
  authors: [{ name: personal.name, url: personal.githubUrl }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personal.name} — ${personal.title}`,
    description: personal.summary,
    siteName: personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title}`,
    description: personal.summary,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before hydration to prevent a flash of the wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
