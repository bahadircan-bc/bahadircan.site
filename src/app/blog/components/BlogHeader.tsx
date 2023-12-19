'use client'
import { motion } from "framer-motion";
import background from "@/assets/backgrounds/blogHeaderBackground.jpg";
import Image from "next/image";

function BlogHeader() {
  return (
    <div className="w-full h-screen text-white text-9xl relative">
      <div className="absolute inset-[50%_auto_auto_20vw] overflow-hidden z-10">
        <motion.p
          className="h-fit w-fit pb-5 pr-5"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <i>/var/log</i>
        </motion.p>
      </div>
      <div className="w-full h-full">
        <Image
          className="w-full h-full object-cover"
          src={background}
          alt=""
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default BlogHeader;
