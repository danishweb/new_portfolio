"use client";
import Image from "next/image";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          Danish Shaikh
        </motion.span>
        <div className="social">
          <a href="linkedin">
            <Image alt="linkedin" src="/instagram.png" width="18" height="18" />
          </a>
          <a href="instagram">
            <Image
              alt="instagram"
              src="/instagram.png"
              width="18"
              height="18"
            />
          </a>
          <a href="youtube">
            <Image alt="youtube" src="/youtube.png" width="18" height="18" />
          </a>
          <a href="x">
            <Image alt="x" src="/instagram.png" width="18" height="18" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
