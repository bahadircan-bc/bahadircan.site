import LinesEllipsis from "react-lines-ellipsis";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type BlogPostCardProps = {
  index: number;
  handleLoad: () => void;
};

function BlogPostCard(props: BlogPostCardProps) {
  const { index, handleLoad } = props;

  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et\
  sapien quis sapien aliquam ultricies. Sed tincidunt, nisl eget\
  ultrices efficitur, nunc massa sollicitudin nunc, vitae tincidunt elit\
  lorem eu nisi. Suspendisse potenti. Nulla facilisi. Sed euismod, nunc\
  eget ultricies aliquet, nunc nunc ultrices nisl, eget tincidunt ipsum\
  nisl sit amet nunc. Sed vitae nisl tincidunt, aliquam elit in, aliquam\
  leo. Donec sollicitudin, velit quis lacinia dapibus, est velit\
  ultricies nunc, eget porttitor nunc augue id mi. Donec sit amet ante\
  auctor, placerat ipsum sit amet, aliquam nisl. Donec vitae semper\
  nunc. Nullam sit amet sollicitudin nisl. Donec euismod, purus at\
  tempus aliquam, elit nunc aliquam velit, in tincidunt dolor dolor sit\
  amet nunc. Nullam auctor, nunc quis ullamcorper tincidunt, nisl nibh\
  tincidunt nunc, vitae tincidunt nisi nisl sed velit. Nullam in nisl\
  sollicitudin, dignissim nunc nec, aliquet leo. Cras ultricies, nibh\
  vel faucibus aliqu";

  const controls = useAnimation();

  return (
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
        controls.set({ opacity: 0 });
      }}
    >
      <motion.div
        className="h-full w-full flex flex-col gap-5 p-10 rounded-xl bg-gray-100 opacity-0"
        animate={controls}
      >
        <img
          src={`https://source.unsplash.com/random/?sig=${index}`}
          alt=""
          onLoad={handleLoad}
        />
        <h1 className="text-2xl font-bold">Blog post title</h1>
        <p className="text-base font-medium text-gray-500">2021-08-21</p>
        <LinesEllipsis
          text={loremText}
          maxLine="6"
          ellipsis="..."
          basedOn="letters"
        />
        <p className="text-base font-medium text-gray-500 text-ellipsis"></p>
      </motion.div>
    </motion.div>
  );
}

function BlogPostList() {
  const [loadedImages, setLoadedImages] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const postCards = Array.from({ length: 10 }, (_, i) => (
    <BlogPostCard
      key={i}
      index={i}
      handleLoad={() => {
        console.log(loadedImages);
        setLoadedImages((loadedImages) => loadedImages + 1);
      }}
    />
  ));

  useEffect(() => {
    if (loadedImages === 10) {
      console.log("loaded");
      const adjustContainerHeight = () => {
        if (!containerRef.current) return;
        if (window.innerWidth < 770) return;

        while (containerRef.current.scrollWidth < window.innerWidth + 10) {
          console.log(
            "too small, increasing, current width:",
            containerRef.current.scrollWidth
          );
          containerRef.current.style.height = `${
            containerRef.current.clientHeight - 50
          }px`;
        }

        while (containerRef.current.scrollWidth > window.innerWidth) {
          console.log(
            "too big, decreasing, current width:",
            containerRef.current.scrollWidth
          );

          containerRef.current.style.height = `${
            containerRef.current.clientHeight + 50
          }px`;
        }
      };

      adjustContainerHeight();

      window.addEventListener("resize", () => {
        console.log("resized");
        console.log("current width:", containerRef.current?.scrollWidth);
        console.log("window width:", window.innerWidth);
        adjustContainerHeight();
      });

      return () => {
        window.removeEventListener("resize", adjustContainerHeight);
      };
    }
  }, [loadedImages]);

  return (
    <div className="w-full min-h-screen md:block hidden text-gray-300">
      <h1 className="text-9xl text-center pt-[20vh]"><i>Hello World!</i></h1>
      <h2 className='text-2xl text-center py-[10vh]'>
        This is a WIP blog page. <br /> It's not finished yet, <br /> but I'm working on it!
      </h2>
      <div
        ref={containerRef}
        className="flex flex-col items-center content-center justify-start h-0 gap-4 flex-wrap"
      >
        {postCards}
      </div>
    </div>
  );
}

export default BlogPostList;
