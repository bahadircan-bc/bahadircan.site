import Link from "next/link";
import { ProjectItem } from "../page";

type ProjectBodyProps = {
  projects: ProjectItem[];
};

function ProjectsBody(props: ProjectBodyProps) {
  const { projects } = props;
  return (
    <>
      <div className="text-5xl text-white text-center py-[10vh]">
        Take a look...
      </div>
      <div className="w-full h-screen grid grid-cols-4 grid-rows-4 gap-5 px-[10vw]">
        {projects.map((project, index) => (
          <Link key={index} href={`project/${project._id}`}>
            <div
              className="h-full w-full rounded-md hover:scale-125 transition-all hover:duration-500 hover:z-10 z-0 duration-100 overflow-hidden"
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url(${project.src ?? `https://source.unsplash.com/random?sig=${index}`})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-3xl text-white text-center px-[10%]">
                  {project.title}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProjectsBody;
