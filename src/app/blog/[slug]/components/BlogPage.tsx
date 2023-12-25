"use client";
import Link from "next/link";
import { Remark } from "react-remark";
import rehypeHighlight from "rehype-highlight";

type BlogPostHeaderProps = {
  title?: string;
};

function BlogPostHeader(props: BlogPostHeaderProps) {
  const { title } = props;
  return (
    <>
      <div className="w-full text-center text-3xl lg:text-7xl py-[4vh] lg:pt-0 lg:pb-[10vh]">
        {title}
      </div>
      <div
        className="w-full lg:w-1/2 aspect-video object-cover rounded-lg lg:float-right mb-5 lg:ml-5"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/?sig=${(
            Math.random() * 10
          ).toFixed(0)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <Image
          className="w-1/2 aspect-video object-cover rounded-lg float-right mb-5 ml-5"
          width={1920}
          height={1080}
          src="https://source.unsplash.com/random/?sig=1"
          alt="The forger family picture"
        /> */}
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
    <div className="prose min-w-full">
      <Remark rehypePlugins={[rehypeHighlight as any]}>{`${body}`}</Remark>
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

type BlogPageProps = {
  post: BlogPost;
};

function BlogPage(props: BlogPageProps) {
  const { post } = props;

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="w-full h-fit flex items-center justify-center pt-[10vh]">
      <div className="w-4/5 min-h-screen bg-white rounded-lg p-[5vw] flex flex-col justify-between">
        <div>
          <BlogPostHeader title={post.title} />
          <BlogPostText body={post.body} />
        </div>
        {/* <BlogPostFooter /> */}
      </div>
    </div>
  );
}

export type { BlogPost };
export default BlogPage;
