"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import IconDropdowns from "./HeroComponents/IconDropdowns";
import useWindowSize from "@/hooks/useWindowSize";

const titleVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: "-20%", opacity: 0 },
};

const descriptionVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: "10%", opacity: 0 },
};

function Hero() {
  const [visible, setVisible] = useState(true);
  const windowSize = useWindowSize();

  return (
    <div className="w-full h-screen relative">
      <div className="w-fit h-fit text-white absolute inset-[70vh_auto_auto_15vw] lg:inset-[50vh_auto_auto_15vw] z-50">
        <motion.h1
          className="w-fit text-3xl lg:text-8xl leading-normal"
          variants={titleVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut" }}
          onViewportEnter={() => {
            setVisible(true);
          }}
          onViewportLeave={() => {
            setVisible(false);
          }}
        >
          whoami?
        </motion.h1>
        <motion.p
          className="w-[70vw] lg:w-[36vw] leading-normal"
          variants={descriptionVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Hello there! 👋 I&apos;m Bahadır, a passionate and creative software
          developer with a knack for turning ideas into reality through elegant
          and efficient code. My journey in the world of technology has been a
          thrilling adventure, marked by continuous learning and a commitment to
          crafting solutions that make a difference.
        </motion.p>
      </div>
      <div className="absolute inset-[60px_auto_auto_auto] w-full h-[60vh]">
        <IconDropdowns
          itemCount={
            windowSize.width > 1024 ? 50 : windowSize.width > 768 ? 35 : 25
          }
        />
      </div>
    </div>
  );
}

export default Hero;
