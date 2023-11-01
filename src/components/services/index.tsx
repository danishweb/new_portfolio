import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-100px" });

  const cards = [
    {
      title: "Website Development",
      description:
        "Custom website development services tailored to your business needs. We create responsive and user-friendly websites using the latest web technologies. Whether it's a simple portfolio site or a complex e-commerce platform, we've got you covered.",
    },
    {
      title: "Web Application Development",
      description:
        "Build powerful web applications that enhance your business processes. We specialize in full-stack development, utilizing technologies such as React, Node.js, and databases like MongoDB. Our web apps are secure, scalable, and feature-rich.",
    },
    {
      title: "Consulting and Support",
      description:
        "Get expert advice on web development strategies and technical support. Whether you're planning a new project or need assistance with an existing one, we provide guidance and solutions to help you succeed online.",
    },
    {
      title: "Website Maintenance",
      description:
        "Ensure your website runs smoothly with our maintenance services. We offer regular updates, security checks, and content management. Keep your website up to date and secure, so you can focus on your business.",
    },
  ];

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping brand grow <br /> and move forward{" "}
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <Image src={"/people.webp"} alt="people" width={100} height={100} />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>What I do ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {cards.map((card, index) => (
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
            key={index}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
