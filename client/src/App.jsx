import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./views/Landing";
import Home from "./views/Home";
import CreateAnActivity from "./views/CreateAnActivity";
import Detail from "./views/Detail";
import "./App.css";

export default function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-activity" element={<CreateAnActivity />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
