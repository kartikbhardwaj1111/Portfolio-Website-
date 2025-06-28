import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filters = ['All Projects', 'Full Stack', 'Frontend', 'Backend'];

  const projects = [
    {
      id: 1,
      title: 'BookHive',
      description: 'A full-stack book review platform with secure login, smart moderation, and Google Books API-powered search. Built for real-world scale and smooth UX.',
      tags: ['React', 'Node.js', 'MongoDB', 'Google OAuth', 'Express'],
      codeUrl: 'https://github.com/kalviumcommunity/S63_KartikBhardwaj_capstone_Bookhive',
      demoUrl: 'https://bookhiv.netlify.app/',
      image: '/api/placeholder/400/250',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Most Bizarre Laptop Stickers Seen in College',
      description: 'A social platform to upload and vote on quirky laptop stickers. Includes real-time voting, caching, and leaderboard logic.',
      tags: ['React', 'Firebase', 'Framer Motion', 'Tailwind CSS'],
      codeUrl: 'https://github.com/kalviumcommunity/s63_Laptop_Stickers',
      demoUrl: 'https://laptop-stickers.netlify.app/',
      image: '/api/placeholder/400/250',
      featured: false,
      category: 'Frontend'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container-custom relative z-10 px-4"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
            <span 
              className="bg-gradient-to-r from-neon-green via-neon-cyan to-neon-green bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 20px #00ff88, 0 0 40px #00ff88'
              }}
            >
              All Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        {/* Filter Bar */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-neon-green to-neon-cyan text-black shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-neon-cyan border border-gray-700'
              }`}
              style={{
                boxShadow: activeFilter === filter ? '0 0 20px #00ff88' : 'none'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden relative"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-neon-green to-neon-cyan text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <FaStar size={12} />
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-6xl text-gray-600 group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title.includes('BookHive') ? '📚' : '💻'}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-neon-cyan text-sm rounded-full border border-gray-700 hover:border-neon-cyan transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-neon-green"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub size={18} />
                    Code
                  </motion.a>

                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-semibold rounded-lg transition-all duration-300"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 0 30px rgba(0, 255, 136, 0.5)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-green/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;