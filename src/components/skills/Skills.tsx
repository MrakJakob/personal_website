import React, { useEffect } from "react";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiKotlin,
  SiMongodb,
  SiPython,
  SiGithub,
  SiJava,
  SiBootstrap,
  SiCsharp,
  SiC,
  SiAngular,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { Skill } from "../skill/Skill";
import "./Skills.css";

type SkillsProps = {
  setGradient: React.Dispatch<React.SetStateAction<boolean>>;
};

const skills = [
  { id: 1, name: "JavaScript", icon: SiJavascript },
  { id: 2, name: "React", icon: SiReact },
  { id: 3, name: "HTML", icon: SiHtml5 },
  { id: 4, name: "CSS", icon: SiCss3 },
  { id: 5, name: "TypeScript", icon: SiTypescript },
  { id: 6, name: "Kotlin", icon: SiKotlin },
  { id: 7, name: "MongoDB", icon: SiMongodb },
  { id: 8, name: "Python", icon: SiPython },
  { id: 9, name: "NodeJS", icon: FaNodeJs },
  { id: 10, name: "Github", icon: SiGithub },
  { id: 11, name: "Java", icon: SiJava },
  { id: 12, name: "C#", icon: SiCsharp },
  { id: 13, name: "C", icon: SiC },
  { id: 14, name: "Angular", icon: SiAngular },
  { id: 15, name: "Bootstrap", icon: SiBootstrap },
];

export function Skills({ setGradient }: SkillsProps) {
  useEffect(() => {
    setGradient(false);
  }, []);

  return (
    <div className="skills">
      <div className="heading">My top skills</div>
      <div className="skills_container">
        {skills?.map((skill) => (
          <Skill name={skill.name} icon={skill.icon} key={skill.id}></Skill>
        ))}
      </div>
    </div>
  );
}
