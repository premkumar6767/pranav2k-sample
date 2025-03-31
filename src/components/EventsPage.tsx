import React, { useState, useEffect } from "react";
import greek from "../../public/Greek-Owl-background.jpeg";

interface Event {
  id: string;
  title: string;
  description: string;
  date?: string;
  symbol?: string;
}

interface EventTreeProps {
  events: Event[];
  backgroundImageUrl: string;
}

const EventTree: React.FC<EventTreeProps> = ({ events, backgroundImageUrl }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [screenSize, setScreenSize] = useState<"desktop" | "tablet" | "mobile">("desktop");

  // Detect screen size
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth > 1024) {
        setScreenSize("desktop");
      } else if (window.innerWidth > 768) {
        setScreenSize("tablet");
      } else {
        setScreenSize("mobile");
      }
    };

    updateScreenSize(); // Set initial size
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Responsive positions based on screen size
  const positions = {
    desktop: [
      { top: "37vh", left: "9vw" }, // Top node
      { top: "55.5vh", left: "2.5vw" },
      { top: "73vh", left: "3vw" },
      { top: "43vh", left: "26vw" },
      { top: "56vh", left: "27vw" },
      { top: "72.5vh", left: "27vw" },
      { top: "37.9vh", left: "84.5vw" }, // Top node
      { top: "55.5vh", left: "63.8vw" },
      { top: "43vh", left: "45.5vw" },
      { top: "43vh", left: "65vw" },
      { top: "72.5vh", left: "63.8vw" },
      { top: "55.6vh", left: "88.5vw" },
      { top: "73vh", left: "88.5vw" },
    ],
    tablet: [
      { top: "37vh", left: "9vw" }, // Top node
      { top: "55.5vh", left: "2.5vw" },
      { top: "73vh", left: "3vw" },
      { top: "43vh", left: "26vw" },
      { top: "56vh", left: "27vw" },
      { top: "72.5vh", left: "27vw" },
      { top: "37.9vh", left: "84.5vw" }, // Top node
      { top: "55.5vh", left: "63.8vw" },
      { top: "43vh", left: "45.5vw" },
      { top: "43vh", left: "65vw" },
      { top: "72.5vh", left: "63.8vw" },
      { top: "55.6vh", left: "88.5vw" },
      { top: "73vh", left: "10vw" },
    ],
    mobile: [
      { top: "37vh", left: "9vw" }, // Top node
      { top: "55.5vh", left: "2.5vw" },
      { top: "73vh", left: "3vw" },
      { top: "43vh", left: "26vw" },
      { top: "56vh", left: "27vw" },
      { top: "72.5vh", left: "27vw" },
      { top: "37.9vh", left: "84.5vw" }, // Top node
      { top: "55.5vh", left: "63.8vw" },
      { top: "43vh", left: "45.5vw" },
      { top: "43vh", left: "65vw" },
      { top: "72.5vh", left: "63.8vw" },
      { top: "55.6vh", left: "88.5vw" },
      { top: "73vh", left: "88.5vw" },
    ],
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }} />

      {/* Event nodes */}
      {positions[screenSize].map((position, index) => {
        if (index >= events.length) return null;
        return (
          <div
            key={`node-${index}`}
            className="absolute z-10 rounded-full cursor-pointer transform transition-all duration-500 hover:scale-110 flex items-center justify-center"
            style={{
              top: position.top,
              left: position.left,
              width: "50px",
              height: "50px",
              backgroundColor: "rgba(255, 215, 0, 0.2)",
              border: "2px solid rgba(255, 215, 0, 0.8)",
              boxShadow: "0 0 15px 2px rgba(255, 215, 0, 0.5)",
            }}
            onClick={() => setSelectedEvent(events[index])}
          >
            <div className="text-lg font-bold text-white opacity-90">{events[index].symbol || "⚡"}</div>
          </div>
        );
      })}

      {/* Event detail popup */}
      {selectedEvent && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-gray-900 p-6 rounded-lg border-2 border-yellow-500 text-white max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-yellow-400">{selectedEvent.title}</h2>
              <button onClick={() => setSelectedEvent(null)} className="text-gray-400 hover:text-white text-xl">×</button>
            </div>
            {selectedEvent.date && <p className="text-sm text-yellow-300 mb-2">{selectedEvent.date}</p>}
            <p className="text-gray-200">{selectedEvent.description}</p>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-yellow-700 hover:bg-yellow-600 text-white rounded" onClick={() => setSelectedEvent(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Example usage
const GreekEventsPage: React.FC = () => {
  const events = [
    { id: "1", title: "Oracle of Delphi", description: "Consult the Oracle for divine wisdom.", date: "March 15, 2025", symbol: "Δ" },
    { id: "2", title: "Olympian Festival", description: "Athletic competitions honoring Zeus.", date: "April 5, 2025", symbol: "Ω" },
    { id: "3", title: "Symposium of Athena", description: "Intellectual discourse dedicated to Athena.", date: "April 12, 2025", symbol: "Φ" },
    { id: "4", title: "Poseidon's Regatta", description: "Nautical event honoring Poseidon.", date: "April 18, 2025", symbol: "Π" },
    { id: "5", title: "Mysteries of Eleusis", description: "Sacred rites of Demeter and Persephone.", date: "April 25, 2025", symbol: "Ψ" },
    { id: "6", title: "Theatre of Dionysus", description: "Dramatic performances honoring Dionysus.", date: "May 2, 2025", symbol: "Θ" },
    { id: "7", title: "Titanomachy Remembrance", description: "Commemoration of the war between Titans and Olympians.", date: "May 10, 2025", symbol: "Σ" },
    { id: "8", title: "Elysian Fields Celebration", description: "A festival for heroes resting in Elysium.", date: "May 18, 2025", symbol: "Λ" },
    { id: "9", title: "Herculean Trials", description: "Re-enactment of the Twelve Labors of Hercules.", date: "May 25, 2025", symbol: "Ξ" },
    { id: "10", title: "Aphrodite’s Day", description: "Celebrating love and beauty with Aphrodite.", date: "June 1, 2025", symbol: "Γ" },
    { id: "11", title: "Hermes' Messenger Race", description: "A footrace in honor of Hermes, the swift messenger.", date: "June 8, 2025", symbol: "Η" },
    { id: "12", title: "Hades’ Underworld Ritual", description: "Rituals for safe passage in the underworld.", date: "June 15, 2025", symbol: "Χ" },
    { id: "13", title: "Apollo's Sun Chariot Parade", description: "A grand festival celebrating Apollo’s chariot ride.", date: "June 22, 2025", symbol: "Α" },
  ];

  return (
    <div className="w-full h-screen">
      <EventTree events={events} backgroundImageUrl={greek} />
    </div>
  );
};

export default GreekEventsPage;
