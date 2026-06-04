import { motion } from "framer-motion";

function Hero() {
  return (
    <section
    id="home"
    className="relative flex flex-col items-center justify-center text-center min-h-screen px-5 sm:px-6 overflow-hidden"
  >

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-purple-400 uppercase tracking-[5px] text-sm mb-6"
      >
        FULL STACK DEVELOPER
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight max-w-5xl px-2"
      >
        Building Modern
        <br />
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Web Experiences
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-gray-400 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed"
      >
        I build responsive, scalable, and modern web applications
        using React, MERN Stack, and Java technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 mt-12 justify-center w-full max-w-md"
      >

        <a
         href="#projects"
         className="bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-purple-500/20 inline-block"
        >
          View Projects
        </a>

        <a
         href="#contact"
         className="border border-white/10 bg-white/5 backdrop-blur-md hover:border-purple-500 hover:text-purple-400 transition duration-300 px-8 py-4 rounded-2xl font-semibold inline-block"
        >
          Contact Me
        </a>

      </motion.div>

    </section>
  );
}

export default Hero;