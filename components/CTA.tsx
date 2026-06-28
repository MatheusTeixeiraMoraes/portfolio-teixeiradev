export function CTA() {
  return (
    <div className="cta" id="contato">
      <div className="cta-glow" />
      <div className="cta-inner">
        <h2>Quer ver uma demo ao vivo?</h2>
        <p>Todos os sistemas estão em produção. Entre em contato para uma demonstração.</p>
        <div className="cta-btns">
          <a href="mailto:matheusteixeiramoraes2019@gmail.com" className="cta-btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,12 2,6" />
            </svg>
            Enviar e-mail
          </a>
          <a href="https://wa.me/5511973988169" target="_blank" rel="noopener noreferrer" className="cta-btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.07 6.07l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
