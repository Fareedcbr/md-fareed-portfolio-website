import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Java",
  "Python",
  "Git & GitHub",
];

function Skills() {
  return (
    <section id="skills" className="px-6 md:px-20 py-24">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-purple-500">Skills</span>
        </h2>

        {/* SKILL GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:border-purple-500 transition duration-300"
            >

              <h3 className="text-xl font-semibold text-white">
                {skill}
              </h3>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Skills;