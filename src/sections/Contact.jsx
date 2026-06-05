import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-10"
      >

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Contact <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed text-center mb-12">
          Interested in working together or hiring me?
          Send me a message directly from here.
        </p>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-3xl mx-auto space-y-6"
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
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-center text-purple-400 mt-4">
              {success}
            </p>
          )}

        </form>

      </motion.div>
    </section>
  );
}

export default Contact;