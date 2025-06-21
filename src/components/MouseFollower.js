import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  
  // Use motion values for better performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Create smooth spring animations
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update motion values directly for better performance
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Check for hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isHoverableElement = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.classList.contains('cursor-pointer') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer');
      
      setIsHovering(isHoverableElement);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: cursorX,
          top: cursorY,
          x: -6,
          y: -6,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }}
      >
        <div className="w-3 h-3 bg-neon-cyan rounded-full shadow-lg" 
             style={{
               boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff'
             }} 
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: cursorX,
          top: cursorY,
          x: -20,
          y: -20,
        }}
        animate={{
          opacity: isVisible ? 0.6 : 0,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <div className="w-10 h-10 border border-neon-cyan/50 rounded-full" 
             style={{
               boxShadow: '0 0 15px #00ffff40'
             }}
        />
      </motion.div>

      {/* Trailing particles */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: cursorX,
          top: cursorY,
          x: -2,
          y: -2,
        }}
        animate={{
          opacity: isVisible ? 0.8 : 0,
        }}
        transition={{
          opacity: { duration: 0.2 }
        }}
      >
        <motion.div
          className="w-1 h-1 bg-neon-green rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            boxShadow: '0 0 8px #00ff88'
          }}
        />
      </motion.div>
    </>
  );
};

export default MouseFollower;