import experience from "../data/experience";

function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-12">
        Experience
      </h1>

      {experience.map((item, index) => (
        <div
          key={index}
          className="mb-8 border-l-2 border-purple-500 pl-6"
        >
          <h3 className="text-2xl font-bold">
            {item.company}
          </h3>

          <p className="text-purple-400">
            {item.duration}
          </p>

          <p className="text-gray-400 mt-3">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Experience;