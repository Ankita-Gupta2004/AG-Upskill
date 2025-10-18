import './About.css';

function About() {
  return (
    <div className="about-container">
      <section className="intro-section">
        <h1>👋 Hi, I'm Ankita Gupta</h1>
        <p>
          A tech enthusiast passionate about engineering, full-stack development, and building helpful resources for students.
        </p>
      </section>

      <section className="section">
        <h2>🚀 Mission</h2>
        <p>
          To empower students by providing curated academic resources, insightful tips, and an organized platform to enhance their learning journey.
        </p>
      </section>

      <section className="section">
        <h2>💡 What I Do</h2>
        <ul>
          <li>✏️ Build and share semester-wise study material</li>
          <li>📚 Design easy-to-navigate notes and resources</li>
          <li>🛠️ Explore tech, build projects, and solve problems</li>
        </ul>
      </section>

      <section className="section">
        <h2>🌐 Connect With Me</h2>
        <p>
          I'm always open to collaborations, ideas, and feedback. Let’s grow together!
        </p>
        <a
          href="https://www.linkedin.com/in/ankita-gupta-44b251296"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          🔗 LinkedIn
        </a>
        <br />
        <a
          href="https://pin.it/pdXQvavuv"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          📌 Pinterest
        </a>
      </section>
    </div>
  );
}

export default About;
