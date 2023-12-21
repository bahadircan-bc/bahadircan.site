import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { motion } from "framer-motion";
import { ProjectItem } from "../page";
import useWindowSize from "@/hooks/useWindowSize";

type ProjectCarouselItemProps = {
  index: number;
  src: string;
  title: string;
  description: string;
};

function ProjectCarouselItem({
  index,
  src,
  title,
  description,
}: ProjectCarouselItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const windowSize = useWindowSize();
  return (
    <div
      className="px-10 h-[50vh] w-full"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div
        className="w-full min-h-full relative flex items-end justify-center rounded-3xl overflow-clip"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(${
            src ?? `https://source.unsplash.com/random?sig=${index}`
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-1/2 px-[13%] w-full text-start flex-1 relative">
          <h1 className="text-3xl lg:text-7xl mb-5">{title}</h1>
          <motion.div
            className="text-lg mb-[20%] lg:mb-[10%] overflow-hidden"
            initial={{ height: 0 }}
            animate={
              windowSize.width < 769
                ? { height: "auto" }
                : isHovered
                ? { height: "auto" }
                : { height: 0 }
            }
          >
            {description}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

type ProjectCarouselProps = {
  projectList: ProjectItem[];
};

function ProjectsCarousel(props: ProjectCarouselProps) {
  const { projectList } = props;
  const windowSize = useWindowSize();

  if (windowSize.width === 0) return null; 

  return (
    <div className="w-full h-full">
      <Carousel
        infiniteLoop
        showThumbs={false}
        centerMode
        centerSlidePercentage={windowSize.width > 768 ? 80 : 100}
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              title={label}
              onClick={onClickHandler}
              className="h-full w-[calc(10%-2.5rem)] absolute top-0 right-0 z-10"
            />
          )
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              title={label}
              onClick={onClickHandler}
              className="h-full w-[calc(10%-2.5rem)] absolute top-0 left-0 z-10"
            />
          )
        }
      >
        {projectList.map((project, index) => (
          <ProjectCarouselItem
            key={index}
            index={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default ProjectsCarousel;

export type { ProjectCarouselItemProps, ProjectCarouselProps };
export { ProjectCarouselItem, ProjectsCarousel };
