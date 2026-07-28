import type { ColorScheme } from "@/types/project";

export interface CaseFeature {
  name: string;
  text: string;
}

export interface CaseGroup {
  label: string;
  items: string[];
}

export interface CaseSection {
  title: string;
  paragraphs?: string[];
  groups?: CaseGroup[];
  features?: CaseFeature[];
}

export interface CaseStudy {
  /** Precisa bater com `projects.name` no Supabase (via slugify). */
  projectName: string;
  subtitle: string;
  pill: string;
  color_scheme: ColorScheme;
  sections: CaseSection[];
}

/** "CRM Multi-MCC" -> "crm-multi-mcc" */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const CASES: Record<string, CaseStudy> = {
  tri3fastboard: {
    projectName: "Tri3FastBoard",
    subtitle: "Dashboard de Performance para Consultores MP",
    pill: "SaaS · White Label",
    color_scheme: "blue",
    sections: [
      {
        title: "Contexto do problema",
        paragraphs: [
          "Empresas que gerenciam equipes de consultores de maquininhas (Mercado Pago) precisam acompanhar performance individual e de carteira em tempo real — não só TPV bruto, mas comportamento (visitas, agenda, prospecção) e resultado (churn, TPV, acionáveis comerciais). Sem isso, a gestão fica reativa e sem visibilidade de quem está performando e por quê.",
        ],
      },
      {
        title: "Solução",
        paragraphs: [
          "Dashboard multi-tenant que ingere planilhas de operação (upload direto) e transforma em um sistema de scoring ponderado por pilares, com dois grandes grupos:",
        ],
        groups: [
          {
            label: "Pilares de Atuação (comportamento)",
            items: ["Awareness", "Aderência à Agenda", "Produtividade"],
          },
          {
            label: "Pilares de Resultado",
            items: ["Net Churn", "Acionáveis Comerciais", "TPV"],
          },
        ],
      },
      {
        title: "Score Geral",
        paragraphs: [
          "Cada pilar tem peso configurável (ex: Net Churn = 3 pts, Awareness = 1.5 pts) somando um Score Geral de 0 a 10 por consultor, usado inclusive para remuneração variável.",
        ],
      },
      {
        title: "Funcionalidades principais",
        features: [
          {
            name: "Visão Geral",
            text: "KPIs da equipe (TPV da carteira, % acima da meta, distribuição visual de status — acima da meta / na linha / crítico) e ranking de consultores com score e sub-scores por pilar.",
          },
          {
            name: "Por Área",
            text: "Ranking cruzado por pilar específico, comparando todos os consultores num mesmo indicador.",
          },
          {
            name: "Consultor (drill-down)",
            text: "Performance individual completa — meta vs. realizado, gap percentual para bater meta, métricas brutas que compõem cada pilar (nº de visitas, sellers agendados, etc).",
          },
          {
            name: "Comparar Datas",
            text: "Diff entre dois períodos, mostrando delta por pilar e por consultor (detecta quem melhorou/piorou e onde).",
          },
          {
            name: "Queda de TPV",
            text: "Monitoramento de ritmo diário normalizado (não compara bruto, compara ritmo/dia vs. mês anterior fechado) para identificar quedas reais antes do fechamento do mês.",
          },
          {
            name: "Clientes",
            text: "Carteira completa com geocodificação, status de identificação, GPS, e priorização (P1–P4).",
          },
          {
            name: "Acionáveis Comerciais",
            text: "Fila de ações segmentadas (reativação, aumento de TPV, atualização cadastral, oferta de crédito) com valor em jogo e priorização.",
          },
          {
            name: "Configurar Metas",
            text: "Interface admin para ajustar meta de cada pilar sem alterar a lógica de cálculo do score (a meta só define o selo “atingida”/“faltam X”, não o peso do pilar).",
          },
        ],
      },
      {
        title: "Escala",
        paragraphs: [
          "Usado por 150+ consultores em múltiplas empresas, rastreando TPV substancial mensalmente.",
        ],
      },
      {
        title: "Stack",
        paragraphs: [
          "Next.js + Supabase + Vercel (dados demo protegidos via flag “Dados fictícios” para apresentações sem expor dados reais de produção).",
        ],
      },
    ],
  },
};

/** Retorna o case de um projeto pelo nome, ou null se ainda não houver case escrito. */
export function getCaseByProjectName(name: string): (CaseStudy & { slug: string }) | null {
  const slug = slugify(name);
  const study = CASES[slug];
  return study ? { ...study, slug } : null;
}
