"use client";

import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
    params: { slug: string };
}

export default function ProjectDetailPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return notFound();

    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none opacity-30" />

            <div className="container mx-auto px-6 py-12 md:py-20 space-y-16 max-w-6xl">

                {/* BACK BUTTON */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="group text-muted-foreground hover:text-foreground -ml-2"
                    >
                        <Link href="/">
                            <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                    </Button>
                </motion.div>

                {/* HEADER */}
                <header className="space-y-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <p className="text-sm font-medium text-primary tracking-[0.2em] uppercase">
                            {project.year}
                        </p>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground/80 font-medium">
                            {project.role && (
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                                    {project.role}
                                </span>
                            )}
                            {project.organization && <span>@ {project.organization}</span>}
                            {project.company && <span>@ {project.company}</span>}
                            {project.client && <span>Client: {project.client}</span>}
                            {project.projectType && (
                                <span className="px-2 py-0.5 rounded bg-muted text-[10px] uppercase tracking-wider">
                                    {project.projectType}
                                </span>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 max-w-3xl"
                    >
                        {project.summary && (
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium">
                                {project.summary}
                            </p>
                        )}

                        {project.description && (
                            <p className="text-muted-foreground/80 text-base md:text-lg leading-relaxed">
                                {project.description}
                            </p>
                        )}
                    </motion.div>
                </header>

                {/* HERO IMAGE */}
                {project.heroImage && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_50px_-12px_rgba(139,0,0,0.15)] bg-card"
                    >
                        <Image
                            src={project.heroImage}
                            alt={project.title}
                            fill
                            className="object-contain p-4 md:p-8"
                        />
                    </motion.div>
                )}

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* IMAGES */}
                        {project.images?.length && (
                            <section className="space-y-8">
                                <h2 className="text-2xl font-bold text-foreground">Project Gallery</h2>
                                {/* Mobile carousel */}
                                <div className="md:hidden flex gap-4 overflow-x-auto snap-x scroll-smooth pb-4 no-scrollbar">
                                    {project.images.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="relative min-w-[85%] snap-center aspect-video rounded-xl overflow-hidden border border-white/10 bg-card shadow-sm"
                                        >
                                            <Image
                                                src={img}
                                                alt={`${project.title}-${idx}`}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Desktop grid */}
                                <div className="hidden md:grid grid-cols-2 gap-6">
                                    {project.images.map((img, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-card shadow-sm group"
                                        >
                                            <Image
                                                src={img}
                                                alt={`${project.title}-${idx}`}
                                                fill
                                                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* VIDEO */}
                        {project.video && (
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground">Demo Video</h2>
                                <div className="relative w-full rounded-2xl overflow-hidden border border-primary/20 shadow-2xl bg-black aspect-video">
                                    <video
                                        src={project.video}
                                        controls
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </section>
                        )}

                        {/* FEATURES & OUTCOMES */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {project.features && (
                                <section className="space-y-4">
                                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-primary rounded-full" />
                                        Core Features
                                    </h2>
                                    <ul className="space-y-3">
                                        {project.features.map((f, i) => (
                                            <li key={i} className="flex gap-3 text-muted-foreground/90 leading-relaxed">
                                                <span className="text-primary mt-1">•</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {project.outcomes && (
                                <section className="space-y-4">
                                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-primary rounded-full" />
                                        Outcomes
                                    </h2>
                                    <ul className="space-y-3">
                                        {project.outcomes.map((o, i) => (
                                            <li key={i} className="flex gap-3 text-muted-foreground/90 leading-relaxed">
                                                <span className="text-primary mt-1">✓</span>
                                                {o}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>
                    </div>

                    {/* Sidebar / Info Panel */}
                    <aside className="lg:col-span-4 space-y-12">
                        {/* TECHNOLOGIES */}
                        <section className="space-y-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                            <h2 className="font-bold text-foreground uppercase tracking-widest text-sm">Technologies</h2>
                            <ul className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <li
                                        key={tech}
                                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-secondary-foreground border border-secondary/50 font-medium"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* LINKS */}
                        <section className="space-y-4">
                            {project.link && (
                                <Button asChild className="w-full h-12 text-base font-bold shadow-[0_0_20px_-5px_rgba(139,0,0,0.4)]">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        Live Preview <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            )}
                            {project.github && (
                                <Button asChild variant="outline" className="w-full h-12 text-base font-bold border-white/10 hover:bg-white/5">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        Check Repository <Github className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            )}

                            {/* Store Badges */}
                            <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-white/5">
                                {project.storeUrl?.ios && (
                                    <a href={project.storeUrl.ios} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                                        <Image
                                            src="/app-store.svg"
                                            alt="Download on App Store"
                                            width={140}
                                            height={42}
                                            className="w-full h-auto max-w-[160px] mx-auto md:mx-0"
                                        />
                                    </a>
                                )}
                                {project.storeUrl?.android && (
                                    <a href={project.storeUrl.android} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                                        <Image
                                            src="/play-store.svg"
                                            alt="Get it on Google Play"
                                            width={140}
                                            height={42}
                                            className="w-full h-auto max-w-[160px] mx-auto md:mx-0"
                                        />
                                    </a>
                                )}
                            </div>
                        </section>
                    </aside>
                </div>

            </div>
        </main>
    );
}
