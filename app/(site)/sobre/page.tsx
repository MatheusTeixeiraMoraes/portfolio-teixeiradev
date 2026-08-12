import type { Metadata } from "next";
import { About } from "@/components/About";
import { StackTags } from "@/components/StackTags";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre — Matheus Teixeira",
  description: "Trajetória, números e stack técnica de Matheus Teixeira, Software Developer.",
};

export default function SobrePage() {
  return (
    <main className="main">
      <About />

      <div className="about stack-section">
        <span className="stack-label">Stack técnica</span>
        <StackTags />
      </div>

      <Footer />
    </main>
  );
}
