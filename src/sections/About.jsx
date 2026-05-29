import { motion } from "framer-motion";

function About() {
  return (
    <section className="px-6 md:px-20 py-24">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        {/* SECTION TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          About <span className="text-purple-500">Me</span>
        </h2>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CARD */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-6 text-white">
              Who I Am
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              I'm Md Fareed, a passionate Full Stack Developer focused on
              building scalable and modern web applications using
              React, MERN Stack, and Java technologies.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mt-6">
              I enjoy creating clean UI designs, solving backend problems,
              and continuously learning new technologies to improve my
              development skills.
            </p>

          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-white">10+</h3>
              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-white">MERN</h3>
              <p className="text-gray-400 mt-2">
                Stack Developer
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-white">Java</h3>
              <p className="text-gray-400 mt-2">
                Backend Development
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 border border-white/10 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-white">2025</h3>
              <p className="text-gray-400 mt-2">
                Graduate
              </p>
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;