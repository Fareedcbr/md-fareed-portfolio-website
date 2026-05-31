import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full flex items-center justify-between px-8 md:px-20 py-6 border-b border-white/10 backdrop-blur-lg"
    >
      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Md Fareed
      </h1>

      <ul className="flex gap-4 md:gap-10 text-sm md:text-base text-gray-300 font-medium flex-wrap">
        <li>
          <a
            href="#about"
            className="hover:text-purple-400 transition duration-300"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="hover:text-purple-400 transition duration-300"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-purple-400 transition duration-300"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-purple-400 transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;