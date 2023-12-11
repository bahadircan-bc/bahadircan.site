import { useEffect, useState } from "react";
import icons from "./Icons";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    let unmount = false;

    const sequence = async () => {
      //sleep for 5-15 seconds
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 15000)
      );
      while (!unmount) {
        setIcon(Math.floor(Math.random() * icons.length));
        const duration = Math.random() * 10 + 8;
        controls.stop();
        controls.set({ scale: 15 / duration });
        controls.set({ zIndex: 19 - duration });
        controls.set("top");
        controls.start(
          { top: `${100 - duration}%` },
          {
            duration: duration,
            ease: "linear",
          }
        );
        await controls.start("appear", {
          duration: 2,
          ease: "linear",
        });
        await controls.start("disappear", {
          duration: 2,
          delay: duration - 4,
          ease: "linear",
        });
      }
      unmount = false;
    };

    const handleVisiblityChange = () => {
      if (document.visibilityState === "visible") {
        sequence();
      } else {
        unmount = true;
        controls.stop();
        controls.set("top");
      }
    };

    window.addEventListener("visibilitychange", handleVisiblityChange);
    sequence();

    return () => {
      unmount = true;
      window.removeEventListener("visibilitychange", handleVisiblityChange);
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
        <Link to={icons[icon].link} target="_blank">
          {icons[icon].icon}
        </Link>
      </motion.div>
    </div>
  );
}

function IconDropdowns({ itemCount }: { itemCount: number }) {
  const icons = Array.from({ length: itemCount }, (_, index) => (
    <Icon key={index} />
  ));
  return (
    <div
      className="w-full h-full grid"
      style={{
        gridTemplateColumns: `repeat(${itemCount}, minmax(0, 1fr))`,
      }}
    >
      {icons}
    </div>
  );
}

export default IconDropdowns;
