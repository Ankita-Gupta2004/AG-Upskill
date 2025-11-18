import React, { useState } from "react";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import "./resumeBuilder.css";

/**
 * Dynamic Resume Builder
 * - Live preview on the right
 * - Add/remove experience & education
 * - Download uses window.print() (print CSS hides form)
 */

const emptyExp = () => ({
  company: "",
  title: "",
  start: "",
  end: "",
  location: "",
  details: "",
});

const emptyEdu = () => ({
  institution: "",
  degree: "",
  start: "",
  end: "",
  location: "",
  details: "",
});

export default function ResumeBuilder() {
  const [personal, setPersonal] = useState({
    fullName: "Andrew O'Sullivan",
    jobTitle: "Product Manager",
    email: "andrew@osulli.com",
    phone: "+01 111 111 15",
    location: "Obere Lände 23, 12345 Berlin",
    linkedin: "andrewosullivan",
  });

  const [summary, setSummary] = useState(
    "Experienced Product Manager with a proven track record in the development and management of products throughout their lifecycle. Passionate, creative, and results-oriented."
  );

  const [skills, setSkills] = useState(
    "Product development, Team leadership, Market analysis, Agile, Communication"
  );

  const [experience, setExperience] = useState([
    {
      company: "Tideline GmbH",
      title: "Product Manager",
      start: "08/2018",
      end: "07/2023",
      location: "Berlin, Germany",
      details:
        "Led a cross-functional team of 10 people in the development of a new product line, resulting in a 20% increase in revenue.",
    },
    {
      company: "Solutions Inc",
      title: "Product Specialist",
      start: "04/2015",
      end: "07/2018",
      location: "Munich, Germany",
      details:
        "Developed and implemented a product strategy for the European market, resulting in 25% revenue growth.",
    },
  ]);

  const [education, setEducation] = useState([
    {
      institution: "Master of Business Administration (MBA) — University",
      degree: "",
      start: "08/2013",
      end: "07/2015",
      location: "Munich, Germany",
      details: "",
    },
    {
      institution:
        "Bachelor of Engineering in Information Technology — Technical University",
      degree: "",
      start: "09/2009",
      end: "07/2013",
      location: "Vienna, Austria",
      details: "",
    },
  ]);

  // Handlers
  const handlePersonal = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const addExperience = () => setExperience((s) => [...s, emptyExp()]);
  const removeExperience = (i) =>
    setExperience((s) => s.filter((_, idx) => idx !== i));
  const updateExperience = (i, key, val) =>
    setExperience((s) =>
      s.map((it, idx) => (idx === i ? { ...it, [key]: val } : it))
    );

  const addEducation = () => setEducation((s) => [...s, emptyEdu()]);
  const removeEducation = (i) =>
    setEducation((s) => s.filter((_, idx) => idx !== i));
  const updateEducation = (i, key, val) =>
    setEducation((s) =>
      s.map((it, idx) => (idx === i ? { ...it, [key]: val } : it))
    );

  const handleDownload = () => {
    // print preview area — print CSS hides the left form
    window.print();
  };

  return (
    <div className="rb-page">
      <div className="rb-inner">
        {/* LEFT: FORM */}
        <aside className="rb-form">
          <h2>Resume Builder</h2>

          <section className="rb-section">
            <label>Full name</label>
            <input
              name="fullName"
              value={personal.fullName}
              onChange={handlePersonal}
            />

            <label>Job title</label>
            <input
              name="jobTitle"
              value={personal.jobTitle}
              onChange={handlePersonal}
            />

            <label>Email</label>
            <input
              name="email"
              value={personal.email}
              onChange={handlePersonal}
            />

            <label>Phone</label>
            <input
              name="phone"
              value={personal.phone}
              onChange={handlePersonal}
            />

            <label>Location</label>
            <input
              name="location"
              value={personal.location}
              onChange={handlePersonal}
            />

            <label>LinkedIn / website</label>
            <input
              name="linkedin"
              value={personal.linkedin}
              onChange={handlePersonal}
            />
          </section>

          <section className="rb-section">
            <label>Profile summary</label>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows={4}
            />
          </section>

          <section className="rb-section">
            <label>Skills (comma separated)</label>
            <input value={skills} onChange={(e) => setSkills(e.target.value)} />
          </section>

          <section className="rb-section">
            <div className="rb-row">
              <h3>Experience</h3>
              <button className="small" onClick={addExperience}>
                + Add
              </button>
            </div>

            {experience.map((exp, i) => (
              <div key={i} className="rb-mini">
                <input
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) =>
                    updateExperience(i, "company", e.target.value)
                  }
                />
                <input
                  placeholder="Title"
                  value={exp.title}
                  onChange={(e) => updateExperience(i, "title", e.target.value)}
                />
                <div className="rb-inline">
                  <input
                    placeholder="Start"
                    value={exp.start}
                    onChange={(e) =>
                      updateExperience(i, "start", e.target.value)
                    }
                  />
                  <input
                    placeholder="End"
                    value={exp.end}
                    onChange={(e) => updateExperience(i, "end", e.target.value)}
                  />
                </div>
                <input
                  placeholder="Location"
                  value={exp.location}
                  onChange={(e) =>
                    updateExperience(i, "location", e.target.value)
                  }
                />
                <textarea
                  placeholder="Details"
                  rows={2}
                  value={exp.details}
                  onChange={(e) =>
                    updateExperience(i, "details", e.target.value)
                  }
                />
                <div className="rb-mini-actions">
                  <button
                    className="small danger"
                    onClick={() => removeExperience(i)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </section>

          <section className="rb-section">
            <div className="rb-row">
              <h3>Education</h3>
              <button className="small" onClick={addEducation}>
                + Add
              </button>
            </div>

            {education.map((ed, i) => (
              <div key={i} className="rb-mini">
                <input
                  placeholder="Institution"
                  value={ed.institution}
                  onChange={(e) =>
                    updateEducation(i, "institution", e.target.value)
                  }
                />
                <input
                  placeholder="Degree / Program"
                  value={ed.degree}
                  onChange={(e) => updateEducation(i, "degree", e.target.value)}
                />
                <div className="rb-inline">
                  <input
                    placeholder="Start"
                    value={ed.start}
                    onChange={(e) =>
                      updateEducation(i, "start", e.target.value)
                    }
                  />
                  <input
                    placeholder="End"
                    value={ed.end}
                    onChange={(e) => updateEducation(i, "end", e.target.value)}
                  />
                </div>
                <input
                  placeholder="Location"
                  value={ed.location}
                  onChange={(e) =>
                    updateEducation(i, "location", e.target.value)
                  }
                />
                <textarea
                  placeholder="Details"
                  rows={2}
                  value={ed.details}
                  onChange={(e) =>
                    updateEducation(i, "details", e.target.value)
                  }
                />
                <div className="rb-mini-actions">
                  <button
                    className="small danger"
                    onClick={() => removeEducation(i)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </section>

          <div className="rb-form-actions">
            <button className="primary" onClick={handleDownload}>
              Download / Print
            </button>
            <button
              className="secondary"
              onClick={() => {
                // quick sample fill
                setPersonal({
                  fullName: "Jane Doe",
                  jobTitle: "Software Engineer",
                  email: "jane@example.com",
                  phone: "+91 99999 99999",
                  location: "Mumbai, India",
                  linkedin: "linkedin.com/in/janedoe",
                });
                setSummary(
                  "Ambitious software engineer with experience building full-stack applications."
                );
                setSkills("JavaScript, React, Node.js, SQL");
              }}
            >
              Fill sample
            </button>
          </div>
        </aside>

        {/* RIGHT: PREVIEW */}
        <main className="rb-preview" id="rb-print-area">
          <div className="resume-card">
            <header className="res-header">
              <h1 className="res-name">{personal.fullName || "Your Name"}</h1>
              <div className="res-title">{personal.jobTitle}</div>
              <div className="res-contact">
                <span className="ic"> </span>
                <span>{personal.location}</span>
                <span className="ic">|</span>
                <span>{personal.email}</span>
                <span className="ic">|</span>
                <span>{personal.phone}</span>
                {personal.linkedin && <span className="ic">|</span>}
                {personal.linkedin && <span>{personal.linkedin}</span>}
              </div>
            </header>
            <section className="res-section res-summary">
              <h4>PROFILE</h4>
              <p>{summary}</p>
            </section>

            <section className="res-section res-experience">
              <h4>PROFESSIONAL EXPERIENCE</h4>
              {experience.map((e, i) => (
                <div className="res-item" key={i}>
                  <div className="res-item-left">
                    <div className="res-role">{e.title || "Title"}</div>
                    <div className="res-company">{e.company || "Company"}</div>
                  </div>
                  <div className="res-item-right">
                    <div className="res-duration">
                      {e.start} — {e.end}
                    </div>
                    <div className="res-location">{e.location}</div>
                  </div>
                  <div className="res-item-details">
                    <ul>
                      {e.details ? (
                        e.details
                          .split("\n")
                          .map((d, idx) => <li key={idx}>{d}</li>)
                      ) : (
                        <li>Describe your impact and results (metrics help)</li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </section>

            <section className="res-section res-education">
              <h4>EDUCATION</h4>
              {education.map((ed, i) => (
                <div className="res-item" key={i}>
                  <div className="res-item-left">
                    <div className="res-role">{ed.degree}</div>
                    <div className="res-company">{ed.institution}</div>
                  </div>
                  <div className="res-item-right">
                    <div className="res-duration">
                      {ed.start} — {ed.end}
                    </div>
                    <div className="res-location">{ed.location}</div>
                  </div>
                  {ed.details && (
                    <div className="res-item-details">
                      <p>{ed.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </section>

            <section className="res-section res-skills">
              <h4>SKILLS</h4>
              <div className="skill-list">
                {skills.split(",").map(
                  (s, i) =>
                    s.trim() && (
                      <span className="skill-pill" key={i}>
                        {s.trim()}
                      </span>
                    )
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
