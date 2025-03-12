import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Speakers: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const speakers = [
    {
      name: "Dr. Alexandra Pallas",
      title: "Professor of Classical Studies & AI Ethics",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      topic: "The Ethical Prometheus: AI Boundaries in Modern Society"
    },
    {
      name: "Marcus Hermes",
      title: "Tech Entrepreneur & Mythologist",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      topic: "Bridging Worlds: How Ancient Myths Guide Modern Innovation"
    },
    {
      name: "Dr. Sophia Athena",
      title: "Quantum Computing Researcher",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      topic: "Quantum Realms: The Modern Oracle of Delphi"
    },
    {
      name: "Jason Argonaut",
      title: "Space Technology Pioneer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      topic: "The New Golden Fleece: Humanity's Quest for Mars"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="speakers" className="py-20 bg-deep-blue/90 relative">
      <div className="absolute inset-0 marble-texture opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-cinzel font-bold mb-4 text-gold"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Modern Oracles
          </motion.h2>
          <motion.div
            className="h-1 w-24 mx-auto gold-gradient mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-lg max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Learn from our distinguished speakers who, like the oracles of ancient Greece, offer wisdom and insights that bridge the past and future.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {speakers.map((speaker, index) => (
            <motion.div 
              key={index}
              className="bg-deep-blue/70 border border-gold/30 rounded-lg overflow-hidden group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)',
                transition: { duration: 0.3 } 
              }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-deep-blue/50 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-cinzel font-bold text-gold mb-1">{speaker.name}</h3>
                <p className="text-light-blue text-sm mb-4">{speaker.title}</p>
                <p className="text-white text-sm font-medium mb-4">"{speaker.topic}"</p>
                <motion.button 
                  className="flex items-center text-sm text-gold hover:text-light-blue transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2">View Profile</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;