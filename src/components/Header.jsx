import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/resume-career", label: "Resume & Career" },
  { to: "/cover-letter", label: "Cover Letter" },
  { to: "/portfolio", label: "Portfolio" }
];

export default function Header() {
  return (
    <header className="site-header no-print">
      <div className="header-inner">
        <NavLink to="/" className="brand">
          Kim Seoyoung
        </NavLink>
        <nav className="main-nav" aria-label="주요 문서">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
