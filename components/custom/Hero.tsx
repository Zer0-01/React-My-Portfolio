"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="flex flex-col items-center justify-center gap-6 text-center py-16 px-4 md:py-24 md:px-0 relative">
            {/* Background deep red glow for mysterious aesthetic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-full border border-primary/30 shadow-[0_0_40px_-10px_rgba(139,0,0,0.6)] relative group"
            >
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full z-10 transition-transform duration-700 pointer-events-none" />
                <Image
                    src="/profile-picture.jpeg"
                    alt="Profile Picture"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    priority
                />
            </motion.div>

            {/* Name and Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-2 mt-4"
            >
                <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter drop-shadow-md">
                    Anas Zulkifli
                </h1>
                <p className="text-lg md:text-2xl text-secondary-foreground font-semibold tracking-[0.2em] uppercase">
                    Mobile Developer
                </p>
            </motion.div>

            {/* Short Introduction */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl text-muted-foreground text-sm md:text-base leading-relaxed font-light mt-2 md:mt-4"
            >
                Passionate about building intuitive mobile and web applications that solve real-world problems. Experienced in Flutter, Next.js, and modern web technologies, with a focus on powerful design and cinematic performance.
            </motion.p>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 mt-6 md:mt-8"
            >
                <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="w-12 h-12 rounded-full border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:border-secondary-foreground/50 transition-all duration-300"
                >
                    <a
                        href="https://www.linkedin.com/in/anas-zulkifli-mohd-jeffry"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                </Button>

                <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="w-12 h-12 rounded-full border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:border-secondary-foreground/50 transition-all duration-300"
                >
                    <a
                        href="https://github.com/Zer0-01"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                </Button>
            </motion.div>
        </section>
    );
}
