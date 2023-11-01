"use client";
import Image from "next/image";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.p variants={textVariants}>Danish Shaikh</motion.p>
          <motion.p variants={textVariants}>Software Developer.</motion.p>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See my latest work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.div variants={textVariants} animate="scrollButton">
            <Image
              src="/scroll.png"
              width={50}
              height={50}
              alt="scroll"
              className="scrollImage"
            />
          </motion.div>
        </motion.div>
      </div>
      {/* <div className="slidingTextContainer">Lorem ipsum dolor sit amet.</div> */}
    </div>
  );
};

export default Hero;
