import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Star, Medal } from "lucide-react";

interface SponsorsProps {
  id?: string;
}

const Sponsors: React.FC<SponsorsProps> = ({ id = "sponsors" }) => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const sponsors = useMemo(() => [
    {
      name: "Chennai Computers",
      title: "Expert in Computer Repairs",
      image: "images/greek-temple1.jpg",
      topic: "A trusted computer service provider specializing in high-quality repairs with customer satisfaction at its core.",
      link: "https://www.thechennaicomputers.com/",
      deity: "Hephaestus",
      godPower: "Master Craftsman of Technology",
      accolades: ["Best Service 2024", "Top IT Support"]
    },
    {
      name: "SHANTHI IT SOLUTIONS LTD",
      title: "Kurnool's Leading IT Company",
      image: "images/greek-temple2.jpg",
      topic: "Providing innovative IT solutions since 2020, driving digital transformation in Kurnool and beyond.",
      link: "https://shanthiitsolution.com/",
      deity: "Athena",
      godPower: "Goddess of Wisdom and Technology",
      accolades: ["Innovation Leader", "Digital Transformation Award"]
    },
    {
      name: "Dr. Alexandra Pallas",
      title: "Professor of Classical Studies & AI Ethics",
      image: "/api/placeholder/600/600",
      topic: "The Ethical Prometheus: AI Boundaries in Modern Society",
      link: "https://example.com/pallas",
      deity: "Apollo",
      godPower: "Oracle of Knowledge",
      accolades: ["Research Excellence", "Ethical AI Pioneer"]
    },
    {
      name: "Jason Argonaut",
      title: "Space Technology Pioneer",
      image: "/api/placeholder/600/600",
      topic: "The New Golden Fleece: Humanity's Quest for Mars",
      link: "https://example.com/argonaut",
      deity: "Poseidon",
      godPower: "Navigator of Digital Realms",
      accolades: ["Space Innovation Award", "Mars Mission Strategist"]
    }
  ], []);

  // Automatic scrolling effect
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, [sponsors.length]);

  return (
    <section 
      id={id} 
      className="min-h-screen bg-black flex items-center justify-center p-4"
    >
      <div className="w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gold mb-4">
            Our Sponsors
          </h2>
          <p className="text-gray-300">
            Celebrating the visionaries who make our journey possible
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[600px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={scrollIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 300
              }}
              className="absolute w-full h-full"
            >
              {/* Sponsor Card */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img 
                    src={sponsors[scrollIndex].image} 
                    alt={sponsors[scrollIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gold mb-2">
                    {sponsors[scrollIndex].name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {sponsors[scrollIndex].title}
                  </p>

                  {/* Accolades */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {sponsors[scrollIndex].accolades.map((accolade, idx) => (
                      <div 
                        key={idx} 
                        className="bg-gold/20 text-gold px-2 py-1 rounded-full text-xs flex items-center"
                      >
                        <Medal className="w-3 h-3 mr-1" />
                        {accolade}
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 italic mb-4">
                    "{sponsors[scrollIndex].topic}"
                  </p>

                  {/* Visit Button */}
                  <a 
                    href={sponsors[scrollIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block bg-gold text-black py-3 rounded-lg hover:bg-gold/80 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {sponsors.map((_, index) => (
            <button
              key={index}
              onClick={() => setScrollIndex(index)}
              className={`
                w-3 h-3 rounded-full 
                ${index === scrollIndex ? 'bg-gold' : 'bg-gray-600'}
                transition-colors
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;