import { motion, useAnimation } from "framer-motion";
import LinesEllipsis from "react-lines-ellipsis";

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
  const blogPostList = Array.from({ length: 12 }, (_, i) => (
    <BlogPostCard index={i} handleLoad={() => {}} />
  ));

  return (
    <div className="flex items-center justify-center flex-col text-white">
      <h1 className="text-5xl text-center pt-[20vh]">
        <i>Hello!</i>
      </h1>
      <h2 className="text-lg text-center py-[10vh]">
        This is a WIP blog page. <br /> Meaning it's not finished yet, <br /> but I'm
        working on it!
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
