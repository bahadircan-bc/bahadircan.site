import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const titleVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: "-20%", opacity: 0 },
};

function Timeline() {
  const [visible, setVisible] = useState(false);
  // const containerRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    console.log(latest)
  );

  return (
    <div ref={targetRef} className="w-full h-[400vh]">
      <div className="w-full h-screen text-white flex sticky top-0 border border-white">
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
    </div>
  );
}

export default Timeline;
