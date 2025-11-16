import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./optionCard.css";


function OptionCard({ title, subjectName }) {
  const [liked, setLiked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);




  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const togglePopup = (e) => {
    e.stopPropagation();
    setShowPopup(!showPopup);
  };


  return (
    <>
      <div className="option-card">
        <div className="card-header">
          <h3>{title}</h3>

          <div className="icons">
            <span onClick={toggleLike} className="icon heart-icon">
              {liked ? <FaHeart color="red" /> : <FaRegHeart />}
            </span>

            <span onClick={togglePopup} className="icon dots-icon">
              <BsThreeDotsVertical />
            </span>

            
          </div>
        </div>
      </div>

    </>
  );
}

export default OptionCard;
