import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tech, github, live } = project

  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tags">
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="card-links">
        {github && <a href={github} target="_blank" rel="noreferrer">GitHub</a>}
        {live && <a href={live} target="_blank" rel="noreferrer">Live</a>}
      </div>
    </article>
  )
}
