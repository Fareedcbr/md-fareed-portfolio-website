import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-purple-400 uppercase tracking-[4px] text-sm mb-6"
        >
          FULL STACK DEVELOPER
        </motion.p>
        <div
          className="
            inline-flex items-center gap-2
            px-4 py-2 mb-6
            rounded-full
            border border-green-500/30
            bg-green-500/10
            text-green-400
            text-sm
          "
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Open to Opportunities
        </div>        

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          Building Modern
          <br />

          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Web Experiences
          </span>
        </motion.h1>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl font-bold mt-8"
        >
          Md Fareeduddin
        </motion.h2>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-lg md:text-2xl font-medium text-purple-400"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "Java Backend Developer",
              2000,
              "React Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed"
        >
          Full Stack Developer passionate about building modern,
          responsive, and scalable web applications using React,
          MERN Stack, Java, Spring Boot, and MySQL.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            View Projects
          </a>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 px-8 py-4 rounded-xl font-semibold hover:border-purple-500 transition duration-300 flex items-center gap-2"
          >
            <FaFilePdf />
            Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center gap-8 mt-12 text-2xl"
        >
          <a
            href="https://github.com/Fareedcbr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/md-fareeduddin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:mdfareedcbr@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;