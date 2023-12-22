"use client";

import Link from "next/link";
import ExypnosLogo from "@/assets/exypnos.svg";
import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

type PathProps = {
  variants?: { [key: string]: { d: string } };
} & React.SVGProps<SVGPathElement>;

const Path = (props: PathProps) => (
  <path strokeWidth="3" stroke="white" strokeLinecap="round" {...props} />
);

const MenuToggle = () => (
  <button className="flex items-center justify-center">
    <svg width={23} height={18} viewBox="0 0 23 18">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

type DropdownProps = {
  disabled?: boolean;
  children?: React.ReactNode;
};
function Dropdown(props: DropdownProps) {
  const { disabled, children } = props;
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const onClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (disabled) return;
    animate([
      [
        "path.top",
        { d: open ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: open ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: open ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
    ]);
  }, [open]);

  if (disabled) return <>{children}</>;

  return (
    <>
      <div className="p-2" onClick={onClick} ref={scope}>
        <MenuToggle />
        <motion.div
          className={`absolute right-0 flex flex-col overflow-hidden text-end m-2 gap-2 bg-secondary bg-opacity-10 rounded-md`}
          initial="hidden"
          variants={{
            visible: { height: "fit-content", padding: '8px' },
            hidden: { height: 0, padding: 0 },
          }}
          animate={open ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}

const variants = {
  visible: { height: "fit-content" },
  hidden: { height: 0 },
};

function Navbar() {
  const [visible, setVisible] = useState(true);
  const windowSize = useWindowSize();

  useMotionValueEvent(useScroll().scrollY, "change", (latest) => {
    if (windowSize.width < 769) return;
    if (latest < 100) {
      setVisible(true);
    }
  });

  useMotionValueEvent(
    useScroll().scrollY,
    "velocityChange",
    (latestVelocity) => {
      if (windowSize.width < 769) return;
      if (latestVelocity > 100) {
        setVisible(false);
      }
      if (latestVelocity < -500) {
        setVisible(true);
      }
    }
  );

  if (windowSize.width === 0) return null;

  return (
    <motion.nav
      variants={variants}
      initial="visible"
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: 0.2, ease: "linear" }}
      className="fixed top-0 w-full max-w-[100vw] h-[60px] bg-accent bg-opacity-50 text-white text-base px-[5%] lg:px-[30%] flex items-center justify-between lg:overflow-hidden z-[100] backdrop-blur-[2px]"
    >
      <Link href="/">
        <ExypnosLogo className="w-[50px] aspect-square p-3" />
      </Link>
      <Dropdown disabled={windowSize.width > 769 ? true : false}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/aboutme">About me</Link>
        <Link href="/contact">Contact</Link>
      </Dropdown>
      <a href="/cv_bahadircan.pdf" className="absolute right-0 hidden lg:block p-2 my-2 mx-10 rounded-lg bg-secondary" download>
        Download CV
      </a>
    </motion.nav>
  );
}

export default Navbar;
