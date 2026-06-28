import { createClient } from "@/lib/supabase/server";
import { ProjectRow } from "./ProjectRow";
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
    <div className="proj-section" id="projetos">
      <div className="proj-section-header">
        <div className="eyebrow">Projetos</div>
        <div className="sec-title">Sistemas em produção</div>
      </div>

      {projects.map((project, i) => {
        const tilt = TILTS[i % TILTS.length];
        return <ProjectRow key={project.id} project={project} baseRy={tilt.ry} baseRx={tilt.rx} />;
      })}
    </div>
  );
}
