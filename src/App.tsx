import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Projects } from "./components/projects/Projects";

function App() {

  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
