import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Events.css";

// Import images
import image1 from "../images/Aural-Bliss.jpeg";
import image2 from "../images/Decodex.jpeg";
import image3 from "../images/Ojngeo.jpeg";
import image4 from "../images/Wired-Wonders.jpeg";
import image5 from "../images/Treasure-hunt.jpeg";
import image6 from "../images/short-film.jpeg";
import image7 from "../images/Senpai-fans.jpeg";
import image8 from "../images/Halt-the-dice.jpeg";

// Define event titles corresponding to images
const eventTitles = [
  "Aural Bliss",
  "DecodeX",
  "Ojingeo Game", 
  "Wired Wonders",
  "Treasure Hunt",
  "Short Film",
  "Anime Quiz",
  "Halt the Dice"
];

const images: string[] = [image1, image2, image3, image4, image5, image6, image7, image8];

const Events: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navigate = useNavigate();
  
  // Set initial random image on mount
  useEffect(() => {
    setActiveIndex(Math.floor(Math.random() * images.length));
  }, []);

  // Function to handle card click and navigate to detail page
  const handleCardClick = (index: number) => {
    // Convert event title to URL slug format (lowercase with hyphens)
    const eventSlug = eventTitles[index].replace(/\s+/g, "-").toLowerCase();
    
    // Navigate to the event detail page using the slug
    navigate(`/event/${eventSlug}`);
  };

  return (
    <div className="events-container">
      <h1 className="events-title">ΕΚΔΗΛΩΣΕΙΣ (EVENTS)</h1>
      <div className="carousel">
        {images.map((image, index) => {
          const offset = index - activeIndex;
          const isCentered = offset === 0;
          
          return (
            <motion.div
              key={index}
              className="card"
              style={{ backgroundImage: `url(${image})` }}
              animate={{
                x: offset * 150,
                scale: isCentered ? 1.2 : 1 - Math.abs(offset) * 0.1,
                opacity: isCentered ? 1 : 0.6,
                rotate: offset * 5,
                filter: isCentered ? "none" : "brightness(0.8) blur(2px)",
                zIndex: isCentered ? 10 : 5 - Math.abs(offset)
              }}
              transition={{ 
                duration: 0.2,
                ease: "easeOut" 
              }}
              whileHover={{
                scale: isCentered ? 1.25 : 1.05,
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.5)"
              }}
              onHoverStart={() => setActiveIndex(index)}
              onTouchStart={() => setActiveIndex(index)}
              onClick={() => handleCardClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events; 