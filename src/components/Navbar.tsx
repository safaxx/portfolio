import { profile } from '../data/profile'

const links = ['projects', 'about', 'experience', 'contact']

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <a href="#top" className="navbar-logo">{profile.name}</a>
        <ul className="navbar-links">
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`}>{id}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
