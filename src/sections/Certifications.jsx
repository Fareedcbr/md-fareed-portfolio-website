import { motion } from "framer-motion";
import certifications from "../data/certifications";

function Certifications() {
  return (
    <section className="px-6 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-purple-500">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-lg
                rounded-3xl
                overflow-hidden
                hover:border-purple-500
                transition
              "
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  console.log("Image failed:", cert.image);
                }}
              />

              <div className="p-6">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                  {cert.category}
                </span>

                <h3 className="text-xl font-semibold mt-4">
                  {cert.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {cert.issuer}
                </p>

                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    mt-6
                    bg-gradient-to-r
                    from-purple-600
                    to-pink-500
                    px-5
                    py-3
                    rounded-xl
                    font-medium
                    hover:scale-105
                    transition
                  "
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Certifications;