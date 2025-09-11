import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaEye } from 'react-icons/fa';
import ResultModal from './ResultModal';

const EducationSection = () => {
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);

  const educationData = [
    {
      id: 1,
      title: 'Bachelor of Technology — Ongoing',
      institution: 'JECRC University, Jaipur',
      branch: 'B.Tech in Computer Science & Engineering (Software Product Engineering)',
      program: 'Kalvium Powered Curriculum',
      period: '2025 – 2028',
      result: 'Completed First Year (Current CGPA – 9.2)',
      status: 'In Progress',
      hasResultViewer: true,
      highlights: [
        '� Specialized in Software Product Engineering',
        '💻 Kalvium Powered Industry-Relevant Curriculum',
        '� Achieved 9.1 CGPA in First Semester',
        '🚀 Focus on Full Stack Development & Modern Technologies'
      ]
    },
    {
      id: 4,
      title: 'JEE Mains (Entrance Exam)',
      institution: 'JEE Mains 2025',
      branch: 'National Testing Agency',
      program: 'Engineering Entrance Examination',
      period: '2025',
      result: 'Scored 86.6 Percentile',
      status: 'Completed',
      hasResultViewer: false,
      highlights: [
        '🚀 Strong foundation built in Physics, Chemistry, Mathematics',
        '💡 Ignited deep interest in Full Stack Development',
        '🎯 Qualified for premium engineering colleges',
        '� Scored above 86% of all test takers nationwide'
      ]
    },
    {
      id: 2,
      title: 'Class 12 — Senior Secondary',
      institution: 'St Mary\'s Sr. Sec. School, Rudrapur',
      branch: 'CBSE, PCM + Computer Science',
      program: 'Science Stream',
      period: '2024 – 2025',
      result: '80% in Board Exams',
      status: 'Completed',
      hasResultViewer: false,
      highlights: [
        '🎤 Cultural Secretary of the School',
        '🎙️ Anchoring Host for multiple major school events',
        '💻 Computer Science specialization with strong programming foundation',
        '� Strong performance in Physics, Chemistry, Mathematics'
      ]
    },
    {
      id: 3,
      title: 'Class 10 — Secondary School',
      institution: 'St Mary\'s Sr. Sec. School, Rudrapur',
      branch: 'CBSE',
      program: 'Secondary Education',
      period: '2022 – 2023',
      result: '86% in Board Exams',
      status: 'Completed',
      hasResultViewer: false,
      highlights: [
        '� 1st Place in Anchoring Competition',
        '✍️ Awarded Best Writer',
        '� Consistent academic excellence',
        '🎯 Strong foundation in core subjects'
      ]
    }
  ];

  const handleResultView = (edu) => {
    setSelectedResult(edu);
    setIsResultModalOpen(true);
  };

  return (
    <>
      {/* Background Effects - Same as Home */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <FaGraduationCap 
                size={80} 
                className="mx-auto text-neon-green drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]" 
              />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)] mb-6">
              Education
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic journey and learning path
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/30 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] drop-shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Left Column - Institution Info */}
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {edu.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'In Progress' 
                          ? 'bg-neon-cyan/20 text-neon-cyan' 
                          : 'bg-neon-green/20 text-neon-green'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-neon-cyan font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-300 text-sm mb-1 font-medium">
                      {edu.branch}
                    </p>
                    {edu.program && (
                      <p className="text-gray-400 text-sm mb-1">
                        {edu.program}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm">
                      {edu.period}
                    </p>
                  </div>

                  {/* Right Column - Results & Highlights */}
                  <div className="md:w-2/3">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-gray-300 leading-relaxed font-semibold">
                        {edu.result}
                      </p>
                      
                      {/* Result Viewer Button */}
                      {edu.hasResultViewer && (
                        <motion.button
                          onClick={() => handleResultView(edu)}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-cyan/20 to-neon-green/20 text-neon-cyan border border-neon-cyan/30 rounded-lg hover:border-neon-cyan/60 transition-all duration-300 text-sm font-medium"
                        >
                          <FaEye size={14} />
                          📄 View Semester Results
                        </motion.button>
                      )}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-neon-green">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-gray-300 flex items-start hover:text-white transition-colors duration-200"
                          >
                            <span className="text-neon-cyan mr-2 flex-shrink-0">•</span>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-neon-green/10 to-neon-cyan/10 rounded-2xl p-8 border border-neon-green/30">
              <h3 className="text-2xl font-bold text-center text-neon-green mb-8">
                🎓 Academic Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-neon-cyan">9.2</p>
                  <p className="text-gray-400 text-sm">Current CGPA</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-neon-green">86.6%</p>
                  <p className="text-gray-400 text-sm">JEE Percentile</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-white">4</p>
                  <p className="text-gray-400 text-sm">Achievements</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-neon-cyan">2028</p>
                  <p className="text-gray-400 text-sm">Expected Graduation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Result Modal */}
      <ResultModal
        isOpen={isResultModalOpen}
        onClose={() => setIsResultModalOpen(false)}
        title={selectedResult?.title}
        resultData={selectedResult}
      />
    </>
  );
};

export default EducationSection;