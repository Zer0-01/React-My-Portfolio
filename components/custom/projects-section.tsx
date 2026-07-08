import { AppProjectCard } from "@/components/AppProjectCard";
import { SectionHeading } from "@/components/custom/section-heading";
import { projects } from "@/data/projects";

const featuredProject = projects.find((project) => project.featured) ?? projects[0];
const secondaryProjects = projects.filter(
  (project) => project.slug !== featuredProject.slug,
);

export function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing border-t">
      <div className="page-shell space-y-10">
        <SectionHeading
          label="/ SELECTED PROJECTS"
          title="Project work framed around real use cases."
          description="The strongest projects here are presented as product stories: what needed to be solved, how the solution was built, and what practical outcome the work created."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <AppProjectCard {...featuredProject} />

          <div className="surface-card p-6">
            <div className="space-y-5">
              <div>
                <p className="section-label">/ FEATURED</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {featuredProject.title}
                </h3>
              </div>
              <div className="grid gap-4">
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-7">{featuredProject.problem}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                    Solution
                  </p>
                  <p className="mt-2 text-sm leading-7">
                    {featuredProject.solution}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
                    Result
                  </p>
                  <p className="mt-2 text-sm leading-7">{featuredProject.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {secondaryProjects.map((project) => (
            <AppProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
