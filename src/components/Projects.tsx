import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
