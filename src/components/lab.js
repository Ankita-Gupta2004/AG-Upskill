import "./lab.css";
import HeartToggle from "./HeartToggle";

const labContent = [
  {
    title: "DSA Lab",
    description:
      "Hands-on practice with data structures and algorithmic problem solving.",
    pdf: "/labs/dsa.pdf",
  },
  {
    title: "DSD Lab",
    description:
      "Design and simulate digital circuits with combinational and sequential logic.",
    pdf: "/labs/dsd.pdf",
  },
  {
    title: "IT Lab",
    description:
      "Practical experiments and simulations using MATLAB software and tools.",
    pdf: "/labs/it.pdf",
  },
  {
    title: "WIT Lab",
    description:
      "Develop and test web apps using front-end and back-end technologies.",
    pdf: "/labs/wit.pdf",
  },
  {
    title: "OS Lab",
    description:
      "Explore process, memory, and file system management in operating systems.",
    pdf: "/labs/os.pdf",
  },
  {
    title: "DAA Lab",
    description:
      "Implement and analyze algorithmic strategies using programming techniques.",
    pdf: "/labs/daa.pdf",
  },
  {
    title: "OOPS Lab",
    description:
      "Learn object-oriented programming with C++ using classes and inheritance.",
    pdf: "/labs/oops.pdf",
  },
  {
    title: "DBMS Lab",
    description:
      "Design, query, and manage databases using SQL and architecture concepts.",
    pdf: "/labs/DBMS.pdf",
  },
  {
    title: "Professional Training Level-II",
    description:
      "Gain real-world technical experience and professional soft skills training.",
    pdf: "/labs/pt2.pdf",
  },
  {
    title: "Professional Training Level-III",
    description:
      "Gain real-world technical experience and professional soft skills training.",
    pdf: "/labs/pt3.pdf",
  },
  {
    title: "CD Lab",
    description:
      "Implement lexical analyzers, parsers, and generators in compiler construction.",
    pdf: "/labs/cd.pdf",
  },
  {
    title: "DAP Lab",
    description:
      "Learn data analysis, cleaning, and visualization using Python tools.",
    pdf: "/labs/dap.pdf",
  },
  {
    title: "ML Lab",
    description:
      "Apply supervised and unsupervised machine learning algorithms to problems.",
    pdf: "/labs/ml.pdf",
  },
  {
    title: "AI Lab",
    description:
      "Apply ANN, CNN algorithms to problems.",
    pdf: "/labs/ai.pdf",
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
        {labContent.map(({ title, description, pdf }, index) => (
          <div key={index} className="lab-style">
            <h3>{title}</h3>

            <p>{description}</p>

            <div className="lab-btn-style">
              <HeartToggle />

              <button
                className="lab-btn"
                onClick={() => window.open(pdf, "_blank")}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lab;
