import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {

  // Upcoming projects placeholder message
  const upcomingProjectsMessage = {
    title: "Exciting Projects Coming Soon!",
    description: "I'm currently working on some amazing projects that will showcase my latest skills and creativity. Stay tuned for updates!",
    features: [
      "🚀 Full-Stack Web Applications",
      "💻 Modern UI/UX Designs", 
      "⚡ Performance-Optimized Solutions",
      "🔧 Latest Technologies Integration"
    ]
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent mb-6 animate-glow">
              My <span className="text-white">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here's a collection of projects I've worked on, showcasing my skills 
              in web development, problem-solving, and creative thinking.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Upcoming Projects Section */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Main Card */}
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden hover:border-neon-cyan/50 transition-all duration-500 group">
              {/* Header with animated gradient */}
              <div className="bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 p-8 border-b border-gray-700/50">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-6xl mb-4"
                >
                  🚧
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent mb-4">
                  {upcomingProjectsMessage.title}
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {upcomingProjectsMessage.description}
                </p>
              </div>

              {/* Features List */}
              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {upcomingProjectsMessage.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-600/50 hover:border-neon-cyan/30 transition-all duration-300"
                    >
                      <span className="text-2xl">{feature.split(' ')[0]}</span>
                      <span className="text-gray-300 font-medium">
                        {feature.substring(feature.indexOf(' ') + 1)}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 pt-6 border-t border-gray-700/50"
                >
                  <p className="text-gray-400 mb-6">
                    Stay connected to get notified when new projects are launched!
                  </p>
                  
                  {/* Animated Progress Bar */}
                  <div className="relative bg-gray-800 rounded-full h-2 mb-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      transition={{ duration: 2, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-neon-green to-neon-cyan rounded-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Projects in development... 60% complete
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;