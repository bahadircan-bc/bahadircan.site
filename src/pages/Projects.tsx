import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion";

import ProjectBackground from "../assets/blueprint-bg.jpg";

type ProjectCarouselItemProps = {
  src: string;
  title: string;
  description: string;
};

function ProjectCarouselItem({
  src,
  title,
  description,
}: ProjectCarouselItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-1/2 px-[13%] w-full text-start flex-1 relative">
          <h1 className="text-7xl mb-5">{title}</h1>
          <motion.div
            className="text-lg mb-[10%] overflow-hidden"
            initial={{ height: 0 }}
            animate={isHovered ? { height: "auto" } : { height: 0 }}
          >
            {description}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const ProjectList = [
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

function ProjectsCarousel() {
  return (
    <div className="w-full h-full">
      <Carousel
        infiniteLoop
        showThumbs={false}
        centerMode
        centerSlidePercentage={80}
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
        {ProjectList.map((project, index) => (
          <ProjectCarouselItem
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </Carousel>
    </div>
  );
}

function ProjectsHeader() {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-full object-cover object-center"
        src={ProjectBackground}
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />
      <div className="w-full h-[50vh] bottom-[20vh] text-white absolute">
        <ProjectsCarousel />
      </div>
    </div>
  );
}

function ProjectsBody() {
  return (
    <>
      <div className="text-5xl text-white text-center py-[10vh]">
        Take a look...
      </div>
      <div className="w-full h-screen grid grid-cols-4 grid-rows-4 gap-5 px-[10vw]">
        {ProjectList.slice(0,16).map((project, index) => (
          <div
            key={index}
            className="h-full w-full even:bg-red-500 odd:bg-blue-500 rounded-md hover:scale-150 transition-all hover:duration-500 hover:z-10 z-0 duration-100 overflow-hidden"
          >
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(${project.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text-5xl text-white text-center">
                {project.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <ProjectsHeader />
      <ProjectsBody />
    </>
  );
}

export default Projects;
