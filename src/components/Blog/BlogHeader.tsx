import { motion } from "framer-motion";

function BlogHeader() {
  return (
    <div className="w-full h-screen text-white text-8xl relative">
      <div className="absolute inset-[50vh_auto_auto_20vw] overflow-hidden">
        <motion.p
          className="h-fit w-fit p-2"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          /var/log
        </motion.p>
      </div>
    </div>
  );
}

export default BlogHeader;
