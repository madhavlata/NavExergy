import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home.jsx";
import Talks from "./pages/Talks.jsx";
import Competitions from "./pages/Competitions.jsx";
import Workshops from "./pages/Workshops.jsx";
import CAprogram from "./pages/CAprogram.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/caprogram" element={<CAprogram />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
