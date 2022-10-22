import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./components/home/Home";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import { Gallery } from "./components/gallery/Gallery";

function App() {

  const init = window.location.pathname === "/" ? true : false;
  const [gradient, setGradient] = useState(init)
  console.log(gradient)

  return (
    <div className={gradient ? "App animated_gradient" : "App"}>
        <Navbar gradient={gradient} setGradient={setGradient}/>
        <Routes>
          <Route path="/" element={<Home setGradient={setGradient}/>}></Route>
          <Route path="/projects" element={<Projects setGradient={setGradient}/>}></Route>
          <Route path="/skills" element={<Skills setGradient={setGradient}/>}></Route>
          <Route path="/gallery" element={<Gallery setGradient={setGradient}/>}></Route>
        </Routes>
    </div>
  );
}

export default App;

// TODO: find a better way to change background (gradient, setGradient)