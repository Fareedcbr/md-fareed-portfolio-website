function ProjectCard({ project }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <h3 className="text-2xl font-bold mb-3">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-500/20 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={project.github}>GitHub</a>
        <a href={project.demo}>Live Demo</a>
      </div>
    </div>
  );
}

export default ProjectCard;