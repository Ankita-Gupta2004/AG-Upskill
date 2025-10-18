import { useState, useEffect } from "react";
import "./loginPage.css";

export default function LoginPage({ onClose, onSwitchToCreate }) {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      // Save token in browser
      localStorage.setItem("token", data.token);

      // Optionally save user info
      localStorage.setItem("user", JSON.stringify(data.user));

      console.log("Login successful:", data);
      onClose(); // close modal
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
};



  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Username or Email
            <input
              type="text"
              name="usernameOrEmail"
              value={formData.usernameOrEmail}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <p className="switch-link">
          Don't have an account?
          <span onClick={onSwitchToCreate} className="link-text">
            Create one here
          </span>
        </p>
      </div>
    </div>
  );
}
