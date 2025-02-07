import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Home from "./Pages/Home";
import ContactUsPage from "./Pages/ContactForm";
import F1nsight from "./Pages/projects/F1nsight";
import AiPhotoBooth from "./Pages/projects/AiPhotoBooth";
import LumTags from "./Pages/projects/LumTags";
import Header from "./components/Header";

library.add(fas, fab)

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/projects/lumtags" element={<LumTags />} />
        <Route path="/projects/f1nsight" element={<F1nsight />} />
        <Route path="/projects/aiphotobooth" element={<AiPhotoBooth />} />
        <Route path="/projects/aichatbot" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;