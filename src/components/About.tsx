import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "../index.css";
import laurel from "./../images/laurelbg.png";
import { useNavigate } from 'react-router-dom';
import prof from "./../images/profone.jpeg"
import { 
  Zap, 
  Compass, 
  BookOpen, 
  Flame, 
  Linkedin, 
  Instagram,
  Map, 
  Globe,
  Scroll
} from "lucide-react";

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const features = [
    { 
      icon: <Zap className="h-6 w-6 md:h-8 md:w-8 text-light-blue" />, 
      image: prof,  
      deity: "Founder", 
      title: "Prof.K.R.Sundararajan ", 
      description: "Prof. K.R. Sundararajan founded IIET in 1947 to expand engineering education, later establishing Meenakshi College for Women in 1974. His vision led to the creation of Meenakshi Sundararajan Engineering College in 2001. His legacy continues to shape engineering education in South India."
    },
    { 
      icon: <Compass className="h-6 w-6 md:h-8 md:w-8 text-light-blue" />, 
      image: "/images/professor2.jpg", 
      deity: "Former Secretary", 
      title: "Dr K.S. Babai", 
      description: "Dr. K.S. Babai, an alumna of CEG, IIT Madras, and Annamalai University, led Meenakshi Sundararajan Engineering College with dedication. She excelled in technical education, inspiring others with her perseverance. Her lifelong commitment was to uplift and educate future generations." 
    },
    { 
      icon: <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-light-blue" />, 
      image: "/images/professor3.jpg", 
      deity: "Secretary", 
      title: "Mr.N. Sreekanth", 
      description: "Mr. N. Sreekanth, our secretary, promotes skill development through diverse programs and club activities. His focus on extracurriculars fosters teamwork, creativity, and problem-solving. He empowers students to become well-rounded professionals." 
    },
    { 
      icon: <Scroll className="h-6 w-6 md:h-8 md:w-8 text-light-blue" />, 
      image: "/images/professor4.jpg",
      deity: "Principal",
      title: "Dr.S.V.Saravanan", 
      description: "Dr. S. V. Saravanan, our principal, blends technical skills with academics, creating a supportive learning environment. His motivational guidance inspires students to excel. Beyond administration, he mentors students, shaping their journey toward success." 
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, // Fixed from opacity: 20 to proper value
      y: 0,
      transition: {
        duration: 0.5, // Increased from 0.005 for better visibility
        ease: [0.6, 0.01, 0.01, 0.9]
      }
    }
  };

  // Lightning effect component
  const Lightning = () => {
    return (
      <>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`lightning-${i}`}
            className="absolute bg-blue-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${10 + Math.random() * 80}%`,
              width: `${5 + Math.random() * 2}px`,
              height: `${500 + Math.random() * 150}px`,
              filter: 'blur(1px)',
              transformOrigin: 'top',
              rotate: Math.random() > 0.6? `${-5 - Math.random() * 10}deg` : `${5 + Math.random() * 10}deg`,
              opacity: 0,
              zIndex: 5,
              boxShadow: '0 0 10px 2px rgba(135, 206, 235, 0.8), 0 0 20px 6px rgba(135, 206, 235, 0.4)'
            }}
            animate={{
              opacity: [0, 0.9, 0.4],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatDelay: 3 + Math.random() * 10,
              ease: "easeOut",
              delay: i * 1.2
            }}
          />
        ))}
      </>
    );
  };

  // Asteroid effect component
  const Asteroids = () => {
    return (
      <>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`asteroid-${i}`}
            className="absolute bg-gray-300 rounded-full z-10"
            style={{
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.8), 0 0 8px 2px rgba(255, 215, 0, 0.4)',
              top: `-20px`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
              y: [0, window.innerHeight + 50],
              rotate: [0, Math.random() * 720],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
              ease: "easeIn",
              delay: i * 0.8
            }}
          />
        ))}
      </>
    );
  };

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/ancient-greek-bg.jpg')" }}
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-black/70">
        {/* Animated cosmic background with increased visibility */}
        <div className="absolute inset-0 opacity-50">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="cosmos" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#4a148c" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#cosmos)" />
          </svg>
        </div>
        
        {/* Greek column pattern overlay */}
        <div className="absolute inset-0 opacity-30 bg-repeat" style={{ backgroundImage: "url('/greek-pattern.png')" }}></div>
      </div>
      
      {/* Enhanced Lightning Effect */}
      <Lightning />
      
      {/* Enhanced Asteroid Effect */}
      <Asteroids />
      
      {/* Enhanced celestial particles with increased visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars background */}
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full z-10"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: Math.random() > 0.3 ? '#FFD700' : '#FFFFFF',
              boxShadow: Math.random() > 0.6 ? '0 0 4px 1px rgba(255, 215, 0, 0.8)' : 'none'
            }}
            animate={{
              opacity: [0.4, Math.random() * 0.7 + 0.6, 0.4],
              scale: [1, Math.random() * 0.6 + 1.2, 1]
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Larger glowing orbs with increased visibility */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full z-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 5}px`,
              height: `${Math.random() * 12 + 5}px`,
              backgroundColor: Math.random() > 0.7 ? '#FFD700' : '#87CEEB',
              boxShadow: Math.random() > 0.7 
                ? '0 0 12px 3px rgba(255, 215, 0, 0.9)' 
                : '0 0 12px 3px rgba(135, 206, 235, 0.9)'
            }}
            animate={{
              opacity: [0.5, 0.9, 0.5],
              scale: [1, 1.5, 1],
              x: [0, (Math.random() - 0.5) * 50, 0],
              y: [0, (Math.random() - 0.5) * 50, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          />
        ))}
        
        {/* Enhanced shooting stars effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-2 h-2 bg-white z-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 30}%`,
              boxShadow: '0 0 15px 4px rgba(255, 255, 255, 0.9), 0 0 30px 10px rgba(255, 215, 0, 0.6)',
              borderRadius: '50%'
            }}
            animate={{
              x: [0, Math.random() > 0.5 ? 500 : -500],
              y: [0, 500],
              opacity: [0, 1, 0],
              scale: [0.1, 2, 0.1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 3 + Math.random() * 8,
              ease: "easeOut",
              delay: i * 2
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            className="relative inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img 
              src={laurel}
              alt="Greek Laurel" 
              className="w-32 md:w-48 mx-auto opacity-80" 
            />
            <motion.h2
              className="text-4xl md:text-6xl font-cinzel font-bold text-gold absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Management
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="h-1 w-16 md:w-24 mx-auto bg-gold mb-6 md:mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          
          <motion.p
            className="text-base md:text-lg max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            PRANAV2K25 blends Greek mythology with cutting-edge innovation. Like the phoenix that rises from its ashes, we aim to inspire a rebirth of ideas and transformation of knowledge.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group"
              variants={fadeInUp}
            >
              {/* Greek column decorative elements */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-contain bg-no-repeat bg-center opacity-80" style={{ backgroundImage: "url('/greek-column-top.png')" }}></div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-gold/30 p-6 md:p-8 rounded-lg hover:border-gold transition-all duration-500 group-hover:bg-black/60 h-full flex flex-col">
                {/* Greek deity association at the top */}
                <div className="mb-2 text-xs text-gold/80 font-cinzel tracking-wider">GUIDED BY {feature.deity}</div>
                
                {/* Professor image with decorative frame and glow effect */}
                <div className="relative mb-4 overflow-hidden rounded-lg border-2 border-gold/50 p-1 group-hover:border-gold transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 z-10"></div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-radial from-gold/20 to-transparent z-5 opacity-0 group-hover:opacity-100"
                    animate={{
                      opacity: [0, 0.5, 0],
                      scale: [0.9, 1.1, 0.9]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-48 object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Greek decorative overlay pattern */}
                  <div className="absolute inset-0 bg-repeat opacity-30" style={{ backgroundImage: "url('/greek-pattern-small.png')" }}></div>
                </div>
                
                <div className="bg-gold/20 p-3 rounded-full w-fit mb-4 group-hover:bg-gold/40 transition-colors">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-cinzel font-bold mb-3 text-gold group-hover:text-light-blue transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-300 mt-auto">{feature.description}</p>
                
                {/* Greek ornamental divider */}
                <div className="w-full h-4 mt-4 bg-contain bg-no-repeat bg-center opacity-50 group-hover:opacity-80 transition-opacity" style={{ backgroundImage: "url('/greek-ornament.png')" }}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24 bg-black/40 backdrop-blur-sm border border-light-blue/20 p-8 md:p-10 rounded-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Greek pattern background */}
          <div className="absolute inset-0 bg-repeat opacity-5" style={{ backgroundImage: "url('/greek-pattern-large.png')" }}></div>
          
          {/* Decorative Greek border */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-repeat-x opacity-60" style={{ backgroundImage: "url('/greek-border.png')" }}></div>
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-repeat-x opacity-60" style={{ backgroundImage: "url('/greek-border.png')" }}></div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 relative">
              {/* Greek column decorative elements */}
              <div className="absolute -left-4 top-0 bottom-0 w-2 bg-repeat-y opacity-30" style={{ backgroundImage: "url('/greek-column.png')" }}></div>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-cinzel font-bold mb-4 text-light-blue"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Meenakshi Sundararajan <br />Engineering College
              </motion.h3>
              
              <motion.div
                className="h-1 w-16 bg-gold mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
              
              <motion.p 
                className="text-sm md:text-base text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Meenakshi Sundararajan Engineering College (MSEC), established in 2001 in Chennai, is a private engineering college affiliated with Anna University, offering undergraduate and postgraduate programs in various engineering disciplines, aiming to produce industry-ready graduates.
              </motion.p>
              <div className="flex space-x-6 mt-6">
                <motion.a
                  href="https://www.linkedin.com/school/meenakshi-sundararajan-engineering-college/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-light-blue transition-colors relative group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://maps.app.goo.gl/yC6AZM3McGjN9uk98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-light-blue transition-colors relative group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Map className="w-6 h-6" />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Location</span>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/msecofficial_chennai24?igsh=MTB0MTR3ZWp6MGNpaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-light-blue transition-colors relative group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-6 h-6" />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Instagram</span>
                </motion.a>

                <motion.a
                  href="https://msec.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-light-blue transition-colors relative group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Globe className="w-6 h-6" />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Website</span>
                </motion.a>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center relative">
              {/* Greek temple silhouette behind the flame */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-contain bg-no-repeat bg-bottom opacity-30" style={{ backgroundImage: "url('/greek-temple.png')" }}></div>
              
              {/* Enhanced pulsating flame effect */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0], 
                  rotateZ: [0, 5, 0, -5, 0] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative"
              >
                {/* Enhanced flame glow effect */}
                <motion.div
                  className="absolute -inset-16 opacity-60"
                  animate={{ 
                    opacity: [0.6, 1, 0.6],
                    scale: [0.8, 1.3, 0.8]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    filter: "blur(20px)",
                    background: "radial-gradient(circle, rgba(135,206,235,0.5) 0%, rgba(0,0,0,0) 70%)"
                  }}
                ></motion.div>
                
                <Flame className="h-32 w-32 md:h-48 md:w-48 text-light-blue" />
                
                <motion.div
                  className="absolute inset-0"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [0.9, 1.2, 0.9] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Flame className="h-32 w-32 md:h-48 md:w-48 text-gold" />
                </motion.div>
                
                {/* Enhanced sparks effect with more particles and faster movement */}
                <div className="absolute inset-0 overflow-visible">
                  {[...Array(40)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: `${Math.random() * 5 + 2}px`,
                        height: `${Math.random() * 5 + 2}px`,
                        left: "50%",
                        top: "50%",
                        backgroundColor: i % 3 === 0 ? "#87CEEB" : "#FFD700",
                        boxShadow: i % 3 === 0 
                          ? "0 0 10px 2px rgba(135, 206, 235, 0.8)" 
                          : "0 0 10px 2px rgba(255, 215, 0, 0.8)",
                        zIndex: 20
                      }}
                      animate={{
                        x: [0, (Math.random() - 0.5) * 200],
                        y: [0, -100 - Math.random() * 200],
                        opacity: [1, 0],
                        scale: [1, Math.random() * 0.5 + 0.5]
                      }}
                      transition={{
                        duration: 0.8 + Math.random() * 1.2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
                
                {/* Enhanced flame base glow */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full -z-10"
                  style={{
                    transform: "translate(-50%, -50%)",
                    background: "radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(0,0,0,0) 70%)",
                    filter: "blur(8px)"
                  }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    scale: [2, 2.5, 2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;