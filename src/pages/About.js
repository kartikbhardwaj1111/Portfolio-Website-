import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateBook from '../components/CertificateBook';
import EducationSection from '../components/EducationSection';


const About = () => {
  const [isCertificateBookOpen, setIsCertificateBookOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" />
      </div>

      {/* About Me Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - 60% */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent mb-6">
                About <span className="text-white">Me</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                I'm a Full Stack Developer and Software Product Engineering student at JECRC University (via Kalvium), where I've spent the last year building real-world, production-grade web apps that merge creativity with code.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                From designing animated UIs to scaling secure APIs, I craft full-stack solutions that are not only functional but user-focused and performance-driven. My projects — like a book review platform with JWT auth or a viral sticker-voting system — are built with the MERN stack, powered by modern tools like Tailwind CSS, Framer Motion, Firebase, and Vercel.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                I've also contributed to open-source platforms, hosted developer Q&As, and explored AI workflows with Google's Gemini — always pushing myself beyond the classroom and into real tech ecosystems.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-semibold">
                <span className="text-neon-cyan font-bold">I don't just write code — I build experiences that solve problems and leave impact.</span> <span className="text-neon-green font-bold">And this is just the beginning.</span>
              </p>
              
              {/* Certificate Collection Button */}
              <button
                onClick={() => setIsCertificateBookOpen(true)}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-cyan-500/50 hover:scale-105 mb-8"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📚</span>
                  <div className="text-left">
                    <div className="text-lg">My Certificate Collection</div>
                    <div className="text-sm opacity-90">Click to explore my professional achievements ✨</div>
                  </div>
                </div>
              </button>
            </div>

            {/* Right Column - 40% */}
            <div className="lg:col-span-2 relative flex justify-center">
              <div className="relative">
                {/* Profile Image */}
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-neon-cyan/50 shadow-2xl hover:scale-105 transition-transform duration-300">
                  <img
                    src="/photos/profile/portfolio_photo2.jpeg"
                    alt="Kartik Bhardwaj - Full Stack Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="pb-20 relative z-10">
        <EducationSection />
      </section>





      {/* Certificate Book Modal */}
      <CertificateBook 
        isOpen={isCertificateBookOpen}
        onClose={() => setIsCertificateBookOpen(false)}
      />
    </div>
  );
};

export default About;