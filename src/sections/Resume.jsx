import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

function Resume() {
  return (
    <section className="px-6 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          max-w-4xl mx-auto
          bg-white/5
          border border-white/10
          rounded-3xl
          p-10
          text-center
          backdrop-blur-lg
        "
      >
        <h2 className="text-4xl font-bold mb-6">
          Download My Resume
        </h2>

        <p className="text-gray-400 mb-8">
          Interested in my background, skills, and projects?
          Download my latest resume.
        </p>

        <a
          href="/md-fareed-portfolio-website/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-3
            px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            font-semibold
            hover:scale-105
            transition
          "
        >
          <FaFilePdf />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Resume;