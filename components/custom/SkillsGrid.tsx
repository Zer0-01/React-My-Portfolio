import { skills } from "@/data/skills";

export function SkillsGrid() {
    return (
        <section className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-6 place-items-center">
            {skills.map((tech) => (
                <div
                    key={tech.label}
                    className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 transition"
                >
                    <img
                        src={tech.src}
                        alt={tech.label}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                    <span className="mt-2 text-xs md:text-sm text-gray-700">{tech.label}</span>
                </div>
            ))}
        </section>
    );
}
