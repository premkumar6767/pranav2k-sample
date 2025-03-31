import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../public/logo.png"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    // If on home page and href includes a hash, scroll to section
    if (location.pathname === "/" && href.includes("#")) {
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
    // If not on home page, navigate to home and then scroll
    else if (href.includes("#")) {
      navigate("/", { state: { scrollTo: href.split("#")[1] } });
      setIsOpen(false);
    }
    // Regular navigation
    else {
      navigate(href);
      setIsOpen(false);
    }
  };

  // Add useEffect to handle navigation state
  useEffect(() => {
    if (location.pathname === "/" && location.state) {
      const scrollTo = (location.state as { scrollTo?: string }).scrollTo;
      if (scrollTo) {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        // Clear the state to prevent repeated scrolling
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Events", href: "/events" },
    { name: "Schedule", href: "/#schedule" },
    { name: "Sponsors", href: "/#sponsors" },
    { name: "Register", href: "/register" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep-blue/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="/"
          className="flex items-center gap-2 text-gold font-cinzel text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={logo}
            alt="PRANAV2K25 Logo"
            className="h-8 w-8 mx-2"
          />
          <span>PRANAV2K25</span>
        </motion.a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                onClick={() => handleNavigation(link.href)}
                className={`cursor-pointer font-cinzel text-sm hover:text-gold transition-colors ${
                  link.name === "Register"
                    ? "px-4 py-2 border border-gold text-gold golden-glow hover:bg-gold/10 rounded"
                    : "text-white"
                } ${
                  location.hash === link.href.split("#")[1]
                    ? "text-gold"
                    : location.pathname === link.href
                    ? "text-gold"
                    : ""
                }`}
              >
                {link.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-deep-blue/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                  onClick={() => handleNavigation(link.href)}
                  className={`cursor-pointer font-cinzel text-center py-2 ${
                    link.name === "Register"
                      ? "text-gold golden-glow"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {link.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;