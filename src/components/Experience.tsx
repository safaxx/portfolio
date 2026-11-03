import { experience } from '../data/experience'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" title="Experience" compact>
      <ul className="job-list">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="job">
            <div className="job-header">
              <h3>
                {job.role} <span className="muted">@ {job.company}</span>
              </h3>
              <span className="job-period">{job.period}</span>
            </div>
            {job.points.length > 0 && (
              <p className="job-summary muted">{job.points.join(' · ')}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
