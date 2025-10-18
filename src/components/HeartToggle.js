
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./HeartToggle.css"; 

function HeartToggle({ initialLiked = false }) {
  const [liked, setLiked] = useState(initialLiked);

  return (
    <span className="icon heart-icon" onClick={() => setLiked(!liked)}>
      {liked ? <FaHeart color="red" /> : <FaRegHeart />}
    </span>
  );
}

export default HeartToggle;
