import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Footer from "./components/Footer";
import CaretDownIcon from "./assets/caret-down.svg?react";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function App() {
  const [caretVisible, setCaretVisible] = useState(true);
  useMotionValueEvent(useScroll().scrollY, "change", (latest) => {
    if (latest > 100) {
      setCaretVisible(false);
    }
  });
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
      {
        <motion.div
          className="w-10 h-10 absolute top-[90vh] left-1/2 -translate-x-1/2"
          initial={{ opacity: 1 }}
          animate={
            caretVisible ? { opacity: 1, y: "1vh" } : { opacity: 0, y: "1vh" }
          }
          transition={
            caretVisible
              ? {
                  duration: 0.5,
                  repeat: 1,
                  repeatType: "mirror",
                  ease: "linear",
                }
              : {}
          }
        >
          <CaretDownIcon className="fill-white" />
        </motion.div>
      }
    </React.Fragment>
  );
}

export default App;
