import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Rocket, Gamepad2, Trophy, Cpu } from 'lucide-react';

const EventsSelection: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'technical',
      title: 'Technical',
      icon: <Rocket className="w-12 h-12 text-yellow-300" />,
      description: 'Showcase your technical prowess'
    },
    {
      id: 'non-technical',
      title: 'Non-Technical',
      icon: <Trophy className="w-12 h-12 text-yellow-400" />,
      description: 'Explore creative and cultural events'
    },
    {
      id: 'gaming',
      title: 'Gaming',
      icon: <Gamepad2 className="w-12 h-12 text-yellow-300" />,
      description: 'Compete in thrilling gaming tournaments'
    },
    {
      id: 'workshops',
      title: 'Workshops',
      icon: <Cpu className="w-12 h-12 text-yellow-300" />,
      description: 'Learn from industry experts'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-yellow-400 to-yellow-200 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-4 text-yellow-300">
            Choose Your Path
          </h1>
          <p className="text-xl text-gray-100">
            Embark on a journey through our diverse range of events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => navigate(`/events/${category.id}`)}
              className="cursor-pointer group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg border border-yellow-400/20 transition-all duration-300 hover:border-yellow-300/40 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-400/10"
            >
              <div className="p-8">
                <div className="flex items-center gap-6 mb-4">
                  <div className="p-3 rounded-full bg-yellow-400/30 backdrop-blur-sm">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-cinzel font-bold text-white">
                    {category.title}
                  </h2>
                </div>
                <p className="text-gray-100 text-lg">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSelection;
