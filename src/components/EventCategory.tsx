import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import electroField from "../images/electro-field.webp";
import shortFilm from "../images/short-film.jpeg";
import eSports from "../images/e-sports.jpg";
import droneWorkshop from "../images/drone-workshop.webp";
import paperPresentation from "../images/Paper-presentaion.jpeg";
import wiredWonders from "../images/Wired-Wonders.jpeg";
import roleAndDice from "../images/Halt-the-dice.jpeg";
import designedToDev from "../images/Design2dev.jpeg";
import reverseCoding from "../images/Decodex.jpeg";
import ojingeoGame from "../images/Ojngeo.jpeg";
import animeQuiz from "../images/Senpai-fans.jpeg";
import auralBliss from "../images/Aural-Bliss.jpeg";
import treasureHunt from "../images/Treasure-hunt.jpeg";



const events = {
  technical: [
    { 
      title: "Paper Presentation", 
      image: paperPresentation,
      description: "Present your innovative research papers and ideas in front of expert panels.", 
      timing: "10:00 AM to 1:00 PM", 

    },
    { 
      title: "Wired Wonders", 
      image: wiredWonders,
      description: "Test your hardware and circuit design skills.", 
      timing: "10:00 AM to 12:00 PM", 

    },
    { 
      title: "Halt the Dice", 
      image: roleAndDice,
      description: "Strategic problem-solving competition with a twist.", 
      timing: "2:00 PM to 4:00 PM", 

    },
    
    { 
      title: "Design to Dev", 
      image: designedToDev,
      description: "Web and app development challenge.", 
      timing: "9:00 AM to 12:00 PM", 

    },
    { 
      title: "DecodeX", 
      image: reverseCoding,
      description: "Decode and solve programming challenges backwards.", 
      timing: "2:00 PM to 4:00 PM", 

    }
  ],
  nonTechnical: [
    { 
      title: "Ojingeo Game", 
      image: ojingeoGame,
      description: "Strategic survival game inspired by popular series.", 
      timing: "11:00 AM to 1:00 PM", 

    },
    { 
      title: "Anime Quiz", 
      image: animeQuiz,
      description: "Test your knowledge of anime and manga.", 
      timing: "3:00 PM to 5:00 PM", 

    },
  
    { 
      title: "Aural Bliss", 
      image: auralBliss,
      description: "Music and sound recognition competition.", 
      timing: "2:00 PM to 4:00 PM", 

    },
    { 
      title: "Treasure Hunt", 
      image: treasureHunt,
      description: "Campus-wide treasure hunt with cryptic clues.", 
      timing: "10:00 AM to 1:00 PM", 

    },
    { 
      title: "Electro Field", 
      image: electroField,
      description: "Electronics-themed fun challenges.", 
      timing: "2:00 PM to 4:00 PM", 

    }
  ],
  online: [
    { 
      title: "Short Film", 
      image: shortFilm,
      description: "Create and submit your short films.", 
      timing: "Submit by 5:00 PM", 

    },
    { 
      title: "E-Sports", 
      image: eSports,
      description: "Online gaming tournament.", 
      timing: "Online", 

    }
  ],
  workshop: [
    { 
      title: "Drone Workshop", 
      image: droneWorkshop,
      description: "Learn about drone technology and applications.", 
      timing: "Full Day", 

    }
  ]
};


const categoryMap: { [key: string]: keyof typeof events } = {
  technical: "technical",
  "non-technical": "nonTechnical",
  online: "online" ,
};

const EventCategory: React.FC = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const matchedCategory = categoryMap[category?.toLowerCase() || ""];

  const eventList = matchedCategory ? events[matchedCategory] : undefined;

  if (!eventList) {
    return (
      <div className="text-red-500 text-center mt-10 text-xl">
        Category not found
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed pt-20"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center text-gray-300 hover:text-white mb-8 group"
          onClick={() => navigate("/events")}
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Categories
        </motion.button>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400">
            {matchedCategory.toUpperCase()} EVENTS
          </h1>
        </motion.div>

        {/* 🎇 Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventList.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl cursor-pointer border-2 border-transparent transition-all duration-300 group-hover:border-white group-hover:shadow-lg"
              onClick={() =>
                navigate(`/event/${event.title.replace(/\s+/g, "-").toLowerCase()}`)
              }
            >
              {/* Event Image */}
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full h-80 object-cover transition-all duration-300 group-hover:brightness-75 group-hover:scale-105"
              />

              {/* Event Details */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <h2 className="text-2xl font-bold text-white">{event.title}</h2>
                <p className="text-gray-300 text-sm">{event.timing}</p>
              
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EventCategory;
