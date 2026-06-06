import { motion } from "framer-motion";

function About() {
  const stats = [
    {
      title: "10+",
      subtitle: "Projects Built",
    },
    {
      title: "MERN",
      subtitle: "Full Stack",
    },
    {
      title: "Java",
      subtitle: "Spring Boot",
    },
    {
      title: "B.Sc",
      subtitle: "Graduate 2025",
    },
  ];

  return (
    <section id="about" className="px-6 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          About <span className="text-purple-500">Me</span>
        </motion.h2>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Who I Am
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              I'm Md Fareeduddin, a B.Sc Computer Science graduate from
              Central University of Karnataka with a strong interest in
              Full Stack Development and Backend Engineering.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mt-6">
              I have hands-on experience building web applications using
              React, Java, Spring Boot, Flask, MySQL, and the MERN Stack.
              Through academic projects, internships, and personal
              development work, I've focused on creating scalable,
              user-friendly, and modern applications.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mt-6">
              I'm currently seeking opportunities as a Full Stack,
              Frontend, Backend, or Software Developer where I can
              contribute, learn, and grow while building impactful
              products.
            </p>
          </motion.div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 border border-white/10 rounded-3xl p-8 text-center"
              >
                <h3 className="text-4xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Education
          </h3>

          <p className="text-gray-300 text-lg">
            Bachelor of Science (Computer Science)
          </p>

          <p className="text-purple-400 mt-2">
            Central University of Karnataka
          </p>

          <p className="text-gray-500 mt-2">
            2022 – 2025
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;