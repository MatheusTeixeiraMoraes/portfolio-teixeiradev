export function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        Matheus <span>Teixeira</span>
      </div>
      <div className="nav-links">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#skills">Stack</a>
        <a href="#contato">Contato</a>
      </div>
      <a href="#contato" className="nav-cta">
        Fale comigo
      </a>
    </nav>
  );
}
