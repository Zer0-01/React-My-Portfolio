import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

interface Props {
    params: { slug: string }
}

export default function ProjectDetailPage({ params }: Props) {
    const project = projects.find(p => p.slug === params.slug);
    if (!project) return notFound();

    return (
        <main className="container mx-auto px-4 py-10 space-y-14">

            {/* BACK BUTTON */}
            <div className="flex justify-start">
                <Link
                    href="/"
                    className="inline-block px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                >
                    ← Back to Home
                </Link>
            </div>

            {/* HEADER */}
            <header className="space-y-3">
                <p className="text-sm text-gray-500 tracking-wide uppercase">{project.year}</p>

                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    {project.title}
                </h1>

                {project.summary && (
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl">
                        {project.summary}
                    </p>
                )}

                {project.description && (
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl">
                        {project.description}
                    </p>
                )}

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                    {project.organization && <span>Organization: {project.organization}</span>}
                    {project.role && <span>Role: {project.role}</span>}
                    {project.projectType && <span>Type: {project.projectType}</span>}
                </div>
            </header>


            {/* HERO IMAGE */}
            {project.heroImage && (
                <div className="relative mx-auto w-full max-w-5xl aspect-video rounded-xl overflow-hidden border shadow-sm bg-gray-50">
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
                        {project.images?.map((img, index) => (
                            <div
                                key={index}
                                className="relative min-w-[80%] snap-center aspect-video rounded-xl overflow-hidden border bg-gray-100 shadow-sm"
                            >
                                <Image
                                    src={img}
                                    alt={`${project.title}-${index}`}
                                    fill
                                    className="object-contain bg-white"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Desktop grid */}
                    <div className="hidden md:grid grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {project.images?.map((img, index) => (
                            <div
                                key={index}
                                className="relative w-full aspect-video rounded-xl overflow-hidden border bg-gray-50 shadow-sm"
                            >
                                <Image
                                    src={img}
                                    alt={`${project.title}-${index}`}
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
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">Demo Video</h2>
                    <video
                        src={project.video}
                        controls
                        className="rounded-xl w-full max-w-4xl mx-auto shadow-md border bg-black"
                    />
                </section>
            )}


            {/* FEATURES */}
            {project.features && (
                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">Core Features</h2>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        {project.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </section>
            )}


            {/* OUTCOMES */}
            {project.outcomes && (
                <section className="space-y-3">
                    <h2 className="text-xl font-semibold">Outcomes & Results</h2>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        {project.outcomes.map((o, i) => (
                            <li key={i}>{o}</li>
                        ))}
                    </ul>
                </section>
            )}


            {/* TECHNOLOGIES */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">Technologies Used</h2>

                <ul className="flex flex-wrap gap-2">
                    {project.technologies.map(t => (
                        <li
                            key={t}
                            className="px-4 py-1 rounded-full bg-gray-100 border text-gray-700 text-sm"
                        >
                            {t}
                        </li>
                    ))}
                </ul>
            </section>


            {/* LINKS */}
            <section className="space-y-3">
                {project.link && (
                    <LinkButton href={project.link}>Visit Website →</LinkButton>
                )}
                {project.github && (
                    <LinkButton href={project.github}>View on GitHub →</LinkButton>
                )}
                <div className="flex gap-4 flex-wrap mt-2 md:mt-0">
                    {project.storeUrl?.ios && (
                        <a href={project.storeUrl.ios} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/app-store.svg" // Put App Store badge in public/assets
                                alt="Download on App Store"
                                width={150}
                                height={50}
                            />
                        </a>
                    )}
                    {project.storeUrl?.android && (
                        <a href={project.storeUrl.android} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/play-store.svg" // Put Google Play badge in public/assets
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
            className="inline-block px-6 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition shadow-sm"
        >
            {children}
        </a>
    );
}
