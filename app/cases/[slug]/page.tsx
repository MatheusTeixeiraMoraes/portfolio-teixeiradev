import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { PageBackground } from "@/components/PageBackground";
import { Footer } from "@/components/Footer";
import { CaseMedia } from "@/components/CaseMedia";
import { CASES, slugify } from "@/content/cases";
import type { Project } from "@/types/project";

const METRIC_CLASS: Record<Project["metrics"][number]["color"], string> = {
  default: "",
  green: "g",
  purple: "p",
};

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/cases/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const study = CASES[slug];
  if (!study) return { title: "Case não encontrado — Matheus Teixeira" };

  return {
    title: `${study.projectName} — ${study.subtitle}`,
    description: study.sections[0]?.paragraphs?.[0]?.slice(0, 160),
  };
}

export default async function CasePage(props: PageProps<"/cases/[slug]">) {
  const { slug } = await props.params;
  const study = CASES[slug];
  if (!study) notFound();

  // Busca o projeto correspondente para reaproveitar tags, métricas e demo.
  const supabase = await createClient();
  const { data } = await supabase.from("projects").select("*");
  const project = ((data ?? []) as Project[]).find((p) => slugify(p.name) === slug) ?? null;

  return (
    <div className="case-shell">
      <PageBackground />

      <article className="case">
        <Link href="/#projetos" className="case-back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Voltar para projetos
        </Link>

        <header className="case-head">
          <span className={`pi-pill pill-${study.color_scheme}`}>{study.pill}</span>
          <h1 className="case-title">{study.projectName}</h1>
          <p className="case-subtitle">{study.subtitle}</p>

          {project && project.tags.length > 0 && (
            <div className="pi-tags case-tags">
              {project.tags.map((tag) => (
                <span className="pi-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {project && project.metrics.length > 0 && (
          <div className="case-metrics">
            {project.metrics.map((metric, i) => (
              <div className={`case-metric ${METRIC_CLASS[metric.color]}`} key={i}>
                <span className="mn">{metric.value}</span>
                <span className="ml">{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        {project && <CaseMedia src={project.video_path} title={project.name} />}

        {study.sections.map((section) => (
          <section className="case-section" key={section.title}>
            <h2 className="case-section-title">{section.title}</h2>

            {section.paragraphs?.map((text, i) => (
              <p className="case-p" key={i}>
                {text}
              </p>
            ))}

            {section.groups && (
              <div className="case-groups">
                {section.groups.map((group) => (
                  <div className="case-group" key={group.label}>
                    <span className="case-group-label">{group.label}</span>
                    <ul className="case-group-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.features && (
              <ul className="case-features">
                {section.features.map((feature) => (
                  <li className="case-feature" key={feature.name}>
                    <span className="case-feature-name">{feature.name}</span>
                    <span className="case-feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="case-cta">
          <p>Quer ver esse sistema rodando ao vivo ou discutir algo parecido?</p>
          <div className="contact-btns">
            <a href="mailto:matheusteixeiramoraes2019@gmail.com" className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,12 2,6" />
              </svg>
              Enviar e-mail
            </a>
            <Link href="/#projetos" className="btn-secondary">
              Ver outros projetos
            </Link>
          </div>
        </div>

        <Footer />
      </article>
    </div>
  );
}
