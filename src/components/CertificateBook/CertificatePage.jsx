import React from 'react';
import { motion } from 'framer-motion';

const CertificatePage = ({ page, pageNumber, totalPages }) => {
  if (!page) return null;

  // Special handling for the final page
  if (page.isSpecial) {
    return (
      <motion.div
        key={page.id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col items-center justify-center text-center space-y-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="text-6xl mb-4"
        >
          🚀
        </motion.div>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent mb-4"
        >
          {page.title}
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-700 max-w-md leading-relaxed"
        >
          {page.content}
        </motion.p>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          className="flex space-x-2 text-2xl"
        >
          <span>✨</span>
          <span>📚</span>
          <span>🎓</span>
        </motion.div>
      </motion.div>
    );
  }

  // Regular certificate page
  return (
    <motion.div
      key={page.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      {/* Certificate Card */}
      <div className="w-full h-full bg-white rounded-lg shadow-2xl border-4 border-gradient-to-r from-amber-400 to-amber-600 overflow-hidden relative">
        {/* Decorative border pattern */}
        <div className="absolute inset-0 border-8 border-amber-400 rounded-lg">
          <div className="absolute inset-2 border-2 border-amber-300 rounded-md">
            <div className="absolute inset-1 border border-amber-200 rounded-sm" />
          </div>
        </div>

        {/* Certificate Content */}
        <div className="relative z-10 p-8 h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center"
            >
              <span className="text-2xl">🏆</span>
            </motion.div>
            
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-serif font-bold text-gray-800 mb-2"
            >
              Certificate of Achievement
            </motion.h1>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4 }}
              className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"
            />
          </div>

          {/* Certificate Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex-1 flex items-center justify-center mb-6"
          >
            <div className="w-full max-w-sm h-48 bg-gray-100 rounded-lg border-2 border-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📜</div>
                <p className="text-sm">Certificate Image</p>
                <p className="text-xs">(To be uploaded)</p>
              </div>
            </div>
          </motion.div>

          {/* Certificate Details */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center space-y-3"
          >
            <h2 className="text-xl font-bold text-gray-800">
              {page.title}
            </h2>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <span className="text-blue-500">🏢</span>
                <span>{page.issuer}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <span className="text-green-500">📅</span>
                <span>{page.date}</span>
              </div>
              
              {page.verified && (
                <div className="flex items-center space-x-1">
                  <span className="text-green-500">✅</span>
                  <span>Verified</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-amber-400 opacity-30">
            <div className="text-2xl">🌟</div>
          </div>
          <div className="absolute top-4 right-4 text-amber-400 opacity-30">
            <div className="text-2xl">🌟</div>
          </div>
          <div className="absolute bottom-4 left-4 text-amber-400 opacity-30">
            <div className="text-2xl">🌟</div>
          </div>
          <div className="absolute bottom-4 right-4 text-amber-400 opacity-30">
            <div className="text-2xl">🌟</div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-amber-700 text-sm font-medium">
        Page {pageNumber} of {totalPages}
      </div>
    </motion.div>
  );
};

export default CertificatePage;