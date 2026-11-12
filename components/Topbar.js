"use client";
import { usePathname } from "next/navigation";
import { nav, links } from "@/data/portfolio";

export default function Topbar() {
  const path = usePathname();
  const current = nav.find((n) => n.href === path)?.label ?? "Portfolio";
  return (
    <header className="bar">
      <div className="bar-title">
        <span className="dot" />
        <span>Maurice Akeko</span>
        <span className="sep">/</span>
        <b>{current}</b>
      </div>
      <div className="bar-links">
        <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}