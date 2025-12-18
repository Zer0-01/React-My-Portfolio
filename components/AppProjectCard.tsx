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
            <Card className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer rounded-xl">
                <CardHeader className="space-y-2">
                    <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-3">{description}</CardDescription>

                    {/* Additional info */}
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-2">
                        {year && <span>{year}</span>}
                        {projectType && <span className="capitalize">{projectType}</span>}
                        {role && <span>{role}</span>}
                        {organization && <span>{organization}</span>}
                        {company && <span>{company}</span>}
                        {client && <span>{client}</span>}
                    </div>

                    {/* Technologies */}
                    {technologies?.length && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded-full"
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
