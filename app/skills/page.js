import Screen from "@/components/Screen";
import { skills } from "@/data/portfolio";

export const metadata = { title: "Compétences | Maurice Akeko" };

export default function Skills() {
  return (
    <Screen title="Compétences" subtitle="Ce que je maîtrise">
      <div className="grid">
        {skills.map((s) => (
          <div className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="chips">{s.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
    </Screen>
  );
}