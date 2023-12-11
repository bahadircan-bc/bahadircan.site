/// <reference types="vite-plugin-svgr/client" />
import { useEffect } from "react";
import ReactLogo from "../../assets/react.svg?react";
import { AnimationSequence, motion, useAnimate } from "framer-motion";

// const icons = [ReactLogo, ReactLogo, ReactLogo, ReactLogo, ReactLogo];

function Icon() {
  const [scope, animate] = useAnimate();

  const animationSequence: AnimationSequence = [
    [scope.current, {opacity: 0}, {duration: 1, ease: "linear"}],
  ]

  async function startAnimation() {
    scope.current.style.top = "0%";
    await animate(animationSequence, {repeat: Infinity});
  }

  useEffect(() => {
    console.log('start useEff')
  startAnimation();
  }, []);
  return (
    <motion.div
      ref={scope}
      className="w-[50px] h-[50px] absolute"
    >
      1
      <ReactLogo className="w-[50px] h-[50px]"/>
    </motion.div>
  );
}

function IconDropdowns() {
  return (
    <div className="w-full h-full relative">
      <Icon/>
    </div>
  );
}

export default IconDropdowns;
