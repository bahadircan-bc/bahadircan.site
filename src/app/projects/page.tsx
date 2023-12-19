import ProjectsBody from "./components/ProjectsBody";
import ProjectsHeader from "./components/ProjectsHeader";

async function getProjectData() {
  const apiUrl =
    "https://eu-central-1.aws.data.mongodb-api.com/app/data-vvcdg/endpoint/data/v1/action/find";

  const requestData = {
    dataSource: "exypnos",
    database: "bahadircan-blog-posts",
    collection: "project-list",

  };

  const apiKey =
    "WVR6exPJ0816GYZuXZkhbsxzOrxr5jgVQHSKaVvaJ4jlKWHGUukbCx2CkuiRiFBN";

  let projectsData = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/ejson",
      Accept: "application/json",
      apiKey: apiKey,
    },
    body: JSON.stringify(requestData),
    next: {
      revalidate: 30,
    }
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data.documents;
    })
    .catch((error) => console.error("Error:", error));

  return projectsData;
}

type ProjectItem = {
  _id: string;
  title: string;
  description: string;
  technologies: string;
  body: string;
  src: string;
  showcase: boolean;
}

async function Projects() {
  const projects: ProjectItem[] = await getProjectData();
  return (
    <>
      <ProjectsHeader projects={projects.filter((project)=>project.showcase)}/>
      <ProjectsBody projects={projects}/>
    </>
  );
}

export type { ProjectItem };
export default Projects;

