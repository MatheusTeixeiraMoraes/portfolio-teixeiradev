import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <span className="hero-eyebrow">Software Developer</span>
        <h1>Matheus Teixeira</h1>
        <h2>
          Desenvolvo plataformas web, automações e dashboards do zero — <span className="role-accent">em produção</span>.
        </h2>
        <p>
          Co-fundo um SaaS e atuo na interseção entre análise, planejamento e desenvolvimento: do diagrama de
          arquitetura à conversa com o cliente. 7 sistemas entregues, R$1,77B em TPV rastreado e usuários reais
          usando o que eu construo.
        </p>

        <div className="hero-actions">
          <Link href="/projetos" className="btn-primary">
            Ver projetos
          </Link>
          <Link href="/contato" className="btn-secondary">
            Falar comigo
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
