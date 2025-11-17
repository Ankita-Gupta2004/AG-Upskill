import "./cards.css";

const cardData = [
  {
    title: "Code Playground",
    description: "Test your coding skills. Click to open coding playground.",
    action: () => window.location.href = "/codingPlatform",
  },
  {
    title: "Create Your resume",
    description: "Build a professional resume with our easy-to-use resume builder.",
    action: () => window.location.href = "/resume-builder",
  },
  {
    title: "Exam Preparation Tips",
    description: "Strategies and advice to help you maximize your study efficiency.",
    action: () => window.location.href = "/exam-tips",
  },
  {
    title: "Detailed Notes",
    description: "Well-organized class notes with diagrams and explanations.",
    action: (onStartClick) => onStartClick("Detailed Notes"),
  },
  {
    title: "Syllabus",
    description: "Download, browse, and track your syllabus anytime",
    action: () => window.open("/pdf/syllabus.pdf", "_blank"),
  },
  {
    title: "Your pending tasks",
    description: "Review and manage your pending academic tasks efficiently.",
    action: () => window.location.href = "/pending-tasks",
  },
];

function Cards({ onStartClick }) {
  return (
    <div className="slider">
      <div className="slider-track">
        {[...cardData, ...cardData].map(({ title, description, action }, index) => (
          <div key={index} className="card-style">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="card-btn-style">
              <button className="card-btn" onClick={() => action(onStartClick)}>
                Click
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
