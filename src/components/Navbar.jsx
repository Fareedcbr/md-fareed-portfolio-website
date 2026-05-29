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

      <ul className="hidden md:flex gap-10 text-gray-300 font-medium">
        <li className="hover:text-purple-400 cursor-pointer transition duration-300">
          About
        </li>

        <li className="hover:text-purple-400 cursor-pointer transition duration-300">
          Skills
        </li>

        <li className="hover:text-purple-400 cursor-pointer transition duration-300">
          Projects
        </li>

        <li className="hover:text-purple-400 cursor-pointer transition duration-300">
          Contact
        </li>
      </ul>

    </motion.nav>
  );
}

export default Navbar;