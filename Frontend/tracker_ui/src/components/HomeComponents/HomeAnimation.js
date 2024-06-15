import React from "react";
import { motion } from "framer-motion";

import AnimateText from "../../utils/AnimateText";

const HomeAnimation = ({ setAniWordsCount, setShowPage, WORDS }) => {
  return (
    <React.Fragment key="startingAnimation-1">
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          bottom: "50%",
          left: 0,
          right: 0,
          backgroundColor: "#000",
          zIndex: "9999",
        }}
        onAnimationComplete={(def) => {
          console.log("outer1");
          setShowPage(true);
        }}
        exit={{
          y: -500,
          transition: {
            delay: 1,
            duration: 2,
          },
        }}
      />
      <motion.div
        style={{
          zIndex: "99999",
          position: "absolute",
          top: "40%",
          left: "50%",
          fontSize: "40px",
          color: "#fff",
          transform: "translate(-50%,-50%)",
        }}
        onAnimationComplete={(def) => {
          console.log("inner1");
        }}
      >
        {WORDS.map((ele, ind) => {
          return (
            <AnimateText
              key={`ani-${ind}`}
              text={ele.word}
              delay={ind * 1}
              fontSize={ele.fontSize}
              setAniWordsCount={setAniWordsCount}
            />
          );
        })}
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#000",
          zIndex: "9999",
        }}
        exit={{
          y: 500,
          transition: {
            delay: 1,
            duration: 2,
          },
        }}
        onAnimationComplete={(def) => {
          console.log("outer2");
        }}
      />
    </React.Fragment>
  );
};

export default HomeAnimation;
