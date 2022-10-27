import React from "react";
import { NavLink } from "react-router-dom";
// import "./WorkCard.css";
import WorkCard from "../WorkCard/WorkCard";
import WorkCardData from '../WorkCardData/WorkCardData';

const Work = () => {


const dynamicCard = WorkCardData.map((val, index) => {
      return (
            <WorkCard 
            key={index}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
            />
          )
 })



  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
       {dynamicCard}
      </div>
    </div>
  );
};

export default Work;
