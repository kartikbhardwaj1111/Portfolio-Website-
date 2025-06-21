import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gradient"
              >
                Portfolio
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-400 max-w-md"
              >
                Passionate developer creating innovative solutions and beautiful user experiences.
              </motion.p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg font-semibold"
              >
                Quick Links
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg font-semibold"
              >
                Connect With Me
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 ${social.color} transition-all duration-200`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 sm:mt-0">
              Made with <FaHeart className="text-red-500 mx-1" size={14} /> using React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;