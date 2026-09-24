export interface FeaturedProject {
  slug: string;
  title: string;
  meta: string;
  statement: string;
  contribution: string;
  outcome: string;
  technologies: string[];
  imageFormat: "mobile" | "desktop";
  images: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "aonic-agriculture",
    title: "Aonic Agriculture",
    meta: "Mobile product · Aonic · 2025",
    statement:
      "Commerce and field tools built for work beyond reliable connectivity.",
    contribution:
      "As mobile developer, I helped build a Flutter application that brings product purchasing, flexible credit, offline field calculations, and branch discovery into one experience.",
    outcome:
      "Farmers and plantation owners can purchase supplies and complete essential calculations from a single mobile product, including in remote areas.",
    technologies: ["Flutter", "Bloc", "Firebase"],
    imageFormat: "mobile",
    images: [
      "/projects/aonic-agriculture/photo_1.jpg",
      "/projects/aonic-agriculture/photo_2.jpg",
      "/projects/aonic-agriculture/photo_5.jpg",
    ],
  },
  {
    slug: "lq-studio",
    title: "LQ Studio",
    meta: "Booking platform · Lakarsoft · Live",
    statement: "A smoother way to book a photography session.",
    contribution:
      "As a Lakarsoft co-founder and developer, I helped create the customer and admin experiences for managing packages, themes, add-ons, availability, bookings, customer details, tracking, and email notifications.",
    outcome:
      "The platform replaced manual WhatsApp coordination with a guided booking process, reducing scheduling work, booking conflicts, repeated communication, and human error.",
    technologies: ["Next.js", "Go", "PostgreSQL"],
    imageFormat: "desktop",
    images: [
      "/projects/lqstudio/Screenshot 2026-09-24 at 2.01.46 AM.png",
      "/projects/lqstudio/Screenshot 2026-09-24 at 2.03.48 AM.png",
      "/projects/lqstudio/Screenshot 2026-09-24 at 2.04.23 AM.png",
    ],
  },
  {
    slug: "wedding-rsvp",
    title: "Wedding RSVP",
    meta: "Personal product · Web · 2025",
    statement: "One place for guests to find every wedding detail.",
    contribution:
      "I built and used this digital invitation for my own wedding, combining venue information, event details, RSVP collection, guest messages, and gift information in a responsive experience.",
    outcome:
      "It replaced printed invitations and brought guest communication and RSVP tracking into one accessible place.",
    technologies: ["React", "Firebase", "Vite"],
    imageFormat: "desktop",
    images: [
      "/projects/e-wedding/photo_1.png",
      "/projects/e-wedding/photo_4.png",
      "/projects/e-wedding/photo_5.png",
    ],
  },
];
