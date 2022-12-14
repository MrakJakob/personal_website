import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

type NavbarProps = {
  gradient: boolean;
  setGradient: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Navbar({ gradient, setGradient }: NavbarProps) {
  const [sidebar, setSidebar] = useState(false);
  const [activeWindow, setActiveWindow] = useState("/");
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate("/projects");
    setSidebar(false);
    setActiveWindow("/projects")
  };

  const navigateHome = () => {
    navigate("/");
    setSidebar(false);
    setActiveWindow("/");
  };

  const navigateToSkills = () => {
    navigate("/skills");
    setSidebar(false);
    setActiveWindow("/skills");
  };

  const navigateToGallery = () => {
    navigate("/gallery");
    setSidebar(false);
    setActiveWindow("/gallery");
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
    if (pathname === "/") {
      // if we are on homepage we toggle animated gradient when we open sidebar
      setGradient(sidebar);
    }
  };

  const sidebarAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }`;

  const SidebarElement = styled.div`
    animation-name: ${sidebarAnimation};
    animation-duration: 1s;
  `;

  const sidebarElementsList = [
    <SidebarElement
      className="navbar_element sidebar_element"
      onClick={navigateToProjects}
    >
      Projects
    </SidebarElement>,
    <SidebarElement
      className="navbar_element sidebar_element"
      onClick={navigateToSkills}
    >
      Skills
    </SidebarElement>,
    <SidebarElement
      className="navbar_element sidebar_element"
      onClick={navigateToGallery}
    >
      Gallery
    </SidebarElement>,
  ];

  return (
    <div className={gradient ? "nav sticky_navbar" : "nav sticky_navbar gradient"}>
      <div className="title_container">
        <div className="title" onClick={navigateHome}>
          Jakob Mrak
        </div>
      </div>
      <div
        className={
          sidebar
            ? "navbar_elements_container sidebar_active gradient"
            : "navbar_elements_container"
        }
      >
        {sidebar ? (
          sidebarElementsList.map((sidebarElement) => sidebarElement)
        ) : (
          <>
            <div className={activeWindow === "/projects" ? "navbar_element active" : "navbar_element"} onClick={navigateToProjects}>
              Projects
            </div>
            <div className={activeWindow === "/skills" ? "navbar_element active" : "navbar_element"} onClick={navigateToSkills}>
              Skills
            </div>
            <div className={activeWindow === "/gallery" ? "navbar_element active" : "navbar_element"} onClick={navigateToGallery}>
              Gallery
            </div>
          </>
        )}

        {/* Navbar element */}
      </div>
      <div
        className={sidebar ? "burger toggle" : "burger"}
        onClick={toggleSidebar}
      >
        <div className="line1 toggle"></div>
        <div className="line2 toggle"></div>
        <div className="line3 toggle"></div>
      </div>
    </div>
  );
}
