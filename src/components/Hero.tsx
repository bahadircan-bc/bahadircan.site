import { useState } from "react";
import { motion } from "framer-motion";
import IconDropdowns from "./HeroComponents/IconDropdowns";

const titleVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: "-20%", opacity: 0 },
};

const descriptionVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: "10%", opacity: 0 },
};

function Hero() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="w-full h-screen relative">
      <div className="w-fit h-fit text-white absolute inset-[50vh_auto_auto_15vw] z-50">
        <motion.h1
          className="w-fit text-8xl leading-normal"
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
          whoami?
        </motion.h1>
        <motion.p
          className="w-[36vw] leading-normal"
          variants={descriptionVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          orci, condimentum vel finibus nec, tincidunt quis neque. Donec
          ullamcorper, odio quis sollicitudin iaculis, enim urna fringilla
          dolor, a faucibus felis ante et felis. Sed elementum lectus sed neque
          finibus porta. Aliquam ut lobortis lorem. Nunc lobortis massa ligula,
          vel cursus ligula varius vitae. Phasellus viverra feugiat sagittis.
          Proin a accumsan nibh, nec fringilla metus.
        </motion.p>
      </div>
      <div className="absolute inset-[60px_5vw_auto_auto] w-full h-[60vh]">
        <IconDropdowns itemCount={50} />
      </div>
    </div>
  );
}

export default Hero;
