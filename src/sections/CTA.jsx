import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold">
        Let's Build Something Together
      </h2>

      <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
        I'm actively looking for Full Stack Developer opportunities and
        exciting projects where I can contribute and grow.
      </p>

      <Link
        to="/contact"
        className="inline-block mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 font-semibold hover:scale-105 transition"
      >
        Contact Me
      </Link>
    </section>
  );
}

export default CTA;