import { useEffect, useId, useRef, useState } from "react";
import icons from "./Icons";
import {
  AnimationPlaybackControls,
  AnimationSequence,
  motion,
  useAnimate,
} from "framer-motion";
import Link from "next/link";

type IconProps = {
  index: number;
};

function Icon(props: IconProps) {
  const [icon, setIcon] = useState(props.index % icons.length);
  const [scope, animate] = useAnimate();
  const [animation, setAnimation] = useState<AnimationPlaybackControls>();

  useEffect(() => {
    const duration = Math.random() * 13 + 7; // 7-20 seconds
    const appearDuration = duration / 5;
    const disappearDuration = appearDuration;
    const sequence: AnimationSequence = [
      [
        scope.current,
        { opacity: 0, zIndex: 21 - duration, scale: 12 / duration },
        { duration: Math.floor(Math.random() * 13), ease: "linear" },
      ],
      [
        scope.current,
        { opacity: 1 },
        { duration: appearDuration, ease: "linear" },
      ],
      [
        scope.current,
        { top: "100%" },
        { duration: duration, at: `-${appearDuration}`, ease: "linear" },
      ],
      [
        scope.current,
        { opacity: 0 },
        {
          duration: disappearDuration,
          at: `${-disappearDuration}`,
          ease: "linear",
        },
      ],
      [scope.current, { top: "-60px", opacity: 0 }, { duration: 1 }],
    ];

    const animation = animate(sequence);
    animation.then(() => {
      animation.complete();
      setIcon(Math.floor(Math.random() * icons.length));
    });
    setAnimation(animation);
  }, [icon]);

  return (
    <div className="w-full h-full relative">
      <motion.div
        ref={scope}
        className={`w-[25px] h-[25px] absolute rounded-lg opacity-0 grid place-items-center p-1 shadow-inner ${
          icons[icon].background === "light" ? "bg-white" : "bg-black"
        }`}
        onMouseEnter={() => {
          animation?.pause();
        }}
        onMouseLeave={() => {
          animation?.play();
        }}
      >
        <Link href={icons[icon].link} target="_blank">
          {icons[icon].icon}
        </Link>
      </motion.div>
    </div>
  );
}

function IconDropdowns({ itemCount }: { itemCount: number }) {
  const icons = Array.from({ length: itemCount }, (_, index) => (
    <Icon key={index} index={index} />
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
