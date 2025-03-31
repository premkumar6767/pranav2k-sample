import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import "./About.css";

interface Event {
  title: string;
  time?: string;
  location?: string;
}

interface ScheduleDay {
  day: string;
  date: string;
  events: Event[];
}

const scheduleData: ScheduleDay[] = [
  {
    day: "Online Events",
    date: "APRIL 15, 2025",
    events: [
      { title: "MUSES REELS" },
      { title: "ELYSIAN BATTLES" },
    ]
  },
  {
    day: "Technical Events",
    date: "APRIL 16, 2025",
    events: [
      { time: "09:00 AM", title: "PAPER PRESENTATION", location: "ECE SEMINAR HALL" },
      { time: "11:00 AM", title: "HACKATHON", location: "DSP LAB" },
      { time: "12:30 PM", title: "WIRED WONDERS", location: "4A CLASSROOM" },
      { time: "01:00 PM", title: "ROBOT CRAZE", location: "4B CLASSROOM" },
      { time: "01:30 PM", title: "BYTE THE DICE", location: "3A CLASSROOM" },
      { time: "02:00 PM", title: "DESIGN 2 DEV", location: "3B CLASSROOM" },
      { time: "03:00 PM", title: "DECODEX", location: "2B CLASSROOM" }
    ]
  },
  {
    day: "Non-Technical Events",
    date: "APRIL 16, 2025",
    events: [
      { time: "09:00 AM", title: "OJINGEO", location: "4A CLASSROOM" },
      { time: "10:30 AM", title: "AURAL BLISS", location: "2A CLASSROOM" },
      { time: "12:00 PM", title: "SENPAI FANS", location: "3B CLASSROOM" },
      { time: "01:30 PM", title: "UNSCRAMBLE & HUNT", location: "CS LAB" },
      { time: "02:30 PM", title: "CRICBUZZ", location: "4B CLASSROOM" },
      { time: "03:30 PM", title: "ZEUS' SPARK", location: "3A CLASSROOM" }
    ]
  },
  {
    day: "WORKSHOP",
    date: "APRIL 16, 2025",
    events: [
      { time: "09:00 AM", title: "DRONE", location: "Embedded Lab" },
    ]
  },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-deep-blue relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-4 text-gold glowing-title">
            Θεϊκή Χρονογραμμή (Divine Timeline)
          </h2>
          <div className="h-1 w-24 mx-auto gold-gradient mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Mark your schedule for mythical innovation and collaboration. Our carefully crafted schedule ensures a perfect balance of learning, competition, and networking.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {scheduleData.map((day, dayIndex) => (
            <div 
              key={dayIndex}
              className="lg:w-1/3 bg-deep-blue/50 border border-gold/30 rounded-lg overflow-hidden"
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
                  <div 
                    key={eventIndex}
                    className={`mb-6 ${eventIndex !== day.events.length - 1 ? 'border-b border-gold/20 pb-6' : ''}`}
                  >
                    {event.time && (
                      <div className="flex items-center mb-2">
                        <Clock className="h-4 w-4 text-gold golden-glow mr-2" />
                        <span className="text-gold font-medium">{event.time}</span>
                      </div>
                    )}
                    <h4 className="text-lg font-cinzel font-bold text-white mb-1">{event.title}</h4>
                    {event.location && (
                      <p className="text-gray-400 text-sm">{event.location}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
