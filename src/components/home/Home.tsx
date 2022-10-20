import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Home() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
        <AiFillGithub
          className="icon"
          onClick={() => openInNewTab("https://github.com/MrakJakob")}
        />
        <AiFillLinkedin
          className="icon"
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/jakob-mrak-508786243/")
          }
        />
      </div>
    </>
  );
}
