import Screen from "@/components/Screen";
import ProjectsView from "@/components/ProjectsView";

export const metadata = { title: "Projets | Maurice Akeko" };

export default function Projects() {
  return (
    <Screen title="Projets" subtitle="11 sites en ligne : projets clients et concepts">
      <ProjectsView />
    </Screen>
  );
}