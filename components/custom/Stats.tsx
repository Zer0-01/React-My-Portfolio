export function Stats() {
    const items = [
        { value: "2+", label: "Years experience" },
        { value: "3", label: "Completed projects" },
        { value: "5+", label: "Side projects" },
    ];

    return (
        <section className="flex justify-center gap-8 text-center text-sm md:text-base">
            {items.map((item) => (
                <div key={item.label} className="flex flex-col">
                    <span className="text-xl md:text-2xl font-bold">{item.value}</span>
                    <span className="text-gray-500">{item.label}</span>
                </div>
            ))}
        </section>
    );
}
