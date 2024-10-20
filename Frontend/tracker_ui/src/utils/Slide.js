import React from "react";
import { motion } from "framer-motion";

const Slide = ({ background = "#020617", borderRadius = "45rem" }) => {
  return (
    <motion.span
      initial={{ bottom: 0 }}
      animate={{ bottom: "100%", transition: { duration: 1 } }}
      className="d-inline-block position-absolute "
      style={{
        background,
        top: 0,
        left: 0,
        right: 0,
        borderRadius,
      }}
    />
  );
};

export default Slide;
