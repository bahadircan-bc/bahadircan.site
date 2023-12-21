"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const titleVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: "-20%", opacity: 0 },
};

function Timeline() {
  const [visible, setVisible] = useState(false);
  const [nodeVisibilities, setNodeVisibilities] = useState({
    node1: false,
    node2: false,
    node3: false,
    node4: false,
    node5: false,
  });
  // const containerRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // start end
    // 108 121 node1
    // 218 231 node2
    // 328 341 node3
    // 591 604 node4
    // 853 866 node5
    const newVisibilities = {
      node1: false,
      node2: false,
      node3: false,
      node4: false,
      node5: false,
    };
    switch (true) {
      case latest >= 0.853:
        newVisibilities.node5 = true;
      case latest >= 0.591:
        newVisibilities.node4 = true;
      case latest >= 0.328:
        newVisibilities.node3 = true;
      case latest >= 0.218:
        newVisibilities.node2 = true;
      case latest >= 0.108:
        newVisibilities.node1 = true;
        break;
      default:
        newVisibilities.node1 = false;
        newVisibilities.node2 = false;
        newVisibilities.node3 = false;
        newVisibilities.node4 = false;
        newVisibilities.node5 = false;
        break;
    }

    setNodeVisibilities(newVisibilities);
    // console.log(latest);
  });


  const vh = window.innerHeight / 100;
  const vw = window.innerWidth / 100;

  return (
    <div ref={targetRef} className="w-full h-[400vh]">
      <div className="w-full h-screen text-white flex sticky top-0">
        <motion.h1
          className="w-fit text-3xl lg:text-8xl leading-normal absolute inset-[47vh_auto_auto_15vw]"
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
        <motion.p
          className="w-min text-center text-xs lg:text-xl text-white absolute top-[25vh] left-[24vw] -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: nodeVisibilities.node1 ? 1 : 0 }}
        >
          Yıldız Technical University
        </motion.p>
        <motion.p
          className="w-min text-center text-xs lg:text-xl text-white absolute top-[25vh] left-[47vw] -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: nodeVisibilities.node2 ? 1 : 0 }}
        >
          Argetürk
        </motion.p>
        <motion.p
          className="w-min text-center text-xs lg:text-xl text-white absolute top-[25vh] left-[70vw] -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: nodeVisibilities.node3 ? 1 : 0 }}
        >
          Broad
        </motion.p>
        <motion.p
          className="w-min text-center text-xs lg:text-xl text-white absolute top-[calc(45vh+2vw)] left-[70vw] -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: nodeVisibilities.node4 ? 1 : 0 }}
        >
          Freelance
        </motion.p>
        <motion.p
          className="w-max text-center text-xs lg:text-xl text-white absolute top-[calc(65vh+4vw)] left-[70vw] -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: nodeVisibilities.node5 ? 1 : 0 }}
        >
          More to come...
        </motion.p>
      </div>
    </div>
  );
}

export default Timeline;
