import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Download, Calendar, MapPin } from "lucide-react";

const Hero = () => {
  const [currentTextMode, setCurrentTextMode] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Text modes with mythological themes
  const textModes = [
    "PRANAV2K25",
    "π2K25",
    "Π^2 * K^25",
    "ΜΥΘΟΛΟΓΙΑ",
    "ΠΡΟΜΗΘΕΑΣ",
  ];

  // Responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Rotate through text modes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextMode((prev) => (prev + 1) % textModes.length);
    }, 1500); // Slowed down a bit for better readability
    
    return () => clearInterval(interval);
  }, []);

  // Optimized star generation - compute once and memoize
  const backgroundStars = useMemo(() => {
    // Adjust star count based on screen size
    const starCount = windowWidth < 768 ? 50 : 100;
    
    return Array.from({ length: starCount }, (_, i) => ({
      id: `star-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3
    }));
  }, [windowWidth]);

  // Optimized nebula elements
  const nebulaElements = useMemo(() => {
    const count = windowWidth < 768 ? 3 : 5;
    
    return Array.from({ length: count }, (_, i) => ({
      id: `nebula-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`
    }));
  }, [windowWidth]);

  // Calculate font sizes based on window width
  const getFontSize = () => {
    if (windowWidth < 480) return 'text-3xl';
    if (windowWidth < 768) return 'text-4xl sm:text-5xl';
    if (windowWidth < 1024) return 'text-5xl md:text-6xl';
    return 'text-6xl lg:text-8xl';
  };

  // Get current text for animation
  const currentText = textModes[currentTextMode].split("");
  
  // Simplified constellations that adapt to screen size
  const constellations = useMemo(() => {
    // Define base constellations
    const baseCons = [
      {
        name: "Aries",
        stars: [
          { x: 20, y: 30, size: 3, brightness: 0.7 },
          { x: 22, y: 32, size: 4, brightness: 1 },
          { x: 25, y: 28, size: 3, brightness: 0.8 },
          { x: 27, y: 33, size: 2, brightness: 0.5 }
        ],
        connections: [
          [0, 1],
          [1, 2],
          [2, 3]
        ],
        color: "text-yellow-300"
      },
      {
        name: "Orion",
        stars: [
          { x: 50, y: 40, size: 4, brightness: 1 },
          { x: 52, y: 42, size: 5, brightness: 1 },
          { x: 54, y: 38, size: 3, brightness: 0.8 },
          { x: 56, y: 43, size: 4, brightness: 0.9 }
        ],
        connections: [
          [0, 1],
          [1, 2],
          [2, 3]
        ],
        color: "text-blue-300"
      }
    ];
    
    // For mobile, simplify the stars even further if needed
    if (windowWidth < 480) {
      return baseCons.map(con => ({
        ...con,
        stars: con.stars.slice(0, 3) // Use fewer stars on small screens
      }));
    }
    
    return baseCons;
  }, [windowWidth]);

  // Fixed function to safely find constellation by name
  const findConstellationByName = (name) => {
    return constellations.find(c => c.name === name) || null;
  };

  // Global connections
  const globalConnections = [
    { from: { constellation: "Aries", starIndex: constellations[0]?.stars.length > 3 ? 3 : 2 }, 
      to: { constellation: "Orion", starIndex: 0 } }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0B1026] via-[#0D1C3D] to-[#0B1026]">
      {/* Reduced Nebula Elements with simplified animations */}
      {nebulaElements.map(nebula => (
        <motion.div
          key={nebula.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${nebula.size}px`,
            height: `${nebula.size}px`,
            left: `${nebula.x}%`,
            top: `${nebula.y}%`,
            backgroundColor: nebula.color
          }}
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      {/* Background Mount Olympus-inspired landscape - static, no animation */}
      <div className="absolute inset-0 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"rgba(255,255,255,0.1)"}} />
              <stop offset="100%" style={{stopColor:"rgba(200,200,255,0.05)"}} />
            </linearGradient>
          </defs>
          <path 
            d="M0 100 L20 40 L40 70 L60 30 L80 60 L100 100 Z" 
            fill="url(#mountainGradient)" 
          />
        </svg>
      </div>

      {/* Static background stars - no animations for better performance */}
      {backgroundStars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity
          }}
        />
      ))}

      {/* Responsive constellation rendering - selective based on screen size */}
      {windowWidth > 480 && constellations.map((constellation, constellationIndex) => (
        <motion.div 
          key={constellation.name}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: constellationIndex * 3
          }}
        >
          {/* Stars */}
          {constellation.stars.map((star, starIndex) => (
            <div
              key={`${constellation.name}-star-${starIndex}`}
              className={`absolute ${constellation.color} flex items-center justify-center`}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size * 2}px`,
                height: `${star.size * 2}px`
              }}
            >
              {/* Using simple div for stars on smaller screens for better performance */}
              {windowWidth < 768 ? (
                <div 
                  className="rounded-full w-full h-full" 
                  style={{ 
                    backgroundColor: constellation.color.includes('yellow') ? '#FFD700' : '#87CEFA',
                    opacity: star.brightness 
                  }}
                />
              ) : (
                <motion.div 
                  className="w-full h-full rounded-full"
                  style={{ 
                    backgroundColor: constellation.color.includes('yellow') ? '#FFD700' : '#87CEFA',
                    opacity: star.brightness 
                  }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [star.brightness, star.brightness * 1.2, star.brightness]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              )}
            </div>
          ))}

          {/* Constellation Connections - single SVG for all connections */}
          <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
            {constellation.connections.map((connection, connectionIndex) => {
              const startStar = constellation.stars[connection[0]];
              const endStar = constellation.stars[connection[1]];
              
              if (!startStar || !endStar) return null;
              
              return (
                <motion.line
                  key={`${constellation.name}-connection-${connectionIndex}`}
                  x1={`${startStar.x}%`}
                  y1={`${startStar.y}%`}
                  x2={`${endStar.x}%`}
                  y2={`${endStar.y}%`}
                  stroke={constellation.color.replace('text-', '').includes('yellow') ? '#FFD700' : '#87CEFA'}
                  strokeWidth="1"
                  strokeOpacity="0.7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    delay: connectionIndex * 0.5 + (constellationIndex * 3)
                  }}
                />
              );
            })}
          </svg>
        </motion.div>
      ))}

      {/* Global Constellation Connections - only on larger screens */}
      {windowWidth > 768 && (
        <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
          {globalConnections.map((connection, index) => {
            const startConstellation = findConstellationByName(connection.from.constellation);
            const endConstellation = findConstellationByName(connection.to.constellation);
            
            // Skip rendering if either constellation is not found
            if (!startConstellation || !endConstellation) return null;
            
            // Check if star indices are valid
            if (!startConstellation.stars[connection.from.starIndex] || 
                !endConstellation.stars[connection.to.starIndex]) return null;
            
            const startStar = startConstellation.stars[connection.from.starIndex];
            const endStar = endConstellation.stars[connection.to.starIndex];
            
            return (
              <motion.line
                key={`global-connection-${index}`}
                x1={`${startStar.x}%`}
                y1={`${startStar.y}%`}
                x2={`${endStar.x}%`}
                y2={`${endStar.y}%`}
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.5"
                strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  delay: 7 // Delay after all constellations have formed
                }}
              />
            );
          })}
        </svg>
      )}
      
      {/* Content section - fully responsive */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 w-full">
        <div className="h-16 sm:h-20 md:h-24 lg:h-32 relative mb-6 sm:mb-8 md:mb-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTextMode}
              className="flex space-x-1 sm:space-x-2 overflow-hidden py-2 sm:py-4 px-1 sm:px-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              {currentText.map((char, index) => (
                <motion.span
                  key={index}
                  className={`${getFontSize()} font-bold inline-block`}
                  style={{
                    textShadow: "0 0 10px rgba(255,255,255,0.5)"
                  }}
                  initial={{ 
                    rotateY: 180,
                    opacity: 0
                  }}
                  animate={{ 
                    rotateY: 0,
                    opacity: 1,
                    color: index % 2 === 0 ? '#FFD700' : '#FFFFFF'
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    damping: 12
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-yellow-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A Symposium of Greek Mythology & Modern Innovation
        </motion.h2>

        <motion.a
          href="#register"
          className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-blue-500 text-white font-bold rounded-lg hover:from-yellow-500 hover:to-blue-600 transition-all flex items-center justify-center text-sm sm:text-base"
          whileHover={{ 
            scale: 1.05
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Register Now
        </motion.a>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6 md:mt-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl px-2 sm:px-4">
          {[
            {
              icon: Calendar,
              title: "Event Date",
              description: "March 15, 2025",
              color: "text-blue-400"
            },
            {
              icon: MapPin,
              title: "Venue",
              description: "Meenakshi Sundararajan Engineering College",
              color: "text-green-500"
            }
          ].map((detail, index) => (
            <motion.div
              key={detail.title}
              className={`
                flex-1 flex items-center p-2 sm:p-3 md:p-4 rounded-lg 
                bg-white/10 backdrop-blur-md border border-white/20 
                ${detail.color} hover:bg-white/20 transition-all duration-300
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              <detail.icon className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <div>
                <h3 className="font-bold text-xs sm:text-sm">{detail.title}</h3>
                <p className="text-xs text-white/80 mt-0.5 sm:mt-1 text-left">
                  {windowWidth < 320 && detail.title === "Venue" 
                    ? "MSEC" 
                    : detail.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;