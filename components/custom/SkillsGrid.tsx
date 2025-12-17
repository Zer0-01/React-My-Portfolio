import { skills } from "@/data/skills";

export function SkillsGrid() {
    return (
        <section className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-6 place-items-center">
            {skills.map((tech) => (
                <div key={tech.label} className="flex flex-col items-center">
                    <img src={tech.src} alt={tech.label} className="size-10 md:size-12" />
                    <span className="mt-2 text-xs md:text-sm">{tech.label}</span>
                </div>
            ))}
        </section>
    );
}
