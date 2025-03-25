import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  description: string;
  link: string;
  isWide?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  link,
  isWide,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0.95,
        boxShadow: "0px 0px 20px rgba(200, 180, 160, 0.1)",
      }}
      animate={{
        opacity: 1,
        boxShadow: "0px 0px 30px rgba(200, 180, 160, 0.2)",
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 10,
        rotateY: 10,
        boxShadow: "0px 0px 50px rgba(255, 255, 255, 1)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`relative ${
        isWide ? "w-[600px] h-[180px]" : "w-[280px] h-[150px]"
      } 
                 rounded-lg overflow-hidden shadow-2xl group transition-all duration-300 
                 bg-gradient-to-r from-yellow-500 via-red-800 to-black`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={link} className="block w-full h-full">
        {/* ⚡ Background Gradient (Restored Greek Theme) */}
        <div
          className="absolute inset-0 bg-gradient-to-r 
                        from-yellow-500 via-red-800 to-black animate-gradient-flow"
        ></div>

        {/* ⚔️ 3D Depth Effect */}
        <div
          className="absolute inset-0 bg-opacity-10 backdrop-blur-lg 
                        transition-all duration-300"
        ></div>

        {/* 🏺 Title (Before Hover) | Description (On Hover) */}
        <div className="absolute inset-0 flex items-center justify-center text-center transition-all duration-500">
          <h2
            className={`text-white text-2xl font-bold tracking-wide font-[Cinzel] transition-all 
                          duration-300 ${
                            isHovered ? "opacity-0" : "opacity-100"
                          }`}
          >
            {title}
          </h2>
          <p
            className={`absolute text-gray-100 text-sm font-medium transition-all duration-500 text-center px-4
                         ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
