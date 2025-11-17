import React, { useState } from "react";
import "./Planner.css";
import CustomCalendar from "./CustomCalendar";

const Planner = () => {
  // Tasks & Notes
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [notes, setNotes] = useState("");
  const [noteList, setNoteList] = useState([]);
  // initialize 8 glasses as empty



  // Water intake tracker
  const [waterIntake, setWaterIntake] = useState(Array(8).fill(false)); // 0-8 glasses

  // Add task
  const addTask = () => {
    if (!taskInput.trim()) return;
    setTasks([...tasks, { text: taskInput, priority, completed: false }]);
    setTaskInput("");
  };

  // Toggle task complete
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Add note
  const addNote = () => {
    if (!notes.trim()) return;
    setNoteList([...noteList, notes]);
    setNotes("");
  };

  // Progress
  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = tasks.length ? (completedCount / tasks.length) * 100 : 0;

  // Top 3 priorities
  const top3 = [...tasks]
    .filter((t) => !t.completed)
    .sort((a, b) => {
      const p = { High: 3, Medium: 2, Low: 1 };
      return p[b.priority] - p[a.priority];
    })
    .slice(0, 3);

  return (
    <div className="pws-container">
      {/* Left Side: Planner */}
      <div className="pws-left">
        <h2 className="pws-title">My Planner</h2>

        {/* Task Input */}
        <div className="pws-input-section">
          <input
            className="pws-input"
            type="text"
            placeholder="Add a task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />

          <button className="pws-btn" onClick={addTask}>
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="pws-task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`pws-task-item ${
                task.completed ? "pws-completed" : ""
              }`}
            >
              <span onClick={() => toggleComplete(index)}>
                {task.completed ? "✔ " : "○ "} {task.text} ({task.priority})
              </span>
              <button
                className="pws-delete-btn"
                onClick={() => deleteTask(index)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        {/* Progress Bar */}
        <div className="pws-progress-container">
          <div
            className="pws-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
          <span className="pws-progress-text">
            {Math.round(progress)}% Completed
          </span>
        </div>

        {/* Notes */}
        <div className="pws-notes-section">
          <h3>Daily Notes</h3>
          <textarea
            className="pws-textarea"
            placeholder="Write your notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <button className="pws-btn" onClick={addNote}>
            Add Note
          </button>
          <ul className="pws-note-list">
            {noteList.map((note, i) => (
              <li key={i} className="pws-note-item">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side: Calendar + Water Intake */}
      <div className="pws-right">
        {/* Calendar */}
        <CustomCalendar />

        {/* Water Intake */}
        <div className="pws-water-intake">
  <h3>Water Intake</h3>
  <div className="pws-glasses">
    {Array.from({ length: 8 }, (_, i) => (
      <div
        key={i}
        className={`pws-glass ${waterIntake[i] ? "pws-filled" : ""}`}
        onClick={() => {
          const newWater = [...waterIntake];
          newWater[i] = !newWater[i]; // toggle this glass
          setWaterIntake(newWater);
        }}
      >
        <div className="pws-water"></div>
        <span className="pws-glass-number">{i + 1}</span>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Planner;
