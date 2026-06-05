import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
          <Link
            to="/"
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
            Md Fareeduddin
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            <li>
              <Link
                to="/"
                className="group relative flex items-center gap-2 hover:text-purple-400 transition duration-300"
              >
                <FaHome />
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="group relative flex items-center gap-2 hover:text-purple-400 transition duration-300"
              >
                <FaUser />
                About
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="group relative flex items-center gap-2 hover:text-purple-400 transition duration-300"
              >
                <FaProjectDiagram />
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/experience"
                className="group relative flex items-center gap-2 hover:text-purple-400 transition duration-300"
              >
                <FaBriefcase />
                Experience
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="group relative flex items-center gap-2 hover:text-purple-400 transition duration-300"
              >
                <FaEnvelope />
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
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
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <FaHome />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <FaUser />
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  onClick={closeMenu}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <FaProjectDiagram />
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/experience"
                  onClick={closeMenu}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <FaBriefcase />
                  Experience
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center gap-2 hover:text-purple-400"
                >
                  <FaEnvelope />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;