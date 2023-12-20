'use client'

import Link from "next/link";
import ExypnosLogo from "@/assets/exypnos.svg";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const variants = {
  visible: { height: "fit-content" },
  hidden: { height: 0 },
};

function Navbar() {
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(useScroll().scrollY, "change", (latest) => {
    if (latest < 100) {
      setVisible(true);
    }
  });
  
  useMotionValueEvent(
    useScroll().scrollY,
    "velocityChange",
    (latestVelocity) => {
      if (latestVelocity > 100) {
        setVisible(false);
      }
      if (latestVelocity < -500) {
        setVisible(true);
      }
    }
  );

  return (
    <motion.nav
      variants={variants}
      initial="visible"
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: 0.2, ease: "linear" }}
      className="fixed top-0 w-full h-[60px] bg-accent bg-opacity-50 text-white text-base px-[30%] flex items-center justify-between overflow-hidden z-[100] backdrop-blur-[2px]"
    >
      <Link href="/">
        <ExypnosLogo
          className="w-[50px] aspect-square p-3"
        />
      </Link>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/aboutme">About me</Link>
      <Link href="/contact">Contact</Link>
    </motion.nav>
  );
}

export default Navbar;
