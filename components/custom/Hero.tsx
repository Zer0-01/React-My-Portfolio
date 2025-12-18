"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Hero() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 text-center py-12 px-4 md:py-20 md:px-0">

            {/* Profile Image */}
            <div className="w-36 h-36 md:w-48 md:h-48 overflow-hidden rounded-full border-2 md:border-4 border-gray-200 shadow-lg transition-transform hover:scale-105">
                <Image
                    src="/profile-picture.jpeg"
                    alt="Profile Picture"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                />
            </div>

            {/* Name and Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight transition-colors">
                Anas Zulkifli
            </h1>
            <p className="text-md md:text-2xl text-gray-500 font-medium">
                Mobile Developer
            </p>

            {/* Short Introduction */}
            <p className="max-w-xl text-gray-600 text-sm md:text-base mt-2 md:mt-4">
                Passionate about building intuitive mobile and web applications that solve real-world problems. Experienced in Flutter, Next.js, and modern web technologies, with a focus on clean design and performance.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
                <Button
                    asChild
                    size="icon"
                    className="bg-blue-600 hover:bg-blue-500 transition-shadow shadow-md hover:shadow-lg"
                >
                    <a
                        href="https://www.linkedin.com/in/anas-zulkifli-mohd-jeffry"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </a>
                </Button>

                <Button
                    asChild
                    size="icon"
                    className="bg-gray-900 hover:bg-gray-800 transition-shadow shadow-md hover:shadow-lg"
                >
                    <a
                        href="https://github.com/Zer0-01"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <Github className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </a>
                </Button>
            </div>
        </section>
    );
}
