import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-4 z-50 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="
            flex items-center justify-between
            px-6 md:px-10 py-5
            rounded-full
            bg-black/60
            backdrop-blur-xl
            border border-white/10
            shadow-lg
          "
        >
          {/* Logo */}
          <a
            href="#home"
            className="
              text-xl md:text-2xl
              font-bold
              bg-gradient-to-r
              from-purple-400
              to-pink-500
              bg-clip-text
              text-transparent
            "
          >
            Md Fareed
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            <li>
              <a
                href="#home"
                className="group relative flex items-center gap-2 hover:text-purple-400 transition duration-300"
              >
                <FaHome />
                Home
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="group relative flex items-center gap-2 hover:text-purple-400 transition duration-300"
              >
                <FaUser />
                About
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="group relative flex items-center gap-2 hover:text-purple-400 transition duration-300"
              >
                <FaCode />
                Skills
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="group relative flex items-center gap-2 hover:text-purple-400 transition duration-300"
              >
                <FaProjectDiagram />
                Projects
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="group relative flex items-center gap-2 hover:text-purple-400 transition duration-300"
              >
                <FaEnvelope />
                Contact
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              md:hidden
              mt-3
              rounded-3xl
              bg-black/90
              backdrop-blur-xl
              border border-white/10
              shadow-lg
            "
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-gray-300">

              <li>
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <FaHome />
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <FaUser />
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <FaCode />
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <FaProjectDiagram />
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <FaEnvelope />
                  Contact
                </a>
              </li>

            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;