import { education, skillGroups } from '../data/skills'

export default function SkillGroups() {
  return (
    <div className="skill-groups">
      <div className="edu-block">
        {education.logo && (
          <img className="edu-logo" src={education.logo} alt={education.school} />
        )}
        <div>
          <div className="edu-title">
            {education.degree} <span className="muted">@ {education.school}</span>
          </div>
          <p className="edu-desc muted">{education.description}</p>
        </div>
      </div>

      <hr className="edu-divider" />

      {skillGroups.map((group, i) => (
        <details key={group.label} className="skill-group" open={i === 0}>
          <summary className="skill-label">{group.label}</summary>
          <ul className="tags">
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  )
}
