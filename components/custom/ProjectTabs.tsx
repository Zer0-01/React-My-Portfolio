"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";
import { AppProjectCard } from "@/components/AppProjectCard";
import { SkillsGrid } from "./SkillsGrid";

export function ProjectTabs() {
    return (
        <section className="w-full max-w-4xl">
            <Tabs defaultValue="portfolio">
                <TabsList className="w-full flex">
                    <TabsTrigger value="portfolio" className="flex-1">Portfolio</TabsTrigger>
                    <TabsTrigger value="skills" className="flex-1">Skills</TabsTrigger>
                </TabsList>

                <TabsContent value="portfolio" className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project) => (
                        <AppProjectCard key={project.title} {...project} />
                    ))}
                </TabsContent>

                <TabsContent value="skills" className="py-6">
                    <SkillsGrid />
                </TabsContent>
            </Tabs>
        </section>
    );
}
