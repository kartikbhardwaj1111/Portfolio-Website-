import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookContainer from './BookContainer';
import CertificatePage from './CertificatePage';
import NavigationControls from './NavigationControls';

const CertificateBook = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Real certificate data from the photos/certificates folder
  const certificates = [
    {
      id: 1,
      title: "Google Workspace Certificate",
      issuer: "Google",
      date: "December 2023",
      image: "/photos/certificates/Google Workspace.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      verified: true
    },
    {
      id: 2,
      title: "Git Command Lines Certificate",
      issuer: "Udemy",
      date: "June 2024",
      image: "/photos/certificates/Git_Commandlines.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      verified: true
    },
    {
      id: 3,
      title: "Java Programming Certificate",
      issuer: "Udemy",
      date: "May 2024",
      image: "/photos/certificates/java.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      verified: true
    },
    {
      id: 4,
      title: "Python Programming Certificate",
      issuer: "Udemy",
      date: "February 2024",
      image: "/photos/certificates/Python.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      verified: true
    },
    {
      id: 5,
      title: "HTML & CSS Professional Certificate",
      issuer: "Udemy",
      date: "March 2024",
      image: "/photos/certificates/Html_css.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      verified: true
    },
    {
      id: 6,
      title: "JavaScript Programming Certificate",
      issuer: "Udemy",
      date: "April 2024",
      image: "/photos/certificates/javascript.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80",
      verified: true
    }
  ];

  // Final page content
  const finalPage = {
    id: 'final',
    title: "🚀 More Achievements Ahead!",
    content: "This digital certificate book will grow with my journey. New certifications will be added as I continue learning and growing.",
    isSpecial: true
  };

  const allPages = [...certificates, finalPage];
  const totalPages = allPages.length;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          setCurrentPage(prev => Math.max(0, prev - 1));
          break;
        case 'ArrowRight':
          e.preventDefault();
          setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, totalPages, onClose]);

  const nextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-4xl mx-4 h-[85vh] max-h-[650px]"
          style={{ perspective: '1000px' }}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg hover:shadow-red-500/50 transition-all duration-300"
          >
            ×
          </motion.button>

          <BookContainer>
            <CertificatePage
              page={allPages[currentPage]}
              pageNumber={currentPage + 1}
              totalPages={totalPages}
            />
          </BookContainer>

          <NavigationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevPage={prevPage}
            onNextPage={nextPage}
            onGoToPage={goToPage}
            canGoPrev={currentPage > 0}
            canGoNext={currentPage < totalPages - 1}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CertificateBook;