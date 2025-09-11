import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "BookHive",
      description: "A comprehensive book management platform where users can discover, organize, and manage their book collections. Features include book search, personal library management, and reading progress tracking.",
      image: "/photos/Book_Hive.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://bookhiv.netlify.app/",
      githubLink: "https://github.com/kalviumcommunity/S63_KartikBhardwaj_capstone_Bookhive",
      backendLink: "https://s63-kartikbhardwaj-capstone-bookhive-1.onrender.com",
      features: ["Book Discovery", "Personal Library", "Reading Progress", "User Authentication"]
    },
    {
      id: 2,
      title: "Focus Mate",
      description: "A productivity application designed to help users stay focused and manage their tasks effectively. Features include task management, focus sessions, and productivity tracking to enhance work efficiency.",
      image: "/photos/Focus_Mate.png",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      demoLink: "https://focusssmate.netlify.app/",
      githubLink: "https://github.com/kartikbhardwaj1111/Focus_Mate",
      features: ["Task Management", "Focus Sessions", "Productivity Tracking", "Time Management"]
    },
    {
      id: 3,
      title: "Laptop Stickers",
      description: "A creative web application showcasing various laptop stickers and customization options. Features an interactive interface for browsing and selecting different sticker designs for personalizing laptops.",
      image: "/photos/Laptop_stickers.png",
      technologies: ["HTML", "CSS", "JavaScript", "Web Design"],
      demoLink: "https://laptop-stickers.netlify.app/",
      githubLink: "https://github.com/kalviumcommunity/s63_Laptop_Stickers.git",
      features: ["Interactive Design", "Sticker Gallery", "Customization Options", "Responsive Layout"]
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
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" />
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
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent mb-6 animate-glow">
              My <span className="text-white">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here's a collection of projects I've worked on, showcasing my skills 
              in web development, problem-solving, and creative thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-neon-cyan/50 transition-all duration-500 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="text-4xl mb-2">📚</div>
                      <div className="text-neon-cyan font-semibold">{project.title}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/50 text-neon-cyan text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={14} />
                      Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 hover:border-neon-cyan hover:text-neon-cyan rounded-lg transition-all duration-300"
                    >
                      <FaGithub size={14} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




    </motion.div>
  );
};

export default Projects;