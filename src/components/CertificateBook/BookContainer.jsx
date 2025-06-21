import React from 'react';
import { motion } from 'framer-motion';

const BookContainer = ({ children }) => {
  return (
    <motion.div
      className="relative w-full h-full"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Book Cover/Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 rounded-2xl shadow-2xl">
        {/* Leather texture overlay */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
              radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(0,0,0,0.1) 25%, transparent 25%)
            `,
            backgroundSize: '20px 20px, 20px 20px, 40px 40px, 40px 40px'
          }}
        />
        
        {/* Book spine shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-950 to-transparent rounded-l-2xl" />
        
        {/* Book binding details */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-8 bg-amber-700 rounded-full opacity-60" />
          ))}
        </div>
      </div>

      {/* Inner pages container */}
      <div className="absolute inset-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-inner overflow-hidden">
        {/* Parchment texture */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(139, 69, 19, 0.1) 2px,
                rgba(139, 69, 19, 0.1) 4px
              )
            `
          }}
        />
        
        {/* Content area */}
        <div className="relative z-10 w-full h-full p-8">
          {children}
        </div>
      </div>

      {/* Book glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan/20 via-transparent to-neon-green/20 blur-xl -z-10 animate-pulse-glow" />
    </motion.div>
  );
};

export default BookContainer;