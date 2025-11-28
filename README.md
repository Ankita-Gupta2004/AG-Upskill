# AG-Upskill

AgUpskill is an educational web application designed to tackle common real-world learning challenges — skill gaps, poor retention, fragmented study workflows, and lack of hands-on practice. It helps students develop practical technical skills by turning learning into an active, project-oriented, and collaborative process.

## 💡 Real-World Problems We Solve

AgUpskill maps its features to real problems learners and educators face:

- Skill gaps & disconnected learning: Students often know theory but lack practical application. AgUpskill provides a Coding Playground, labs, and hands-on practice so learners build real projects and bridge the gap between knowledge and application.

- Time-to-understand & inefficient study workflows: Large notes and long materials can be overwhelming. Our AI Summarization feature reduces study time by creating concise summaries, enabling faster review and retention.

- Disjointed collaboration & support: Students need peer feedback and real-time help. Real-Time Chat provides collaboration, mentorship and instant problem-solving to encourage teamwork.

- Poor task planning & time management: Learners struggle with managing deadlines and study routines. The Task Manager and Custom Calendar help track goals, tasks, and exam preparation schedules.

- Career readiness & portfolio generation: Students need to show practical skills to recruiters. Resume Builder, project showcases, and interactive coding exercises make it easier to prepare a professional portfolio.

By combining study tools, collaborative features, and practical coding exercises, AgUpskill reduces the time to become job-ready while supporting instructors in assigning, assessing, and tracking student progress.

## 🔧 Tech Stack

- Frontend: React
- Styling: Tailwind CSS (and custom CSS files)
- Backend: Node.js / Express
- Database: MongoDB
- Realtime & Authentication: Firebase

## 🚀 Core Features

- Notes Hub: Create, edit, and manage notes for subjects and labs
- AI Summarization: Summarize notes or imported content using an AI model (backend integration)
- Coding Playground: Practice coding with an online editor and run/testing features
- Real-Time Chat: Collaborate using a chat interface (powered by Firebase or WebSockets)
- Task Manager: Track tasks, deadlines, and personal study planner (Custom Calendar & Planner)
- Resume Builder

## 📁 Project Structure

- /backend - Express API server and backend logic
- /public - Static files like index.html and manifest
- /src - React app source code and components
- /src/components - UI components (Auth, CodingPlatform, ResumeBuilder, ToDo, etc.)

## ⚙️ Getting Started

Follow these steps to run the app locally.

### Prerequisites

- Node.js (v14 or newer)
- npm (or yarn)
- MongoDB (local or hosted, if using the database features)
- Firebase project (for authentication and realtime features)

### Installation

1. Clone the repository

```bash
git clone https://github.com/Ankita-Gupta2004/AG-Upskill.git
cd AG-Upskill
```

2. Install dependencies for the frontend

```bash
npm install
```

3. Install dependencies for the backend

```bash
cd backend
npm install
cd ..
```

### Configuration

- Backend: Create a `.env` in `backend/` (if required) with values such as:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key    #AI summary uses OpenAI
JWT_SECRET=some_secret                
```

- Frontend / Firebase: The app uses `src/firebase.js` to initialize Firebase. Replace existing values with your Firebase project configuration or use environment variables as needed.

### Running the app

- Start the backend server

```bash
cd backend
npm start
```

- Start the frontend (from repo root)

```bash
npm start
```

Open the development site at http://localhost:3000 (or port defined by React) and the backend API at http://localhost:5000 (or the port defined in `.env`).

## 🧭 How Features Work (Quick Overview)

- Notes Hub: Create and store notes locally or synced to the backend/MongoDB collection using REST endpoints.
- AI Summarization: When you click Summarize on a note, the app calls the backend AI endpoint which summarizes content and stores it back in the note.
- Coding Playground: A front-end editor (monaco/vs-code like) lets you write code snippets and run sample tests using the backend or sandboxed runner.
- Real-Time Chat: Uses Firebase Realtime Database / Firestore + Firebase Auth or WebSockets for real-time messages.
- Task Manager (Planner): Create and manage tasks using the CustomCalendar and Planner components. Tasks may be persisted to the backend.

## 📌 Scripts

- Frontend

  - `npm start` – Start React dev server
  - `npm run build` – Bundle React app for production

- Backend (inside `/backend`)
  - `npm start` – Start Express server

## 💡 Tips & Development Notes

- If you prefer to run both frontend and backend concurrently, use a tool like `concurrently` or run two terminals at once.
- Store any secret keys or credentials in `.env` and add `.env` to `.gitignore` to avoid committing sensitive data.

## 🤝 Contributing

Contributions are welcome! Open an issue or create a pull request. Please follow these steps:

1. Fork the repo
2. Create a feature branch
3. Add tests and documentation for your changes
4. Open a PR for review

## Details

Name - Ankita Gupta
Project - AGUpskills