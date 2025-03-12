import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Register from "./components/Register";
import Footer from "./components/Footer";


function App() {
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
    <div className="relative overflow-visible min-h-screen ">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Schedule />
      <Speakers />
      <Register />
      <Footer />
      
    
    </div>
  );
}

export default App;
