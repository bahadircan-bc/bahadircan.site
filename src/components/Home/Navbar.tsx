import { Link } from "react-router-dom";
import exypnosLogo from "../../assets/exypnos.png";
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
      <Link to="/">
        <img
          src={exypnosLogo}
          alt="exypnos logo"
          className="w-[50px] aspect-square"
        />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/aboutme">About me</Link>
      <Link to="/contact">Contact</Link>
    </motion.nav>
  );
}

export default Navbar;
