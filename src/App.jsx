import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Interests from "./pages/Interests";
import ContactMe from "./pages/ContactMe";
import { useState } from "react";

export default function App() {
  const [start, setStart] = useState(false);
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/skills"
          element={<Skills start={start} setStart={setStart} />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      {!start && <Footer />}
    </div>
  );
}
