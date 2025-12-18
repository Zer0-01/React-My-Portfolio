"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";
import { AppProjectCard } from "@/components/AppProjectCard";
import { SkillsGrid } from "./SkillsGrid";

export function ProjectTabs() {
    return (
        <section className="w-full max-w-5xl mx-auto px-4">
            <Tabs defaultValue="portfolio" className="w-full">
                <TabsList className="w-full grid grid-cols-2 bg-gray-100 rounded-lg p-1">
                    <TabsTrigger value="portfolio" className="flex-1 rounded-lg">
                        Portfolio
                    </TabsTrigger>
                    <TabsTrigger value="skills" className="flex-1 rounded-lg">
                        Skills
                    </TabsTrigger>
                </TabsList>

                <TabsContent
                    value="portfolio"
                    className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project) => (
                        <AppProjectCard key={project.slug} {...project} />
                    ))}
                </TabsContent>

                <TabsContent value="skills" className="py-6">
                    <SkillsGrid />
                </TabsContent>
            </Tabs>
        </section>
    );
}
