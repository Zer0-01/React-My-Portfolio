import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

interface AppProjectCardProps {
    slug: string
    title: string
    description: string
}

export function AppProjectCard({ slug, title, description }: AppProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`} className="block">
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </Card>
        </Link>

    )
}
