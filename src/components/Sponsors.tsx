import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, Zap } from "lucide-react";

const Sponsors: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showLightning, setShowLightning] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Trigger lightning effect periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setShowLightning(true);
      setTimeout(() => setShowLightning(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Trigger lightning on hover
  const triggerLightning = () => {
    setShowLightning(true);
    setTimeout(() => setShowLightning(false), 200);
  };

  const sponsors = [
    {
      name: "Chennai Computers",
      title: "Expert in Computer Repairs",
      image: "images/greek-temple1.jpg",
      topic: "A trusted computer service provider specializing in high-quality repairs with customer satisfaction at its core.",
      link: "https://www.thechennaicomputers.com/",
      deity: "Hephaestus",
      godPower: "Master Craftsman of Technology"
    },
    {
      name: "SHANTHI IT SOLUTIONS LTD",
      title: "Kurnool's Leading IT Company",
      image: "images/greek-temple2.jpg",
      topic: "Providing innovative IT solutions since 2020, driving digital transformation in Kurnool and beyond.",
      link: "https://shanthiitsolution.com/",
      deity: "Athena",
      godPower: "Goddess of Wisdom and Technology"
    },
    {
      name: "Dr. Alexandra Pallas",
      title: "Professor of Classical Studies & AI Ethics",
      image: "/api/placeholder/600/600",
      topic: "The Ethical Prometheus: AI Boundaries in Modern Society",
      link: "https://example.com/pallas",
      deity: "Apollo",
      godPower: "Oracle of Knowledge"
    },
    {
      name: "Jason Argonaut",
      title: "Space Technology Pioneer",
      image: "/api/placeholder/600/600",
      topic: "The New Golden Fleece: Humanity's Quest for Mars",
      link: "https://example.com/argonaut",
      deity: "Poseidon",
      godPower: "Navigator of Digital Realms"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="sponsors" className="py-20 bg-black relative overflow-hidden">
      {/* Greek Temple Background */}
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center opacity-10"></div>
      
      {/* Lightning Flash Effect */}
      <AnimatePresence>
        {showLightning && (
          <motion.div 
            className="absolute inset-0 bg-white/30 z-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        )}
      </AnimatePresence>

      {/* Greek Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gold/20 to-transparent"></div>
      
      {/* Greek Columns */}
      <div className="hidden lg:block absolute left-0 top-0 h-full w-16 bg-[url('/images/greek-column.png')] bg-repeat-y opacity-30"></div>
      <div className="hidden lg:block absolute right-0 top-0 h-full w-16 bg-[url('/images/greek-column.png')] bg-repeat-y opacity-30"></div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Title Section with Thunder Effect */}
        <div className="text-center mb-16">
          <motion.button
            className="absolute top-8 right-8 text-gold bg-transparent border border-gold/50 rounded-full p-3 hover:bg-gold/20 transition-colors"
            onClick={triggerLightning}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Zap className="h-6 w-6" />
          </motion.button>

          <motion.h2 
            className="text-4xl md:text-5xl font-cinzel font-bold mb-4 text-gold tracking-wider"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Olympian Sponsors
          </motion.h2>
          
          <motion.div
            className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: "8rem" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          ></motion.div>
          
          <motion.p 
            className="text-lg max-w-3xl mx-auto text-gray-300 italic font-serif"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            "By the grace of Zeus and the wisdom of Athena, these divine patrons bestow their favor upon our gathering. 
            Like the gods of ancient Olympus, they illuminate our path to innovation and excellence."
          </motion.p>
        </div>

        {/* Greek-inspired Ornamental Divider */}
        <motion.div 
          className="w-full h-8 my-8 bg-[url('/images/greek-pattern.png')] bg-repeat-x opacity-30"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 0.3, x: 0 } : {}}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Sponsors Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black border border-gold/50 rounded-lg overflow-hidden relative group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 0 30px rgba(218, 165, 32, 0.4)',
                transition: { duration: 0.3 } 
              }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              onClick={triggerLightning}
            >
              {/* Greek Ornamental Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/80"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/80"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/80"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/80"></div>
              
              {/* Lightning Effect on Hover */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="absolute inset-0 bg-gold/10 z-10 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
              
              {/* Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={sponsor.image} 
                  alt={sponsor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Deity Badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-gold/90 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {sponsor.deity}
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-cinzel font-bold text-gold mb-1">{sponsor.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{sponsor.title}</p>
                
                {/* Divine Power */}
                <div className="flex items-center mb-3">
                  <Zap className="h-4 w-4 text-gold mr-2" />
                  <p className="text-xs text-gold/80 italic">{sponsor.godPower}</p>
                </div>
                
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">"{sponsor.topic}"</p>
                
                {/* Interactive Button */}
                <motion.a 
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full text-sm text-gold border border-gold rounded-md py-2 mt-2 group-hover:bg-gold group-hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2 font-cinzel">Visit Divine Temple</span>
                  <Globe className="h-4 w-4" />
                </motion.a>
              </div>
              
              {/* Greek Pattern Border */}
              <div className="h-2 w-full bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Decorative Elements */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-40 h-16 bg-[url('/images/laurel-wreath.png')] bg-contain bg-center bg-no-repeat opacity-70"></div>
        </motion.div>
      </div>
      
     
      <audio id="thunder-sound" src="./../images/zeus.mp3" preload="auto"></audio>
    </section>
  );
};

export default Sponsors;