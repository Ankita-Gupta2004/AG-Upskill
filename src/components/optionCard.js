import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./optionCard.css";
import AuthModal from "./AuthModal";
import { isLoggedIn } from "../utils/authUtils";
import { openPdf } from "../utils/pdfUtils";

function OptionCard({ title, subjectName }) {
  const [liked, setLiked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    if (isLoggedIn()) {
      openPdf(subjectName, title); // open PDF if logged in
    } else {
      setShowModal(true); // show login/create modal if not logged in
    }
  };

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const togglePopup = (e) => {
    e.stopPropagation();
    setShowPopup(!showPopup);
  };

  const handleDownloadClick = (e) => {
    e.stopPropagation();
    if (isLoggedIn()) {
      openPdf(subjectName, title); // download/open PDF
    } else {
      setShowModal(true);
    }
    setShowPopup(false);
  };

  return (
    <>
      <div className="option-card" onClick={handleCardClick}>
        <div className="card-header">
          <h3>{title}</h3>

          <div className="icons">
            <span onClick={toggleLike} className="icon heart-icon">
              {liked ? <FaHeart color="red" /> : <FaRegHeart />}
            </span>

            <span onClick={togglePopup} className="icon dots-icon">
              <BsThreeDotsVertical />
            </span>

            {showPopup && (
              <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                <p onClick={handleDownloadClick}>Download</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default OptionCard;
