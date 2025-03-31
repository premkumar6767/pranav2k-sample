import React, { useEffect, useState } from "react";
import "./Preloader.scss";
import bgImage from "../images/preloader-bg.jpeg"; // Import the background image

const fonts = ["GreekHouse", "GreekFreak", "RomanFont"];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [letterStyles, setLetterStyles] = useState<string[]>(
    Array(10).fill(fonts[0])
  );
  const [isFinal, setIsFinal] = useState(false);

  useEffect(() => {
    let count = 0;

    const rollIntro = () => {
      setLetterStyles(
        "PRANAV 2K25"
          .split("")
          .map(() => fonts[Math.floor(Math.random() * fonts.length)])
      );
    };

    const interval = setInterval(() => {
      rollIntro();
      count++;
      if (count > 25) {
        clearInterval(interval);
        setIsFinal(true);
        setTimeout(onComplete, 1500);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="preloader-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover", // Ensures the background fills the screen
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling
        width: "100vw",
        height: "100vh",
      }}
    >
      <h2 className="preloader-text">
        {"PRANAV 2K25".split("").map((char, index) => (
          <span
            key={index}
            className={isFinal ? "final-text" : ""}
            style={{ fontFamily: isFinal ? "RomanFont" : letterStyles[index] }}
          >
            {char}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default Preloader;
