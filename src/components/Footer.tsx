import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-deep-blue/95 border-t border-gold/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Flame className="h-8 w-8 text-light-blue phoenix-glow" />
              <span className="text-gold font-cinzel text-2xl font-bold">PRANAV2K25</span>
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A collegiate symposium blending Greek mythology with futuristic innovation, inspiring the next generation of thinkers and creators.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#" className="text-gray-400 hover:text-light-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-light-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-light-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-light-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-cinzel font-bold text-gold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <li><a href="#home" className="text-gray-300 hover:text-light-blue transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-light-blue transition-colors">About</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-light-blue transition-colors">Events</a></li>
              <li><a href="#schedule" className="text-gray-300 hover:text-light-blue transition-colors">Schedule</a></li>
              <li><a href="#speakers" className="text-gray-300 hover:text-light-blue transition-colors">Speakers</a></li>
              <li><a href="#register" className="text-gray-300 hover:text-light-blue transition-colors">Register</a></li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-cinzel font-bold text-gold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Contact Us
            </motion.h3>
            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-light-blue mr-3 mt-0.5" />
                <span className="text-gray-300">info@pranav2k25.edu</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-light-blue mr-3 mt-0.5" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-light-blue mr-3 mt-0.5" />
                <span className="text-gray-300">Apollo Campus, Olympus Building, Tech Park, Bangalore</span>
              </li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-cinzel font-bold text-gold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Subscribe
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Stay updated with the latest news and announcements about PRANAV2K25.
            </motion.p>
            <motion.form 
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-deep-blue/50 border border-gold/30 text-white px-4 py-2 rounded-l-md focus:outline-none focus:border-light-blue w-full"
              />
              <button 
                type="submit" 
                className="bg-gold text-deep-blue px-4 py-2 rounded-r-md font-medium hover:bg-light-blue transition-colors"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-gold/20 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p>© {currentYear} PRANAV2K25. All rights reserved. Designed with the wisdom of Athena and the creativity of Apollo.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;