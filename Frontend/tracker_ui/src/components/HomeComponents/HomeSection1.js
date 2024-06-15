import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import { MoveRight } from "lucide-react";

import { Card } from "@mui/material";

import AnimateText2 from "../../utils/AnimateText2";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const variant1 = {
  hidden: { scale: 0.1, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
};

const HomeSection1 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isinView1 = useInView(ref1, { once: false, amount: 0.5 });
  const isinView2 = useInView(ref2, { once: false, amount: 0.5 });
  // console.log("test1 -", isinView1);
  //   console.log("test2 -", isinView2);
  return (
    <div
      className="w-100 px-3 o"
      style={{ color: "#fff", zIndex: "999", margin: "50px 0px" }}
    >
      <div className="row align-items-center">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={isinView1 ? "animate" : "hidden"}
          variants={variant1}
          className="col-12 col-lg-8 image_section d-flex flex-row justify-content-center"
        >
          <div className="image_container">
            <img src={img1} alt="img1" />
          </div>
          <div className="image_container">
            <img src={img2} alt="img2" />
          </div>
          <div className="image_container">
            <img src={img3} alt="img3" />
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={isinView2 ? "animate" : "hidden"}
          variants={variant1}
          className="col-12 col-lg-4 p-4 h-100 "
        >
          <div
            style={{
              fontSize: "36px",
              lineHeight: "1.3",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="mt-4">
            <motion.button
              className="hm-btn"
              whileHover={{
                backgroundColor: "#000",
                color: "#fff",
                y: -10,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.7,
                transition: {
                  type: "spring",
                  bounce: 0.5,
                },
              }}
            >
              Visit &nbsp;
              <motion.span
                className="d-inline-block"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
              >
                <MoveRight />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="col-12 col-lg-6 mt-5 text-center ">
          <div className="d-flex justify-content-center mx-3" style={{}}>
            <Card
              className="d-flex flex-column justify-content-start p-3"
              sx={{
                alignSelf: "center",
                backgroundColor: "#000",
                // boxShadow:
                //   "0px 2px 1px -1px #11df80, 0px 1px 1px 0px #11df80, 0px 1px 3px 0px #11df80",
                width: "450px",

                borderRadius: "1.5rem",
                height: "10rem",
              }}
            >
              <span
                className="fs-2 fw-semibold d-flex justify-content-center"
                style={{ color: "green" }}
              >
                <AnimateText2 words={["Discover", "Manga"]} />
              </span>
              <span className="fs-4 fw-semibold" style={{ color: "#ade5ad" }}>
                <AnimateText2
                  words={[
                    "Find",
                    "new",
                    "manga",
                    "webtoons",
                    "and",
                    "light novels",
                  ]}
                />
              </span>
            </Card>
          </div>
        </motion.div>
        <motion.div className="col-12 col-lg-6 mt-5 text-center">
          <div className="d-flex justify-content-center mx-3" style={{}}>
            <Card
              className="d-flex flex-column justify-content-start p-3"
              sx={{
                alignSelf: "center",
                backgroundColor: "#000",
                // boxShadow:
                //   "0px 2px 1px -1px #11df80, 0px 1px 1px 0px #11df80, 0px 1px 3px 0px #11df80",
                width: "450px",
                borderRadius: "1.5rem",
                height: "10rem",
              }}
            >
              <span
                className="fs-2 fw-semibold d-flex justify-content-center"
                style={{ color: "green" }}
              >
                <AnimateText2 words={["Tracker"]} />
              </span>
              <span className="fs-4 fw-semibold" style={{ color: "#ade5ad" }}>
                {/* Tracker Your Progress, continue where you left off */}
                <AnimateText2
                  words={[
                    "Tracker",
                    "Your",
                    "Progress,",
                    "continue",
                    "where",
                    "you",
                    "left",
                    "off",
                  ]}
                />
                {/* <AnimateText2 words={["Tracker", "Your", "Progress,"]} />
                <AnimateText2
                  words={["continue", "where", "you", "left", "off"]}
                /> */}
              </span>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection1;
