import { profile } from '../data/profile'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact-box">
        <div>
          <p className="contact-heading">Don't be a stranger. Let's talk.</p>
          <p className="email-address">{profile.email}</p>
        </div>
        <a href={`mailto:${profile.email}`} className="button">Say hello</a>
      </div>
    </Section>
  )
}
