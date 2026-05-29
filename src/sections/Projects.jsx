import { motion } from "framer-motion";

const projects = [
  {
    title: "Online Assignment Management System",
    description:
      "A web application for assignment submission and management built using Flask and MySQL.",
    tech: "Flask • Python • MySQL",
    github: "https://github.com/Fareedcbr",
  },

  {
    title: "MERN Stack Portfolio",
    description:
      "Modern responsive developer portfolio built using React, Tailwind CSS, and Framer Motion.",
    tech: "React • Tailwind • Framer Motion",
    github: "https://github.com/Fareedcbr",
  },

  {
    title: "Gesture Recognition Project",
    description:
      "Deep learning project for recognizing hand gestures using computer vision techniques.",
    tech: "Python • OpenCV • Deep Learning",
    github: "https://github.com/Fareedcbr",
  },
];

function Projects() {
  return (
    <section className="px-6 md:px-20 py-24">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-purple-500">Projects</span>
        </h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-purple-500 transition duration-300"
            >

              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <p className="text-purple-400 font-medium mb-8">
                {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-xl font-medium hover:scale-105 transition duration-300"
              >
                View Project
              </a>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Projects;