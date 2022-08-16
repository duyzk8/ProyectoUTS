import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Registrorecursos from "./components/Registrorecursos";
import PrestamoEquipo from "./components/PrestamoEquipo";

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
          <Route path="/prestamos" element={<PrestamoEquipo />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    );
  return <div className="app">{sesion}</div>;
}

export default App;