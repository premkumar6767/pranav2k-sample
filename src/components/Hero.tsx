import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
   

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Inside Video */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold mb-4 text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            PRANAV2K25
          </motion.h1>

          <motion.h2
            className="text-base sm:text-lg md:text-2xl lg:text-3xl font-cinzel mb-6 text-white max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Symposium of Greek Mythology & Modern Innovation
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Where ancient wisdom meets futuristic vision. Join us for an extraordinary journey through time.
          </motion.p>

          {/* Centered Buttons with Proper Width */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#register"
              className="w-40 sm:w-48 px-6 py-3 bg-light-blue text-deep-blue font-bold rounded-md hover:bg-light-blue/90 transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
            <motion.a
              href="#about"
              className="w-40 sm:w-48 px-6 py-3 border border-gold text-gold font-bold rounded-md hover:bg-gold/10 transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </section>

  
    </>
  );
};

export default Hero;
