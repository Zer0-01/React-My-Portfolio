import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { Providers } from "@/app/providers";
import { ThemeToggle } from "@/components/custom/ThemeToggle";
import {
  siteDescription,
  siteLanguage,
  siteLocale,
  siteName,
  siteUrl,
} from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anas Zulkifli | Product-focused Developer",
    template: "%s | Anas Zulkifli",
  },
  description: siteDescription,
  authors: [{ name: "Anas Zulkifli", url: siteUrl }],
  creator: "Anas Zulkifli",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteLocale,
    url: siteUrl,
    siteName,
    title: "Anas Zulkifli | Product-focused Developer",
    description: siteDescription,
    images: [
      {
        url: "/profile-picture.jpeg",
        alt: "Anas Zulkifli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Zulkifli | Product-focused Developer",
    description: siteDescription,
    images: ["/profile-picture.jpeg"],
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Anas Zulkifli",
      url: siteUrl,
      image: `${siteUrl}/profile-picture.jpeg`,
      jobTitle: "Product-focused Developer",
      sameAs: [
        "https://www.linkedin.com/in/anas-zulkifli-mohd-jeffry",
        "https://github.com/Zer0-01",
      ],
      knowsAbout: [
        "Web development",
        "Mobile application development",
        "Product development",
        "Flutter",
        "Next.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Anas Zulkifli",
      description: siteDescription,
      inLanguage: "en-MY",
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

const serializedStructuredData = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteLanguage} className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializedStructuredData }}
        />
        <Providers>
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
