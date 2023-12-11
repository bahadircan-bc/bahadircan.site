import { useCallback, useEffect, useState } from "react";
import icons from "./Icons";
import { motion, useAnimation } from "framer-motion";

function Icon() {
  const [icon, setIcon] = useState(0);
  const controls = useAnimation();
  const animationVariants = {
    appear: {
      opacity: 1,
    },
    fall: {
      top: "100%",
    },
    disappear: {
      opacity: 0,
    },
    top: {
      top: 0,
      opacity: 0,
    },
  };

  const sequence = useCallback(async () => {
    setIcon(Math.floor(Math.random() * icons.length));
    const duration = Math.random() * 10 + 5;
    controls.stop();
    controls.set({ scale: 15 / duration });
    controls.set("top");
    controls.start("fall", {
      duration: duration,
      ease: "linear",
    });
    await controls.start("appear", {
      duration: 2,
      ease: "linear",
    });
    await controls.start("disappear", {
      duration: 2,
      delay: duration - 4,
      ease: "linear",
    });
  }, []);

  useEffect(() => {
    let animationInterval: number;
    setTimeout(() => {
      sequence();
      animationInterval = setInterval(() => {
        sequence();
      }, 10000);
    }, Math.random() * 15000);
    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <motion.div
        className={`w-[25px] h-[25px] absolute opacity-0 rounded-lg grid place-items-center p-1 shadow-inner ${
          icons[icon].background === "light" ? "bg-white" : "bg-black"
        }`}
        animate={controls}
        variants={animationVariants}
      >
        {icons[icon].icon}
      </motion.div>
    </div>
  );
}

function IconDropdowns() {
  return (
    <div className="w-full h-full grid grid-cols-[repeat(15,_minmax(0,_1fr))]">
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
    </div>
  );
}

export default IconDropdowns;
