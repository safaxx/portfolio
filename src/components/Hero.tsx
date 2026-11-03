import { profile, socials } from "../data/profile";
import SocialIcon from "./SocialIcon";

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero-content">
        {/* <p className="hero-greeting">Hey, I'm</p> */}
        <h1>Hey, I'm Safa!</h1>
        <h2>{profile.title}</h2>
        {/* <p className="hero-tagline">{profile.tagline}</p> */}
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            See my work
          </a>
          <a href={profile.resume} className="button" target="_blank" rel="noreferrer">
            My Resume
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              className="button button-icon"
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
            >
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
