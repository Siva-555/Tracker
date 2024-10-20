import React from "react";
import { motion } from "framer-motion";

import AnimateText from "../../utils/AnimateText";

const HomeAnimation = ({ setAniWordsCount, setShowPage, WORDS }) => {
  return (
    <React.Fragment key="startingAnimation-1">
      <div className="position-relative vh-100">
        <motion.div
          className="position-absolute overflow-hidden start-0 end-0 top-0"
          style={{
            bottom: "50%",
            backgroundColor: "#000",
            zIndex: "9999",
          }}
          onAnimationComplete={(def) => {
            console.log("main-outer1");
            setShowPage(true);
          }}
          exit={{
            bottom: "100%",
            transition: {
              delay: 1,
              duration: 2,
            },
          }}
        />
        <motion.div
          className="position-absolute"
          style={{
            zIndex: "99999",
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
          className="position-absolute overflow-hidden start-0 end-0 bottom-0"
          style={{
            top: "50%",
            backgroundColor: "#000",
            zIndex: "9999",
          }}
          exit={{
            top: "100%",
            transition: {
              delay: 1,
              duration: 2,
            },
          }}
          onAnimationComplete={(def) => {
            console.log("main-outer2");
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default HomeAnimation;
