export interface Project {
    slug: string;
    title: string;
    summary: string;
    description: string;
    role?: string;
    organization?: string;      // can be client, company, or organization
    year?: number;
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
        summary: "Aonic Agriculture is your all-in-one agriculture platform, designed to support farmers and plantation owners across Malaysia.\n\nWith Aonic Agriculture, you can …\n✔ Purchase a wide range of agrochemicals (Aon-Agro) with credit\n✔ Apply for our flexible financing program (Aonic Flex) with ease - think \"Shop Now, Pay Later\"!\n✔ Locate nearby branches, contact operators, and navigate with built-in maps.",
        description: "Aonic Agriculture provides a seamless digital experience for plantation management. Farmers and plantation owners can browse and purchase agrochemical products, access credit financing through Aonic Flex, and locate branches using an integrated map system. The app ensures smooth operations in inventory, orders, and field tracking, reducing manual workload and increasing efficiency across plantations.",

        role: "Flutter Mobile Developer",
        organization: "Aonic",
        year: 2025,
        projectType: "mobile",

        features: [
            "Product listing and e-commerce",
            "Branch locator with maps",
            "Flexible credit system (Aonic Flex)",
            "Order management and inventory tracking",
            "Offline access for remote areas"
        ],

        outcomes: [
            "Streamlined agrochemical purchasing process",
            "Reduced manual field operations by 50%",
            "Increased user engagement through flexible financing",
            "Improved operational efficiency for branch management"
        ],

        technologies: ["Flutter", "Bloc", "Dio", "AutoRoute", "Git"],
        platforms: ["Firebase", "Google Maps API"],
        tools: ["VS Code", "Android Studio", "Xcode", "Fastlane", "Firebase"],

        images: [
            "/projects/aonic-agriculture/photo_1.jpg",
            "/projects/aonic-agriculture/photo_2.jpg",
            "/projects/aonic-agriculture/photo_3.jpg",
            "/projects/aonic-agriculture/photo_4.jpg",
            "/projects/aonic-agriculture/photo_5.jpg"
        ],

        storeUrl: {
            ios: "https://apps.apple.com/my/app/aonic-agriculture/id6746027397",
            android: "https://play.google.com/store/apps/details?id=com.aonic.aonagri&hl=en"
        },
    }
    ,

    {
        slug: "numeru",
        title: "Numeru",
        summary: "A multi-purpose calculator app with features for everyday calculations and financial planning.",
        description:
            "Numeru is a versatile mobile calculator that goes beyond simple arithmetic. It allows users to perform quick calculations, split bills with friends, and prepare for financial decisions. Planned upcoming features include currency conversion, unit measurement, and a loan calculator.",
        role: "Mobile Developer",
        organization: "LakarSoft",
        year: 2025,
        projectType: "mobile",

        features: [
            "Multi-purpose calculator",
            "Split bill feature",
            "Light and dark mode",
            "Localization support",
            "Coming soon: currency converter",
            "Coming soon: unit measurement",
            "Coming soon: loan calculator"
        ],

        outcomes: [
            "Simplified day-to-day calculations for users",
            "Enabled quick and accurate bill splitting for groups",
            "Enhanced accessibility with light/dark mode and localization",
            "Prepared foundation for upcoming financial tools (currency/unit/loan)"
        ],

        technologies: ["Flutter", "Bloc", "Clean Architecture"],
        tools: ["VS Code", "Android Studio", "Xcode", "GitHub", "Git"],

        images: [
            "/projects/numeru/photo_1.png",
            "/projects/numeru/photo_2.png",
            "/projects/numeru/photo_3.png",
            "/projects/numeru/photo_4.png",
            "/projects/numeru/photo_5.png"
        ],

        github: "https://github.com/Zer0-01/numeru",
        link: ""
    },
    {
        slug: "e-wedding",
        title: "E-Wedding Invitation",
        summary: "Digital e-card invitation for my wedding, including venue info, countdown timer, RSVP, messages, and gift options.",
        description: "E-Wedding is a fully interactive digital invitation platform designed to share wedding details with guests in a modern and elegant way. It provides a countdown to the big day, event schedules, RSVP functionality, guest messages, and an easy way to send gifts. Built for simplicity and responsiveness, it ensures guests have a seamless experience across all devices.",
        role: "Web Developer",
        year: 2025,
        projectType: "web",
        features: [
            "Digital wedding invitation card",
            "Venue and event details",
            "Countdown timer to wedding day",
            "RSVP form for guests",
            "Guest message board",
            "Gift registry integration",
            "Responsive design for all devices"
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
            "/projects/e-wedding/photo_7.png"
        ],
        github: "https://github.com/Zer0-01/react-typescript-wedding-invitation",
        link: "https://anas-e-invitation.netlify.app/"
    }, {
        slug: "vortex-academia",
        title: "Vortex Academia Website",
        summary: "Vortex Academia website for a football club, providing club information, player profiles, and a modern landing page.",
        description: "Vortex Academia is an official website for the football club, designed to showcase team information, player profiles, and upcoming events. The site features a clean and responsive landing page with intuitive navigation. Future updates include a product section and more interactive content for fans.",
        role: "Web Developer",
        organization: "LakarSoft",
        year: 2025,
        projectType: "web",
        features: [
            "Browse club information",
            "Player profiles",
            "Landing page",
            "Coming soon: product section"
        ],
        technologies: ["Next.js", "Tailwind CSS", "shadcn/ui"],
        tools: ["VS Code", "Netlify", "GitHub"],
        images: [
            "/projects/vortex/photo_1.png",
            "/projects/vortex/photo_2.png",
            "/projects/vortex/photo_3.png",
            "/projects/vortex/photo_4.png"
        ],
        github: "https://github.com/Zer0-01/next-vortex",
        link: "https://vortex-academia.netlify.app/"
    }



];

