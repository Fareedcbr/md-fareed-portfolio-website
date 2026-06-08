import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const featuredCertifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    category: "AI & Cloud",
  },

  {
    title: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    category: "Cloud",
  },

  {
    title: "Building Modern Web Applications with MERN Stack",
    issuer: "EY GDS & AICTE",
    category: "MERN Stack",
  },
];

function FeaturedCertifications() {
  return (
    <section className="px-6 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="text-purple-500">Certifications</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCertifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-lg
                rounded-3xl
                p-8
                hover:border-purple-500
                transition-all
                duration-300
              "
            >
              <span
                className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  bg-purple-500/20
                  text-purple-400
                  mb-4
                "
              >
                {cert.category}
              </span>

              <h3 className="text-xl font-semibold text-white leading-relaxed">
                {cert.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            to="/certifications"
            className="
              inline-flex
              items-center
              gap-2
              px-8
              py-4
              rounded-xl
              border
              border-purple-500/30
              bg-purple-500/10
              text-purple-400
              font-semibold
              hover:bg-purple-500/20
              hover:scale-105
              transition-all
              duration-300
            "
          >
            View All Certifications →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default FeaturedCertifications;