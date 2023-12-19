"use client";

import Image from "next/image";
import ProjectsCarousel from "./ProjectCarousel";
import ProjectBackground from "@/assets/blueprint-bg.jpg";
import { ProjectItem } from "../page";

type ProjectsHeaderProps = {
  projects: ProjectItem[];
};

function ProjectsHeader(props: ProjectsHeaderProps) {
  const { projects } = props;
  return (
    <div className="w-full h-screen relative">
      <Image
        className="w-full h-full object-cover object-center"
        src={ProjectBackground}
        alt=""
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />
      <div className="w-full h-[50vh] bottom-[20vh] text-white absolute">
        <ProjectsCarousel projectList={projects} />
      </div>
    </div>
  );
}

export default ProjectsHeader;
