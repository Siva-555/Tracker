import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const parentVariant = {
  hidden: { fontSize: "32px", y: 20 },
  visible: {
    fontSize: "40px",
    y: 0,
    transition: { staggerChildren: 1 },
  },
};
const childVariant = {
  hidden: { y: 75, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AnimateText = ({ text, delay, fontSize, setAniWordsCount }) => {
  return (
    <motion.div
      style={{ fontSize: fontSize, width: "fit-content" }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            duration: 1,
            delayChildren: delay,
            staggerChildren: 0.1,
          },
        },
      }}
      onAnimationComplete={(def) => {
        // console.log("outer - ", def);
        setAniWordsCount((prev) => prev + 1);
      }}
    >
      {text.split("").map((ele, ind) => {
        return (
          <motion.span
            key={`L-${ele}-${ind}`}
            variants={childVariant}
            exit={{
              // x: 75,
              y: 75,
              opacity: 0,
              rotate:
                Math.random() * 50 + 10 > 35
                  ? Math.random() * 50 + 10
                  : -(Math.random() * 50 + 10),
              transition: { delay: 0.1 * ind },
            }}
            style={{ display: "inline-block" }}
            onAnimationComplete={(def) => {
              // console.log("inner", def);
            }}
          >
            {ele}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimateText;
