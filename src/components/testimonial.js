import { useState } from "react";
import "./testimonial.css";
import AuthModal from "./AuthModal";

const testimonials = [
  {
    text: "These notes have been a game-changer for my studies! Clear, concise, and easy to understand. I improved my grades thanks to this amazing resource.",
    author: "— Anjali K., University Student",
    img: "photo1.png",
  },
  {
    text: "The study materials are well-organized and cover all the important topics. I was able to prepare for my exams with confidence.",
    author: "— Rahul M., College Freshman",
    img: "photo2.png",
  },
  {
    text: "I love how the notes simplify complex subjects. Perfect for quick revision before exams!",
    author: "— Priya S., Engineering Student",
    img: "photo3.png",
  },
  {
    text: "High-quality notes that helped me save time and learn efficiently. Highly recommend to all students!",
    author: "— Sameer D., High School Student",
    img: "photo4.png",
  },
  {
    text: "The detailed explanations and examples in the study materials made difficult topics easy to grasp. A must-have for every student.",
    author: "— Neha P., Postgraduate Student",
    img: "photo5.png",
  },
  {
    text: "Excellent notes that helped me score better and understand subjects deeply. Totally worth it!",
    author: "— Vikram S., Graduate Student",
    img: "photo6.png",
  },
];

function TestimonialCard({ text, author, img }) {
  return (
    <div className="review-card">
      <p>"{text}"</p>

      <div className="author-info">
        <img src={img} alt={author} className="author-photo" />
        <h4 className="author-name">{author}</h4>
      </div>
    </div>
  );
}

function Testimonial() {
  const [showModal, setShowModal] = useState(false);

  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const handleClick = () => {
    setShowModal("login"); // Show create account modal by default

    // openPdf(title, "notes");
  };
  return (
    <div className="testimonial-container">
      <div className="headings-container">
        <span className="ist-heading">
          <h3>See what students say</h3>
        </span>
        <div className="iind-heading">
          <h1>Learn from the best notes and study materials</h1>
        </div>
        <div className="iiird-heading">
          <p>Study smart with our focused, easy-to-understand notes.</p>
        </div>
      </div>

      <div className="testimonail-card-style">
              <TestimonialCard {...testimonials[index]} />

      </div>
      <div className="buttons">
        <button onClick={prevTestimonial}>
          <b>&lt;</b>
        </button>
        <button onClick={nextTestimonial}>
          <b>&gt;</b>
        </button>
        <button className="review-add-style" onClick={() => handleClick()}>Comment</button> {/* Moved here */}
      </div>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Testimonial;
