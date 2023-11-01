import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #1b1a1d, #262628)"
            : "linear-gradient(180deg, #1b1a1d, #403e40)",
      }}
    >
      <motion.h1
        style={{
          y: yText,
        }}
      >
        {type === "services" ? "What I Do ?" : "What I did?"}
      </motion.h1>
      {/* <motion.div className="mountains"></motion.div> */}
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage:
            type === "services" ? "url(/planets.png)" : "url(/sun.png)",
        }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{
          x: yBg,
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
