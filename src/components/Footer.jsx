import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Md Fareeduddin
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            Full Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/Fareedcbr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/md-fareeduddin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:mdfareedcbr@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Md Fareeduddin. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;