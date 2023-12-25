import { BlogPost } from "@/app/blog/[slug]/components/BlogPage";

const getProjectData = async () => {
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
      revalidate: 60, // 12 hours in seconds
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data.documents;
    })
    .catch((error) => console.error("Error:", error));

  return projectsData;
};

const compareDates = (a: BlogPost, b: BlogPost) => {
  const dateA = new Date(
    parseInt(a.date.substring(6, 10)),
    parseInt(a.date.substring(3, 5)) - 1,
    parseInt(a.date.substring(0, 2))
  );

  const dateB = new Date(
    parseInt(b.date.substring(6, 10)),
    parseInt(b.date.substring(3, 5)) - 1,
    parseInt(b.date.substring(0, 2))
  );

  return dateB.getTime() - dateA.getTime();
};

const getBlogData = async () => {
  const apiUrl =
    "https://eu-central-1.aws.data.mongodb-api.com/app/data-vvcdg/endpoint/data/v1/action/find";

  const requestData = {
    dataSource: "exypnos",
    database: "bahadircan-blog-posts",
    collection: "blog-posts",
  };

  const apiKey =
    "WVR6exPJ0816GYZuXZkhbsxzOrxr5jgVQHSKaVvaJ4jlKWHGUukbCx2CkuiRiFBN";

  let postsData = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/ejson",
      Accept: "application/json",
      apiKey: apiKey,
    },
    body: JSON.stringify(requestData),
    next: {
      revalidate: 60, // 12 hours in seconds
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data.documents;
    })
    .catch((error) => console.error("Error:", error));

  return postsData.sort(compareDates);
};

export { getProjectData, getBlogData };
