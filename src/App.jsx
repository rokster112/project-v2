import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Background from "./components/Background";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
