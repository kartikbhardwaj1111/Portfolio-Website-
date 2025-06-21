import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-neon-cyan/30'
          : 'bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm'
      }`}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 via-transparent to-neon-cyan/5 opacity-50" />
      
      <div className="container-custom relative">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo with enhanced styling */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {/* Logo background glow */}
              <div className="absolute inset-0 bg-neon-cyan/20 rounded-lg blur-xl group-hover:bg-neon-cyan/30 transition-all duration-300" />
              
              <div className="relative px-4 py-2 bg-gray-900/50 rounded-lg border border-neon-cyan/30 group-hover:border-neon-cyan/60 transition-all duration-300">
                <span className="text-xl font-mono font-bold bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
                  &lt;
                </span>
                <span className="text-xl font-mono font-bold text-white mx-1">
                  Kartik Bhardwaj
                </span>
                <span className="text-xl font-mono font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
                  /&gt;
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 bg-gray-900/30 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700/50">
              {navItems.map((item, index) => (
                <motion.div key={item.name} className="relative">
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-black bg-gradient-to-r from-neon-green to-neon-cyan shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                    style={{
                      boxShadow: location.pathname === item.path 
                        ? '0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)' 
                        : 'none'
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Hover effect */}
                    {location.pathname !== item.path && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                      />
                    )}
                  </Link>
                  
                  {/* Active indicator dot */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neon-cyan rounded-full shadow-lg"
                      style={{
                        boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff'
                      }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/50 focus:outline-none transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <HiX className="block h-5 w-5" />
                ) : (
                  <HiMenu className="block h-5 w-5" />
                )}
              </motion.div>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-neon-cyan/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-neon-cyan/20 rounded-b-2xl mx-4 mb-4"
            >
              <div className="px-6 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-black bg-gradient-to-r from-neon-green to-neon-cyan shadow-lg'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50 hover:pl-6'
                      }`}
                      style={{
                        boxShadow: location.pathname === item.path 
                          ? '0 0 20px rgba(0, 255, 136, 0.3)' 
                          : 'none'
                      }}
                    >
                      <div className="flex items-center">
                        <span>{item.name}</span>
                        {location.pathname === item.path && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 bg-black rounded-full"
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile menu decorative element */}
              <div className="h-1 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple rounded-b-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;