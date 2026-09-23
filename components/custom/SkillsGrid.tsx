import { skills } from "@/data/skills";

export function SkillsGrid() {
    return (
        <section className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-6 place-items-center">
            {skills.map((tech) => (
                <div
                    key={tech.label}
                    className="flex flex-col items-center p-3 rounded-xl hover:bg-accent border border-transparent hover:border-border transition-colors duration-200 group cursor-default"
                >
                    <div className="relative group-hover:scale-110 transition-transform duration-200">
                        <img
                            src={tech.src}
                            alt={tech.label}
                            className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        />
                    </div>
                    <span className="mt-3 text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                        {tech.label}
                    </span>
                </div>
            ))}
        </section>
    );
}
