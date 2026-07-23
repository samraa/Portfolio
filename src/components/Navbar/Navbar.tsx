// import { FaBars } from "react-icons/fa";
// import "./Navbar.css";

// function Navbar() {

//   return (

// <nav className="navbar">

// <div className="logo">

// Sumra Ahmed

// </div>

// <ul>

// <li><a href="#home">Home</a></li>

// <li><a href="#about">About</a></li>

// <li><a href="#skills">Skills</a></li>

// <li><a href="#experience">Experience</a></li>

// <li><a href="#projects">Projects</a></li>

// <li><a href="#projects">Certifications & Appreciations</a></li>

// <li><a href="#contact">Contact</a></li>

// </ul>

// <button className="menu">

// <FaBars/>

// </button>

// </nav>

//   )

// }

// export default Navbar;

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <div className="logo">
        Sumra Ahmed
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>

        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>

        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>

        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>

        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>

        <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>

        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

      </ul>

      <button
        className="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </nav>

  );
}

export default Navbar;