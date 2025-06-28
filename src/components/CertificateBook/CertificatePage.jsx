import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const CertificatePage = ({ page, pageNumber, totalPages }) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [isClient, setIsClient] = useState(false);
  
  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Handle ESC key for certificate viewer
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && showCertificate) {
        setShowCertificate(false);
      }
    };

    if (showCertificate) {
      document.addEventListener('keydown', handleKeyPress);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [showCertificate]);

  // Reset image loaded state when certificate changes
  useEffect(() => {
    if (showCertificate) {
      setImageLoaded(false);
    }
  }, [showCertificate]);

  // Update image source when page changes and ensure client-side initialization
  useEffect(() => {
    if (page && isClient) {
      setImageSrc(page.image || page.fallbackImage);
      setImageLoaded(false);
    }
  }, [page, isClient]);

  // Handle image error by falling back to fallback image
  const handleImageError = () => {
    if (page?.fallbackImage && imageSrc !== page.fallbackImage) {
      setImageSrc(page.fallbackImage);
    } else {
      setImageLoaded(true);
    }
  };

  // Enhanced image load handler with proper sizing
  const handleImageLoad = (e) => {
    setImageLoaded(true);
    
    // Ensure image dimensions are properly calculated
    const img = e.target;
    if (img.naturalWidth && img.naturalHeight) {
      // Force a reflow to ensure proper rendering
      img.style.display = 'none';
      // eslint-disable-next-line no-unused-expressions
      img.offsetHeight; // Trigger reflow
      img.style.display = 'block';
    }
  };
  
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

          {/* Certificate Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex-1 flex flex-col items-center justify-center mb-6 space-y-4"
          >
            <div className="w-full max-w-sm h-48 bg-gray-100 rounded-lg border-2 border-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📜</div>
                <p className="text-sm">Certificate Image</p>
                <p className="text-xs">(To be uploaded)</p>
              </div>
            </div>
            
            {/* View Certificate Button */}
            {(page.image || page.fallbackImage) && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCertificate(true)}
                className="px-6 py-2 bg-gradient-to-r from-neon-green to-neon-cyan text-white font-semibold rounded-lg shadow-lg hover:shadow-neon-green/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>👁️</span>
                <span>View Certificate</span>
              </motion.button>
            )}
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

      {/* Certificate Viewer Modal - Rendered as Portal */}
      {isClient && showCertificate && (page.image || page.fallbackImage) && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="certificate-modal-backdrop bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setShowCertificate(false)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 90, 
                backgroundColor: "#ef4444",
                boxShadow: "0 0 20px rgba(239,68,68,0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowCertificate(false)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-2xl transition-all duration-300 hover:bg-red-500"
            >
              ×
            </motion.button>

            {/* Certificate Image */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -15 }}
              animate={{ 
                scale: imageLoaded ? 1 : 0.9, 
                opacity: imageLoaded ? 1 : 0.7, 
                rotateY: 0 
              }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 15 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                scale: { duration: imageLoaded ? 0.3 : 0.5 }
              }}
              className="certificate-image-container rounded-xl overflow-hidden shadow-2xl"
            >
              {/* Loading Spinner */}
              {!imageLoaded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-10"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-neon-cyan border-t-transparent rounded-full"
                  />
                </motion.div>
              )}

              <img
                src={imageSrc}
                alt={page.title}
                className="certificate-image rounded-xl"
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="eager"
              />

              {/* Image Info Overlay - Conditional Position */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: imageLoaded ? 1 : 0, x: imageLoaded ? 0 : 20, y: imageLoaded ? 0 : 20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={`absolute ${
                  page.title === "Google Workspace Certificate" 
                    ? "top-4 right-4" 
                    : "bottom-4 right-4"
                } bg-black/85 backdrop-blur-sm rounded-lg p-3 max-w-xs shadow-lg`}
              >
                <h3 className="text-white text-base font-bold mb-1.5 leading-tight">{page.title}</h3>
                <div className="space-y-1">
                  <p className="text-gray-300 text-xs flex items-center">
                    <span className="text-blue-400 mr-1.5">🏢</span>
                    {page.issuer}
                  </p>
                  {page.verified && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      className="flex items-center mt-1.5 pt-1.5 border-t border-gray-600"
                    >
                      <span className="text-green-400 mr-1.5">✅</span>
                      <span className="text-green-400 text-xs font-medium">Verified</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* Keyboard Hint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 1 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm text-center"
            >
              <p>Press <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">ESC</kbd> or click outside to close</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </motion.div>
  );
};

export default CertificatePage;