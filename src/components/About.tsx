import { profile } from '../data/profile'
import Section from './Section'
import SkillGroups from './SkillGroups'

export default function About() {
  return (
    <Section id="about" title="About">
      {profile.about.map((para) => (
        <p key={para}>{para}</p>
      ))}
      <SkillGroups />
    </Section>
  )
}
