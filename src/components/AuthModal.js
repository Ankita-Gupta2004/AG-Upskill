import { useState, useEffect } from "react";
import CreateAccountPanel from "./createAccountPanel";
import LoginPage from "./loginPage";
import './AuthModal.css';

export default function AuthModal({ onClose }) {
  const [activePanel, setActivePanel] = useState("login"); // or "create"

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {activePanel === "login" && (
          <LoginPage onSwitchToCreate={() => setActivePanel("create")} onClose={onClose} />
        )}
        {activePanel === "create" && (
          <CreateAccountPanel onSwitchToLogin={() => setActivePanel("login")} onClose={onClose} />
        )}
      </div>
    </div>
  );
}
