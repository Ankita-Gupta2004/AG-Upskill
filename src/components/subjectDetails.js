import { useParams } from "react-router-dom";
import { openPdf } from "../utils/pdfUtils"; // adjust the path
import "./subjectDetails.css";
import OptionCard from "./optionCard";

const options = ["Syllabus", "Unit 1", "Unit 2", "Unit 3", "Unit 4"];

function SubjectDetails() {
  const { subjectNaame } = useParams();

  const handleOptionClick = (option) => {
    openPdf(subjectNaame, option);
  };

  return (
    <div className="subject-details-page">
      <h2 className="heading-subject">{subjectNaame}</h2>
      <p className="para-subject">Select an option:</p>
      <div className="options-grid">
        {options.map((option) => (
          <OptionCard
            key={option}
            title={option}
            subjectName={subjectNaame}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </div>
    </div>
  );
}

export default SubjectDetails;
