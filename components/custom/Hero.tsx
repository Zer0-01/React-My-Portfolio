"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Hero() {
    return (
        <section className="flex flex-col items-center gap-4 text-center">
            <div className="w-36 h-36 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-gray-200 shadow-sm">
                <Image
                    src="/profile-picture.jpeg"
                    alt="Profile Picture"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold">Anas Zulkifli</h1>
            <p className="text-lg md:text-2xl text-gray-600">Mobile Developer</p>

            <div className="flex gap-3">
                <Button asChild size="icon" className="bg-blue-500 hover:bg-blue-400">
                    <a href="https://www.linkedin.com/in/anas-zulkifli-mohd-jeffry" target="_blank">
                        <Linkedin className="text-white" />
                    </a>
                </Button>

                <Button size="icon" className="bg-black hover:bg-gray-800">
                    <a href="https://github.com/Zer0-01" target="_blank">
                        <Github className="text-white" />
                    </a>
                </Button>
            </div>
        </section>
    );
}
