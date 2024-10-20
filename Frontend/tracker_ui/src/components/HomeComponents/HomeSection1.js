import React, { useEffect } from "react";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { MoveRight } from "lucide-react";

import Slide from "../../utils/Slide";
import InfinteScrolling from "./InfinteScrolling";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const HomeSection1 = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <div className="w-100" style={{ color: "#fff", zIndex: "999" }}>
      <motion.div
        className="hs-con d-flex flex-column align-items-center w-100 vh-100"
        style={{
          backgroundImage,
        }}
      >
        <div className="d-inline-block" style={{ marginTop: "100px" }}>
          <motion.span
            whileHover={{ y: -20 }}
            className="hs-title1 d-inline-block px-3 py-2 rounded-pill position-relative"
          >
            TRACKER
            <Slide />
          </motion.span>
        </div>
        <span
          className="d-inline-block text-center position-relative m-3"
          style={{ fontSize: "5rem" }}
        >
          Discover Manga
          <Slide />
        </span>
        <div
          className="text-center p-4 position-relative m-2"
          style={{ fontSize: "2rem" }}
        >
          Find new manga, webtoons, and light novels, Track your reading
          progress.
          <Slide />
        </div>
        <span style={{}}>
          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ y: -10 }}
            className="px-5 py-3 fw-bold rounded-pill visit-btn position-relative"
          >
            Visit <MoveRight className="visit-icon ms-2" />
            <Slide />
          </motion.button>
        </span>
        <div className="position-absolute bottom-0 start-0 end-0 overflow-hidden">
          <InfinteScrolling />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSection1;
