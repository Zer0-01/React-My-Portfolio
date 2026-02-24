"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTAButtons() {
    return (
        <section className="flex flex-col md:flex-row w-full max-w-md gap-4 mx-auto mt-2 md:mt-6 z-10">
            {/* Download CV Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-sm py-6 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(139,0,0,0.6)] hover:shadow-[0_0_30px_-5px_rgba(139,0,0,0.8)] border border-primary/50 relative overflow-hidden group uppercase tracking-wider"
                >
                    <a
                        href="https://drive.google.com/file/d/14HKcklVouz4X_8W8tHWVBGfNnI2Tkovt/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                        Download CV
                    </a>
                </Button>
            </motion.div>

            {/* Contact Me Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button
                    asChild
                    variant="outline"
                    className="w-full border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground font-semibold rounded-sm py-6 transition-all duration-300 uppercase tracking-wider bg-black/40 backdrop-blur-md"
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
