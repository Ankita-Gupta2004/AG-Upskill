import { useState, forwardRef } from "react";
import "./notes.css";
import { useNavigate } from "react-router-dom";

const semesters = [
  "Semester 1",
  "Semester 2",
  "Semester 3",
  "Semester 4",
  "Semester 5",
  "Semester 6",
  "Semester 7",
  "Semester 8",
];

const semesterContent = {
  "Semester 1": ["Maths", "Physics", "Chemistry", "BEE"],
  "Semester 2": ["Maths-II", "Programming", "ED", "Mechanics"],
  "Semester 3": [
    "Data Structure & Algorithm",
    "Computer Organization  Arch.",
    "Digital System Design",
    "Math-III",
    "Engineering Economics",
    "IT Workshop",
    "DSA Lab",
    "DSD Lab",
    "Constitution of India",
  ],
  "Semester 4": [
    "Web & Internet Technology",
    "Operating System",
    "Design & Analysis of Algorithm",
    "Discrete Mathematics",
    "Organizational Behaviour",
    "WIT Lab",
    "OS Lab",
    "DAA Lab",
    "Environment Science",
  ],
  "Semester 5": [
    "Object Oriented Programming",
    "Database Management System",
    "Computer Networks",
    "Theory of Computation",
    "Software Engineering",
    "OOPS Lab",
    "DBMS Lab",
    "Programming Languages",
  ],
  "Semester 6": [
    "Compiler Design",
    "Soft Skill & Interpersonal Skills",
    "Industrial Safety",
    "Software Testing",
    "Data Analysis with Python",
    "DAP Lab",
    "CD Lab",
  ],
  "Semester 7": ["Maths-II", "Programming", "ED", "Mechanics"],
  "Semester 8": ["Maths-II", "Programming", "ED", "Mechanics"],
};

const Notes = forwardRef((props, notesRef) => {
  const [activeSem, setActiveSem] = useState("Semester 1");
  const navigatee = useNavigate();

  return (
    <div ref={notesRef} className="notes-section">
      <div className="notes-header">
        <h2>Explore Notes by Semester</h2>
        <p className="subtext">
          Choose a semester to view subjects and study materials curated just
          for you.
        </p>
      </div>

      <div className="semester-scroll">
        {semesters.map((sem) => (
          <button
            key={sem}
            className={`sem-tab ${activeSem === sem ? "active" : ""}`}
            onClick={() => setActiveSem(sem)}
          >
            {sem}
          </button>
        ))}
      </div>

      <div className="subject-card-grid">
        {(semesterContent[activeSem] || []).map((subject, index) => (
          <div className="subject-card" key={index}>
            <h4>{subject}</h4>
            <p>View notes, assignments & solved papers</p>
            <button
              onClick={() =>
                navigatee(`/subject/${encodeURIComponent(subject)}`)
              }
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Notes;
