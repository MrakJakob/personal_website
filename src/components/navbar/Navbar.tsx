import React from "react";
import "./Navbar.css";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import { Projects } from "../projects/Projects";

export function Navbar() {
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate('/projects');
  };

  const navigateHome = () => {
    navigate("/")
  }


  return (
    <div className="nav">
      <div className="title_container">
        <div className="title" onClick={navigateHome}>Jakob Mrak</div>
      </div>
      <div className="navbar_elements_container">
        <div className="navbar_element" onClick={navigateToProjects}>
          Projects
        </div>
        <div className="navbar_element">Gallery</div>
        
        {/* Navbar element */}
      </div>
    </div>
  );
}
