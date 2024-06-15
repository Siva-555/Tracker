import React from "react";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const AnimateText2 = ({ words }) => {
  return (
    <motion.div
      style={{ width: "fit-content" }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {words.map((text, ind1) => (
        <span className="inline-block" key={`w-${ind1}`}>
          {text.split("").map((ele, ind2) => (
            <motion.span
              key={`L-${ele}-${ind2}`}
              variants={childVariant}
              style={{
                display: "inline-block",
              }}
            >
              {ele}
              {ele === " " && <span>&nbsp;</span>}
            </motion.span>
          ))}
          <span className="d-inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.div>
  );
};

export default AnimateText2;
