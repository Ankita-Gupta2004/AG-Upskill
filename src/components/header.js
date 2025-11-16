import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./header.css";

function Header({ onStartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleTools = () => {
    setToolsOpen((prev) => !prev);
  };

  return (
    <header className="header-container">
      <div className="header">
        <div className="logo">
          <img src="/logo2.png" alt="Logo" className="logo-img" />
          <h6>AG UPSKILLS</h6>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>

        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#" onClick={onStartClick}>
                Notes
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/playground">Playground</a>
            </li>
            <li className="dropdown">
              <span onClick={toggleTools} className="dropdown-title">
                Tools ▾
              </span>
              {toolsOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/tools/tool1">Tool 1</a>
                  </li>
                  <li>
                    <a href="/tools/tool2">Tool 2</a>
                  </li>
                  <li>
                    <a href="/tools/tool3">Tool 3</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
