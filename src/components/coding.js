import "./coding.css";
// import { openPdf } from "../utils/pdfUtils";
import AuthModal from "./AuthModal";
import { useState } from "react";
import HeartToggle from "./HeartToggle";

const codeContent = [
  {
    title: "HTML",
    description:
      "Markup language to structure web content like text and images.",
  },
  {
    title: "CSS",
    description:
      "Stylesheet language for designing layout, colors, and animations.",
  },
  {
    title: "JavaScript",
    description:
      "Programming language to create interactive and dynamic web pages.",
  },
  {
    title: "Git & GitHub",
    description:
      "Tools for version control, collaboration, and managing code projects.",
  },
  {
    title: "MySQL",
    description:
      "Database system to store, organize, and retrieve application data.",
  },
];

function Coding() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (title) => {
    setShowModal("login"); // Show create account modal by default

    // openPdf(title, "notes");
  };
  return (
    <div className="coding-container" id="codecraft-section">
      <div className="code-heading">
        <h1>Have a Look on Coding Notes</h1>
        <p>Your Quick Guide to Core Coding Concepts</p>
      </div>
      <div className="coding-section">
        {codeContent.map(({ title, description }, index) => (
          <div key={index} className="code-style">
            <h3>{title}</h3>

            <p>{description}</p>

            <div className="code-btn-style">
              <HeartToggle />

              <button className="code-btn" onClick={() => handleClick(title)}>
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Coding;
