import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { JsonLd } from "@/components/custom/JsonLd";
import { Providers } from "@/app/providers";
import { SiteHeader } from "@/components/custom/SiteHeader";
import { SiteFooter } from "@/components/custom/SiteFooter";
import { experience } from "@/data/experience";
import { githubHref, linkedinHref } from "@/data/profile";
import { techStack } from "@/data/tech-stack";
import {
  personId,
  profileImage,
  siteDescription,
  siteLanguage,
  siteLocale,
  siteName,
  siteTitle,
  siteUrl,
  websiteId,
} from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Anas Zulkifli",
  },
  description: siteDescription,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: siteLocale,
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/** Engineering skills only; the AI tools group is not a field of expertise. */
const skills = techStack
  .filter((group) => group.title !== "AI tools")
  .flatMap((group) => group.technologies);

const currentEmployer = experience.find((entry) => entry.period.end === null);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}${profileImage}`,
      jobTitle: "Software Engineer",
      ...(currentEmployer && { worksFor: { "@type": "Organization", name: currentEmployer.company } }),
      homeLocation: {
        "@type": "Place",
        name: "Kuala Lumpur, Malaysia",
        address: { "@type": "PostalAddress", addressLocality: "Kuala Lumpur", addressCountry: "MY" },
      },
      sameAs: [linkedinHref, githubHref],
      knowsAbout: ["Software engineering", "Mobile app development", "Web development", ...skills],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: siteLanguage,
      author: { "@id": personId },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteLanguage} className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <JsonLd data={structuredData} />
        <Providers>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
