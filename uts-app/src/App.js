import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Registrorecursos from "./components/Registrorecursos";
import SolicitudServicio from "./components/SolicitudServicio";

import SignUp from "./components/SignUp";

import "./App.css";
import Dashboard from "./components/Dashboard";

var sesionVar = localStorage.getItem("sesion"); //Take value of LocalStorage
function App() {
  let sesion;
  if (sesionVar == null) {
    sesion = <SignUp />;
  } else
    sesion = (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recursos" element={<Registrorecursos />} />
          <Route path="/solicitudservicio" element={<SolicitudServicio />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    );
  return <div className="app">{sesion}</div>;
}

export default App;