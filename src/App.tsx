import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import Register from "./components/Register";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import EventsPage from "./components/EventsPage";
import EventCategory from "./components/EventCategory";
import EventDetails from "./components/EventDetails";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to section if state is passed during navigation
    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Clear the navigation state to prevent repeated scrolling
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTriggers = document.querySelectorAll(".scroll-trigger");
      
      scrollTriggers.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure each section has an id for smooth scrolling
  return (
    <div className="min-h-screen bg-deep-blue">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Hero id="hero" />
              <About id="about" />
              <Events id="events" />
              <Sponsors id="sponsors" />
              <Schedule id="schedule" />
              <Register id="register" />
            </>
          }
        />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:category" element={<EventCategory />} />
        <Route path="/event/:eventTitle" element={<EventDetails />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
      
      {/* Show Footer only on the Home Page */}
      {location.pathname === "/" && <Footer />}
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