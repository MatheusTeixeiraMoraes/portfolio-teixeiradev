export function Sobre() {
  return (
    <div className="section" id="sobre">
      <div className="container">
        <div className="sobre-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span className="sobre-eyebrow">+ sobre mim</span>
            <p className="sobre-name">Matheus Teixeira</p>
            <h2 className="sobre-title">
              Onde o código
              <br />
              encontra <em>estratégia</em>
            </h2>
            <p className="sobre-body">
              Comecei a programar com 10 anos — o primeiro projeto foi um joguinho feito de blocos numa plataforma
              escolar. Mas o que era curiosidade virou obsessão: entender como as coisas funcionam por dentro e,
              logo depois, como fazê-las funcionar melhor.
            </p>
            <p className="sobre-body">
              Hoje, aos 17, construo sistemas usados por centenas de pessoas, co-fundo um SaaS e atuo na interseção
              entre análise, planejamento e desenvolvimento. Não sou só o dev que escreve o código — sou quem
              entende o problema, planeja a solução e entrega o resultado.
            </p>
            <div className="sobre-quote">
              <p>&quot;Success lies in imbalance.&quot;</p>
              <span>Resiliência como método</span>
            </div>
          </div>
          <div className="sobre-right">
            <div className="sobre-origin">
              <span className="on">10</span>
              <p className="ot">
                Anos quando criou o primeiro projeto — um jogo em blocos que virou o ponto de partida para tudo que
                veio depois.
              </p>
            </div>
            <div className="trait">
              <div className="trait-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M3 12h3m12 0h3M12 3v3m0 12v3" />
                </svg>
              </div>
              <div>
                <p className="trait-name">Analítico por natureza</p>
                <p className="trait-desc">
                  Antes de escrever uma linha de código, entende o problema. Dados, padrões e métricas guiam cada
                  decisão técnica e comercial.
                </p>
              </div>
            </div>
            <div className="trait">
              <div className="trait-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M7 16V4m0 0L3 8m4-4 4 4m2 4v8m0 0 4-4m-4 4-4-4" />
                </svg>
              </div>
              <div>
                <p className="trait-name">Planejamento + desenvolvimento + comercial</p>
                <p className="trait-desc">
                  Transita naturalmente entre os três mundos — do diagrama de arquitetura à conversa com o cliente.
                </p>
              </div>
            </div>
            <div className="trait">
              <div className="trait-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="trait-name">Resiliente</p>
                <p className="trait-desc">
                  Sistemas em produção, co-fundação de empresa e entrega contínua — tudo construído com
                  consistência, não sorte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
