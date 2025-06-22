import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import CertificateBook from './CertificateBook/CertificateBook';


const AboutMe = () => {
  const [isCertificateBookOpen, setIsCertificateBookOpen] = useState(false);

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

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };



  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };



  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects - Same as Skills/Contact */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center"
        >
          {/* Left Side - Text Content - 60% */}
          <motion.div variants={leftVariants} className="lg:col-span-3 space-y-8">
            {/* Heading */}
            <div>
              <motion.h2 
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-transparent mb-6"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(0,255,136,0.8))'
                }}
                animate={{
                  textShadow: [
                    '0 0 15px rgba(0,255,136,0.8)',
                    '0 0 25px rgba(0,255,255,1)',
                    '0 0 15px rgba(0,255,136,0.8)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                About Me
              </motion.h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6">
              <motion.p 
                variants={leftVariants}
                className="text-gray-300 text-base md:text-lg leading-relaxed tracking-wide"
              >
                I'm a passionate full-stack developer with over 5 years of experience crafting 
                digital experiences that blend creativity with functionality. My journey in tech 
                has been driven by an insatiable curiosity to solve complex problems and create 
                meaningful solutions that make a difference.
              </motion.p>
              
              <motion.p 
                variants={leftVariants}
                className="text-gray-300 text-base md:text-lg leading-relaxed tracking-wide"
              >
                When I'm not coding, you'll find me exploring the latest design trends, 
                experimenting with new technologies, or contributing to open-source projects. 
                I believe in the power of clean code, intuitive design, and the magic that 
                happens when technology meets human creativity.
              </motion.p>
            </div>

            {/* Certificate Collection Button */}
            <motion.button
              onClick={() => setIsCertificateBookOpen(true)}
              variants={statsVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: 1,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-transform duration-300"
            >
              <div className="relative z-10 flex items-center space-x-3">
                <span className="text-2xl">📚</span>
                <div className="text-left">
                  <div className="text-lg">My Certificate Collection</div>
                  <div className="text-sm opacity-90">Click to explore my professional achievements ✨</div>
                </div>
              </div>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Sparkle effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.button>
          </motion.div>

          {/* Right Side - Profile Image with Orbiting Icons - 40% */}
          <motion.div 
            variants={rightVariants} 
            className="lg:col-span-2 relative flex justify-center"
          >
            <div className="relative">
              {/* Animated Neon Border - Circular */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-neon-cyan/30"
                animate={{
                  borderColor: [
                    'rgba(0, 255, 255, 0.3)',
                    'rgba(0, 255, 136, 0.3)',
                    'rgba(0, 255, 255, 0.3)'
                  ]
                }}
                transition={{
                  borderColor: { duration: 3, repeat: Infinity }
                }}
                style={{ width: '320px', height: '320px' }}
              />
              
              {/* Profile Image - Circular */}
              <motion.div
                className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-neon-cyan/50 shadow-2xl"
                variants={imageVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(0, 255, 255, 0.4)"
                }}
                animate={floatingAnimation}
              >
                <img
                  src="/photos/profile/portfolio_photo.jpeg"
                  alt="Kartik Bhardwaj - Full Stack Developer"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                    objectPosition: 'center top'
                  }}
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback content if image fails to load */}
                <div className="w-full h-full flex items-center justify-center text-6xl text-neon-cyan bg-gradient-to-br from-gray-800 to-gray-900" style={{display: 'none'}}>
                  <FaCode />
                </div>
                
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 via-transparent to-neon-green/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Book Modal */}
      <CertificateBook 
        isOpen={isCertificateBookOpen}
        onClose={() => setIsCertificateBookOpen(false)}
      />
    </section>
  );
};

export default AboutMe;