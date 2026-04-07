import { skills } from "@/data/skills";

export function SkillsGrid() {
    return (
        <section className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-6 place-items-center">
            {skills.map((tech) => (
                <div
                    key={tech.label}
                    className="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group cursor-default"
                >
                    <div className="relative group-hover:scale-110 transition-transform duration-300">
                        <img
                            src={tech.src}
                            alt={tech.label}
                            className="w-10 h-10 md:w-12 md:h-12 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
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
