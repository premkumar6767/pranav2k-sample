import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";
import { Star, Medal, ExternalLink, ChevronLeft, ChevronRight, Shield, Globe, Sparkles } from "lucide-react";
import SIT from "../images/SIT.png";

interface SponsorProps {
  id?: string;
}

const Sponsors: React.FC<SponsorProps> = ({ id = "mythological-sponsors" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [animateParticles, setAnimateParticles] = useState(false);

  const sponsors = [
    {
      name: "Chennai Computers",
      title: "Expert in Computer Repairs",
      image: "/images/greek-temple1.jpg",
      mythicalBackground: {
        deity: "Hephaestus",
        realm: "Celestial Forge",
        power: "Master Craftsman of Technology",
      },
      description:
        "A trusted computer service provider specializing in high-quality repairs with customer satisfaction at its core.",
      link: "https://www.thechennaicomputers.com/",
      heroicQuest: "Delivering unparalleled computer repair services",
      achievements: ["Best Service 2024", "Top IT Support"],
      color: "#d4af37"
    },
    {
      name: "SHANTHI IT SOLUTIONS LTD",
      title: "Kurnool's Leading IT Company",
      image: SIT,
      mythicalBackground: {
        deity: "Athena",
        realm: "Strategic Intelligence",
        power: "Goddess of Wisdom and Technology",
      },
      description:
        "Providing innovative IT solutions since 2020, driving digital transformation in Kurnool and beyond.",
      link: "https://shanthiitsolution.com/",
      heroicQuest: "Empowering businesses through digital innovation",
      achievements: ["Innovation Leader", "Digital Transformation Award"],
      color: "#c0a86e"
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isAutoPlaying && !isHovering) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % sponsors.length);
        setAnimateParticles(true);
        setTimeout(() => setAnimateParticles(false), 1500);
      }, 7000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, isHovering, sponsors.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % sponsors.length);
    setAnimateParticles(true);
    setTimeout(() => {
      setAnimateParticles(false);
      setIsAutoPlaying(true);
    }, 1500);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + sponsors.length) % sponsors.length);
    setAnimateParticles(true);
    setTimeout(() => {
      setAnimateParticles(false);
      setIsAutoPlaying(true);
    }, 1500);
  };

  const handleDotClick = (index: number) => {
    if (index === activeIndex) return;
    setIsAutoPlaying(false);
    setActiveIndex(index);
    setAnimateParticles(true);
    setTimeout(() => {
      setAnimateParticles(false);
      setIsAutoPlaying(true);
    }, 1500);
  };

  // Number of columns in the temple structure
  const columns = 11;

  return (
    <section
      id={id}
      className="relative min-h-screen bg-gradient-to-br from-[#1a2238] to-[#0f1423] py-16 overflow-hidden"
    >
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white opacity-80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Greek Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="greekPattern"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M20,0 L40,0 L40,20 L60,20 L60,40 L80,40 L80,60 L60,60 L60,80 L40,80 L40,60 L20,60 L20,40 L0,40 L0,20 L20,20 Z"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#greekPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 relative"
            >
              <div className="absolute inset-0 rounded-full border-2 border-gold opacity-50"></div>
              <div className="absolute inset-2 rounded-full border border-gold opacity-30"></div>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-gold" />
              </div>
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-cinzel mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-gold to-amber-300 golden-glow">
              Χορηγοί Mythica (Sponsors)
            </span>
          </h2>
          
          <div className="flex justify-center mb-4">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our prestigious sponsors who support the legacy of innovation at our college,
            embodying the spirit of ancient deities in their technological prowess.
          </p>
        </motion.div>

        {/* Main Sponsors Display */}
        <div 
          className="max-w-6xl mx-auto"
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Temple Structure */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Temple Top - Pediment */}
            <div className="relative">
              <div className="h-24 md:h-32 overflow-hidden">
                {/* Triangular Pediment */}
                <div className="absolute w-full h-full">
                  <div className="relative w-full h-full">
                    {/* Pediment Shape */}
                    <div className="absolute w-full bottom-0 left-0 right-0 overflow-hidden">
                      <div className="mx-auto w-full aspect-[5/1] bg-gradient-to-b from-gold/30 to-gold/10 clip-pediment"></div>
                    </div>
                    
                    {/* Pediment Border */}
                    <div className="absolute w-full bottom-0 left-0 right-0 overflow-hidden">
                      <div className="mx-auto w-full aspect-[5/1] border-b-2 border-gold/40 clip-pediment"></div>
                    </div>
                    
                    {/* Central Emblem */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-black/30 rounded-full w-12 h-12 md:w-16 md:h-16 border border-gold/40">
                      <Shield className="w-6 h-6 md:w-8 md:h-8 text-gold" />
                    </div>
                    
                    {/* Decorative Lines */}
                    <div className="absolute bottom-8 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
                    <div className="absolute bottom-12 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Temple Columns Structure */}
            <div className="flex relative">
              {/* Columns */}
              <div className="absolute -top-4 w-full flex justify-between px-1">
                {[...Array(columns)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {/* Column Capital */}
                    <div className="w-8 md:w-10 h-4 bg-gradient-to-b from-gold/40 to-gold/20 rounded-t-sm"></div>
                    
                    {/* Column Shaft */}
                    <div className="w-6 md:w-8 h-full min-h-[400px] bg-gradient-to-b from-gold/30 via-gold/10 to-gold/30 rounded-b-sm relative overflow-hidden">
                      {/* Column Fluting */}
                      <div className="absolute inset-0">
                        <div className="h-full w-1/3 border-r border-gold/10"></div>
                        <div className="h-full w-2/3 border-r border-gold/10"></div>
                      </div>
                    </div>
                    
                    {/* Column Base */}
                    <div className="w-8 md:w-10 h-4 bg-gradient-to-t from-gold/40 to-gold/20 rounded-b-sm"></div>
                  </div>
                ))}
              </div>
              
              {/* Main Content Area */}
              <div className="flex-1 mx-8 bg-black/60 backdrop-blur-md border border-gold/20 rounded-md overflow-hidden shadow-[0_0_25px_rgba(212,175,55,0.2)] relative z-10">
                {/* Animated Light Particles */}
                <AnimatePresence>
                  {animateParticles && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 pointer-events-none z-20"
                    >
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ 
                            x: "50%", 
                            y: "50%", 
                            opacity: 1,
                            scale: 0
                          }}
                          animate={{ 
                            x: `${Math.random() * 100}%`, 
                            y: `${Math.random() * 100}%`,
                            opacity: 0,
                            scale: Math.random() * 0.5 + 0.5
                          }}
                          transition={{ 
                            duration: Math.random() * 1 + 0.5,
                            ease: "easeOut"
                          }}
                          className="absolute w-2 h-2 rounded-full"
                          style={{ 
                            background: sponsors[activeIndex].color || "#d4af37",
                            boxShadow: `0 0 10px ${sponsors[activeIndex].color || "#d4af37"}`
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid md:grid-cols-2 min-h-[400px]">
                      {/* Image Side */}
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <motion.img
                          key={activeIndex}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 0.9, scale: 1 }}
                          transition={{ duration: 0.8 }}
                          src={sponsors[activeIndex].image}
                          alt={sponsors[activeIndex].name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                        
                        {/* Decorative Frame */}
                        <div className="absolute inset-4 border border-gold/20 pointer-events-none"></div>
                        
                        {/* Deity Badge */}
                        <div className="absolute top-6 left-6 bg-black/60 border border-gold/50 text-gold px-3 py-2 rounded-md backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
                          <div className="flex items-center">
                            <Star className="w-5 h-5 mr-2 text-gold" />
                            <div>
                              <div className="text-sm font-bold">{sponsors[activeIndex].mythicalBackground.deity}</div>
                              <div className="text-xs opacity-80">{sponsors[activeIndex].mythicalBackground.realm}</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Power Badge */}
                        <div className="absolute bottom-6 left-6 right-6 bg-black/60 border border-gold/50 text-gold p-3 rounded-md backdrop-blur-sm">
                          <div className="text-xs uppercase tracking-wider mb-1 opacity-70">Divine Power</div>
                          <div className="text-sm">{sponsors[activeIndex].mythicalBackground.power}</div>
                        </div>
                      </div>
                      
                      {/* Content Side */}
                      <div className="p-6 md:p-8 flex flex-col justify-between relative">
                        {/* Decorative Corner Ornaments */}
                        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-30">
                          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold"></div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden opacity-30">
                          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold"></div>
                        </div>
                        
                        <div>
                          {/* Company Name with Golden Underline */}
                          <h3 className="text-3xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-gold to-amber-400 mb-2">
                            {sponsors[activeIndex].name}
                          </h3>
                          
                          <div className="h-0.5 w-16 bg-gradient-to-r from-gold to-transparent mb-3"></div>
                          
                          <p className="text-gold/80 italic mb-4">{sponsors[activeIndex].title}</p>
                          
                          {/* Company Description */}
                          <div className="my-4">
                            <p className="text-gray-300 leading-relaxed text-base">
                              {sponsors[activeIndex].description}
                            </p>
                          </div>
                          
                          {/* Heroic Quest */}
                          <div className="mt-5 bg-black/40 border-l-4 border-gold/50 p-4 rounded relative">
                            {/* Decorative Quote Mark */}
                            <div className="absolute -top-3 -left-2 text-gold/30 text-4xl">"</div>
                            <div className="text-xs uppercase tracking-wider text-gold/70 mb-1">Heroic Quest</div>
                            <p className="text-gray-300 italic">"{sponsors[activeIndex].heroicQuest}"</p>
                            {/* Decorative Quote Mark */}
                            <div className="absolute -bottom-6 -right-2 text-gold/30 text-4xl rotate-180">"</div>
                          </div>
                        </div>
                        
                        {/* Achievements & Action */}
                        <div>
                          {/* Achievements */}
                          <div className="mt-6 mb-5">
                            <div className="text-xs uppercase tracking-wider text-gold/70 mb-2">Divine Achievements</div>
                            <div className="flex flex-wrap gap-2">
                              {sponsors[activeIndex].achievements.map((achievement, index) => (
                                <div
                                  key={index}
                                  className="flex items-center bg-gold/10 border border-gold/20 px-3 py-1 rounded-full transform transition-transform duration-300 hover:scale-105"
                                >
                                  <Medal className="w-4 h-4 text-gold mr-2" />
                                  <span className="text-sm text-gold/90">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* CTA Button */}
                          <motion.div 
                            className="mt-4 flex justify-center"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <a
                              href={sponsors[activeIndex].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-2 border border-gold text-gold golden-glow hover:bg-gold/10 rounded font-cinzel cursor-pointer transition-colors flex items-center group"
                            >
                              Visit Divine Sponsor
                              <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Temple Steps */}
            <div className="relative flex flex-col items-center">
              {/* Step 1 */}
              <div className="h-4 w-full max-w-[95%] bg-gradient-to-t from-gold/20 to-transparent mt-2 rounded-b-sm"></div>
              {/* Step 2 */}
              <div className="h-4 w-full max-w-[90%] bg-gradient-to-t from-gold/15 to-transparent rounded-b-sm"></div>
              {/* Step 3 */}
              <div className="h-4 w-full max-w-[85%] bg-gradient-to-t from-gold/10 to-transparent rounded-b-sm"></div>
            </div>
            
            {/* Navigation Controls */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                aria-label="Previous sponsor"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <div className="flex gap-3">
                {sponsors.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex
                        ? "bg-gold scale-110 shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                        : "bg-gold/30 hover:bg-gold/50"
                    }`}
                    aria-label={`Go to sponsor ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                aria-label="Next sponsor"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* College Acknowledgment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="inline-block mb-2 relative">
            <div className="absolute inset-0 bg-gold/5 blur-xl rounded-full"></div>
            <div className="relative z-10 flex items-center gap-2 px-4 py-1 rounded-full border border-gold/20">
              <Globe className="w-4 h-4 text-gold/70" />
              <p className="text-gold/70 text-sm">Official Pranav2k25 Partners</p>
            </div>
          </div>
          <h3 className="text-2xl text-gold font-cinzel mt-1 golden-glow">Meenakshi sundararajan engineering college</h3>
          <p className="text-gray-400 text-sm mt-1">Proudly presented as part of PRANAV2K25</p>
        </motion.div>
      </div>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        
        .clip-pediment {
          clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
        }
        
        .golden-glow {
          text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Sponsors;