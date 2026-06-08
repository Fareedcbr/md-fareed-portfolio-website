import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Online Assignment Management System",
    description:
      "A full-stack web application for assignment submission, management, and tracking built using Flask and MySQL.",

    tech: ["Flask", "Python", "MySQL"],

    github: "https://github.com/Fareedcbr/mini-project",

    // demo: "#",
  },

  {
    title: "MERN Stack Portfolio",
    description:
      "A modern developer portfolio built using React, Tailwind CSS, Framer Motion, and React Router.",

    tech: ["React", "Tailwind", "Framer Motion"],

    github: "https://github.com/Fareedcbr/md-fareed-portfolio-website",

    demo: "https://fareedcbr.github.io/md-fareed-portfolio-website/",
  },

  {
    title: "Gesture Recognition Project",
    description:
      "A deep learning project that recognizes hand gestures using computer vision and machine learning techniques.",

    tech: ["Python", "OpenCV", "Deep Learning"],

    github: "https://github.com/Fareedcbr/Deep-learning-internship",

    // demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          My <span className="text-purple-500">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
          A collection of projects showcasing my skills in full-stack
          development, backend engineering, and machine learning.
        </motion.p>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-lg
                rounded-3xl
                p-8
                hover:border-purple-500
                transition-all
                duration-300
              "
            >
              {/* PROJECT TITLE */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1
                      rounded-full
                      text-sm
                      bg-purple-500/10
                      border
                      border-purple-500/20
                      text-purple-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    hover:border-purple-500
                    transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-600
                    to-pink-500
                    hover:scale-105
                    transition
                  "
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;