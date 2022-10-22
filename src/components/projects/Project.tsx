import React, { FunctionComponent } from "react";
import ProjectType from "../../../types/ProjectType";
import "./Project.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsArrowRightCircle } from "react-icons/bs";

type ProjectProps = {
  project: ProjectType;
  index: number;
};

export const Project: FunctionComponent<ProjectProps> = ({
  project,
  index,
}) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="root">
      {index % 2 === 0 ? (
        <div className="project">
          <div className="imageLeft">
            <LazyLoadImage
              src={project.img}
              width="520"
              className="projectImage"
            ></LazyLoadImage>
          </div>
          <div className="projectDetailsRight">
            <div className="projectTitle">
              <div className="projectName">{project.projectName}</div>
              <BsArrowRightCircle
                onClick={() => openInNewTab(project.link)}
                className="projectLink"
                size={30}
              />
            </div>
            <div className="projectTag">{project.tag}</div>
            <div className="projectDesc">{project.description}</div>
          </div>
        </div>
      ) : (
        <div className="project">
          <div className="projectDetailsLeft">
            <div className="projectTitle">
              <div className="projectName">{project.projectName}</div>
              <BsArrowRightCircle
                onClick={() => openInNewTab(project.link)}
                className="projectLink"
                size={30}
              />
            </div>
            <div className="projectTag">{project.tag}</div>
            <div className="projectDesc">{project.description}</div>
          </div>
          <div className="imageRight">
            <LazyLoadImage
              src={project.img}
              width="520"
              className="projectImage"
            ></LazyLoadImage>
          </div>
        </div>
      )}
    </div>
  );
};
