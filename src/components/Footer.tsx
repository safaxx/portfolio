import { socials } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer container">
      <ul className="footer-links">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
          </li>
        ))}
      </ul>
      <p className="muted">© {new Date().getFullYear()}</p>
    </footer>
  )
}
