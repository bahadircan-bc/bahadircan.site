import { BlogPost } from "@/app/blog/[slug]/components/BlogPage";
import { ProjectItem } from "@/app/projects/page";
import { MongoClient, ServerApiVersion, Collection } from "mongodb";

const uri = process.env.MONGODB_URI || "";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const getProjectData = async () => {
  await client.connect();

  let projectsCollection: Collection<ProjectItem> = await client
    .db("bahadircan-blog-posts")
    .collection<ProjectItem>("project-list");

  const raw = await projectsCollection.find().toArray();
  const projects: ProjectItem[] = raw.map(
    ({ _id, title, description, technologies, body, src, showcase }) => ({
      _id: _id.toString(),
      title,
      description,
      technologies,
      body,
      src,
      showcase,
    })
  );

  if (!projects || projects.length === 0) {
    return [];
  }
  return projects;
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
  await client.connect();

  const postsCollection: Collection<BlogPost> = await client
    .db("bahadircan-blog-posts")
    .collection<BlogPost>("blog-posts");

  const raw = await postsCollection.find().toArray(); // WithId<Document>[]
  const posts: BlogPost[] = raw.map(
    ({ _id, title, description, date, body }) => ({
      _id: _id.toString(),
      title,
      description,
      date,
      body,
    })
  ); // now plain objects

  if (!posts || posts.length === 0) {
    return [];
  }
  return posts.sort(compareDates);
};

export { getProjectData, getBlogData };
