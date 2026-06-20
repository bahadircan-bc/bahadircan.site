// STUB — owned by Agent B ("Project Index"). Typeset index table with depth tags
// and opacity-dim-others hover. Reads `projects` from src/content/projects.ts.
// Contract: default export, no props.
import { projects } from "@/content/projects";

export default function ProjectIndex() {
  return (
    <section id="work" className="px-6 py-24">
      <p className="font-mono text-sm text-ash">
        project index stub — {projects.length} projects
      </p>
    </section>
  );
}
