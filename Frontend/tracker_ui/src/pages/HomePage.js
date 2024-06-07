import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { Button } from "../utils/Button";
import "./HomePage.css";
import InfinteScrolling from "../components/InfinteScrolling";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import naruto1 from "../assets/naruto_logo.svg";

// images for infinite scrolling
import death_note from "../assets/death_note.svg";
import demon_slayer from "../assets/demon_slayer.svg";
import jujutsu_kaisen from "../assets/jujutsu_kaisen.svg";
import naruto from "../assets/naruto.png";
import vinland_saga from "../assets/vinland_saga.png";
import AnimateText from "../utils/AnimateText";

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

const words = ["WELCOME", "HI", "Hello"];
const HomePage = () => {
  const [text, setText] = useState("WELCOME");
  const [count, setCount] = useState(1);
  // useEffect(() => {
  //   let timeout;
  //   if (count < words.length) {
  //     timeout = setTimeout(() => {
  //       setText(words[count]);
  //       setCount((prev) => prev + 1);
  //     }, 6000);
  //   }
  //   return () => clearTimeout(timeout);
  // }, [count]);
  return (
    <div>
      <motion.div
        // initial={{ y: -500, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 1, type: "spring" }}
        style={{
          position: "absolute",
          top: 0,
          bottom: "50%",
          left: 0,
          right: 0,
          backgroundColor: "#000",
          zIndex: "9999",
        }}
      />
      <div
        style={{
          zIndex: "99999",
          position: "absolute",
          top: "50%",
          left: "50%",
          fontSize: "40px",
          color: "#fff",
          transform: "translate(-50%,-50%)",
        }}
      >
        <AnimateText text={text} />
      </div>
      <motion.div
        // initial={{ y: 500, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 1, type: "spring" }}
        style={{
          position: "absolute",
          top: "50%",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#000",
          zIndex: "9999",
        }}
      />
      <div>
        <div
          className=" w-100 px-3"
          style={{ color: "#fff", zIndex: "999", margin: "50px 0px" }}
        >
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 image_section d-flex flex-row">
              <div className="image_container">
                <img src={img1} alt="img1" />
              </div>
              <div className="image_container">
                <img src={img2} alt="img2" />
              </div>
              <div className="image_container">
                <img src={img3} alt="img3" />
              </div>
            </div>
            <div className="col-12 col-lg-4 p-4">
              <div className="position-relative h-100">
                <div className="position-relative bg-grid-line" />
                <div
                  className="position-absolute label"
                  style={{
                    fontSize: "36px",
                    top: 0,
                    lineHeight: "1.3",
                    zIndex: 100,
                    height: "200px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="mt-4">
                  <Button>Hello</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <InfinteScrolling images={images} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
