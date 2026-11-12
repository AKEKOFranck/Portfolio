"use client";
import { useRef } from "react";

export default function ProjectCard({ p, rune }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <a ref={ref} className="card tilt" href={p.url} target="_blank" rel="noopener noreferrer" onPointerMove={move} onPointerLeave={leave}>
      <span className="rune">{rune}</span>
      <h3>{p.name}</h3>
      <p>{p.text}</p>
      <div className="chips"><span className="chip">{p.tag}</span></div>
    </a>
  );
}