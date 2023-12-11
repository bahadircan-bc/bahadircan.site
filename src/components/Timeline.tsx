import { useState } from "react";
import { motion } from "framer-motion";

const titleVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: "-20%", opacity: 0 },
};

function Timeline() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-full h-screen text-white flex relative">
      <motion.h1
        className="w-fit text-8xl leading-normal absolute inset-[47vh_auto_auto_15vw]"
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
        timeline.
      </motion.h1>
    </div>
  );
}

export default Timeline;
