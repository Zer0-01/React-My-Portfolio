import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface AppProjectCardProps {
    title: string
    description: string
}

export function AppProjectCard({ title, description }: AppProjectCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    )
}
