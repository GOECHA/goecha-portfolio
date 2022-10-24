// import React, { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import "./WorkCard.css";
// import { ProjectCardData } from "./WorkCardData"

const WorkCard = (props) => {
// const [hover, setHover] = useState(false)

// handleChange = (e) => {
//     setHover(true)
// }

  return (
    <div className="project-card">
      <img className="hover-gif"
        src={props.imgsrc}
        alt="image"
      />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            {" "}
            View{" "}
          </NavLink>
          <NavLink to={props.source} className="btn">
            {" "}
            Source{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
