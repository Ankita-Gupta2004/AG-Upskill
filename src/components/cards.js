import "./cards.css";

const cardData = [
  {
    title: "Previous Year Papers",
    description: "Download past exam papers to see common question trends.",
  },
  {
    title: "Trending Topics",
    description:
      "Discover the hottest topics students are reviewing right now!",
  },
  {
    title: "Exam Preparation Tips",
    description:
      "Strategies and advice to help you maximize your study efficiency.",
  },
  {
    title: "Detailed Notes",
    description: "Well-organized class notes with diagrams and explanations.",
  },
  {
    title: "Syllabus",
    description: "Download, browse, and track your syllabus anytime",
  },
  {
    title: "Study Resources",
    description: "Formula sheets, flowcharts, lab manuals — all in one spot.",
  },
];

function Cards({ onStartClick }) {
  const handleClick = (title) => {
    switch (title) {
      case "Previous Year Papers":
        console.log("Clicked on Previous Year Papers");
        // Add your functionality here
        break;
      case "Trending Topics":
        console.log("Clicked on Trending Topics");
        // Add your functionality here
        break;
      case "Exam Preparation Tips":
        console.log("Clicked on Exam Preparation Tips");
        // Add your functionality here
        break;
      case "Detailed Notes":
        onStartClick(title);
        console.log("Clicked on Detailed Notes");
        // Add your functionality here
        break;
      case "Syllabus":
        console.log("Clicked on Syllabus");
        // Add your functionality here
        break;
      case "Study Resources":
        console.log("Clicked on Study Resources");
        // Add your functionality here
        break;
      default:
        console.log("Unknown Card");
    }
  };

  return (
    <div className="slider">
      <div className="slider-track">
        {[...cardData, ...cardData].map(({ title, description }, index) => (
          <div key={index} className="card-style">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="card-btn-style">
              <button className="card-btn"  onClick={() => handleClick(title)}>Click</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
