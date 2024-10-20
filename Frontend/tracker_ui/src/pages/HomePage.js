import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import "./HomePage.css";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import HomeAnimation from "../components/HomeComponents/HomeAnimation";
import HomeSection1 from "../components/HomeComponents/HomeSection1";
import InfinteScrolling from "../components/HomeComponents/InfinteScrolling";

const WORDS = [
  { word: "HI,", fontSize: "3rem" },
  { word: "WELCOME", fontSize: "4rem" },
  { word: "UNKNOWN!!!", fontSize: "5rem" },
];

const HomePage = () => {
  const [showPage, setShowPage] = useState(false);
  const [stopAni, setStopAni] = useState(false);
  const [aniWordsCount, setAniWordsCount] = useState(0);
  useEffect(() => {
    if (aniWordsCount === WORDS.length) {
      setStopAni(true);
    }
  }, [aniWordsCount]);

  return (
    <div>
      <AnimatePresence>
        {!stopAni && (
          <HomeAnimation
            WORDS={WORDS}
            setAniWordsCount={setAniWordsCount}
            setShowPage={setShowPage}
          />
        )}
      </AnimatePresence>
      {showPage && (
        <div>
          {/* <Header /> */}
          <HomeSection1 />
          {/* <Footer /> */}
        </div>
      )}
    </div>
  );
};

export default HomePage;
