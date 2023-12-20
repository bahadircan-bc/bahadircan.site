import { BlogPost } from "@/app/blogpost/[slug]/page";
import BlogHeader from "./components/BlogHeader";
import BlogPostList from "./components/BlogPostList";
import { getBlogData } from "@/db/dbReq";


async function Blog() {
  const blogPosts: BlogPost[] = await getBlogData();
  // console.log(blogPosts);
  return (
    <>
      <BlogHeader />
      <BlogPostList blogPosts={blogPosts} />
    </>
  );
}

export default Blog;
