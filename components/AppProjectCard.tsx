import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

interface AppProjectCardProps {
    slug: string;
    title: string;
    description: string;
}

export function AppProjectCard({ slug, title, description }: AppProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`} className="block">
            <Card className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer rounded-xl">
                <CardHeader>
                    <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
                    <CardDescription className="text-gray-600">{description}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
}
