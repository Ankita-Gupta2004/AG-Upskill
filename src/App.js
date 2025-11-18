import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Cards from "./components/cards";
import Notes from "./components/notes";
import Testimonial from "./components/testimonial";
import Lab from "./components/lab";
import Footer from "./components/footer";
import Coding from "./components/coding";
import SubjectDetails from "./components/subjectDetails";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Planner from "./components/ToDo/Planner";
import CodingPlatform from "./components/CodingPlatform/CodingPlatform";
import ResumeBuilder from "./components/Resume/ResumeBuilder";

function App() {
  const notesRef = useRef(null);
  

  const scrollToNotes = () => {
    notesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  

  return (
    <Router>
      <Header onStartClick={scrollToNotes} />

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Hero onStartClick={scrollToNotes} />
              <Cards onStartClick={scrollToNotes} />
              <Notes ref={notesRef} />
              <Lab />
              <Coding />
              <Testimonial />
              <Footer onStartClick={scrollToNotes} />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        
        <Route path="/pending-tasks" element={<Planner />} />
        <Route path="/codingPlatform" element={<CodingPlatform />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />


        {/* Subject Detail Page Route */}
        <Route path="/subject/:subjectNaame" element={<SubjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
