import './hero.css';

function Hero( { onStartClick }) {
  return (
    <div className="container">
      <div className="tag-line">
        <h1>Where Notes, Here Notes</h1>
        <h3>Your Companion for Every Semester</h3>
      </div>
      <div className="getStarted-btn">
        <button onClick={onStartClick}className="main-btn">
            Get Started 
        </button>
      </div>
    </div>
  );
}

export default Hero;
