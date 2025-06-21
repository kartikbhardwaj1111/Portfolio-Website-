import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaPython, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJava, FaPalette, FaCube, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiCplusplus, SiFigma, SiFramer } from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, level: 92, color: '#F7DF1E' },
    { name: 'React.js', icon: FaReact, level: 90, color: '#61DAFB' },
    { name: 'Express.js', icon: SiExpress, level: 85, color: '#339933' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
    { name: 'Node.js', icon: FaNodeJs, level: 88, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
    { name: 'Firebase', icon: SiFirebase, level: 80, color: '#FFCA28' },
    { name: 'C++', icon: SiCplusplus, level: 75, color: '#00599C' },
    { name: 'Python', icon: FaPython, level: 85, color: '#3776AB' },
    { name: 'Java', icon: FaJava, level: 82, color: '#ED8B00' },
    { name: 'Git', icon: FaGitAlt, level: 85, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, level: 85, color: '#181717' },
    { name: 'Full MERN Stack', icon: FaDatabase, level: 80, color: '#00D8FF' },
  ];

  const designSkills = [
    { name: 'UI/UX Design', icon: FaPalette, level: 92, color: '#FF6B6B' },
    { name: 'Figma', icon: SiFigma, level: 90, color: '#F24E1E' },
    { name: 'Framer Motion', icon: SiFramer, level: 85, color: '#0055FF' },
    { name: '3D Design', icon: FaCube, level: 70, color: '#FF9500' },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container-custom px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent mb-6">
            My Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete overview of my technical expertise and design capabilities
          </p>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neon-green mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <skill.icon 
                    size={40} 
                    style={{ color: skill.color }}
                    className="mr-4"
                  />
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
                
                <p className="text-gray-400 text-sm mt-2">{skill.level}% proficiency</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neon-purple mb-12 text-center">
            Design Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-neon-purple/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <skill.icon 
                    size={40} 
                    style={{ color: skill.color }}
                    className="mr-4"
                  />
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.8 }}
                  />
                </div>
                
                <p className="text-gray-400 text-sm mt-2">{skill.level}% proficiency</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;