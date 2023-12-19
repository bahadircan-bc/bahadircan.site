"use client";
import { motion, useAnimation } from "framer-motion";
import LinesEllipsis from "react-lines-ellipsis";
import Link from "next/link";
import Image from "next/image";

type BlogPostCardProps = {
  postId?: string;
  index: number;
  title?: string;
  description?: string;
  date?: string;
  handleLoad?: () => void;
};

function BlogPostCard(props: BlogPostCardProps) {
  const { postId, index, title, description, date, handleLoad } = props;

  const controls = useAnimation();

  return (
    <Link href={`/blog/${postId}`}>
      <motion.div
        className="min-w-[300px] w-[20vw] h-fit text-black"
        onViewportEnter={(entry) => {
          const isTopEntry = entry?.intersectionRect?.top ?? 0 > 0;

          if (isTopEntry) {
            controls.set({ y: 50 });
          } else {
            controls.set({ y: -50 });
          }
          controls.start(
            { y: 0, opacity: 1 },
            { duration: 0.5, ease: "easeOut" }
          );
        }}
        onViewportLeave={() => {
          try {
            controls.set({ opacity: 0 });
          } catch (error) {}
        }}
      >
        <motion.div
          className="h-full w-full flex flex-col gap-5 p-10 rounded-xl bg-gray-100 opacity-0"
          animate={controls}
        >
          <Image
            src={`https://source.unsplash.com/random/?sig=${index}`}
            width={1000}
            height={1000}
            alt=""
            onLoad={handleLoad}
          />
          <h1 className="text-2xl font-bold">{title ?? "Blog post title"}</h1>
          <p className="text-base font-medium text-gray-500">
            {date ?? "2021-08-21"}
          </p>
          <LinesEllipsis
            text={description ?? "Blog post description"}
            maxLine="6"
            ellipsis="..."
            basedOn="letters"
          />
          <p className="text-base font-medium text-gray-500 text-ellipsis"></p>
        </motion.div>
      </motion.div>
    </Link>
  );
}

type BlogPostListProps = {
  blogPosts: any;
};

function BlogPostList({ blogPosts }: BlogPostListProps) {
  // console.log("in blog post list", blogPosts);

  const blogPostList: [] = blogPosts.map((post: any, index: number) => (
    <BlogPostCard
      key={index}
      postId={post._id}
      index={index}
      title={post.title}
      description={post.description}
      date={post.date}
    />
  ));

  return (
    <div className="flex items-center justify-center flex-col text-white">
      <h1 className="text-5xl text-center pt-[20vh]">
        <i>Hello!</i>
      </h1>
      <h2 className="text-lg text-center py-[10vh]">
        This is a WIP blog page. <br /> Meaning it&apos;s not finished yet, <br />{" "}
        but I&apos;m working on it!
      </h2>
      <div className="w-fit h-fit grid grid-cols-3 gap-5">
        <div className="w-fit h-full flex flex-col gap-5">
          {blogPostList.filter((_, i) => i % 3 === 0)}
        </div>
        <div className="w-fit h-full min-h-[300px] flex flex-col gap-5">
          {blogPostList.filter((_, i) => i % 3 === 1)}
        </div>
        <div className="w-fit h-full min-h-[300px] flex flex-col gap-5">
          {blogPostList.filter((_, i) => i % 3 === 2)}
        </div>
      </div>
    </div>
  );
}

export default BlogPostList;
