import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Skills = () => {
  // Technical Skills Data (Main highlights for homepage)
  const technicalSkills = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3', percentage: 90 },
    { name: 'JavaScript', percentage: 92 },
    { name: 'React.js', percentage: 90 },
    { name: 'Node.js', percentage: 88 },
    { name: 'MongoDB', percentage: 85 },
    { name: 'Python', percentage: 85 },
    { name: 'Java', percentage: 82 }
  ];

  // Design Skills Data
  const designSkills = [
    { name: 'UI/UX Design', percentage: 92 },
    { name: 'Figma', percentage: 90 },
    { name: 'Framer Motion', percentage: 85 },
    { name: '3D Design', percentage: 70 }
  ];

  // Animation variants
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  // Skill Item Component
  const SkillItem = ({ skill, index }) => (
    <motion.div
      variants={skillVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      {/* Skill Name and Percentage */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium text-lg">{skill.name}</span>
        <span className="text-neon-cyan font-semibold text-lg">{skill.percentage}%</span>
      </div>
      
      {/* Progress Bar Container */}
      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
        {/* Progress Bar Fill */}
        <motion.div
          className="h-full bg-gradient-to-r from-neon-green to-neon-cyan rounded-full relative"
          variants={progressVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={skill.percentage}
          style={{
            boxShadow: '0 0 10px #00ff88, 0 0 20px #00ff88'
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-green/50 to-neon-cyan/50 blur-sm" />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-transparent mb-6">
            My Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and design capabilities
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16"
        >
          {/* Technical Skills Column */}
          <motion.div variants={sectionVariants} className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-neon-green mb-8 flex items-center justify-center lg:justify-start">
                <span className="w-2 h-2 bg-neon-green rounded-full mr-3 animate-pulse"></span>
                Technical Skills
              </h3>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Design Skills Column */}
          <motion.div variants={sectionVariants} className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-neon-purple mb-8 flex items-center justify-center lg:justify-start">
                <span className="w-2 h-2 bg-neon-purple rounded-full mr-3 animate-pulse"></span>
                Design Skills
              </h3>
            </div>
            
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Project Summary Text */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I've successfully built a capstone project{' '}
              <span className="text-neon-cyan font-semibold">"BookHive"</span> — a full-stack MERN Book Review web app, 
              and a creative ASAP project{' '}
              <span className="text-neon-green font-semibold">"Weirdest Laptop Sticker"</span> using HTML, CSS, JS, and React.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover="hover"
          className="text-center"
        >
          <Link
            to="/skills"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gray-900 text-white font-semibold rounded-md border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
            style={{
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
            }}
          >
            <span>Explore Full Skillset</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowRight className="text-neon-cyan group-hover:text-white transition-colors duration-300" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;