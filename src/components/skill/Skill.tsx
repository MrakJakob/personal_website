import React from "react";
import { IconType } from "react-icons";
import "./Skill.css"

type SkillProps = {
  name: string;
  icon: IconType;
};

export function Skill({ name, icon }: SkillProps) {
  return (
    <div className="skill">
      <div className="skill_icon_container">{React.createElement(icon, { size: 120, className: "skill_icon" })}</div>
      <div className="skill_name">{name}</div>
    </div>
  );
}
