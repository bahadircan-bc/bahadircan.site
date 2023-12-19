'use client'

import Image from "next/image";
import ProjectsCarousel from "./ProjectCarousel";
import ProjectBackground from "@/assets/blueprint-bg.jpg";

const ShowcaseProjectList = [
  {
    src: "https://source.unsplash.com/random?sig=1",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officiis eveniet aut vel saepe dolor, maxime ipsam, inventore perferendis porro odio cupiditate vitae veritatis qui, voluptatibus quasi quae eos? Nostrum.",
  },
  {
    src: "https://source.unsplash.com/random?sig=2",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officiis eveniet aut vel saepe dolor, maxime ipsam, inventore perferendis porro odio cupiditate vitae veritatis qui, voluptatibus quasi quae eos? Nostrum.",
  },
  {
    src: "https://source.unsplash.com/random?sig=3",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officiis eveniet aut vel saepe dolor, maxime ipsam, inventore perferendis porro odio cupiditate vitae veritatis qui, voluptatibus quasi quae eos? Nostrum.",
  },
];

function ProjectsHeader() {
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
        <ProjectsCarousel projectList={ShowcaseProjectList} />
      </div>
    </div>
  );
}

export default ProjectsHeader;
