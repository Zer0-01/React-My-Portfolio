"use client";

import { Button } from "@/components/ui/button";

export function CTAButtons() {
    return (
        <section className="flex flex-col md:flex-row w-full max-w-md gap-4 mx-auto mt-6">
            {/* Download CV Button */}
            <Button
                asChild
                className="flex-1 bg-black text-white font-medium rounded-lg py-3 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
                <a
                    href="https://drive.google.com/file/d/14HKcklVouz4X_8W8tHWVBGfNnI2Tkovt/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download CV
                </a>
            </Button>

            {/* Contact Me Button */}
            <Button
                asChild
                variant="outline"
                className="flex-1 border-gray-800 text-gray-800 font-medium rounded-lg py-3 transition-transform transform hover:scale-105 hover:bg-gray-100"
            >
                <a
                    href="https://wa.me/601154066082"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact Me
                </a>
            </Button>
        </section>
    );
}
