import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";
import "./header.css";

function Header({ onStartClick, onCodeClick }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="header-container">
      <header className="header">
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
                Semesters
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a
                href="#codecraft-section"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("codecraft-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                CodeCraft
              </a>
            </li>
            <li>
              <FaUserCircle className="account-icon" onClick={goToDashboard} />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
