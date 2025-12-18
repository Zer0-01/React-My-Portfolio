export interface Project {
    slug: string;
    title: string;
    summary: string;
    description: string;
    role?: string;
    organization?: string; // optional
    company?: string;      // optional
    client?: string;       // optional
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
        summary: `Aonic Agriculture is a consumer-focused mobile app that empowers farmers and plantation owners to purchase agrochemicals, manage field calculations, and locate branches efficiently.

With Aonic Agriculture, you can:
✔ Browse a wide range of agrochemical products (Aon-Agro) in an intuitive catalog
✔ Add items to a shopping cart, checkout, and pay seamlessly
✔ Apply for Aonic Flex, our flexible "Shop Now, Pay Later" credit program with detailed credit info
✔ Use the built-in calculator for spray and tank volume calculations
✔ Perform unit conversions for accurate measurements
✔ Locate nearby branches, contact operators, and navigate with integrated maps
✔ Access the calculator offline, even in remote plantation areas`,

        description: `Aonic Agriculture combines e-commerce, field calculation tools, and branch location into a single, user-friendly mobile app for farmers and plantation owners. Users can browse agrochemical products, manage a shopping cart, complete secure checkout, and pay using the Aonic Flex credit program with detailed credit tracking. The app also includes a spray and tank calculator with unit conversion that works offline for remote fields. A built-in branch locator with integrated maps allows users to find nearby branches, contact operators, and navigate efficiently. Designed to streamline purchasing, improve calculation accuracy, and provide convenience, Aonic Agriculture ensures farmers can work efficiently both online and offline.`,

        role: "Mobile Developer",
        company: "Aonic",
        year: 2025,
        projectType: "mobile",

        features: [
            "Product catalog with e-commerce",
            "Shopping cart and secure checkout",
            "Flexible credit system (Aonic Flex) with credit details",
            "Spray and tank volume calculator",
            "Unit conversion for accurate measurements",
            "Offline access for calculator",
            "Branch locator with integrated maps"
        ],

        outcomes: [
            "Simplified agrochemical purchasing process",
            "Enabled shopping with flexible credit options",
            "Accurate field calculations with spray and tank calculator",
            "Offline calculator ensures usability in remote areas",
            "Easier access to branches and operator support",
            "Improved convenience and efficiency for consumers"
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
        client: "Vortex Academia",
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
    },
    {
        slug: "iseba",
        title: "ISeBa",
        summary: "Mobile app to help kids learn Bahasa Melayu, focusing on spelling and pronunciation.",
        description: "ISeBa is an interactive educational app designed to teach children Bahasa Melayu through engaging exercises. Kids can learn syllables, practice pronunciation, and listen to words being spoken aloud using built-in text-to-speech functionality. The app aims to make learning fun and intuitive with an interactive interface.",
        role: "Flutter Developer",
        client: "School Teacher",
        year: 2025,
        projectType: "mobile",
        features: [
            "Input syllables",
            "Syllable pronunciation",
            "Word pronunciation"
        ],
        technologies: ["Flutter", "Text-to-Speech"],
        tools: ["VS Code"],
        video: "/projects/iseba/video_1.mp4",
        github: "https://github.com/Zer0-01/Flutter-Readingapp",
    },
    {
        slug: "muzika-kata",
        title: "Muzika Kata",
        summary: "A web app to make learning Bahasa Melayu more engaging by combining musical tones with words.",
        description: "Muzika Kata helps students learn Bahasa Melayu in a fun and interactive way. By associating words with musical notes, learners can improve memory retention and pronunciation while enjoying a gamified learning experience. Teachers can use it as a supplementary tool in the classroom to enhance language learning.",
        client: "School Teacher",
        year: 2025,
        projectType: "web",
        features: [
            "Input words and listen to corresponding musical tones",
            "Interactive learning experience combining music and language"
        ],
        technologies: ["Next.js"],
        tools: ["VS Code", "Netlify", "GitHub"],
        images: [
            "/projects/muzika-kata/photo_1.png",
            "/projects/muzika-kata/photo_2.png",


        ],
        github: "https://github.com/Zer0-01/next-musika-kata",
        link: "https://muzika-kata.netlify.app/"
    }





];

