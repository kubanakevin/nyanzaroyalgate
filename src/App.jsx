// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RoomsPage from "./pages/Rooms";
import DiningPage from "./pages/Restourant";
import WellnessPage from "./pages/Wellnesspage";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/wellness" element={<WellnessPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;