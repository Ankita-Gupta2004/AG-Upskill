import "./footer.css";
import { Link } from "react-router-dom";

import { FaLinkedinIn, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = ({ onStartClick }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-foot">
          <img src="/logo2.png" alt="Logo" className="logo-foot" />
          <h6>AG UPSKILLS</h6>
        </div>
        <h2 className="foot-heading">
          We provide free and organized B.Tech majors.
          <br></br> Simplify your study and ace your exams with our curated
          resources.
        </h2>

        {/* About Section */}
        <div className="footer-section">
          <h4 className="footer-title">About Us</h4>
          <p className="footer-text">
            Hi! I'm Ankit Gupta, a Computer Science Engineering student at
            Deenbandhu Chhotu Ram University of Science and Technology. I
            created "AG UPSKILLS" to help fellow engineering students access
            well-organized, reliable, and free academic resources.
          </p>
          <br></br>
          <p className="footer-text">
            My mission is to make quality study materials easily accessible for
            engineering students. Right now, the platform focuses on Computer
            Science (CSE) notes, but I’m actively working to expand it to
            include other branches like ECE, EE and others in the near future.
            Stay tuned — more is coming!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-list">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button onClick={onStartClick} className="link-button">
                Semester Notes
              </button>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Popular Branches */}
        <div className="footer-section">
          <h4 className="footer-title">Popular Subjects</h4>
          <ul className="footer-list">
            <li>
              <a href="/notes/cse">Operating Systems</a>
            </li>
            <li>
              <a href="/notes/ece">Computer Networks</a>
            </li>
            <li>
              <a href="/notes/mech">Web & Internet Technology</a>
            </li>
            <li>
              <a href="/notes/civil">Design & Analysis of Algorithm</a>
            </li>
            <li>
              <a href="/notes/it">Object Oriented Programming</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        {/* Contact & Follow */}
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <ul className="footer-follow-list">
            <li>
              <a
                href="https://www.linkedin.com/in/ankita-gupta-44b251296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="follow-icon" />
                <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="follow-icon" />
                <span>Youtube</span>
              </a>
            </li>
            <li>
              <a
                href="https://pin.it/pdXQvavuv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest className="follow-icon" />
                <span>Pinterest</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 AG UPSKILLS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
