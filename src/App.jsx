import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import CertificationsPage from "./pages/CertificationsPage";

function App() {
  return (
    <HashRouter>
      <div className="bg-[#0f1117] text-white min-h-screen overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-500 opacity-20 blur-[120px] rounded-full"></div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
        
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;