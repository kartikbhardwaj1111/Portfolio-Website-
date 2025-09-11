import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUpload, FaEye } from 'react-icons/fa';

const ResultModal = ({ isOpen, onClose, title, resultData }) => {
  const [isImageViewOpen, setIsImageViewOpen] = useState(false);
  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-[#0F172A] rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-neon-cyan/30 shadow-2xl"
            style={{
              boxShadow: '0 0 40px rgba(0, 255, 255, 0.2), 0 0 80px rgba(0, 255, 255, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">
                📄 {title} - Semester Results
              </h3>
              <motion.button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={20} />
              </motion.button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Semester Results */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-neon-cyan mb-6">
                  📊 Semester Results (2025)
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* First Semester */}
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-neon-green/30">
                    <h5 className="text-neon-green font-semibold mb-2">First Semester</h5>
                    <p className="text-3xl font-bold text-neon-green mb-1">9.1</p>
                    <p className="text-gray-400 text-sm">CGPA - Grade A+</p>
                  </div>
                  
                  {/* Second Semester */}
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-neon-cyan/30">
                    <h5 className="text-neon-cyan font-semibold mb-2">Second Semester</h5>
                    <p className="text-3xl font-bold text-neon-cyan mb-1">Available</p>
                    <p className="text-gray-400 text-sm">Result Published</p>
                  </div>
                </div>

                {/* Modern Result Display Card */}
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative"
                >
                  {/* Main Result Card */}
                  <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 rounded-2xl p-8 border border-neon-cyan/30 shadow-2xl backdrop-blur-sm">
                    {/* Result Header */}
                    <div className="text-center mb-6">
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-6xl mb-4"
                      >
                        🎓
                      </motion.div>
                      <h4 className="text-2xl font-bold text-neon-green mb-2">
                        First Semester Result
                      </h4>
                      <p className="text-gray-300">
                        B.Tech CSE (Software Product Engineering)
                      </p>
                    </div>

                    {/* CGPA Display */}
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(0, 255, 255, 0.3)",
                          "0 0 40px rgba(0, 255, 255, 0.6)",
                          "0 0 20px rgba(0, 255, 255, 0.3)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="bg-gradient-to-r from-neon-cyan/20 to-neon-green/20 rounded-2xl p-6 mb-6 border border-neon-cyan/40"
                    >
                      <div className="text-center">
                        <p className="text-6xl font-bold text-neon-cyan mb-2">9.2</p>
                        <p className="text-xl text-white font-semibold">CGPA Achieved</p>
                        <p className="text-neon-green text-sm">Grade: A+ Excellence</p>
                      </div>
                    </motion.div>



                    {/* Upload Section */}
                    <div className="border-t border-gray-700 pt-6">
                      <div className="bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-xl p-6 border-2 border-dashed border-neon-purple/30">
                        <div className="text-center">
                          <motion.div
                            animate={{ 
                              y: [-5, 5, -5],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="text-neon-purple mb-4"
                          >
                            <FaUpload size={40} />
                          </motion.div>
                          <h5 className="text-lg font-semibold text-white mb-2">
                            📄 Official Marksheet
                          </h5>
                          <p className="text-gray-400 mb-4">
                            Click below to view the original semester result document
                          </p>
                          
                          {/* View Result Buttons */}
                          <div className="flex gap-4 justify-center">
                            <motion.button
                              onClick={() => setIsImageViewOpen('sem1')}
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 25px rgba(0, 255, 136, 0.5)"
                              }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-neon-green to-neon-cyan text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                            >
                              <FaEye size={16} />
                              📄 Sem 1 Result
                            </motion.button>
                            
                            <motion.button
                              onClick={() => setIsImageViewOpen('sem2')}
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)"
                              }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-gradient-to-r from-neon-cyan to-neon-green text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                            >
                              <FaEye size={16} />
                              📄 Sem 2 Result
                            </motion.button>
                          </div>
                          
                          <p className="text-xs text-gray-500 mt-3">
                            First Semester Result - JECRC University
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Verification Badge */}
                    <div className="mt-6 flex justify-center">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 px-6 py-2 rounded-full border border-neon-green/40"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-neon-green text-lg">✅</span>
                          <span className="text-neon-green font-medium">JECRC University Verified</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Upcoming Semesters */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-600"
              >
                <h4 className="text-lg font-semibold text-gray-300 mb-4">
                  📅 Upcoming Semesters
                </h4>
                
                <div className="space-y-3">
                  {[
                    { sem: "Second Semester", period: "Jan 2025 - May 2025", status: "In Progress" },
                    { sem: "Third Semester", period: "Jul 2025 - Nov 2025", status: "Upcoming" },
                    { sem: "Fourth Semester", period: "Jan 2026 - May 2026", status: "Upcoming" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.sem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex justify-between items-center p-3 bg-gray-900/30 rounded-lg"
                    >
                      <div>
                        <p className="text-white font-medium">{item.sem}</p>
                        <p className="text-gray-400 text-sm">{item.period}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'In Progress' 
                          ? 'bg-neon-cyan/20 text-neon-cyan' 
                          : 'bg-gray-700 text-gray-300'
                      }`}>
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Academic Progress */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-neon-green/10 to-neon-cyan/10 rounded-xl p-6 border border-neon-green/30"
              >
                <h4 className="text-lg font-semibold text-neon-green mb-4">
                  🎯 Academic Progress
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-white">1/8</p>
                    <p className="text-gray-400 text-sm">Semesters Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neon-cyan">9.2</p>
                    <p className="text-gray-400 text-sm">Current CGPA</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neon-green">A+</p>
                    <p className="text-gray-400 text-sm">Grade Achieved</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-center text-gray-400 text-sm">
                🎓 All results will be updated as they become available
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Image Viewer Modal */}
      {isImageViewOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={() => setIsImageViewOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden border border-neon-cyan/50 shadow-2xl"
            style={{
              boxShadow: '0 0 50px rgba(0, 255, 255, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Close Button */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex justify-between items-center border-b border-gray-700">
              <h3 className="text-white font-bold text-lg">
                📄 {isImageViewOpen === 'sem1' ? 'First Semester Result' : 'Second Semester Result'} - Official Document
              </h3>
              <motion.button
                onClick={() => setIsImageViewOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-700 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={20} />
              </motion.button>
            </div>

            {/* Image Display */}
            <div className="p-6 flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800">
              <motion.img
                src={isImageViewOpen === 'sem1' ? "/photos/certificates/sem1_result.jpeg" : "/photos/result/second%20sem%20result%20.jpeg"}
                alt={isImageViewOpen === 'sem1' ? "First Semester Result - CGPA 9.1" : "Second Semester Result"}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-neon-cyan/30"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback content */}
              <div className="flex-col items-center justify-center p-12 text-center" style={{display: 'none'}}>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-neon-cyan mb-4"
                >
                  <FaUpload size={60} />
                </motion.div>
                <h4 className="text-xl text-white mb-2">Result Image Not Found</h4>
                <p className="text-gray-400 mb-4">
                  Please make sure "sem1_result.jpeg" is placed in the public/photos/certificates folder
                </p>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-300">Expected path:</p>
                  <code className="text-neon-green text-sm">/public/photos/certificates/sem1_result.jpeg</code>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-neon-green text-sm">✅</span>
                  <span className="text-gray-300 text-sm">JECRC University Official Document</span>
                </div>
                <div className="text-gray-400 text-sm">
                  CGPA: <span className="text-neon-cyan font-bold">{isImageViewOpen === 'sem1' ? '9.1' : 'Available'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultModal;