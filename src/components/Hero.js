import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaArrowDown, FaMouse } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';

const Hero = () => {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  // Generate floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10
  }));

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden flex items-center justify-center">
      {/* Background Effects - Same as Skills/Contact */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-neon-cyan rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>



      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom text-center relative z-20 px-4"
      >
        {/* Hello Text */}
        <motion.div variants={itemVariants} className="mb-4">
          <p className="text-gray-400 font-mono text-lg md:text-xl tracking-wider">
            Hello, I'm
          </p>
        </motion.div>

        {/* Main Name with Neon Effect */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white">
            <span 
              className="bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88'
              }}
            >
              Kartik Bhardwaj
            </span>
          </h1>
        </div>

        {/* Subtitle with Typing Effect */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-xl md:text-2xl lg:text-3xl text-white font-light tracking-widest">
            <ReactTyped
              strings={[
                'Creative Developer & Designer',
                'Full Stack Engineer',
                'UI/UX Enthusiast',
                'Problem Solver'
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
              className="text-gray-300"
            />
          </div>
        </motion.div>

        {/* Animated Buttons */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div variants={buttonVariants} whileHover="hover">
              <Link
                to="/resume"
                className="group relative px-8 py-4 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-semibold rounded-full transition-all duration-300 hover:shadow-2xl"
                style={{
                  boxShadow: '0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88'
                }}
              >
                <span className="relative z-10">Explore Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            <motion.div variants={buttonVariants} whileHover="hover">
              <Link
                to="/contact"
                className="group relative px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-full transition-all duration-300 hover:bg-neon-cyan hover:text-black hover:shadow-2xl"
                style={{
                  boxShadow: '0 0 20px #00ffff'
                }}
              >
                <span className="relative z-10">Get In Touch</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-all duration-300 transform hover:scale-110"
                whileHover={{
                  scale: 1.2,
                  textShadow: '0 0 20px #00ffff'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-neon-cyan"
          >
            <FaMouse size={24} className="mb-2" />
            <FaArrowDown size={20} />
          </motion.div>
          <p className="text-gray-500 text-sm mt-2 font-mono">Scroll to explore</p>
        </motion.div>
      </motion.div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;