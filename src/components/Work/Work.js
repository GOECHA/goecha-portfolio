import React, { useState, useTransition } from "react";
import WorkCard from "../WorkCard/WorkCard";
import IconCard from "../IconCard/IconCard";
import { ProjectCardData, icons } from "../WorkCardData/WorkCardData";
import "./Work.css";
import "../WorkCard/WorkCard.css";
import { SpinLogo } from "../SpinLogo/SpinLogo";
import { styled, useTheme } from "@mui/material/styles";
import { ReactComponent as Close} from "../../images/icons/exit-btn.svg";
import { Divider, Drawer } from "@mui/material";
// import testlogo from '../../images/nymin-logo.png'




const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Work = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [isPending, startTransition] = useTransition();
  const theme = useTheme();

  const drawerWidth = "500";

  const handleDrawerOpen = () => {
    startTransition(() => {
      setShowProjects(true);
    });
  };

  const handleIconOpen = () => {
    startTransition(() => {
      setShowIcons(true);
    });
  };

  const handleDrawerClose = () => {
    setShowProjects(false);
  };

  const handleIconClose = () => {
    setShowIcons(false);
  };

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

  const dynamicIconCard = icons.map((val, index) => {
    return <IconCard key={index} icon={val.icon} />;
  });

  return (
    <div className="work-container">
      {isPending && <SpinLogo />}
      <div className="project-container">
       
      <h1 className="project-heading" onClick={handleDrawerOpen}>
        Projects
      </h1>
   
        <Drawer
          className="project-drawer"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "&.MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="temporary"
          anchor="bottom"
          onClose={() => {
            handleDrawerClose();
          }}
          open={showProjects}
          
        >
  
          <DrawerHeader className="project-heading project-heading css-1k455el" title="Projects" theme={theme}>
            <h1 className="project-heading" >
              Projects
            </h1>
          <Close className="close-drawer-btn" onClick={handleDrawerClose}/>
          </DrawerHeader>
  
          {/* <Divider /> */}
          <div className="pro-con-wrapper">
          <div className="pro-container">{dynamicCard}</div>
          </div>
        </Drawer>
        <h1 className="project-heading" onClick={handleIconOpen}>
          Icon Library
        </h1>
        <Drawer
          className="icon-drawer"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "&.MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="temporary"
          anchor="bottom"
          onClose={() => {
            handleIconClose();
          }}
          open={showIcons}
          
        >
          <DrawerHeader className="project-heading" title="Icon Library" theme={theme}>
            <h1 className="project-heading" >
              Icon Library
            </h1>
            <Close className="close-drawer-btn" onClick={handleIconClose}/>
          </DrawerHeader>
          <Divider />
          <div className="icon-pro-wrapper">
          <div className="pro-container">{dynamicIconCard}</div> 
          </div> 
        </Drawer>
      </div>
    </div>
  );
};

export default Work;
