import BlogPage from "./components/BlogPage";
import { BlogPost } from "./components/BlogPage";
import { getBlogData } from "@/db/dbReq";


async function ServerBlogPage({ params }: { params: { slug: string } }) {
  const blogPost: BlogPost = (await getBlogData()).filter(
    (post: BlogPost) => post._id === params.slug
  )[0];

  return (
    <BlogPage post={blogPost}/>
  );
}

export default ServerBlogPage;