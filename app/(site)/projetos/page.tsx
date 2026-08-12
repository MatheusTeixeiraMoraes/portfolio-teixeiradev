import type { Metadata } from "next";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projetos — Matheus Teixeira",
  description: "Sistemas em produção construídos por Matheus Teixeira: SaaS, dashboards e automações.",
};

export default function ProjetosPage() {
  return (
    <main className="main">
      <ProjectsSection />
      <Footer />
    </main>
  );
}
