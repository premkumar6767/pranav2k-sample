import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../index.css";
import { Sparkles, Zap, Compass, BookOpen, Flame } from "lucide-react";

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const features = [
    { icon: <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-light-blue" />, title: "Divine Inspiration", description: "Drawing wisdom from ancient Greek mythology to inspire modern innovation and creative thinking." },
    { icon: <Zap className="h-6 w-6 md:h-8 md:w-8 text-light-blue" />, title: "Olympian Challenges", description: "Participate in competitive events designed to test your knowledge, creativity, and problem-solving skills." },
    { icon: <Compass className="h-6 w-6 md:h-8 md:w-8 text-light-blue" />, title: "Heroic Journey", description: "Embark on a transformative experience that bridges the gap between classical wisdom and future technologies." },
    { icon: <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-light-blue" />, title: "Mythical Knowledge", description: "Learn from industry experts and scholars who bring ancient myths into modern context with practical applications." },
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-cinzel font-bold mb-3 md:mb-4 text-gold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The Symposium
          </motion.h2>
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/30 border border-gold/50 p-5 md:p-6 rounded-lg hover:border-gold transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gold/20 p-3 rounded-full w-fit mb-3 md:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-cinzel font-bold mb-2 md:mb-3 text-gold">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 md:mt-20 bg-black/40 border border-light-blue/20 p-6 md:p-8 rounded-lg relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl md:text-2xl font-cinzel font-bold mb-3 md:mb-4 text-light-blue">
                The Phoenix Symbol
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-3">
                The phoenix represents our symposium's philosophy: rebirth, renewal, and transformation. Just as this mythical bird rises from its ashes, PRANAV2K25 encourages participants to emerge with renewed knowledge and perspective.
              </p>
              <p className="text-sm md:text-base text-gray-300">
                In Greek mythology, the phoenix symbolizes immortality and regeneration. Our symposium aims to create an eternal cycle of knowledge sharing and innovation.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                animate={{ y: [0, -15, 0], rotateZ: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <Flame className="h-32 w-32 md:h-48 md:w-48 text-light-blue" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Flame className="h-32 w-32 md:h-48 md:w-48 text-gold" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;