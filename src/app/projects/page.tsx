import ProjectsBody from "./components/ProjectsBody";
import ProjectsHeader from "./components/ProjectsHeader";
import { getProjectData } from "@/db/dbReq";

type ProjectItem = {
  _id: string;
  title: string;
  description: string;
  technologies: string;
  body: string;
  src: string;
  showcase: boolean;
}

async function Projects() {
  const projects: ProjectItem[] = await getProjectData();
  return (
    <>
      <ProjectsHeader projects={projects.filter((project)=>project.showcase)}/>
      <ProjectsBody projects={projects}/>
    </>
  );
}

export type { ProjectItem };
export default Projects;

