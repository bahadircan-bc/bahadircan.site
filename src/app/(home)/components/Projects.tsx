'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectAccordion from "./ProjectComponents/ProjectAccordion";

const titleVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: "-20%", opacity: 0 },
};

type ProjectsProps = {
  projects: []
}

function Projects(props: ProjectsProps) {
  const { projects } = props;
  const [visible, setVisible] = useState(true);
  return (
    <div className="w-full h-screen text-white grid grid-rows-3 items-center">
      <ProjectAccordion visible={visible} projects={projects} />
      <motion.h1
        className="w-fit text-8xl leading-normal row-start-3 self-start ml-[15%]"
        variants={titleVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeOut" }}
        onViewportEnter={() => {
          setVisible(true);
        }}
        onViewportLeave={() => {
          setVisible(false);
        }}
      >
        projects.
      </motion.h1>
    </div>
  );
}

export default Projects;
