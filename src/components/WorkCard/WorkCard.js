// import React, { useState } from "react";
import React from "react";
import "./WorkCard.css";

const WorkCard = (props) => {




  return (
    <div className="project-card">
      <img
        src={props.imgsrc}
        alt="pro img"
        onMouseOver={(e) => console.log(1111, e)}
      />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a className="btn" target="blank" href={props.view}>
            View
          </a>
          <a className="btn" target="blank" href={props.source}>
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
