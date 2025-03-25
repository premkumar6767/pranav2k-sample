import React, { useEffect } from "react";
import EventCard from "./EventCard";

const EventsPage: React.FC = () => {
  // 🏛 Scroll to Top on Mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* 🔱 Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-lg" 
        style={{ backgroundImage: "url('/background.jpg')" }} 
      ></div>

      {/* 🏛 Overlay for a Subtle Dim Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* ⚡ Heading Text - Centered */}
      <h1 className="text-yellow-500 text-5xl font-extrabold font-[Cinzel] tracking-wide mb-8 relative">
        Choose Your Path
      </h1>

      {/* 🔱 Event Cards - Centered */}
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center relative">
        <EventCard 
          title="Technical Events" 
          description="Innovate, Code, and Build! Participate in exciting tech competitions." 
          link="/events/technical" 
        />
        <EventCard 
          title="Non-Technical Events" 
          description="Fun-filled activities, brain teasers, and engaging challenges await you!" 
          link="/events/non-technical" 
        />
      </div>

      {/* 📜 Online Events - Wide Card, Below */}
      <div className="mt-10 relative">
        <EventCard 
          title="Online Events" 
          description="Compete from anywhere! Join gaming, quizzes, and more online contests." 
          link="/events/online" 
          isWide={true} 
        />
      </div>
    </div>
  );
};

export default EventsPage;
