import ProjectBackground from "../assets/blueprint-bg.jpg";
function Projects() {
  return (
    <div
      className="w-full h-screen bg-red-500 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${ProjectBackground})`,
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
      }}
    >
      <div className="absolute ">

      </div>
    </div>
  );
}

export default Projects;
