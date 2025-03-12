import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const Schedule: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scheduleData = [
    {
      day: "Day 1",
      date: "March 15, 2025",
      events: [
        { time: "09:00 AM", title: "Opening Ceremony", location: "Zeus Hall" },
        { time: "10:30 AM", title: "Keynote: The Modern Prometheus", location: "Zeus Hall" },
        { time: "12:00 PM", title: "Lunch Break", location: "Olympus Dining" },
        { time: "01:30 PM", title: "Athena's Workshop: Session 1", location: "Athena Room" },
        { time: "03:30 PM", title: "Olympian Debates: Round 1", location: "Apollo Theater" },
        { time: "05:30 PM", title: "Networking Reception", location: "Dionysus Garden" }
      ]
    },
    {
      day: "Day 2",
      date: "March 16, 2025",
      events: [
        { time: "09:00 AM", title: "Icarus Challenge Kickoff", location: "Daedalus Lab" },
        { time: "11:00 AM", title: "Panel: Mythology in Modern Tech", location: "Hermes Hall" },
        { time: "12:30 PM", title: "Lunch Break", location: "Olympus Dining" },
        { time: "02:00 PM", title: "Herculean Tasks: Preliminary Round", location: "Hercules Arena" },
        { time: "04:00 PM", title: "Apollo's Creative Arena: Showcase", location: "Apollo Theater" },
        { time: "06:00 PM", title: "Gala Dinner", location: "Mount Olympus Ballroom" }
      ]
    },
    {
      day: "Day 3",
      date: "March 17, 2025",
      events: [
        { time: "09:00 AM", title: "Prometheus Tech Expo Opens", location: "Prometheus Hall" },
        { time: "10:30 AM", title: "Olympian Debates: Finals", location: "Zeus Hall" },
        { time: "12:00 PM", title: "Lunch Break", location: "Olympus Dining" },
        { time: "01:30 PM", title: "Herculean Tasks: Final Round", location: "Hercules Arena" },
        { time: "03:30 PM", title: "Icarus Challenge: Presentations", location: "Daedalus Lab" },
        { time: "05:30 PM", title: "Closing Ceremony & Awards", location: "Zeus Hall" }
      ]
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="schedule" className="py-20 bg-deep-blue relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-cinzel font-bold mb-4 text-gold"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Divine Timeline
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
            Mark your calendar for three days of mythical innovation and collaboration. Our carefully crafted schedule ensures a perfect balance of learning, competition, and networking.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8" ref={ref}>
          {scheduleData.map((day, dayIndex) => (
            <motion.div 
              key={dayIndex}
              className="lg:w-1/3 bg-deep-blue/50 border border-gold/30 rounded-lg overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: dayIndex * 0.2 }}
            >
              <div className="bg-gold/20 p-6">
                <h3 className="text-2xl font-cinzel font-bold text-gold">{day.day}</h3>
                <div className="flex items-center mt-2 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{day.date}</span>
                </div>
              </div>
              <div className="p-6">
                {day.events.map((event, eventIndex) => (
                  <motion.div 
                    key={eventIndex}
                    className={`mb-6 ${eventIndex !== day.events.length - 1 ? 'border-b border-gold/20 pb-6' : ''}`}
                    variants={itemVariants}
                  >
                    <div className="flex items-center mb-2">
                      <Clock className="h-4 w-4 text-light-blue mr-2" />
                      <span className="text-light-blue font-medium">{event.time}</span>
                    </div>
                    <h4 className="text-lg font-cinzel font-bold text-white mb-1">{event.title}</h4>
                    <p className="text-gray-400 text-sm">{event.location}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;