import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaCommentDots,
  FaStar,
  FaRocket
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // EmailJS credentials - update these with your actual values
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Your Name',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setError('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'kbrupc2020@gmail.com',
      link: 'mailto:kbrupc2020@gmail.com',
      color: 'from-neon-green to-neon-cyan'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'India',
      link: null,
      color: 'from-blue-400 to-indigo-400'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/kartikbhardwaj1111',
      color: 'hover:bg-gray-600'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/kartik-bhardwaj-0b82a8316',
      color: 'hover:bg-blue-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black"
    >
      {/* Background Effects - Same as Projects page */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-bounce" />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-8xl mb-8"
            >
              📱
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent mb-6 animate-glow">
              Let's <span className="text-white">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 hover:border-neon-cyan/50 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-neon-green to-neon-cyan rounded-xl">
                  <FaCommentDots className="text-black text-xl" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
                  Send Message
                </h2>
              </div>
              
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl mb-6 flex items-center gap-2 backdrop-blur-sm"
                >
                  <FaCheckCircle />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-6 backdrop-blur-sm"
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
                      <FaUser className="text-neon-cyan" />
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
                      <FaEnvelope className="text-neon-green" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-neon-green focus:ring-2 focus:ring-neon-green/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
                    <FaStar className="text-purple-400" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="flex items-center gap-2 text-gray-300 mb-3 font-medium">
                    <FaCommentDots className="text-neon-cyan" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-bold rounded-xl hover:shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <FaRocket className="group-hover:animate-bounce" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Information Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-neon-cyan/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="text-black text-xl" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-neon-cyan transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-neon-green/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent mb-6 flex items-center gap-2">
                  <FaStar className="text-neon-green" />
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex items-center justify-center w-12 h-12 bg-gray-800 text-gray-300 ${social.color} rounded-xl transition-all duration-200 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 backdrop-blur-sm rounded-2xl border border-neon-cyan/30 p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-cyan/10 animate-pulse" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                    <h3 className="text-xl font-bold text-white">
                      Currently Available
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I'm open to freelance projects and full-time opportunities. 
                    Let's discuss how we can work together to bring your vision to life!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;