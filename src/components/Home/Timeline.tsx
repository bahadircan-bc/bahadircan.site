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

  const vh = window.innerHeight / 100;
  const vw = window.innerWidth / 100;

  return (
    <div ref={targetRef} className="w-full h-[400vh]">
      <div className="w-full h-screen text-white flex sticky top-0">
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
        <motion.svg
          viewBox={`0 0 ${100 * vw} ${100 * vh}`}
          className="w-full h-full"
        >
          {/* <motion.line x1='50' y1='0' x2='50' y2='100' stroke='white' style={{
              pathLength: scrollYProgress,
            }}/> */}

          <motion.path
            d={`
            M 0 ${vh * 20}
            h ${23 * vw}
            a ${vw} ${vw} 0 0 0 ${2 * vw} 0
            h ${21 * vw}
            a ${vw} ${vw} 0 0 0 ${2 * vw} 0
            h ${21 * vw}
            a ${vw} ${vw} 0 0 0 ${2 * vw} 0
            h ${18 * vw}
            a ${vw} ${vw} 0 0 1 ${vw} ${vw} 
            v ${20 * vh} 
            a ${vw} ${vw} 0 0 1 ${-vw} ${vw} 
            h ${-18 * vw} 
            a ${vw} ${vw} 0 0 0 ${-2 * vw} 0
            h ${-18 * vw} 
            a ${vw} ${vw} 0 0 0 ${-vw} ${vw} 
            v ${20 * vh}
            a ${vw} ${vw} 0 0 0 ${vw} ${vw} 
            h ${18 * vw}
            a ${vw} ${vw} 0 0 0 ${2 * vw} 0
            h ${29 * vw}
            `}
            fill="none"
            stroke="white"
            strokeWidth={5}
            style={{
              pathLength: scrollYProgress,
            }}
          />
          <motion.path
            d={`
            M 0 ${vh * 20}
            h ${23 * vw}
            a ${vw} ${vw} 0 0 1 ${2 * vw} 0
            h ${21 * vw}
            a ${vw} ${vw} 0 0 1 ${2 * vw} 0
            h ${21 * vw}
            a ${vw} ${vw} 0 0 1 ${2 * vw} 0
            h ${18 * vw}
            a ${vw} ${vw} 0 0 1 ${vw} ${vw} 
            v ${20 * vh} 
            a ${vw} ${vw} 0 0 1 ${-vw} ${vw} 
            h ${-18 * vw} 
            a ${vw} ${vw} 0 0 1 ${-2 * vw} 0
            h ${-18 * vw} 
            a ${vw} ${vw} 0 0 0 ${-vw} ${vw} 
            v ${20 * vh}
            a ${vw} ${vw} 0 0 0 ${vw} ${vw} 
            h ${18 * vw}
            a ${vw} ${vw} 0 0 1 ${2 * vw} 0
            h ${29 * vw}
            `}
            fill="none"
            stroke="white"
            strokeWidth={5}
            style={{
              pathLength: scrollYProgress,
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
}

export default Timeline;
