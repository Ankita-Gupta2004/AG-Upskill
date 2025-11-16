import { useState, forwardRef } from "react";
import "./notes.css";

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
  "Semester 1": [
    {
      name: "Maths",
      desc: "Description for Maths",
      pdf: "/notes/sem1/maths.pdf",
    },
    {
      name: "Physics",
      desc: "Description for Physics",
      pdf: "/notes/sem1/physics.pdf",
    },
    {
      name: "Chemistry",
      desc: "Description for Chemistry",
      pdf: "/notes/sem1/chemistry.pdf",
    },
    { name: "BEE", desc: "Description for BEE", pdf: "/notes/sem1/bee.pdf" },
  ],

  "Semester 2": [
    {
      name: "Maths-II",
      desc: "Description for Maths-II",
      pdf: "/notes/sem2/maths2.pdf",
    },
    {
      name: "Programming",
      desc: "Description for Programming",
      pdf: "/notes/sem2/programming.pdf",
    },
    { name: "ED", desc: "Description for ED", pdf: "/notes/sem2/ed.pdf" },
    {
      name: "Mechanics",
      desc: "Description for Mechanics",
      pdf: "/notes/sem2/mechanics.pdf",
    },
  ],

  "Semester 3": [
    {
      name: "Data Structure & Algorithm",
      desc: "Coming soon",
      pdf: "/notes/sem3/dsa.pdf",
    },
    {
      name: "Computer Organization Arch.",
      desc: "Coming soon",
      pdf: "/notes/sem3/coa.pdf",
    },
    {
      name: "Digital System Design",
      desc: "Coming soon",
      pdf: "/notes/sem3/dsd.pdf",
    },
    {
      name: "Math-III",
      desc: "Coming soon",
      pdf: "/notes/sem3/math3.pdf",
    },
    {
      name: "Engineering Economics",
      desc: "Coming soon",
      pdf: "/notes/sem3/eco.pdf",
    },
    {
      name: "IT Workshop",
      desc: "IT lab file is here - MATLAB",
      pdf: "/labs/it.pdf",
    },
    {
      name: "DSA Lab",
      desc: "IT lab file is here - C++",
      pdf: "/labs/dsa.pdf",
    },
    {
      name: "DSD Lab",
      desc: "Coming soon",
      pdf: "/notes/sem3/dsd_lab.pdf",
    },
    {
      name: "Constitution of India",
      desc: "Coming soon",
      pdf: "/notes/sem3/constitution.pdf",
    },
  ],

  "Semester 4": [
    {
      name: "Web & Internet Technology",
      desc: "Description for WIT",
      pdf: "/notes/sem4/wit.pdf",
    },
    {
      name: "Operating System",
      desc: "Description for OS",
      pdf: "/notes/sem4/os.pdf",
    },
    {
      name: "Design & Analysis of Algorithm",
      desc: "Description for DAA",
      pdf: "/notes/sem4/daa.pdf",
    },
    {
      name: "Discrete Mathematics",
      desc: "Description for DM",
      pdf: "/notes/sem4/dm.pdf",
    },
    {
      name: "Organizational Behaviour",
      desc: "Description for OB",
      pdf: "/notes/sem4/ob.pdf",
    },
    {
      name: "WIT Lab",
      desc: "WIT lab file is here - Web Development",
      pdf: "/labs/wit.pdf",
    },
    {
      name: "OS Lab",
      desc: "Coming soon",
      pdf: "/labs/os.pdf",
    },
    {
      name: "DAA Lab",
      desc: "DAA lab file is here - Java",
      pdf: "/labs/daa.pdf",
    },
    {
      name: "Environment Science",
      desc: "Description for Environment Science",
      pdf: "/notes/sem4/es.pdf",
    },
  ],

  "Semester 5": [
    {
      name: "Object Oriented Programming",
      desc: "Description for OOP",
      pdf: "/notes/sem5/oops.pdf",
    },
    {
      name: "Database Management System",
      desc: "Description for DBMS",
      pdf: "/notes/sem5/dbms.pdf",
    },
    {
      name: "Computer Networks",
      desc: "Description for CN",
      pdf: "/notes/sem5/cn.pdf",
    },
    {
      name: "Theory of Computation",
      desc: "Description for TOC",
      pdf: "/notes/sem5/toc.pdf",
    },
    {
      name: "Software Engineering",
      desc: "Description for SE",
      pdf: "/notes/sem5/se.pdf",
    },
    {
      name: "OOPS Lab",
      desc: "Coming soon",
      pdf: "/notes/sem5/oops_lab.pdf",
    },
    {
      name: "DBMS Lab",
      desc: "DBMS lab file is here - SQL",
      pdf: "/labs/dbms.pdf",
    },
    {
      name: "Programming Languages",
      desc: "Coming soon",
      pdf: "/notes/sem5/pl.pdf",
    },
    {
      name: "PT Level-II",
      desc: "PT L-2 lab file is here - Project Documentation",
      pdf: "/labs/pt2.pdf",
    },
  ],

  "Semester 6": [
    {
      name: "Compiler Design",
      desc: "Description for Compiler Design",
      pdf: "/notes/sem6/cd.pdf",
    },
    {
      name: "Soft Skill & Interpersonal Skills",
      desc: "Description for Soft Skills",
      pdf: "/notes/sem6/softskills.pdf",
    },
    {
      name: "Industrial Safety",
      desc: "Description for Industrial Safety",
      pdf: "/notes/sem6/industrial_safety.pdf",
    },
    {
      name: "Software Testing",
      desc: "Description for Software Testing",
      pdf: "/notes/sem6/testing.pdf",
    },
    {
      name: "Data Analysis with Python",
      desc: "Description for Data Analysis",
      pdf: "/notes/sem6/dap.pdf",
    },
    {
      name: "DAP Lab",
      desc: "DAP lab file is here - Python",
      pdf: "/labs/dap.pdf",
    },
    {
      name: "CD Lab",
      desc: "CD lab file is here - C++",
      pdf: "/labs/cd.pdf",
    },
  ],

  "Semester 7": [
    {
      name: "Biology",
      desc: "Description for Subject 1",
      pdf: "/notes/sem7/sub1.pdf",
    },
    {
      name: "Green Computing",
      desc: "Description for Subject 2",
      pdf: "/notes/sem7/sub2.pdf",
    },
    {
      name: "Enterpeneurship",
      desc: "Description for Project Phase I",
      pdf: "/notes/sem7/project1.pdf",
    },
    {
      name: "SDEC",
      desc: "Description for Project Phase I",
      pdf: "/notes/sem7/project1.pdf",
    },
    {
      name: "Soft Computing",
      desc: "Description for Project Phase I",
      pdf: "/notes/sem7/project1.pdf",
    },
    {
      name: "PT Level-III",
      desc: "PT L-3 lab file is here - Project Documentation",
      pdf: "/labs/pt3.pdf",
    },
  ],

  "Semester 8": [
    {
      name: "Internship / Industrial Training",
      desc: "Complete internship guidelines and documentation.",
      pdf: "/notes/sem8/internship.pdf",
    },
    {
      name: "Project Phase–II",
      desc: "Final year project report & viva preparation.",
      pdf: "/notes/sem8/project2.pdf",
    },
    {
      name: "Seminar",
      desc: "Seminar presentation guidelines & sample topics.",
      pdf: "/notes/sem8/seminar.pdf",
    },
  ],
};

const Notes = forwardRef((props, notesRef) => {
  const [activeSem, setActiveSem] = useState("Semester 1");

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
            <h4>{subject.name}</h4>
            <p>{subject.desc}</p>
            <button onClick={() => window.open(subject.pdf, "_blank")}>
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Notes;
