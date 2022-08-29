import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const navigate = useNavigate();
  const redirectMe = () => {
    navigate("/dashboard");
  };

  return (
    <div className="header">
      <div className="container">
        <h1>
          Proyecto<span className="primary">UTS</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/recursos">Administración de Recursos</NavLink>
          </li>
          
          <li>
            <NavLink to="/solicitudservicio">Solicitud de Servicio</NavLink>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn" onClick={redirectMe}>
            Dashboard
          </button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
