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
    src: "https://source.unsplash.com/random?sig=4",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officiis eveniet aut vel saepe dolor, maxime ipsam, inventore perferendis porro odio cupiditate vitae veritatis qui, voluptatibus quasi quae eos? Nostrum.",
  },
  {
    src: "https://source.unsplash.com/random?sig=5",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officiis eveniet aut vel saepe dolor, maxime ipsam, inventore perferendis porro odio cupiditate vitae veritatis qui, voluptatibus quasi quae eos? Nostrum.",
  },
  {
    src: "https://source.unsplash.com/random?sig=6",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officiis eveniet aut vel saepe dolor, maxime ipsam, inventore perferendis porro odio cupiditate vitae veritatis qui, voluptatibus quasi quae eos? Nostrum.",
  },
  {
    src: "https://source.unsplash.com/random?sig=7",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officiis eveniet aut vel saepe dolor, maxime ipsam, inventore perferendis porro odio cupiditate vitae veritatis qui, voluptatibus quasi quae eos? Nostrum.",
  },
  {
    src: "https://source.unsplash.com/random?sig=8",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officiis eveniet aut vel saepe dolor, maxime ipsam, inventore perferendis porro odio cupiditate vitae veritatis qui, voluptatibus quasi quae eos? Nostrum.",
  },
  {
    src: "https://source.unsplash.com/random?sig=9",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officiis eveniet aut vel saepe dolor, maxime ipsam, inventore perferendis porro odio cupiditate vitae veritatis qui, voluptatibus quasi quae eos? Nostrum.",
  },
  {
    src: "https://source.unsplash.com/random?sig=10",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officiis eveniet aut vel saepe dolor, maxime ipsam, inventore perferendis porro odio cupiditate vitae veritatis qui, voluptatibus quasi quae eos? Nostrum.",
  },
];

function ProjectsBody() {
  return (
    <>
      <div className="text-5xl text-white text-center py-[10vh]">
        Take a look...
      </div>
      <div className="w-full h-screen grid grid-cols-4 grid-rows-4 gap-5 px-[10vw]">
        {ProjectList.slice(0, 16).map((project, index) => (
          <div
            key={index}
            className="h-full w-full even:bg-red-500 odd:bg-blue-500 rounded-md hover:scale-125 transition-all hover:duration-500 hover:z-10 z-0 duration-100 overflow-hidden"
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

export default ProjectsBody;
