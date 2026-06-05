function ExperiencePage() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24">
      <h1 className="text-5xl font-bold mb-12">
        Experience
      </h1>

      <div className="space-y-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold">
            MERN Stack Internship
          </h2>

          <p className="text-purple-400 mt-2">
            2025
          </p>

          <p className="text-gray-400 mt-4">
            Worked on modern web applications using
            MongoDB, Express, React and Node.js.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold">
            Deep Learning Project
          </h2>

          <p className="text-purple-400 mt-2">
            2025
          </p>

          <p className="text-gray-400 mt-4">
            Built a gesture recognition system using
            machine learning and computer vision.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;