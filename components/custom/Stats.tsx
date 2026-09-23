"use client";

import { motion } from "framer-motion";

export function Stats() {
    const items = [
        { value: "2+", label: "Years Experience" },
        { value: "4", label: "Completed Projects" },
        { value: "5", label: "Side Projects" },
    ];

    return (
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center py-8 z-10 relative">
            {items.map((item, index) => (
                <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-6 rounded-sm bg-card border border-border shadow-sm transition-colors duration-200 w-48 md:w-56 group relative overflow-hidden"
                >
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                    <span className="text-3xl md:text-5xl font-semibold text-foreground">
                        {item.value}
                    </span>
                    <span className="text-secondary-foreground mt-2 md:mt-3 font-medium tracking-widest uppercase text-xs md:text-sm">{item.label}</span>
                </motion.div>
            ))}
        </section>
    );
}
