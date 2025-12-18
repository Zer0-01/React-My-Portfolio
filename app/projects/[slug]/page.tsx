// /app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";

interface Props {
    params: { slug: string }
}

export default function ProjectDetailPage({ params }: Props) {
    const project = projects.find(p => p.slug === params.slug);
    if (!project) return notFound();

    return (
        <main className="container mx-auto px-4 py-10 space-y-10">

            <header className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-3xl">
                    {project.description}
                </p>
            </header>

            {project.images && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {project.images.map((img, index) => (
                        <div key={index} className="relative w-full aspect-video overflow-hidden rounded-xl shadow-md">
                            <Image
                                src={img}
                                alt={`${project.title}-${index}`}
                                fill
                                sizes="(max-width:768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}

            {project.video && (
                <video
                    src={project.video}
                    controls
                    className="rounded-xl w-full max-w-4xl mx-auto shadow-md"
                />
            )}

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Technologies used</h2>
                <ul className="flex flex-wrap gap-2">
                    {project.technologies.map(t => (
                        <li
                            key={t}
                            className="px-3 py-1 rounded-full border text-sm bg-gray-100"
                        >
                            {t}
                        </li>
                    ))}
                </ul>
            </section>

            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
                >
                    Visit Project →
                </a>
            )}

        </main>
    )
}
