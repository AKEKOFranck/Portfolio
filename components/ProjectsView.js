"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects, vitrineUrl } from "@/data/portfolio";

const RUNES = "ᛟᚠᚨᛉᚲᚷᛗᚦᚱᚹᛞᛈ";
const tabs = [
  { id: "client", label: "Projets clients" },
  { id: "concept", label: "Concepts" },
];

export default function ProjectsView() {
  const [tab, setTab] = useState("client");
  const list = projects.filter((p) => p.kind === tab);
  return (
    <>
      <div className="seg" role="tablist">
        {tabs.map((t) => (
          <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}>
            {t.label} ({projects.filter((p) => p.kind === t.id).length})
          </button>
        ))}
      </div>
      <div className="grid swap" key={tab}>
        {list.map((p, i) => <ProjectCard key={p.name} p={p} rune={RUNES[i % RUNES.length]} />)}
      </div>
      <div className="btns">
        <a className="btn" href={vitrineUrl} target="_blank" rel="noopener noreferrer">Voir la vitrine complète</a>
      </div>
    </>
  );
}