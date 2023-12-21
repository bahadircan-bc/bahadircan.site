"use client";
import { motion, useAnimation } from "framer-motion";
import LinesEllipsis from "react-lines-ellipsis";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../[slug]/page";

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
        className="lg:min-w-[300px] w-full lg:w-[20vw] h-fit text-black"
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
          className="h-full w-full flex flex-col gap-5 overflow-clip lg:p-10 rounded-xl bg-gray-100 opacity-0 "
          animate={controls}
        >
          <Image
            src={`https://source.unsplash.com/random/?sig=${index}`}
            width={1920}
            height={1080}
            alt=""
            onLoad={handleLoad}
          />
          <h1 className="text-sm lg:text-2xl px-2 lg:px-0 font-bold">
            {title ?? "Blog post title"}
          </h1>
          <p className="text-xs lg:text-base px-2 lg:px-0 font-medium text-gray-500">
            {date ?? "2021-08-21"}
          </p>
          <LinesEllipsis
            className="hidden lg:block"
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
  blogPosts: BlogPost[];
};

function BlogPostList(props: BlogPostListProps) {
  const { blogPosts } = props;

  const blogPostList = blogPosts.map((post: any, index: number) => (
    <BlogPostCard
      key={index}
      postId={post._id}
      index={index}
      title={post.title}
      description={post.description}
      date={post.date}
    />
  ));

  // const debugList = Array.from({ length: 10 }, (_, index) => (
  //   <BlogPostCard
  //     key={index}
  //     index={index}
  //     postId="1234"
  //     title="Post Title"
  //     description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat asperiores voluptatem id quasi eaque aspernatur animi reiciendis? Possimus nisi recusandae nam sequi quibusdam tenetur doloremque eligendi, saepe id iure nostrum?"
  //     date="12-11-2023"
  //   />
  // ));

  return (
    <div className="flex items-center justify-center flex-col text-white">
      <h1 className="text-3xl lg:text-5xl text-center lg:pt-[20vh]">
        <i>Hello!</i>
      </h1>
      <h2 className="text-sm lg:text-lg text-center py-[2vh] lg:py-[10vh]">
        This is a WIP blog page. <br /> Meaning it&apos;s not finished yet,{" "}
        <br /> but I&apos;m working on it!
      </h2>
      <div className="hidden lg:grid w-fit h-fit grid-cols-3 gap-5">
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
      <div>
        <div className="grid lg:hidden w-full h-fit grid-cols-2 gap-5 px-2">
          <div className="w-fit h-full flex flex-col gap-5">
            {blogPostList.filter((_, i) => i % 2 === 0)}
          </div>
          <div className="w-fit h-full min-h-[300px] flex flex-col gap-5">
            {blogPostList.filter((_, i) => i % 2 === 1)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostList;
