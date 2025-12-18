export function Stats() {
    const items = [
        { value: "2+", label: "Years Experience" },
        { value: "4", label: "Completed Projects" },
        { value: "5", label: "Side Projects" },
    ];

    return (
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center py-8">
            {items.map((item) => (
                <div
                    key={item.label}
                    className="flex flex-col items-center p-4 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300 w-40 md:w-48"
                >
                    <span className="text-2xl md:text-3xl font-extrabold text-gray-900 transition-transform duration-300 hover:scale-105">
                        {item.value}
                    </span>
                    <span className="text-gray-500 mt-1 md:mt-2">{item.label}</span>
                </div>
            ))}
        </section>
    );
}
