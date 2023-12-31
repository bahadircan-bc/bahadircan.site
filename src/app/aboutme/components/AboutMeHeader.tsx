import { useState } from "react";
import { motion } from "framer-motion";
import AboutMeBackground from "@/assets/backgrounds/aboutMeHeaderBackground.jpg";
import Image from "next/image";

function AboutMeHeader() {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex flex-col justify-center overflow-hidden relative bg-black">
        <motion.div
          className="w-full h-1/2 flex-1 bg-black absolute top-0 z-10"
          initial={{ y: "0" }}
          animate={bgLoaded && { y: "-100%" }}
          transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
        ></motion.div>
        <div className="w-full object-contain object-center bg-black">
          <Image
            src={AboutMeBackground}
            alt=""
            onLoad={() => setBgLoaded(true)}
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
        <motion.div
          className="w-full h-1/2 flex-1 bg-black absolute bottom-0 z-10"
          initial={{ y: "0%" }}
          animate={bgLoaded && { y: "100%" }}
          transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white text-3xl lg:text-9xl pb-[50%] lg:pb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
        >
          Welcome!
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMeHeader;
