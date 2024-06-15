import React from "react";
import { motion } from "framer-motion";

import death_note from "../../assets/death_note.svg";
import demon_slayer from "../../assets/demon_slayer.svg";
import jujutsu_kaisen from "../../assets/jujutsu_kaisen.svg";
import naruto from "../../assets/naruto.png";
import vinland_saga from "../../assets/vinland_saga.png";

const images = [
  {
    imageSrc: death_note,
  },
  {
    imageSrc: demon_slayer,
  },
  {
    imageSrc: jujutsu_kaisen,
  },
  {
    imageSrc: naruto,
  },
  {
    imageSrc: vinland_saga,
  },
];

const InfinteScrolling = () => {
  return (
    <motion.div
      initial={{ y: 60 }}
      whileInView={{ y: 0 }}
      className="loop-section w-100 "
    >
      <div className="loop-container d-inline-flex flex-row " style={{}}>
        {[...images].map((ele, ind) => (
          <div key={ind} className="loop-card">
            <img
              src={ele.imageSrc}
              alt="animate loop pic"
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
      <div className="loop-container d-inline-flex flex-row " style={{}}>
        {[...images].map((ele, ind) => (
          <div key={ind} className="loop-card" style={{}}>
            <img
              src={ele.imageSrc}
              alt="animate loop pic"
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default InfinteScrolling;
