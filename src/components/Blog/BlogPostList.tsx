import LinesEllipsis from "react-lines-ellipsis";
import { motion, useAnimation } from "framer-motion";

function BlogPostCard() {
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
      className="w-1/4 h-fit grow"
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
        className="h-full w-full flex flex-col gap-5 p-20 rounded-xl bg-gray-100 opacity-0"
        animate={controls}
      >
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
  return (
    <div className="w-full min-h-screen">
      <div className="flex px-[15vw] pt-[10vh] gap-5 flex-wrap">
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  );
}

export default BlogPostList;
