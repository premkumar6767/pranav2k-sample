import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code, Cpu, Gamepad2, Music, Notebook as Robot, Puzzle, FileCode, Film, Bone as Drone, Trophy, Map, Joystick, Pencil, Presentation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Events: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('technical');

  const categories = [
    { id: 'technical', name: 'Technical Events' },
    { id: 'nonTechnical', name: 'Non-Technical Events' },
    { id: 'online', name: 'Online Events' },
    { id: 'workshop', name: 'Workshop' }
  ];

  const events = {
    technical: [
      {
        iconName: 'Presentation',
        title: "Paper Presentation",
        description: "Present your innovative research papers and ideas in front of expert panels.",
        timing: "Day 1 - 10:00 AM to 1:00 PM",
        category: "Technical",
        price: "₹300"
      },
      {
        iconName: 'Cpu',
        title: "Project Expo",
        description: "Showcase your groundbreaking projects and innovations.",
        timing: "Day 1 - 2:00 PM to 5:00 PM",
        category: "Technical",
        price: "₹400"
      },
      {
        iconName: 'Code',
        title: "Wired Wonders",
        description: "Test your hardware and circuit design skills.",
        timing: "Day 2 - 10:00 AM to 12:00 PM",
        category: "Technical",
        price: "₹250"
      },
      {
        iconName: 'Puzzle',
        title: "Role and Dice",
        description: "Strategic problem-solving competition with a twist.",
        timing: "Day 2 - 2:00 PM to 4:00 PM",
        category: "Technical",
        price: "₹200"
      },
      {
        iconName: 'Robot',
        title: "Robot Grace",
        description: "Robotics competition testing automation and control.",
        timing: "Day 2 - 11:00 AM to 2:00 PM",
        category: "Technical",
        price: "₹500"
      },
      {
        iconName: 'FileCode',
        title: "Designed to Dev",
        description: "Web and app development challenge.",
        timing: "Day 3 - 9:00 AM to 12:00 PM",
        category: "Technical",
        price: "₹300"
      },
      {
        iconName: 'Code',
        title: "Reverse Coding",
        description: "Decode and solve programming challenges backwards.",
        timing: "Day 3 - 2:00 PM to 4:00 PM",
        category: "Technical",
        price: "₹250"
      }
    ],
    nonTechnical: [
      {
        iconName: 'Gamepad2',
        title: "Ojingeo Game",
        description: "Strategic survival game inspired by popular series.",
        timing: "Day 1 - 11:00 AM to 1:00 PM",
        category: "Non-Technical",
        price: "₹200"
      },
      {
        iconName: 'Trophy',
        title: "Anime Quiz",
        description: "Test your knowledge of anime and manga.",
        timing: "Day 1 - 3:00 PM to 5:00 PM",
        category: "Non-Technical",
        price: "₹150"
      },
      {
        iconName: 'Award',
        title: "Sports Buzz",
        description: "Sports-themed challenges and competitions.",
        timing: "Day 2 - 10:00 AM to 12:00 PM",
        category: "Non-Technical",
        price: "₹200"
      },
      {
        iconName: 'Music',
        title: "Aural Bliss",
        description: "Music and sound recognition competition.",
        timing: "Day 2 - 2:00 PM to 4:00 PM",
        category: "Non-Technical",
        price: "₹150"
      },
      {
        iconName: 'Map',
        title: "Treasure Hunt",
        description: "Campus-wide treasure hunt with cryptic clues.",
        timing: "Day 3 - 10:00 AM to 1:00 PM",
        category: "Non-Technical",
        price: "₹250"
      },
      {
        iconName: 'Cpu',
        title: "Electro Field",
        description: "Electronics-themed fun challenges.",
        timing: "Day 3 - 2:00 PM to 4:00 PM",
        category: "Non-Technical",
        price: "₹200"
      }
    ],
    online: [
      {
        iconName: 'Film',
        title: "Short Film",
        description: "Create and submit your short films.",
        timing: "Submit by Day 1 - 5:00 PM",
        category: "Online",
        price: "₹300"
      },
      {
        iconName: 'Joystick',
        title: "E-Sports",
        description: "Online gaming tournament.",
        timing: "Day 2 - Online",
        category: "Online",
        price: "₹200"
      }
    ],
    workshop: [
      {
        iconName: 'Drone',
        title: "Drone Workshop",
        description: "Learn about drone technology and applications.",
        timing: "Day 1 - Full Day",
        category: "Workshop",
        price: "₹1000"
      }
    ]
  };

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Presentation: <Presentation className="h-8 w-8 text-light-blue" />,
      Cpu: <Cpu className="h-8 w-8 text-light-blue" />,
      Code: <Code className="h-8 w-8 text-light-blue" />,
      Puzzle: <Puzzle className="h-8 w-8 text-light-blue" />,
      Robot: <Robot className="h-8 w-8 text-light-blue" />,
      FileCode: <FileCode className="h-8 w-8 text-light-blue" />,
      Gamepad2: <Gamepad2 className="h-8 w-8 text-light-blue" />,
      Trophy: <Trophy className="h-8 w-8 text-light-blue" />,
      Award: <Award className="h-8 w-8 text-light-blue" />,
      Music: <Music className="h-8 w-8 text-light-blue" />,
      Map: <Map className="h-8 w-8 text-light-blue" />,
      Film: <Film className="h-8 w-8 text-light-blue" />,
      Joystick: <Joystick className="h-8 w-8 text-light-blue" />,
      Drone: <Drone className="h-8 w-8 text-light-blue" />
    };
    return icons[iconName];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const handleRegister = (event: any) => {
    // Create a new object without the React icon element
    const eventData = {
      title: event.title,
      description: event.description,
      timing: event.timing,
      category: event.category,
      price: event.price
    };
    navigate('/register', { state: { event: eventData } });
  };

  return (
    <section id="events" className="py-20 bg-deep-blue/90 relative">
      <div className="absolute inset-0 marble-texture opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-cinzel font-bold mb-4 text-gold"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            PRANAV2K25 Events
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
            Explore our diverse range of events designed to challenge your skills and creativity.
          </motion.p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gold text-deep-blue'
                  : 'border border-gold text-gold hover:bg-gold/10'
              }`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {events[selectedCategory as keyof typeof events].map((event, index) => (
            <motion.div 
              key={index}
              className="bg-deep-blue/70 border border-gold/30 p-6 rounded-lg hover:border-gold transition-all"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)',
                transition: { duration: 0.3 } 
              }}
            >
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs rounded-full mb-4">
                {event.category}
              </span>
              <div className="flex items-center mb-4">
                <div className="bg-deep-blue/80 p-3 rounded-full mr-4">
                  {getIconComponent(event.iconName)}
                </div>
                <h3 className="text-xl font-cinzel font-bold text-gold">{event.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <div className="text-light-blue mb-4">
                <p className="text-sm">{event.timing}</p>
                <p className="text-lg font-bold mt-2">{event.price}</p>
              </div>
              <motion.button 
                className="w-full px-4 py-2 bg-gold text-deep-blue font-bold rounded hover:bg-gold/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleRegister(event)}
              >
                Register Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;