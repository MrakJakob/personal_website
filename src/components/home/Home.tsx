import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Home() {
  return (
    <>
      <div className="welcome_message_container">
        <div className="message">
          Hello, I'm <span className="highlight">Jakob</span>
        </div>
        <div className="message">
          Welcome to <span className="highlight">my website</span>
        </div>
      </div>
      <div className="links_container">
        <AiFillGithub className="icon" />
        <AiFillLinkedin className="icon" />
      </div>
    </>
  );
}
