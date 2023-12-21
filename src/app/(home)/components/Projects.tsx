"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectAccordion from "./ProjectComponents/ProjectAccordion";
import { ProjectItem } from "@/app/projects/page";
import useWindowSize from "@/hooks/useWindowSize";

const titleVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: "-20%", opacity: 0 },
};

type ProjectsProps = {
  projects: ProjectItem[];
};

function Projects(props: ProjectsProps) {
  const windowSize = useWindowSize();

  const { projects } = props;
  const [visible, setVisible] = useState(true);
  return (
    <div className="w-full h-screen text-white mt-[10vh] lg:mt-0 lg:grid lg:grid-rows-3 items-center">
      <motion.h1
        className="w-fit text-3xl lg:text-8xl leading-normal row-start-3 self-start ml-[15%]"
        variants={titleVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeOut" }}
        onViewportEnter={() => {
          if (windowSize.width < 769) return;
          setVisible(true);
        }}
        onViewportLeave={() => {
          if (windowSize.width < 769) return;
          setVisible(false);
        }}
      >
        projects.
      </motion.h1>
      <ProjectAccordion visible={visible} projects={projects} />
    </div>
  );
}

export default Projects;
