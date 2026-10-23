import { techStack } from "@/data/tech-stack";

export function TechStack() {
  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading" className="w-full scroll-mt-24 py-16 md:py-24">
      <div className="max-w-3xl">
        <h2 id="tech-stack-heading" className="text-heading">Tech stack</h2>
        <p className="mt-5 max-w-2xl text-secondary-foreground">A practical stack for building and shipping complete products. I work across interfaces, applications, services, and delivery, choosing tools around the product.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {techStack.map((group) => (
          <article key={group.title} className="rounded-lg bg-secondary p-6 sm:p-8">
            <h3 className="text-xl font-medium">{group.title}</h3>
            <p className="mt-3 max-w-md text-secondary-foreground">{group.description}</p>
            <ul aria-label={`${group.title} technologies`} className="mt-6 flex flex-wrap gap-2">
              {group.technologies.map((technology) => <li key={technology} className="rounded-sm bg-card px-3 py-1.5 text-sm text-secondary-foreground">{technology}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
