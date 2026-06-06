import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_adh5jgk",
        "template_37n6ki8",
        form.current,
        "jYa7cj2qShULpfvBL"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="px-6 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Contact <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Interested in working together or hiring me? Feel free
          to reach out through the form or my social profiles.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg"
          >
            <h3 className="text-2xl font-bold mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-purple-400 text-xl" />
                <span className="text-gray-300">
                  mdfareedcbr@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-purple-400 text-xl" />
                <a
                  href="https://www.linkedin.com/in/md-fareeduddin/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-purple-400"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-purple-400 text-xl" />
                <a
                  href="https://github.com/Fareedcbr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-purple-400"
                >
                  GitHub Profile
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-purple-400 text-xl" />
                <span className="text-gray-300">
                  India
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-purple-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-purple-500"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-purple-500 resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-gradient-to-r
                  from-purple-600
                  to-pink-500
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:scale-[1.02]
                  transition
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-purple-400">
                  {success}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;