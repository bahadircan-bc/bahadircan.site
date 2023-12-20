import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogData } from "@/db/dbReq";
import { Suspense } from "react";

type BlogPostHeaderProps = {
  title?: string;
};

function BlogPostHeader(props: BlogPostHeaderProps) {
  const { title } = props;
  return (
    <>
      <div className="w-full text-center text-7xl pb-[10vh]">{title}</div>
      <div>
        <Image
          className="w-1/2 aspect-video object-cover rounded-lg float-right mb-5 ml-5"
          width={1920}
          height={1080}
          src="https://source.unsplash.com/random/?sig=1"
          alt="The forger family picture"
        />
      </div>
    </>
  );
}

type BlogPostTextProps = {
  body?: string;
};

function BlogPostText(props: BlogPostTextProps) {
  const { body } = props;
  // console.log(body)
  return (
    <div>
      <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
    </div>
  );
}

function BlogPostFooter() {
  return (
    <div className="w-full flex justify-between">
      <Link href="/blog/2">{"<- "} Next Post</Link>
      <Link href="/blog/3">Previous Post {" ->"}</Link>
    </div>
  );
}

type BlogPost = {
  _id: string;
  title: string;
  description: string;
  date: string;
  body: string;
};

async function BlogPage({ params }: { params: { slug: string } }) {
  const blogPost: BlogPost = (await getBlogData()).filter(
    (post: BlogPost) => post._id === params.slug
  )[0];

  return (
    <div className="w-full h-fit flex items-center justify-center pt-[10vh]">
      <div className="w-4/5 min-h-screen bg-white rounded-lg p-[5vw] flex flex-col justify-between">
        <div>
          <Suspense fallback={<p>Loading Blog...</p>}>
            <BlogPostHeader title={blogPost.title} />
            <BlogPostText body={blogPost.body} />
          </Suspense>
        </div>
        {/* <BlogPostFooter /> */}
      </div>
    </div>
  );
}

export type { BlogPost };
export default BlogPage;
