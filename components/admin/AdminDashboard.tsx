"use client";

import { useState } from "react";
import { ProjectForm } from "./ProjectForm";
import { createProject, deleteProject, logout } from "@/app/admin/actions";
import type { Project } from "@/types/project";

export function AdminDashboard({
  projects,
  updateActions,
}: {
  projects: Project[];
  updateActions: Record<string, (formData: FormData) => void | Promise<void>>;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showNewForm, setShowNewForm] = useState(false);

  return (
    <div className="admin-shell">
      <div className="admin-inner">
        <div className="admin-header">
          <h1 style={{ fontSize: "1.4rem" }}>Projetos</h1>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="admin-btn secondary" onClick={() => setShowNewForm((v) => !v)}>
              {showNewForm ? "Cancelar" : "+ Novo projeto"}
            </button>
            <form action={logout}>
              <button className="admin-btn secondary" type="submit">
                Sair
              </button>
            </form>
          </div>
        </div>

        {showNewForm && (
          <ProjectForm
            action={async (formData) => {
              await createProject(formData);
              setShowNewForm(false);
            }}
            submitLabel="Criar projeto"
          />
        )}

        {projects.map((project) =>
          editingId === project.id ? (
            <ProjectForm
              key={project.id}
              project={project}
              action={async (formData) => {
                await updateActions[project.id](formData);
                setEditingId(null);
              }}
              submitLabel="Salvar alterações"
            />
          ) : (
            <div className="admin-card" key={project.id}>
              <div className="admin-card-row">
                <div>
                  <strong>{project.name}</strong>
                  <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{project.pill_label}</p>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="admin-btn secondary" onClick={() => setEditingId(project.id)}>
                    Editar
                  </button>
                  <form action={deleteProject.bind(null, project.id)}>
                    <button className="admin-btn danger" type="submit">
                      Excluir
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
