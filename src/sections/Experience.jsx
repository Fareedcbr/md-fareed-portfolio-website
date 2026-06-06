import { motion } from "framer-motion";
import experience from "../data/experience";

function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          My <span className="text-purple-500">Journey</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          My academic, internship, and project experience in software
          development and computer science.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l-2 border-purple-500 ml-4">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="mb-12 ml-8 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[42px] top-2 w-5 h-5 rounded-full bg-purple-500 border-4 border-[#0f1117]" />

            {/* Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 hover:border-purple-500 transition duration-300">
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-purple-400 mt-1">
                {item.organization}
              </p>

              <p className="text-gray-500 text-sm mt-2">
                {item.duration}
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;