import type { Project } from "@/types/project";

const ICONS = ["grid", "spark", "house", "pin", "bars"] as const;
const COLORS = ["blue", "green", "amber", "purple", "coral"] as const;
const METRIC_COLORS = ["default", "green", "purple"] as const;

export function ProjectForm({
  project,
  action,
  submitLabel,
}: {
  project?: Project;
  action: (formData: FormData) => void | Promise<void>;
  submitLabel: string;
}) {
  const metrics = project?.metrics ?? [];

  return (
    <form action={action} className="admin-card">
      <div className="admin-form-grid">
        <label>
          Ordem
          <input name="order_index" type="number" defaultValue={project?.order_index ?? 0} required />
        </label>
        <label>
          Inverter layout (vídeo à esquerda)
          <input name="reverse" type="checkbox" defaultChecked={project?.reverse} style={{ width: "auto" }} />
        </label>
        <label>
          Ícone
          <select name="icon_key" defaultValue={project?.icon_key ?? "grid"}>
            {ICONS.map((icon) => (
              <option key={icon} value={icon}>
                {icon}
              </option>
            ))}
          </select>
        </label>
        <label>
          Cor
          <select name="color_scheme" defaultValue={project?.color_scheme ?? "blue"}>
            {COLORS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label>
          Texto do selo (pill)
          <input name="pill_label" defaultValue={project?.pill_label} required />
        </label>
        <label>
          Nome do projeto
          <input name="name" defaultValue={project?.name} required />
        </label>
        <label style={{ gridColumn: "1 / -1" }}>
          Descrição
          <textarea name="description" defaultValue={project?.description} rows={3} required />
        </label>
        <label style={{ gridColumn: "1 / -1" }}>
          Tags (separadas por vírgula)
          <input name="tags" defaultValue={project?.tags.join(", ")} />
        </label>
        <label style={{ gridColumn: "1 / -1" }}>
          Caminho do vídeo
          <input name="video_path" defaultValue={project?.video_path} placeholder="/videos/exemplo.mp4" required />
        </label>

        {[0, 1, 2].map((i) => (
          <label key={i} style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 8 }}>
            <input name={`metric_value_${i}`} placeholder="Valor (ex: 600h)" defaultValue={metrics[i]?.value ?? ""} />
            <input name={`metric_label_${i}`} placeholder="Rótulo (ex: Economizadas/mês)" defaultValue={metrics[i]?.label ?? ""} />
            <select name={`metric_color_${i}`} defaultValue={metrics[i]?.color ?? "default"}>
              {METRIC_COLORS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <div style={{ marginTop: 14 }}>
        <button className="admin-btn" type="submit">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
