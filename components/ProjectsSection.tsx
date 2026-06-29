import { createClient } from "@/lib/supabase/server";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/types/project";

const TILTS = [
  { ry: -8, rx: 3 },
  { ry: 10, rx: -4 },
  { ry: -12, rx: 5 },
  { ry: 14, rx: -3 },
  { ry: -7, rx: 4 },
];

export async function ProjectsSection() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("projects")
    .select("*")
    .order("order_index", { ascending: true });

  const projects = (data ?? []) as Project[];

  return (
    <section className="section" id="projetos">
      <div className="section-head">
        <span className="section-num">02.</span>
        <h2 className="section-title">Projetos</h2>
        <span className="section-line" />
      </div>

      {projects.map((project, i) => {
        const tilt = TILTS[i % TILTS.length];
        return <ProjectCard key={project.id} project={project} baseRy={tilt.ry} baseRx={tilt.rx} />;
      })}
    </section>
  );
}
