import { useState } from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Link from "next/link";

type AccordionItemProps = {
  index: number;
  title: string;
  description: string;
  link: string;
};

const accordionDescriptionVariants = {
  open: { height: "fit-content" },
  closed: { height: 0 },
};

function AccordionItem(props: AccordionItemProps) {
  const { index, title, description, link } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-5 first:border-t border-b border-primary"
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <Link href={`projects/${link}`}>
      <div>
        <p className="text-secondary">
          {(index + 1).toString().padStart(2, "0")} /
          <span className="text-5xl ml-10 text-white">{title}</span>
        </p>
      </div>
      <motion.div
        className="text-xl overflow-hidden"
        variants={accordionDescriptionVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <p className="pt-5">{description}</p>
      </motion.div>
      </Link>
    </div>
  );
}

export default AccordionItem;
