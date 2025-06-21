import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCalendarAlt, FaGraduationCap, FaBriefcase, FaCode, FaAward, FaLanguage } from 'react-icons/fa';

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const personalInfo = {
    name: "Kartik Bhardwaj",
    title: "Full Stack Developer & UI/UX Designer",
    location: "Your City, Country",
    email: "kartik@example.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/kartikbhardwaj",
    github: "github.com/kartikbhardwaj"
  };

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Remote",
      responsibilities: [
        "Led development of 5+ web applications using React.js and Node.js",
        "Improved application performance by 40% through code optimization",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with cross-functional teams to deliver projects on time"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      location: "Your City",
      responsibilities: [
        "Developed responsive web applications using React.js and TypeScript",
        "Implemented modern UI/UX designs with attention to detail",
        "Integrated RESTful APIs and third-party services",
        "Maintained 95%+ client satisfaction rate"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      location: "Your City",
      responsibilities: [
        "Built interactive websites using HTML, CSS, and JavaScript",
        "Collaborated with designers to implement pixel-perfect designs",
        "Optimized websites for SEO and performance",
        "Participated in agile development processes"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Computer Science Society President"]
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Coding Academy",
      period: "2019",
      gpa: "Completed with Distinction",
      achievements: ["Best Final Project Award", "Top 5% of Class"]
    }
  ];

  const skills = {
    technical: [
      "JavaScript (ES6+)", "TypeScript", "React.js", "Node.js", "Express.js",
      "MongoDB", "PostgreSQL", "Python", "HTML5", "CSS3", "Tailwind CSS",
      "Git", "Docker", "AWS", "REST APIs", "GraphQL"
    ],
    tools: [
      "VS Code", "Figma", "Adobe XD", "Postman", "Jira", "Slack",
      "GitHub", "GitLab", "Vercel", "Netlify"
    ],
    soft: [
      "Problem Solving", "Team Leadership", "Communication", "Project Management",
      "Agile Methodology", "Critical Thinking", "Adaptability"
    ]
  };

  const projects = [
    {
      name: "E-Commerce Platform",
      tech: "React.js, Node.js, MongoDB",
      description: "Full-featured e-commerce platform with payment integration"
    },
    {
      name: "Task Management App",
      tech: "React.js, Firebase, Material-UI",
      description: "Collaborative task management tool with real-time updates"
    },
    {
      name: "Portfolio Website",
      tech: "React.js, Tailwind CSS, Framer Motion",
      description: "Responsive portfolio website with modern animations"
    }
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "Hindi", level: "Native" },
    { name: "Spanish", level: "Intermediate" }
  ];

  const handleDownload = () => {
    // This would typically generate and download a PDF version
    alert("PDF download functionality would be implemented here!");
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container-custom px-4 py-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
              Resume
            </span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8"
          >
            Professional Experience & Qualifications
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-semibold rounded-full hover:shadow-2xl transition-all duration-300"
            style={{
              boxShadow: '0 0 20px #00ff88'
            }}
          >
            <FaDownload className="mr-2" />
            Download PDF
          </motion.button>
        </motion.div>

        {/* Resume Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Personal Info & Skills */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-1 space-y-8"
            >
              {/* Personal Information */}
              <motion.div 
                variants={itemVariants}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Contact Info
                </h2>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-neon-green" />
                    <span className="text-sm">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-3 text-neon-green" />
                    <span className="text-sm">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-3 text-neon-green" />
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaLinkedin className="mr-3 text-neon-green" />
                    <span className="text-sm">{personalInfo.linkedin}</span>
                  </div>
                  <div className="flex items-center">
                    <FaGithub className="mr-3 text-neon-green" />
                    <span className="text-sm">{personalInfo.github}</span>
                  </div>
                </div>
              </motion.div>

              {/* Technical Skills */}
              <motion.div 
                variants={itemVariants}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center">
                  <FaCode className="mr-2" />
                  Technical Skills
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neon-green mb-2">Programming</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.technical.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neon-green mb-2">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((tool, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div 
                variants={itemVariants}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center">
                  <FaLanguage className="mr-2" />
                  Languages
                </h2>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="text-neon-green text-sm">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Experience & Education */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 space-y-8"
            >
              {/* Professional Summary */}
              <motion.div 
                variants={itemVariants}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-neon-cyan mb-4">Professional Summary</h2>
                <p className="text-gray-300 leading-relaxed">
                  Passionate Full Stack Developer with 4+ years of experience in building scalable web applications. 
                  Expertise in modern JavaScript frameworks, responsive design, and agile development methodologies. 
                  Proven track record of delivering high-quality solutions that enhance user experience and drive business growth.
                </p>
              </motion.div>

              {/* Work Experience */}
              <motion.div 
                variants={itemVariants}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center">
                  <FaBriefcase className="mr-2" />
                  Work Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index} className="border-l-2 border-neon-green pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-neon-green rounded-full"></div>
                      <div className="mb-2">
                        <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                        <p className="text-neon-green font-medium">{job.company}</p>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <FaCalendarAlt className="mr-2" />
                          <span>{job.period}</span>
                          <span className="mx-2">•</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <ul className="text-gray-300 space-y-1">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-neon-cyan mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div 
                variants={itemVariants}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center">
                  <FaGraduationCap className="mr-2" />
                  Education
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-neon-cyan pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-neon-cyan rounded-full"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                        <p className="text-neon-cyan font-medium">{edu.institution}</p>
                        <div className="flex items-center text-gray-400 text-sm mt-1 mb-2">
                          <FaCalendarAlt className="mr-2" />
                          <span>{edu.period}</span>
                          <span className="mx-2">•</span>
                          <span>{edu.gpa}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan rounded-full text-sm border border-neon-cyan/30"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Key Projects */}
              <motion.div 
                variants={itemVariants}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-neon-cyan mb-6 flex items-center">
                  <FaAward className="mr-2" />
                  Key Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-600">
                      <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
                      <p className="text-neon-green text-sm mb-2">{project.tech}</p>
                      <p className="text-gray-300 text-sm">{project.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;