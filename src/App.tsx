import React, { useEffect, useState, useRef } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import RegistrationForm from "./components/RegistrationForm";
import EventsPage from "./components/EventsPage";
import EventCategory from "./components/EventCategory";
import EventDetails from "./components/EventDetails";
import Preloader from "./components/Preloader";
import MusicPlayer from "./components/MusicPlayer";
import song from "../public/audio/greek-mythology-theme.mp3";

// Add responsive viewport styles globally
import { Helmet } from "react-helmet";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);
  const [musicPreferenceSet, setMusicPreferenceSet] = useState(false);
  
  // Start preloader only after music preference is set
  useEffect(() => {
    if (musicPreferenceSet) {
      setShowPreloader(true);
      const preloaderTimeout = setTimeout(() => {
        setLoading(false);
      }, 5000); // Preloader duration
      return () => clearTimeout(preloaderTimeout);
    }
  }, [musicPreferenceSet]);
  
  useEffect(() => {
    // Scroll to section when navigating
    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);
  
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".scroll-trigger").forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          element.classList.add("visible");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Add a resize handler for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      // Force update on resize to ensure responsive layouts adjust
      document.documentElement.style.setProperty(
        '--vh', 
        `${window.innerHeight * 0.01}px`
      );
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on first load
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleMusicPreferenceSet = () => {
    console.log("Music preference was set!");
    setMusicPreferenceSet(true);
  };
  
  // Adjust music dialog position for mobile
  const isMobile = window.innerWidth <= 768;
  
  return (
    <div className="min-h-screen bg-deep-blue">
      {/* Add viewport meta tags */}
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <style>
          {`
            @media (max-width: 768px) {
              .music-dialog {
                padding: 20px;
              }
              .music-dialog-header h3 {
                font-size: 1.8rem !important;
              }
              .music-buttons {
                flex-direction: column;
              }
            }
            
            /* Use CSS variables for full viewport height */
            :root {
              --vh: 1vh;
            }
            
            .min-h-screen {
              min-height: 100vh; /* fallback */
              min-height: calc(var(--vh, 1vh) * 100);
            }
          `}
        </style>
      </Helmet>
      
      {/* Music Player component - always render it first */}
      <MusicPlayer
        audioPath={song}
        onMusicPreferenceSet={handleMusicPreferenceSet}
        isMobile={isMobile}
      />
      
      {showPreloader && loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : musicPreferenceSet && !loading ? (
        <div className="responsive-container">
          <Navbar />
          <main className="responsive-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Events />
                    <Schedule />
                    <About />
                    <Sponsors />
                  </>
                }
              />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:category" element={<EventCategory />} />
              <Route path="/event/:eventTitle" element={<EventDetails />} />
              <Route path="/register" element={<RegistrationForm />} />
            </Routes>
          </main>
          {location.pathname === "/" && <Footer />}
        </div>
      ) : null}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;