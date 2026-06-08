import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Online Assignment Management System",
    description:
      "A web application for assignment submission and management built using Flask and MySQL.",
    tech: "Flask • Python • MySQL",
  },

  {
    title: "MERN Portfolio Website",
    description:
      "Modern responsive developer portfolio built using React, Tailwind CSS and Framer Motion.",
    tech: "React • Tailwind CSS • Framer Motion",
  },

  {
    title: "Gesture Recognition System",
    description:
      "Deep learning project for recognizing hand gestures using computer vision techniques.",
    tech: "Python • OpenCV • Deep Learning",
  },
];

function FeaturedProjects() {
  return (
    <section className="px-6 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-lg
                rounded-3xl
                p-8
                hover:border-purple-500
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <p className="text-purple-400 font-medium">
                {project.tech}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="
              inline-flex
              items-center
              gap-2
              px-8
              py-4
              rounded-xl
              border
              border-purple-500/30
              bg-purple-500/10
              text-purple-400
              font-semibold
              hover:bg-purple-500/20
              hover:scale-105
              transition-all
              duration-300
            "
          >
            View All Projects →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default FeaturedProjects;