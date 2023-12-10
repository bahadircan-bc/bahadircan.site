function ProjectCard() {
  return (
    <div className="w-[15%] aspect-[250/311] border-2 border-primary shadow-[0px_0px_16px_0px_#7A3F88] inline-block first:ml-0 ml-8 last:mr-10 my-5">
      <div className="w-full h-full flex flex-col items-center p-2">
        <h1 className="mb-auto">Project Name</h1>
        <p className="mb-auto">Project Description</p>
      </div>
    </div>
  );
}

function ProjectCardCarousel() {
  return (
    <div className="row-start-2 w-full h-fit pl-[15%] overflow-x-scroll whitespace-nowrap">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

function Projects() {
  return (
    <div className="w-full h-screen text-white grid grid-rows-3 items-center">
      <ProjectCardCarousel />
      <h1 className="w-fit text-8xl leading-normal row-start-3 self-start ml-[15%]">
        projects.
      </h1>
    </div>
  );
}

export default Projects;
