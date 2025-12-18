export interface Project {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    images?: string[];
    video?: string;
    link?: string;
}

export const projects: Project[] = [
    { slug: "aonic-agriculture", title: "Aonic Agriculture App", description: "", technologies: ["Flutter", "Bloc"], images: ["/projects/aonic-agriculture/photo_1.jpg", "/projects/aonic-agriculture/photo_2.jpg", "/projects/aonic-agriculture/photo_3.jpg", "/projects/aonic-agriculture/photo_4.jpg", "/projects/aonic-agriculture/photo_5.jpg",], },
    { slug: "mist-flight", title: "MIST Flight App", description: "", technologies: ["Kotlin", "Jetpack Compose"] },
    { slug: "e-wedding-invitation", title: "E-Wedding Invitation", description: "", technologies: ["React", "Firebase"] },
    { slug: "portable-data-terminal", title: "Portable Data Terminal", description: "", technologies: ["Flutter", "Provider"] },
    { slug: "parent-teacher-tool", title: "Parent-Teacher Tool", description: "", technologies: ["Flutter", "Firebase"] },
    { slug: "iseba", title: "IseBa", description: "", technologies: ["Flutter", "Bloc"] },
];
