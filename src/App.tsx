import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import sponsors from './components/Sponsors';
import Register from "./components/Register";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import EventsPage from "./components/EventsPage";
import EventCategory from "./components/EventCategory";
import EventDetails from "./components/EventDetails";
import Sponsors from "./components/Sponsors";

function AppContent() {
  const location = useLocation(); // Hook to get current route

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-deep-blue">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Events />
              <Sponsors />
              <Schedule />
              <Register />
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
