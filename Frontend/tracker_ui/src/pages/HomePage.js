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
  const [showPage, setShowPage] = useState(true);
  const [stopAni, setStopAni] = useState(true);
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
          <Header />
          <HomeSection1 />
          <div style={{ height: "800px" }}>
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
            dolor sit amet..", comes from a line in section 1.10.32. The
            standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by E
          </div>
          <div>
            <InfinteScrolling />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default HomePage;
