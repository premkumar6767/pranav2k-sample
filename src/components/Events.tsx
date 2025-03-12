import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Lightbulb, Rocket, Cpu, Palette } from 'lucide-react';

const Events: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const events = [
    {
      icon: <Lightbulb className="h-8 w-8 text-light-blue" />,
      title: "Athena's Workshop",
      description: "Interactive sessions on innovation and problem-solving inspired by the goddess of wisdom and strategic warfare.",
      category: "Workshop"
    },
    {
      icon: <Users className="h-8 w-8 text-light-blue" />,
      title: "Olympian Debates",
      description: "Engage in structured debates on modern technological and ethical dilemmas through the lens of Greek philosophical thinking.",
      category: "Competition"
    },
    {
      icon: <Rocket className="h-8 w-8 text-light-blue" />,
      title: "Icarus Challenge",
      description: "A hackathon where teams build solutions that push boundaries while learning from the myth of flying too close to the sun.",
      category: "Hackathon"
    },
    {
      icon: <Award className="h-8 w-8 text-light-blue" />,
      title: "Herculean Tasks",
      description: "A series of technical challenges designed to test your skills and perseverance, inspired by the twelve labors of Hercules.",
      category: "Competition"
    },
    {
      icon: <Cpu className="h-8 w-8 text-light-blue" />,
      title: "Prometheus Tech Expo",
      description: "Showcase of futuristic technologies and innovations that bring 'fire' (knowledge) to humanity, just as Prometheus did.",
      category: "Exhibition"
    },
    {
      icon: <Palette className="h-8 w-8 text-light-blue" />,
      title: "Apollo's Creative Arena",
      description: "Express your creativity through digital art, music, and storytelling competitions inspired by the god of arts.",
      category: "Creative"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-[linear-gradient(135deg,#bf8849,#f9b622,#984006,#f2be56,#dab448)] backdrop-blur-[50px] shadow-[0px_0px_60px_rgba(255,190,90,0.7)] rounded-xl border border-[rgba(255,190,90,0.4)]">
      <div className="absolute inset-0 marble-texture opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-cinzel font-bold mb-4 text-[#1A1A1A] px-4 py-2 relative inline-block [text-shadow:0px_0px_10px_rgba(255,215,0,0.8), 2px_2px_4px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Mythical Events
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
            Participate in our carefully crafted events that blend ancient mythology with modern challenges. Each event is designed to inspire creativity, foster collaboration, and push the boundaries of innovation.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {events.map((event, index) => (
            <motion.div 
              key={index}
              className="bg-deep-blue/70 border border-gold/30 p-6 rounded-lg hover:border-gold transition-all"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)',
                transition: { duration: 0.3 } 
              }}
            >
              <span className="inline-block px-3 py-1 bg-light-blue/10 text-light-blue text-xs rounded-full mb-4">
                {event.category}
              </span>
              <div className="flex items-center mb-4">
                <div className="bg-deep-blue/80 p-3 rounded-full mr-4">
                  {event.icon}
                </div>
                <h3 className="text-xl font-cinzel font-bold text-gold">{event.title}</h3>
              </div>
              <p className="text-gray-300">{event.description}</p>
              <motion.button 
                className="mt-6 px-4 py-2 border border-light-blue text-light-blue text-sm rounded hover:bg-light-blue/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;