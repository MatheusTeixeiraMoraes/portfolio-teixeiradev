"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectIcon } from "./ProjectIcon";
import type { Project } from "@/types/project";

const METRIC_CLASS: Record<Project["metrics"][number]["color"], string> = {
  default: "",
  green: "g",
  purple: "p",
};

export function ProjectCard({ project, baseRy, baseRx }: { project: Project; baseRy: number; baseRx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    let dragging = false;
    let sx = 0;
    let sy = 0;
    let ry = baseRy;
    let rx = baseRx;

    function apply(transition: boolean) {
      el!.style.transition = transition ? "transform .6s cubic-bezier(.25,.46,.45,.94)" : "none";
      el!.style.transform = `perspective(1100px) rotateY(${ry}deg) rotateX(${rx}deg)`;
    }

    function onMouseDown(e: MouseEvent) {
      dragging = true;
      sx = e.clientX;
      sy = e.clientY;
      e.preventDefault();
    }
    function onMouseMove(e: MouseEvent) {
      if (!dragging) return;
      ry += (e.clientX - sx) * 0.45;
      rx -= (e.clientY - sy) * 0.35;
      rx = Math.max(-35, Math.min(35, rx));
      ry = Math.max(-65, Math.min(65, ry));
      sx = e.clientX;
      sy = e.clientY;
      apply(false);
    }
    function onMouseUp() {
      if (!dragging) return;
      dragging = false;
      ry = baseRy;
      rx = baseRx;
      apply(true);
    }
    function onTouchStart(e: TouchEvent) {
      const t = e.touches[0];
      dragging = true;
      sx = t.clientX;
      sy = t.clientY;
    }
    function onTouchMove(e: TouchEvent) {
      if (!dragging) return;
      const t = e.touches[0];
      ry += (t.clientX - sx) * 0.45;
      rx -= (t.clientY - sy) * 0.35;
      rx = Math.max(-35, Math.min(35, rx));
      ry = Math.max(-65, Math.min(65, ry));
      sx = t.clientX;
      sy = t.clientY;
      apply(false);
    }
    function onTouchEnd() {
      if (!dragging) return;
      dragging = false;
      ry = baseRy;
      rx = baseRx;
      apply(true);
    }

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [baseRy, baseRx]);

  function handleFullscreen() {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) video.requestFullscreen();
    else if ((video as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen)
      (video as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen!();
  }

  return (
    <div className={`proj-row ${project.reverse ? "rev" : ""}`}>
      <div className="pi">
        <span className={`pi-pill pill-${project.color_scheme}`}>
          <ProjectIcon icon={project.icon_key} />
          {project.pill_label}
        </span>
        <h3 className="pi-name">{project.name}</h3>
        <p className="pi-desc">{project.description}</p>
        <div className="pi-tags">
          {project.tags.map((tag) => (
            <span className="pi-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="pi-metrics">
          {project.metrics.map((metric, i) => (
            <div className={`pi-metric ${METRIC_CLASS[metric.color]}`} key={i}>
              <span className="mn">{metric.value}</span>
              <span className="ml">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pd">
        <button className="fullscreen-btn" title="Tela cheia" onClick={handleFullscreen}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>
        <div
          ref={cardRef}
          className="screen-card"
          style={{ transform: `perspective(1100px) rotateY(${baseRy}deg) rotateX(${baseRx}deg)` }}
        >
          <video
            ref={videoRef}
            src={visible ? project.video_path : undefined}
            preload="none"
            autoPlay={visible}
            loop
            muted
            playsInline
          />
        </div>
        <span className="drag-hint">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3" />
          </svg>
          Arraste para rotacionar
        </span>
      </div>
    </div>
  );
}
