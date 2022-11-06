import React, { useState, useTransition } from "react";
import WorkCard from "../WorkCard/WorkCard";
import {ProjectCardData} from "../WorkCardData/WorkCardData";
import './Work.css';
import'../WorkCard/WorkCard.css';
import { SpinLogo } from "../SpinLogo/SpinLogo";
import {styled, useTheme} from '@mui/material/styles';
import { ReactComponent as Close } from '../../images/icons/exit-btn.svg'

const Work = () => {
const [showProjects, setShowProjects] = useState(false)
const [showIcons, setShowIcons] = useState(false)
const [isPending, startTransition] = useTransition();


const DrawerHeader = styled('div')((({theme}) =>({
  display: "flex",
  alignItems: "center",
  padding: theme.padding(0,1),
  ...theme.mixins.toolbar,
justifyContent: "flex-end"
})))

const drawerWidth = 241;

const handleOpen = () => {
  startTransition(() => {
  setShowProjects(true);
  })
}
const handleClose = () => {
  setShowProjects(false);
}


const dynamicCard = ProjectCardData.map((val, index) => {
    return (
      <WorkCard
        key={index}
        imgsrc={val.imgsrc}
        title={val.title}
        text={val.text}
        view={val.view}
        source={val.source}
      />
    );
  });





  return (
    <div className="work-container">
     { isPending && <SpinLogo /> }
      <h1 className="project-heading" onClick={handleOpen}>Projects</h1>
      <div className="project-container" >
       {/* <button onClick={handleClose}>
        <Close title="close-drawer" style={{color: "#fff"}} className='close-drawer'  alt='close'/>
      </button> */}
        {dynamicCard}
      </div>
    </div>
  );
};

export default Work;
