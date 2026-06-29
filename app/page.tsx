import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/About";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/PageBackground";
import { StackTags } from "@/components/StackTags";

export default function Home() {
  return (
    <div className="layout">
      <PageBackground />
      <Sidebar />
      <main className="main">
        <About />
        <ProjectsSection />
        <div className="mobile-stack">
          <span className="sidebar-stack-label">Stack técnica</span>
          <StackTags />
        </div>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
