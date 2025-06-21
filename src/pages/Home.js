import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section - Main Landing */}
      <Hero />
      
      {/* About Me Section */}
      <AboutMe />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Contact Section */}
      <ContactSection />
    </motion.div>
  );
};

export default Home;