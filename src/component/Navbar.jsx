import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Navbar">
      <Link to="/" className="navbar-logo">
        <span>Good Health</span>
      </Link>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
          Home
        </NavLink>
        <br />

        <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
          About
        </NavLink>
        <br />

        <Link to="/login" className="nav-btn-login">Login</Link>
        <br />

        <Link to="/signup" className="nav-btn-register">Register</Link>
        
      </div>

      <button
        className="navbar-hamburger"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;