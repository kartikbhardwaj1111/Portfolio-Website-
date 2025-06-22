import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateBook from '../components/CertificateBook';
import EducationSection from '../components/EducationSection';


const About = () => {
  const [isCertificateBookOpen, setIsCertificateBookOpen] = useState(false);



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" />
      </div>

      {/* About Me Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Left Column - 60% */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent mb-6 animate-glow">
                About <span className="text-white">Me</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer and Computer Science student at JECRC University. 
                Currently pursuing B.Tech in Software Product Engineering with Kalvium's industry-relevant curriculum. 
                I love turning complex problems into simple, beautiful, and intuitive digital solutions.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                With a strong foundation in mathematics, physics, and computer science from my academic journey, 
                I'm now focused on building modern web applications and exploring the latest technologies 
                in full-stack development.
              </p>
              
              {/* Certificate Collection Button */}
              <motion.button
                onClick={() => setIsCertificateBookOpen(true)}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 1,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-cyan-500/50 mb-8"
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

            {/* Right Column - 40% */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-2 relative flex justify-center"
            >
              <div className="relative">
                {/* Animated Neon Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-4 border-neon-cyan/30"
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
                
                {/* Profile Image */}
                <motion.div
                  className="relative z-10 w-80 h-80 rounded-2xl overflow-hidden border-4 border-neon-cyan/50 shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(0, 255, 255, 0.4)"
                  }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
                    src="/photos/profile/portfolio_photo2.jpeg"
                    alt="Kartik Bhardwaj - Full Stack Developer"
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 via-transparent to-neon-green/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="pb-20 relative z-10">
        <EducationSection />
      </section>





      {/* Certificate Book Modal */}
      <CertificateBook 
        isOpen={isCertificateBookOpen}
        onClose={() => setIsCertificateBookOpen(false)}
      />
    </motion.div>
  );
};

export default About;