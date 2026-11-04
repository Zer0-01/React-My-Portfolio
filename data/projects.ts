export interface ProjectLinks {
  appStore?: string;
  googlePlay?: string;
  live?: string;
  github?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One line: what it is and why it matters. Used on the home page, project header and metadata. */
  summary: string;
  /** Two or three plain sentences for the project page. */
  overview: string;
  role: string;
  /** Who it was for or where it was built, e.g. "Aonic" or "Personal project". */
  context: string;
  year: number;
  projectType: "mobile" | "web";
  platform: string;
  /** Only what exists today; planned work belongs in the overview. */
  built: string[];
  outcome?: string;
  technologies: string[];
  /** Mobile screens are shown side by side at their real portrait ratio; web screens one at a time. */
  format: "mobile" | "desktop";
  screens: string[];
  video?: string;
  links: ProjectLinks;
}

const personalContext = "Personal project";

export const projects: Project[] = [
  {
    slug: "aonic-agriculture",
    title: "Aonic Agriculture",
    summary: "Shopping, credit and offline field tools for farmers, in one app.",
    overview:
      "A mobile app for farmers and plantation owners to buy agrochemicals, pay with flexible credit, run field calculations and find branches. The calculator works offline for remote fields.",
    role: "Mobile Developer",
    context: "Aonic",
    year: 2025,
    projectType: "mobile",
    platform: "iOS and Android",
    built: [
      "Product catalogue, cart and checkout",
      "Aonic Flex buy-now-pay-later credit, with credit details",
      "Spray, tank and unit calculator that works offline",
      "Branch finder with maps and operator contact",
    ],
    outcome: "Farmers can buy supplies and run field calculations in one app, even in remote areas.",
    technologies: ["Flutter", "Bloc", "Dio", "AutoRoute", "Firebase", "Google Maps"],
    format: "mobile",
    screens: [1, 2, 3, 4, 5].map((n) => `/projects/aonic-agriculture/photo_${n}.jpg`),
    links: {
      appStore: "https://apps.apple.com/my/app/aonic-agriculture/id6746027397",
      googlePlay: "https://play.google.com/store/apps/details?id=com.aonic.aonagri&hl=en",
    },
  },
  {
    slug: "lq-studio",
    title: "LQ Studio",
    summary: "Replaced WhatsApp back-and-forth with online session booking.",
    overview:
      "A booking platform for a photography studio. Customers choose a package, theme and add-ons and book an open slot. The studio manages bookings and customers from an admin side.",
    role: "Co-founder & Developer",
    context: "LakarSoft",
    year: 2025,
    projectType: "web",
    platform: "Web",
    built: [
      "Guided booking with packages, themes and add-ons",
      "Availability and booking management",
      "Customer details",
      "Booking tracking and email notifications",
    ],
    outcome: "Replaced manual WhatsApp coordination, with fewer scheduling conflicts and less repeated messaging.",
    technologies: ["Next.js", "Go", "PostgreSQL"],
    format: "desktop",
    screens: [1, 2, 3, 4, 5, 6].map((n) => `/projects/lqstudio/lqstudio_${n}.png`),
    links: {},
  },
  {
    slug: "e-wedding",
    title: "Wedding RSVP",
    summary: "My own wedding invitation: details, RSVPs and messages in one link.",
    overview:
      "A digital invitation I built for my own wedding. Guests see the venue, schedule and a countdown, then RSVP, leave a message and find gift details.",
    role: "Web Developer",
    context: personalContext,
    year: 2025,
    projectType: "web",
    platform: "Web",
    built: [
      "Venue and event details with a countdown",
      "RSVP form",
      "Guest message board",
      "Gift details",
      "Layout that works on phones and desktop",
    ],
    outcome: "Replaced printed invitations, with RSVPs and guest messages in one place.",
    technologies: ["React", "Firebase", "Bootstrap", "Vite"],
    format: "desktop",
    // Only the 16:9 captures, so every frame keeps the same ratio.
    screens: [1, 2, 3, 6, 7].map((n) => `/projects/e-wedding/photo_${n}.png`),
    links: {
      live: "https://anas-e-invitation.netlify.app/",
      github: "https://github.com/Zer0-01/react-typescript-wedding-invitation",
    },
  },
  {
    slug: "numeru",
    title: "Numeru",
    summary: "A calculator app for everyday maths and splitting bills.",
    overview:
      "A mobile calculator for quick everyday sums and splitting bills with friends. Built with clean architecture to make room for currency, unit and loan tools next.",
    role: "Mobile Developer",
    context: "LakarSoft",
    year: 2025,
    projectType: "mobile",
    platform: "Mobile",
    built: ["Multi-purpose calculator", "Bill splitting", "Light and dark mode", "Multiple languages"],
    technologies: ["Flutter", "Bloc"],
    format: "mobile",
    screens: [1, 2, 3, 4, 5].map((n) => `/projects/numeru/photo_${n}.png`),
    links: {
      github: "https://github.com/Zer0-01/numeru",
    },
  },
  {
    slug: "vortex-academia",
    title: "Vortex Academia",
    summary: "A website for a football club, with club info and player profiles.",
    overview:
      "The website for Vortex Academia football club, built at LakarSoft. It introduces the club and its players on a responsive landing page.",
    role: "Web Developer",
    context: "LakarSoft, for Vortex Academia",
    year: 2025,
    projectType: "web",
    platform: "Web",
    built: ["Landing page", "Club information", "Player profiles"],
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    format: "desktop",
    screens: [1, 2, 3, 4].map((n) => `/projects/vortex/photo_${n}.png`),
    links: {
      live: "https://vortex-academia.netlify.app/",
      github: "https://github.com/Zer0-01/next-vortex",
    },
  },
  {
    slug: "iseba",
    title: "ISeBa",
    summary: "A mobile app that helps children learn to spell and pronounce Bahasa Melayu.",
    overview: "Built for a school teacher. Children enter syllables and hear them, and whole words, spoken aloud.",
    role: "Flutter Developer",
    context: "A school teacher",
    year: 2025,
    projectType: "mobile",
    platform: "Mobile",
    built: ["Syllable input", "Syllable pronunciation", "Word pronunciation"],
    technologies: ["Flutter", "Text-to-Speech"],
    format: "mobile",
    screens: [],
    video: "/projects/iseba/video_1.mp4",
    links: {
      github: "https://github.com/Zer0-01/Flutter-Readingapp",
    },
  },
  {
    slug: "muzika-kata",
    title: "Muzika Kata",
    summary: "A web app that pairs Bahasa Melayu words with musical tones.",
    overview:
      "Built for a school teacher as a classroom aid. Students type a word and hear its musical tones, which makes practice more playful.",
    role: "Web Developer",
    context: "A school teacher",
    year: 2025,
    projectType: "web",
    platform: "Web",
    built: ["Word input with matching musical tones"],
    technologies: ["Next.js"],
    format: "desktop",
    screens: [1, 2].map((n) => `/projects/muzika-kata/photo_${n}.png`),
    links: {
      live: "https://muzika-kata.netlify.app/",
      github: "https://github.com/Zer0-01/next-musika-kata",
    },
  },
];

/** Shown as full showcases on the home page, in this order. The rest appear under More projects. */
export const featuredSlugs = ["aonic-agriculture", "lq-studio", "e-wedding"] as const;

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** The project after this one, wrapping to the first, for the "Next project" link. */
export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}

/** "Mobile Developer · Aonic", or just "Personal project". */
export function formatCredit({ role, context }: Pick<Project, "role" | "context">): string {
  return context === personalContext ? context : `${role} · ${context}`;
}

export function formatProjectType({ projectType }: Pick<Project, "projectType">): string {
  return projectType === "mobile" ? "Mobile" : "Web";
}
