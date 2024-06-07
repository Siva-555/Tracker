import React, { useState } from "react";
import { delay, motion, AnimatePresence } from "framer-motion";

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
const words = [
  { remove: false, word: "WELCOME" },
  { remove: false, word: "HI" },
  { remove: false, word: "HELLO" },
];
// const words = ["WELCOME", "HI", "Hello"];
const AnimateText = ({ text }) => {
  const [textCount, setTextCount] = useState(0);
  const [remove, setRemove] = useState(false);
  return (
    <div>
      <AnimatePresence>
        {!remove && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  duration: 1,
                  delayChildren: 0.1,
                  staggerChildren: 0.1,
                },
              },
            }}
            onAnimationComplete={(def) => {
              console.log("outer - ", def);
              setRemove(true);
              // setTextCount(1);
              // if (textCount <= words.length) {
              //   setTextCount((prev) => prev + 1);
              // }
            }}
          >
            {words[textCount].word.split("").map((ele, ind) => {
              return (
                <motion.span
                  key={`L-${ele}-${ind}`}
                  variants={childVariant}
                  exit={{
                    y: 75,
                    opacity: 0,
                    rotate: 20,
                    transition: { delay: 0.1 * ind },
                  }}
                  style={{ display: "inline-block" }}
                  onAnimationComplete={(def) => {
                    // setTimeout(() => setRemove(true), 2000);
                    // setRemove(true);
                    console.log("inner", def);
                  }}
                >
                  {ele}
                </motion.span>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimateText;
