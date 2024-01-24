import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
