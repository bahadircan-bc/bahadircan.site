import { motion } from "framer-motion";
import AccordionItem from "./AccordionItem";

const accordionVariants = {
  open: { height: "fit-content", transition: { duration: 0.5, delay: 0.2 } },
  closed: { height: 0 },
};

type ProjectAccordionItem = {
  title: string;
  description: string;
  _id: string;
};

type ProjectAccordionProps = {
  visible: boolean;
  projects: ProjectAccordionItem[];
};

function ProjectAccordion(props: ProjectAccordionProps) {
  const { projects } = props;
  return (
    <motion.div
      className="row-start-2 lg:w-1/2 mt-[5vh] lg:mt-0 lg:ml-auto lg:mr-10 h-fit flex flex-col overflow-hidden self-start"
      variants={accordionVariants}
      initial="closed"
      animate={props.visible ? "open" : "closed"}
    >
      {projects.map((project, index) => {
        return (
          <AccordionItem
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            link={project._id}
          />
        );
      })}
    </motion.div>
  );
}

export default ProjectAccordion;
