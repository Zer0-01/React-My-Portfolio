export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  pitch: string;
  problem: string;
  solution: string;
  result: string;
  featured?: boolean;
  role?: string;
  organization?: string;
  company?: string;
  client?: string;
  year?: number;
  period?: string;
  projectType?: "mobile" | "web" | "iot" | "backend" | "fullstack";
  features?: string[];
  outcomes?: string[];
  technologies: string[];
  tools?: string[];
  platforms?: string[];
  heroImage?: string;
  images?: string[];
  video?: string;
  github?: string;
  storeUrl?: {
    android?: string;
    ios?: string;
  };
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "aonic-agriculture",
    title: "Aonic Agriculture App",
    summary:
      "Mobile commerce and field utility app for farmers and plantation owners.",
    description:
      "Aonic Agriculture combines product discovery, checkout, credit access, field calculations, and branch discovery in one mobile workflow. The app supports day-to-day buying decisions while remaining useful in remote operational environments through offline calculation tools.",
    pitch:
      "Built a production mobile platform that reduces friction across agrochemical purchasing, credit access, and in-field decision making.",
    problem:
      "Farmers and plantation operators needed a simpler way to purchase products, calculate field requirements accurately, and find support channels without switching between disconnected tools.",
    solution:
      "Delivered a Flutter app that combines catalog browsing, cart and checkout, Aonic Flex credit, offline calculators, unit conversion, and branch navigation in one consistent experience.",
    result:
      "Created a more practical buying and support journey for agricultural users, improving convenience, reducing manual calculation effort, and keeping critical tools available even with weak connectivity.",
    featured: true,
    role: "Mobile Developer",
    company: "Aonic",
    year: 2025,
    period: "2025",
    projectType: "mobile",
    features: [
      "Product catalog with e-commerce flows",
      "Shopping cart and secure checkout",
      "Flexible credit application and balance visibility",
      "Spray and tank volume calculator",
      "Unit conversion for field operations",
      "Offline utility support for remote use",
      "Branch locator with integrated maps",
    ],
    outcomes: [
      "Simplified the agrochemical purchasing journey",
      "Enabled field-ready calculations without separate tools",
      "Improved accessibility of branch and operator support",
      "Kept core utility workflows usable in remote areas",
    ],
    technologies: ["Flutter", "Bloc", "Dio", "AutoRoute", "Git"],
    platforms: ["Firebase", "Google Maps API"],
    tools: ["VS Code", "Android Studio", "Xcode", "Fastlane", "Firebase"],
    images: [
      "/projects/aonic-agriculture/photo_1.jpg",
      "/projects/aonic-agriculture/photo_2.jpg",
      "/projects/aonic-agriculture/photo_3.jpg",
      "/projects/aonic-agriculture/photo_4.jpg",
      "/projects/aonic-agriculture/photo_5.jpg",
    ],
    storeUrl: {
      ios: "https://apps.apple.com/my/app/aonic-agriculture/id6746027397",
      android: "https://play.google.com/store/apps/details?id=com.aonic.aonagri&hl=en",
    },
  },
  {
    slug: "numeru",
    title: "Numeru",
    summary:
      "Multi-purpose calculator app focused on everyday utility and financial planning readiness.",
    description:
      "Numeru extends beyond basic arithmetic by helping users handle quick daily calculations, split bills, and prepare for broader financial tools planned for future releases. The product was shaped for practical usability, theming support, and localization readiness.",
    pitch:
      "Designed a calculator product as a cleaner everyday utility with room to expand into financial workflows.",
    problem:
      "Standard calculator experiences often stop at simple arithmetic and do little to support real-world shared expenses or future planning needs.",
    solution:
      "Built a mobile utility app with bill splitting, theme support, localization considerations, and a product structure ready for loan, unit, and currency tools.",
    result:
      "Established a scalable foundation for a broader utility product while already delivering immediate value for daily calculations and group expense scenarios.",
    role: "Mobile Developer",
    organization: "LakarSoft",
    year: 2025,
    period: "2025",
    projectType: "mobile",
    features: [
      "Multi-purpose calculator",
      "Split bill workflow",
      "Light and dark mode",
      "Localization support",
      "Planned currency converter",
      "Planned unit measurement tools",
      "Planned loan calculator",
    ],
    outcomes: [
      "Improved utility for routine calculations",
      "Made group expense handling faster and clearer",
      "Prepared the product for broader financial use cases",
    ],
    technologies: ["Flutter", "Bloc", "Clean Architecture"],
    tools: ["VS Code", "Android Studio", "Xcode", "GitHub", "Git"],
    images: [
      "/projects/numeru/photo_1.png",
      "/projects/numeru/photo_2.png",
      "/projects/numeru/photo_3.png",
      "/projects/numeru/photo_4.png",
      "/projects/numeru/photo_5.png",
    ],
    github: "https://github.com/Zer0-01/numeru",
    link: "",
  },
  {
    slug: "e-wedding",
    title: "E-Wedding Invitation",
    summary:
      "Responsive digital invitation platform combining event details, RSVP, and guest interaction.",
    description:
      "E-Wedding rethinks a traditional invitation as a polished digital product. It centralizes event details, countdowns, RSVP flows, guest messages, and gifting options in a responsive interface that is simple for guests to navigate on any device.",
    pitch:
      "Turned a wedding invitation into a usable product experience rather than a static page.",
    problem:
      "Guests often have to gather event details across messages, maps, and separate RSVP channels, which creates confusion and friction.",
    solution:
      "Built a responsive invitation experience with schedule details, countdown, RSVP, guest messaging, and gifting in a single flow.",
    result:
      "Made the event easier to understand and interact with while keeping the experience lightweight and accessible across devices.",
    role: "Web Developer",
    year: 2025,
    period: "2025",
    projectType: "web",
    features: [
      "Digital invitation landing page",
      "Venue and event details",
      "Countdown timer",
      "RSVP form",
      "Guest message board",
      "Gift registry integration",
      "Responsive layout",
    ],
    technologies: ["React", "Firebase", "Bootstrap", "Vite"],
    tools: ["VS Code", "GitHub", "Netlify"],
    images: [
      "/projects/e-wedding/photo_1.png",
      "/projects/e-wedding/photo_2.png",
      "/projects/e-wedding/photo_3.png",
      "/projects/e-wedding/photo_4.png",
      "/projects/e-wedding/photo_5.png",
      "/projects/e-wedding/photo_6.png",
      "/projects/e-wedding/photo_7.png",
    ],
    github: "https://github.com/Zer0-01/react-typescript-wedding-invitation",
    link: "https://anas-e-invitation.netlify.app/",
  },
  {
    slug: "vortex-academia",
    title: "Vortex Academia Website",
    summary:
      "Modern club website for presenting football team information, profiles, and future fan-facing features.",
    description:
      "Vortex Academia is a responsive website built to give a football club a cleaner digital presence. The site focuses on fast scanning, player profiles, club information, and an extensible structure for future fan-oriented additions.",
    pitch:
      "Created a sharper digital presence for a sports organization through a structured, responsive website.",
    problem:
      "The club needed a more credible web presence that could clearly communicate identity, player information, and upcoming expansion areas.",
    solution:
      "Designed and built a responsive Next.js site with straightforward navigation, club storytelling, and a flexible content structure.",
    result:
      "Delivered a cleaner public-facing experience that supports club visibility today and future content growth tomorrow.",
    role: "Web Developer",
    organization: "LakarSoft",
    client: "Vortex Academia",
    year: 2025,
    period: "2025",
    projectType: "web",
    features: [
      "Club information pages",
      "Player profile presentation",
      "Responsive landing page",
      "Planned product section",
    ],
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    tools: ["VS Code", "Netlify", "GitHub"],
    images: [
      "/projects/vortex/photo_1.png",
      "/projects/vortex/photo_2.png",
      "/projects/vortex/photo_3.png",
      "/projects/vortex/photo_4.png",
    ],
    github: "https://github.com/Zer0-01/next-vortex",
    link: "https://vortex-academia.netlify.app/",
  },
  {
    slug: "iseba",
    title: "ISeBa",
    summary:
      "Educational mobile app to help children learn Bahasa Melayu spelling and pronunciation.",
    description:
      "ISeBa is an interactive learning app designed around syllables, pronunciation, and word playback. It uses accessible interactions and text-to-speech support to make early language practice more engaging for children.",
    pitch:
      "Built a focused language-learning app that makes pronunciation practice more interactive for children.",
    problem:
      "Early language learners need more engaging repetition and pronunciation support than static classroom materials can usually provide on their own.",
    solution:
      "Created a Flutter learning app with syllable input, spoken feedback, and text-to-speech support for repeatable practice.",
    result:
      "Provided a more interactive way for children to practice Bahasa Melayu reading and pronunciation with clearer feedback loops.",
    role: "Flutter Developer",
    client: "School Teacher",
    year: 2025,
    period: "2025",
    projectType: "mobile",
    features: [
      "Input syllables",
      "Syllable pronunciation",
      "Word pronunciation",
    ],
    technologies: ["Flutter", "Text-to-Speech"],
    tools: ["VS Code"],
    video: "/projects/iseba/video_1.mp4",
    github: "https://github.com/Zer0-01/Flutter-Readingapp",
  },
  {
    slug: "muzika-kata",
    title: "Muzika Kata",
    summary:
      "Web learning tool combining musical tones and language cues to support Bahasa Melayu retention.",
    description:
      "Muzika Kata explores a more memorable approach to language learning by pairing words with musical notes. It was designed as a simple educational product that helps students engage with language through pattern and sound.",
    pitch:
      "Explored a more memorable educational interface by connecting music and language learning.",
    problem:
      "Traditional vocabulary repetition can feel dry and may not create strong enough memory cues for younger learners.",
    solution:
      "Built a lightweight web app that maps words to musical tones, creating a more interactive and sensory learning flow.",
    result:
      "Produced a differentiated classroom support tool that makes language practice feel more engaging and memorable.",
    client: "School Teacher",
    year: 2025,
    period: "2025",
    projectType: "web",
    features: [
      "Word input with corresponding musical tones",
      "Interactive language learning flow",
    ],
    technologies: ["Next.js"],
    tools: ["VS Code", "Netlify", "GitHub"],
    images: [
      "/projects/muzika-kata/photo_1.png",
      "/projects/muzika-kata/photo_2.png",
    ],
    github: "https://github.com/Zer0-01/next-musika-kata",
    link: "https://muzika-kata.netlify.app/",
  },
];
