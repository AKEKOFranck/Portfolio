import Link from "next/link";
import Screen from "@/components/Screen";
import { stats } from "@/data/portfolio";

export default function Home() {
  return (
    <Screen title="Accueil" subtitle="Portfolio de Maurice Akeko">
      <h1>Le droit et le code, avec la même rigueur.</h1>
            <p className="lead">Étudiant en Master 2 de droit public, passionné par le droit du numérique et les institutions, et développeur front-end. Je mets la rigueur du juriste au service de sites clairs, rapides et fiables.</p>
      <div className="chips">
        <span className="chip hot">Master 2 Droit public</span>
        <span className="chip">Droit du numérique</span>
        <span className="chip">Développeur front-end</span>
        <span className="chip">Next.js et React</span>
      </div>
      <div className="btns">
        <Link className="btn p" href="/projects">Voir mes projets</Link>
        <Link className="btn" href="/contact">Me contacter</Link>
      </div>
      <div className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
        ))}
      </div>
    </Screen>
  );
}