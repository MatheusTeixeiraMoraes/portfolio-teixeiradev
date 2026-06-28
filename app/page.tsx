import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Skills } from "@/components/Skills";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="main">
        <Sobre />
        <ProjectsSection />
        <Skills />
      </div>
      <CTA />
      <Footer />
    </>
  );
}
