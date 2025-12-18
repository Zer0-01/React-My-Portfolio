import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

interface Props {
    params: { slug: string };
}

export default function ProjectDetailPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return notFound();

    return (
        <main className="container mx-auto px-4 py-12 md:py-20 space-y-16">

            {/* BACK BUTTON */}
            <div>
                <Link
                    href="/"
                    className="inline-block px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                >
                    ← Back to Home
                </Link>
            </div>

            {/* HEADER */}
            <header className="space-y-4 md:space-y-6 max-w-4xl mx-auto text-center md:text-left">
                <p className="text-sm text-gray-500 tracking-wide uppercase">{project.year}</p>

                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                    {project.title}
                </h1>

                {project.summary && (
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {project.summary}
                    </p>
                )}

                {project.description && (
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {project.description}
                    </p>
                )}

                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500 justify-center md:justify-start">
                    {project.organization && <span>Organization: {project.organization}</span>}
                    {project.company && <span>Company: {project.company}</span>}
                    {project.client && <span>Client: {project.client}</span>}
                    {project.role && <span>Role: {project.role}</span>}
                    {project.projectType && <span>Type: {project.projectType}</span>}
                </div>
            </header>

            {/* HERO IMAGE */}
            {project.heroImage && (
                <div className="relative mx-auto w-full max-w-5xl aspect-video rounded-xl overflow-hidden border shadow-md bg-gray-50">
                    <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-contain bg-white"
                    />
                </div>
            )}

            {/* IMAGES */}
            {project.images?.length && (
                <section className="space-y-6">
                    {/* Mobile carousel */}
                    <div className="md:hidden flex gap-4 overflow-x-auto snap-x scroll-smooth pb-4">
                        {project.images.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative min-w-[80%] snap-center aspect-video rounded-xl overflow-hidden border bg-gray-100 shadow-sm"
                            >
                                <Image
                                    src={img}
                                    alt={`${project.title}-${idx}`}
                                    fill
                                    className="object-contain bg-white"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Desktop grid */}
                    <div className="hidden md:grid grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {project.images.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative w-full aspect-video rounded-xl overflow-hidden border bg-gray-50 shadow-sm"
                            >
                                <Image
                                    src={img}
                                    alt={`${project.title}-${idx}`}
                                    fill
                                    className="object-contain bg-white"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* VIDEO */}
            {project.video && (
                <section className="space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Demo Video</h2>
                    <div className="relative w-full rounded-xl overflow-hidden border shadow-md bg-black">
                        <video
                            src={project.video}
                            controls
                            className="w-full h-auto max-h-[70vh] object-contain"
                        />
                    </div>
                </section>
            )}

            {/* FEATURES */}
            {project.features && (
                <section className="space-y-3 max-w-4xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Core Features</h2>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        {project.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* OUTCOMES */}
            {project.outcomes && (
                <section className="space-y-3 max-w-4xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Outcomes & Results</h2>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        {project.outcomes.map((o, i) => (
                            <li key={i}>{o}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* TECHNOLOGIES */}
            <section className="space-y-3 max-w-4xl mx-auto">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Technologies Used</h2>
                <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <li
                            key={tech}
                            className="px-3 py-1 text-sm md:text-base rounded-full bg-gray-100 text-gray-700 border"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </section>

            {/* LINKS */}
            <section className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mt-8">

                {/* Primary Links */}
                <div className="flex flex-col md:flex-row gap-3">
                    {project.link && (
                        <LinkButton href={project.link}>Visit Website →</LinkButton>
                    )}
                    {project.github && (
                        <LinkButton href={project.github}>View on GitHub →</LinkButton>
                    )}
                </div>

                {/* Store Badges */}
                <div className="flex gap-3 flex-wrap justify-start md:justify-end mt-2 md:mt-0">
                    {project.storeUrl?.ios && (
                        <a href={project.storeUrl.ios} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/app-store.svg"
                                alt="Download on App Store"
                                width={150}
                                height={50}
                            />
                        </a>
                    )}
                    {project.storeUrl?.android && (
                        <a href={project.storeUrl.android} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/play-store.svg"
                                alt="Get it on Google Play"
                                width={150}
                                height={50}
                            />
                        </a>
                    )}
                </div>

            </section>

        </main>
    );
}

// Reusable button
function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition shadow-md"
        >
            {children}
        </a>
    );
}
