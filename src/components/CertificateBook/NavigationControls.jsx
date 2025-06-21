import React from 'react';
import { motion } from 'framer-motion';

const NavigationControls = ({ 
  currentPage, 
  totalPages, 
  onPrevPage, 
  onNextPage, 
  onGoToPage, 
  canGoPrev, 
  canGoNext 
}) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
      {/* Previous Button */}
      <motion.button
        whileHover={{ scale: canGoPrev ? 1.1 : 1, x: canGoPrev ? -2 : 0 }}
        whileTap={{ scale: canGoPrev ? 0.9 : 1 }}
        onClick={onPrevPage}
        disabled={!canGoPrev}
        className={`
          w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
          transition-all duration-300 shadow-lg
          ${canGoPrev 
            ? 'bg-gradient-to-r from-neon-cyan to-blue-500 text-white hover:shadow-cyan-500/50 cursor-pointer' 
            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }
        `}
      >
        ←
      </motion.button>

      {/* Page Indicators */}
      <div className="flex space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => onGoToPage(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === currentPage
                ? 'bg-gradient-to-r from-neon-green to-neon-cyan shadow-lg shadow-neon-cyan/50'
                : 'bg-gray-500 hover:bg-gray-400'
              }
            `}
          />
        ))}
      </div>

      {/* Next Button */}
      <motion.button
        whileHover={{ scale: canGoNext ? 1.1 : 1, x: canGoNext ? 2 : 0 }}
        whileTap={{ scale: canGoNext ? 0.9 : 1 }}
        onClick={onNextPage}
        disabled={!canGoNext}
        className={`
          w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
          transition-all duration-300 shadow-lg
          ${canGoNext 
            ? 'bg-gradient-to-r from-blue-500 to-neon-green text-white hover:shadow-green-500/50 cursor-pointer' 
            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }
        `}
      >
        →
      </motion.button>
    </div>
  );
};

export default NavigationControls;