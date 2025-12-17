"use client";

import { Button } from "@/components/ui/button";

export function CTAButtons() {
    return (
        <section className="flex flex-col w-full max-w-md gap-3 md:flex-row">
            <Button asChild className="flex-1">
                <a href="https://drive.google.com/file/d/14HKcklVouz4X_8W8tHWVBGfNnI2Tkovt/view?usp=sharing" target="_blank">
                    Download CV
                </a>
            </Button>

            <Button asChild variant="outline" className="flex-1 border-foreground">
                <a href="https://wa.me/601154066082" target="_blank">
                    Contact Me
                </a>
            </Button>
        </section>
    );
}
