export function Hero() {
  return (
    <div className="hero">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-inner">
        <div>
          <div className="hero-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Software developer · 17 anos
          </div>
          <h1>
            Sistemas reais.
            <br />
            <em>Resultados reais.</em>
          </h1>
          <p className="hero-sub">
            Desenvolvo plataformas web, automações e dashboards do zero — com usuários ativos, métricas mensuráveis e
            código em produção.
          </p>
          <div className="hero-btns">
            <a href="#projetos" className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
              Ver projetos
            </a>
            <a href="#contato" className="btn-secondary">
              Fale comigo
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card accent">
            <span className="sn">R$1.77B</span>
            <span className="sl">TPV monitorado</span>
          </div>
          <div className="stat-card">
            <span className="sn">16k+</span>
            <span className="sl">Clientes rastreados</span>
          </div>
          <div className="stat-card">
            <span className="sn">600h</span>
            <span className="sl">Economizadas/mês</span>
          </div>
          <div className="stat-card">
            <span className="sn">7</span>
            <span className="sl">Sistemas entregues</span>
          </div>
        </div>
      </div>
    </div>
  );
}
