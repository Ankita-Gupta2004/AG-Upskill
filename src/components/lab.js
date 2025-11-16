import "./lab.css";
// import { openPdf } from "../utils/pdfUtils";

import HeartToggle from "./HeartToggle"; // adjust path if needed

const labContent = [
  {
    title: "DSA Lab",
    description: "Hands-on practice with data structures and algorithmic problem solving.",
  },
  {
    title: "DSD Lab",
    description: "Design and simulate digital circuits with combinational and sequential logic.",
  },
  {
    title: "IT Lab",
    description: "Practical experiments and simulations using MATLAB software and tools.",
  },
  {
    title: "WIT Lab",
    description: "Develop and test web apps using front-end and back-end technologies.",
  },
  {
    title: "OS Lab",
    description: "Explore process, memory, and file system management in operating systems.",
  },
  {
    title: "DAA Lab",
    description: "Implement and analyze algorithmic strategies using programming techniques.",
  },
  {
    title: "OOPS Lab",
    description: "Learn object-oriented programming with C++ using classes and inheritance.",
  },
  {
    title: "DBMS Lab",
    description: "Design, query, and manage databases using SQL and architecture concepts.",
  },
  {
    title: "Professional Training Level-II",
    description: "Gain real-world technical experience and professional soft skills training.",
  },
  {
    title: "CD Lab",
    description: "Implement lexical analyzers, parsers, and generators in compiler construction.",
  },
  {
    title: "DAP Lab",
    description: "Learn data analysis, cleaning, and visualization using Python tools.",
  },
  {
    title: "ML Lab",
    description: "Apply supervised and unsupervised machine learning algorithms to problems.",
  },
];

function Lab() {

  
  return (
    <div className="lab-Manual">
      <div className="heading">
        <h1>All Lab Manuals</h1>
        <p>Your lab manuals. One click away.</p>
      </div>

      <div className="lab-container">
        {labContent.map(({ title, description }, index) => (
          <div key={index} className="lab-style">
            <h3>{title}</h3>

            <p>{description}</p>

            <div className="lab-btn-style">
              <HeartToggle />

              <button className="lab-btn">
                Click
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Lab;
