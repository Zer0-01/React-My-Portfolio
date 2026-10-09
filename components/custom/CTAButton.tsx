"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTAButtons() {
    return (
        <section className="flex flex-col md:flex-row w-full max-w-md gap-4 mx-auto mt-2 md:mt-6 z-10">
            {/* See CV Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                <Button
                    asChild
                    className="w-full bg-primary-action py-6 font-medium text-primary-foreground shadow-none transition-colors duration-fast hover:bg-primary-active"
                >
                    <a
                        href="https://docs.google.com/document/d/1Ft2fg1_lMUqF9WITtQ9AK5HUFbL3ZzJd/edit?usp=drive_link&ouid=113577497045470240069&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV
                    </a>
                </Button>
            </motion.div>

            {/* Contact Me Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                <Button
                    asChild
                    variant="secondary"
                    className="w-full bg-card py-6 font-medium text-foreground shadow-none transition-colors duration-fast hover:bg-accent"
                >
                    <a
                        href="https://wa.me/601154066082"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact Me
                    </a>
                </Button>
            </motion.div>
        </section>
    );
}
