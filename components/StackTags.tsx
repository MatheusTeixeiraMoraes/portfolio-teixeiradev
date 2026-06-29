"use client";

import { Fragment, useEffect, useRef, useState } from "react";

const STACK = [
  {
    name: "React / Next.js",
    icon: "⚛️",
    desc: "Framework JavaScript para interfaces modernas. Next.js adiciona roteamento, SSR e deploy otimizado — base de todos os projetos SaaS desta plataforma.",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    desc: "JavaScript com tipagem estática. Reduz bugs em produção e torna o código mais previsível em sistemas complexos com múltiplos desenvolvedores.",
  },
  {
    name: "Supabase",
    icon: "⚡",
    desc: "Backend como serviço: banco PostgreSQL, autenticação, permissões por linha (RLS) e funções serverless — tudo integrado e pronto para escala.",
  },
  {
    name: "PostgreSQL / SQL",
    icon: "🗄️",
    desc: "Banco de dados relacional robusto. Queries avançadas, joins, views e controle total dos dados — especialmente útil em sistemas multi-tenant.",
  },
  {
    name: "Node.js",
    icon: "🟢",
    desc: "Runtime JavaScript no servidor. Usado para workers, processamento em background e APIs que precisam rodar fora do ciclo de request do front.",
  },
  {
    name: "Vercel / Deploy",
    icon: "🚀",
    desc: "Plataforma de deploy com CDN global. Cada push no GitHub gera um deploy automático com preview de branch — ciclo de entrega contínuo.",
  },
  {
    name: "Cloudflare",
    icon: "🛡️",
    desc: "Camada de segurança e performance na frente de tudo: proteção contra DDoS, WAF, rate limiting e certificados SSL automáticos.",
  },
  {
    name: "Google Maps API",
    icon: "📍",
    desc: "API de geolocalização e rotas. Usada para construir sistemas de Smart Routes com otimização de percurso em campo.",
  },
  {
    name: "IA & Agentes",
    icon: "🤖",
    desc: "Integração com modelos de linguagem para automação inteligente de processos — de atendimento a análise de dados em tempo real.",
  },
  {
    name: "Claude Code",
    icon: "🧠",
    desc: "Desenvolvimento assistido por IA diretamente no editor. Acelera desde a escrita de código até debugging e arquitetura de sistemas.",
  },
  {
    name: "WhatsApp / Automações",
    icon: "💬",
    desc: "Automações de mensagens integradas ao fluxo de negócio — notificações, follow-ups e bots que eliminam trabalho manual repetitivo.",
  },
  {
    name: "SaaS / Multi-tenant",
    icon: "🏢",
    desc: "Arquitetura onde um único sistema serve múltiplos clientes isolados. Cada empresa vê só seus dados, com permissões e configurações próprias.",
  },
  {
    name: "White Label",
    icon: "🎨",
    desc: "Produto customizável com a marca do cliente. Interface, cores e identidade adaptadas por empresa — sem alterar o código base.",
  },
  {
    name: "UI / Design",
    icon: "✏️",
    desc: "Criação de interfaces do zero: wireframes, identidade visual, componentes reutilizáveis e experiência do usuário pensada para conversão.",
  },
  {
    name: "Dashboards",
    icon: "📊",
    desc: "Painéis de dados em tempo real com métricas, gráficos e KPIs — transformando dados brutos em decisões operacionais rápidas.",
  },
];

export function StackTags() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [popover, setPopover] = useState({ marginLeft: 0, arrowLeft: 0, width: 240 });
  const rowRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (rowRef.current && !rowRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    }
    function onResize() {
      setOpenIndex(null);
    }
    document.addEventListener("mousedown", onOutside);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function toggle(i: number) {
    if (openIndex === i) {
      setOpenIndex(null);
      return;
    }
    const rowEl = rowRef.current;
    const tagEl = tagRefs.current[i];
    if (rowEl && tagEl) {
      const rowRect = rowEl.getBoundingClientRect();
      const tagRect = tagEl.getBoundingClientRect();
      const width = Math.min(260, rowRect.width);
      const tagCenter = tagRect.left - rowRect.left + tagRect.width / 2;
      let marginLeft = tagCenter - width / 2;
      marginLeft = Math.max(0, Math.min(marginLeft, rowRect.width - width));
      const arrowLeft = Math.max(14, Math.min(width - 14, tagCenter - marginLeft));
      setPopover({ marginLeft, arrowLeft, width });
    }
    setOpenIndex(i);
  }

  return (
    <div className="skills-row" ref={rowRef}>
      {STACK.map((item, i) => (
        <Fragment key={item.name}>
          <button
            ref={(el) => {
              tagRefs.current[i] = el;
            }}
            type="button"
            className={`skill-tag ${openIndex === i ? "open" : ""}`}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span className="skill-emoji">{item.icon}</span>
            {item.name}
            <svg className="skill-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {openIndex === i && (
            <div className="skill-popover-line">
              <div className="skill-popover" role="dialog" style={{ marginLeft: popover.marginLeft, width: popover.width }}>
                <span className="skill-popover-arrow" style={{ left: popover.arrowLeft }} />
                <div className="skill-popover-head">
                  <span className="skill-popover-icon">{item.icon}</span>
                  <span className="skill-popover-name">{item.name}</span>
                </div>
                <p className="skill-popover-desc">{item.desc}</p>
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
