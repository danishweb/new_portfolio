import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Links from "./links";
import "./sidebar.scss";
import ToggleButton from "./toggle-button";
import { useOnClickOutside } from "@/hooks/use-click-outside";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const sidebarRef = useRef(null);

  useOnClickOutside(sidebarRef, () => open && setOpen(false));

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      ref={sidebarRef}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
