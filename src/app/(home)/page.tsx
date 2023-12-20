import { getProjectData } from "@/db/dbReq";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import dynamic from "next/dynamic";
import { ProjectItem } from "../projects/page";
// import "../styles/output.css";

const Timeline = dynamic(
  () => import("./components/Timeline"),
  { ssr: false }
)

async function Home() {
  const projects: ProjectItem[] = await getProjectData(); 
  return (
    <>
      <Hero />
      <Projects projects={projects.filter(
        (project)=>project.showcase
      )}/>
      <Timeline />
    </>
  );
}

export default Home;
