"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";
import { AppProjectCard } from "@/components/AppProjectCard";
import { SkillsGrid } from "./SkillsGrid";
import { motion } from "framer-motion";

export function ProjectTabs() {
    return (
        <section className="w-full max-w-5xl mx-auto px-4 z-10 relative mt-12 mb-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <Tabs defaultValue="portfolio" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="flex h-auto w-full max-w-md bg-black/40 backdrop-blur-xl border border-white/5 rounded-full p-1 shadow-2xl">
                            <TabsTrigger
                                value="portfolio"
                                className="flex-1 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg text-muted-foreground uppercase tracking-[0.2em] font-bold text-[10px] md:text-xs py-2.5 transition-all duration-300 hover:text-foreground"
                            >
                                Portfolio
                            </TabsTrigger>
                            <TabsTrigger
                                value="skills"
                                className="flex-1 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg text-muted-foreground uppercase tracking-[0.2em] font-bold text-[10px] md:text-xs py-2.5 transition-all duration-300 hover:text-foreground"
                            >
                                Skills
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent
                        value="portfolio"
                        className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                            >
                                <AppProjectCard {...project} />
                            </motion.div>
                        ))}
                    </TabsContent>

                    <TabsContent value="skills" className="py-10">
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <SkillsGrid />
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </motion.div>
        </section>
    );
}
