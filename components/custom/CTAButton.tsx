"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTAButtons() {
    return (
        <section className="flex flex-col md:flex-row w-full max-w-md gap-4 mx-auto mt-2 md:mt-6 z-10">
            {/* See CV Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button
                    asChild
                    className="w-full border border-primary/50 bg-primary py-6 font-semibold text-primary-foreground shadow-sm transition-colors duration-200 hover:bg-primary/90"
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button
                    asChild
                    variant="outline"
                    className="w-full border-border bg-card py-6 font-semibold text-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
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
