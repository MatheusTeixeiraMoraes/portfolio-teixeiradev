export function About() {
  return (
    <section className="section about" id="sobre">
      <div className="section-head">
        <span className="section-num">01.</span>
        <h2 className="section-title">Sobre mim</h2>
        <span className="section-line" />
      </div>

      <p>
        Tenho <strong>17 anos</strong> e desenvolvo sistemas reais usados por centenas de pessoas — não protótipos,
        produção. Comecei a programar aos 10 anos, com um joguinho feito de blocos numa plataforma escolar. O que era
        curiosidade virou obsessão: entender como as coisas funcionam por dentro e, logo depois, como fazê-las
        funcionar melhor.
      </p>
      <p>
        Hoje co-fundo um SaaS e atuo na interseção entre análise, planejamento e desenvolvimento. Não sou só o dev
        que escreve o código — sou quem entende o problema, planeja a solução e entrega o resultado. Transito
        naturalmente entre os três mundos: do diagrama de arquitetura à conversa com o cliente.
      </p>
      <div className="about-stats">
        <div className="about-stat">
          <span className="about-stat-value">7</span>
          <span className="about-stat-label">Sistemas entregues</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-value">R$1.77B</span>
          <span className="about-stat-label">TPV rastreado</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-value">600h/mês</span>
          <span className="about-stat-label">Economizadas com automação</span>
        </div>
      </div>
    </section>
  );
}
