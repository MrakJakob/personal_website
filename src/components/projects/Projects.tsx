import React from "react";
import { Project } from "./Project";
import "./Projects.css";
import FlowserImg from "../../assets/images/Flowser.png";
import ObcinskiImg from "../../assets/images/ObcinskiObvescevalnik.png";
import SpletnaImg from "../../assets/images/SpletnaUcilnica.png";

const projectsData = [
  {
    projectName: "Flowser",
    id: 1,
    img: FlowserImg,
    link: "https://flowser.dev/",
    description:
      "Flowser (Stands for Flow Browser) is a convenient development tool for #Flow blockchain, which starts and indexes flow emulator or testnet blockchains.",
    tag: "Collaboration"
  },
  {
    projectName: "Spletna učilnica",
    id: 2,
    img: SpletnaImg,
    link: "https://github.com/sp-2021-2022/LP-25",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et. Nibh cras pulvinar mattis nunc sed blandit.",
    tag: "Collaboration"
  },
  {
    projectName: "Občinski obveščevalnik",
    id: 3,
    img: ObcinskiImg,
    link: "https://obcinski-obvescevalnik.herokuapp.com/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et. Nibh cras pulvinar mattis nunc sed blandit.",
    tag: "Collaboration"
  },
  
];

export function Projects() {
  return (
    <div className="projects">
      <div className="heading">
        My projects and projects that I have collaborated on
      </div>
      <div>
        {projectsData?.map((project, i) => (
            <Project project={project} index={i} key={project.id}/>
        ))}
      </div>
    </div>
  );
}
