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
    // next: {
    //   revalidate: 43200, // 12 hours in seconds
    // },
    cache: "no-cache",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data.documents;
    })
    .catch((error) => console.error("Error:", error));

  return projectsData;
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
    // next: {
    //   revalidate: 43200, // 12 hours in seconds
    // },
    cache: "no-cache",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data.documents;
    })
    .catch((error) => console.error("Error:", error));

  return postsData;
};

export { getProjectData, getBlogData };
