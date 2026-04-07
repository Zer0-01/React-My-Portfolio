import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

interface AppProjectCardProps {
    slug: string;
    title: string;
    description: string;
    year?: number;
    projectType?: string;
    role?: string;
    organization?: string;
    company?: string;
    client?: string;
    technologies?: string[];
}

export function AppProjectCard({
    slug,
    title,
    description,
    year,
    projectType,
    role,
    organization,
    company,
    client,
    technologies,
}: AppProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`} className="block">
            <Card className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer rounded-xl border border-white/5 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-2">
                    <CardTitle className="text-lg md:text-xl font-bold tracking-tight">{title}</CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3 leading-relaxed">{description}</CardDescription>

                    {/* Additional info */}
                    <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-muted-foreground/60 mt-2">
                        {year && <span>{year}</span>}
                        {projectType && <span className="capitalize">{projectType}</span>}
                        {role && <span>{role}</span>}
                        {organization && <span>{organization}</span>}
                        {company && <span>{company}</span>}
                        {client && <span>{client}</span>}
                    </div>

                    {/* Technologies */}
                    {technologies?.length && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-0.5 text-[10px] font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </CardHeader>
            </Card>
        </Link>
    );
}
