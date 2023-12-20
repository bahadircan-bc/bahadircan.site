import Hero from "./components/Hero";
import Projects from "./components/Projects";
import dynamic from "next/dynamic";
// import "../styles/output.css";

const Timeline = dynamic(
  () => import("./components/Timeline"),
  { ssr: false }
)

async function getProjectsData() {
  const apiUrl =
    "https://eu-central-1.aws.data.mongodb-api.com/app/data-vvcdg/endpoint/data/v1/action/find";

  const requestData = {
    dataSource: "exypnos",
    database: "bahadircan-blog-posts",
    collection: "project-list",
    filter: {
      showcase: true
    }
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
      revalidate: 43200, // 12 hours in seconds
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

async function Home() {
  const projects = await getProjectsData(); 
  return (
    <>
      <Hero />
      <Projects projects={projects}/>
      <Timeline />
    </>
  );
}

export default Home;
