/** Demo do projeto na página de case: iframe para demos HTML, vídeo para gravações. */
export function CaseMedia({ src, title }: { src: string; title: string }) {
  const isInteractive = src.endsWith(".html");

  return (
    <div className="case-media">
      {isInteractive ? (
        <iframe src={src} title={title} loading="lazy" sandbox="allow-scripts" />
      ) : (
        <video src={src} preload="metadata" autoPlay loop muted playsInline />
      )}
    </div>
  );
}
