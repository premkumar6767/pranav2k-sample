import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, Wifi, Zap } from "lucide-react";
import Background1 from "../../public/Background1.jpg"; // Ensure correct path
import HodImage from "../images/hod-ece.png"; // Update with your actual HOD image
import "./About.css"; // Import external CSS for fire effects

interface AboutProps {
  backgroundImage?: string;
}

const About: React.FC<AboutProps> = ({ backgroundImage = Background1 }) => {
  const eceHighlights = [
    {
      title: "Communication Systems",
      description: "Cutting-edge research and training in wireless communications, signal processing, and network infrastructure development.",
      icon: <Wifi className="w-10 h-10 text-blue-400" />,
    },
    {
      title: "VLSI Design",
      description: "Advanced integrated circuit design, semiconductor physics, and electronic system architecture for next-generation technology.",
      icon: <Cpu className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Embedded Systems",
      description: "Innovative approaches to IoT, real-time computing, microcontroller programming, and hardware-software integration.",
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
    },
  ];

  const achievements = [
    "Best Paper Award at IEEE International Conference 2024",
    "₹50 Lakh research grant for IoT Innovation Lab",
    "Industry partnership with leading semiconductor companies",
    "100% placement record for the past three consecutive years"
  ];
  const handleCardClick = () => {
    const navigate = useNavigate();
    
    // Navigate to the event detail page using the slug
    navigate(`/event/technical`);
  };

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-[#0f2027] to-[#203a43] text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔥 Fire Sparks Layer */}
      <div className="fire-sparks"></div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-16">
        {/* Department Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="glowing-title">Electronics & Communication Engineering</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Pioneering the future of electronic systems and communication technologies through
            innovation, research, and industry-aligned education.
          </p>
        </motion.div>

        {/* Department Head Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-16 bg-gradient-to-br from-[#2c3e50]/80 to-[#34495e]/80 rounded-2xl border-2 border-white/20 p-8 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400/50">
            <img
              src={HodImage}
              alt="HOD of ECE Department"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Dr. Sanjay Kumar</h3>
            <div className="text-sm text-yellow-200 mb-3">Head of Department</div>
            <p className="text-gray-200">
              With over 15 years of research experience in VLSI design and communication systems,
              Dr. Kumar leads the department's vision to create innovative engineers ready for the
              technological challenges of tomorrow.
            </p>
          </div>
        </motion.div>

        {/* ECE Specializations Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {eceHighlights.map((specialization, index) => (
            <motion.div
              key={specialization.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="relative overflow-hidden rounded-2xl border-2 border-white/20 bg-gradient-to-br from-[#2c3e50]/70 to-[#34495e]/70 transform transition-all hover:scale-105 shadow-2xl p-6"
            >
              {/* Icon */}
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                {specialization.icon}
              </div>

              {/* Details */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {specialization.title}
              </h3>
              <p className="text-gray-200">{specialization.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Department Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16 bg-gradient-to-br from-[#2c3e50] to-[#34495e] rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Department Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-200">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PRANAV2K25 ECE Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-br from-[#1a2238] to-[#0f1423] rounded-3xl p-12 text-center"
        >
          <h2 className="glowing-title">PRANAV2K25: ECE Edition</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us for specialized workshops, technical competitions, and industry talks focused on
            the latest advancements in electronics and communication engineering.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-yellow-300 text-xl font-bold mb-2">Circuit Design Challenge</h3>
              <p className="text-gray-300">Design innovative electronic circuits to solve real-world problems</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-yellow-300 text-xl font-bold mb-2">IoT Hackathon</h3>
              <p className="text-gray-300">Build connected solutions leveraging cutting-edge IoT technologies</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-yellow-300 text-xl font-bold mb-2">Tech Paper Presentation</h3>
              <p className="text-gray-300">Present your research in communication systems and signal processing</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-12 rounded-full text-xl hover:shadow-2xl transition-all" 
            onClick={() => handleCardClick()}
          >
            Register for ECE Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;