import Screen from "@/components/Screen";
import { parcours } from "@/data/portfolio";

export const metadata = { title: "Parcours | Maurice Akeko" };

export default function About() {
  return (
    <Screen title="Parcours" subtitle="Formation, diplomatie et développement">
      <div className="grid">
        {parcours.map((p) => (
          <div className="card" key={p.title}>
            <span className="rune">{p.rune}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </Screen>
  );
}