import "./DashBoard.css";

function DashBoard() {
  return (
    <div className="dashBoard-container">
      <div className="profile-section">
        <div className="profile-pic">
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=ankita"
            alt="Profile"
          />
        </div>
        <div className="profile-info">
          <h2>Ankita Gupta</h2>
          <p>Current Year: 3rd Year</p>
          <p>University: ABC University</p>
        </div>
      </div>

      <div className="personal-info">
        <h3>Personal</h3>
        <p>📞 Phone No.: +91-9876543210</p>
        <p>✉️ Email: ankita@example.com</p>
      </div>

      <div className="history">
        <h3>History</h3>
        <div className="history-item">
          <strong>Uploaded:</strong> 12 files
        </div>
        <div className="history-item">
          <strong>Downloaded:</strong> 34 files
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
