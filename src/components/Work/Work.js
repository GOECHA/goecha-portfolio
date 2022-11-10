// eslint-disable-next-line

import React, { useState, useTransition } from "react";
import WorkCard from "../WorkCard/WorkCard";

import { Swiper, SwiperSlide } from "swiper/react";

// import IconCard from "../IconCard/IconCard";
import ProjectCardData from "../WorkCardData/WorkCardData";
// import  icons  from "../WorkCardData/IconCardData";
// import "./Work.css";
import "../WorkCard/WorkCard.css";
import { SpinLogo } from "../SpinLogo/SpinLogo";
// import { styled, useTheme } from "@mui/material/styles";
// import { ReactComponent as Close} from "../../images/icons/exit-btn.svg";
// import { Divider, Drawer } from "@mui/material";

// import testlogo from '../../images/nymin-logo.png'

import { EffectCube, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./styles.css";

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

const Work = () => {
  // const [showProjects, setShowProjects] = useState(false);
  // const [showIcons, setShowIcons] = useState(false);
  // eslint-disable-next-line
  const [isPending, startTransition] = useTransition();
  // const theme = useTheme();

  // const drawerWidth = "300";

  // const handleDrawerOpen = () => {
  //   startTransition(() => {
  //     setShowProjects(true);
  //   });
  // };

  // const handleIconOpen = () => {
  //   startTransition(() => {
  //     setShowIcons(true);
  //   });
  // };

  // const handleDrawerClose = () => {
  //   setShowProjects(false);
  // };

  // const handleIconClose = () => {
  //   setShowIcons(false);
  // };

  const dynamicCard = ProjectCardData.map((val, index) => {
    return (
      <SwiperSlide>
        <WorkCard
          key={index}
          imgsrc={val.imgsrc}
          title={val.title}
          text={val.text}
          view={val.view}
          source={val.source}
        />
      </SwiperSlide>
    );
  });

  // const dynamicIconCard = icons.map((newVal, index) => {
  //   return <IconCard key={index} icon={newVal.icon} />;
  // });

  return (
    <div className="work-container">
      {isPending && <SpinLogo />}
      {/* <div className="heading-container">
       
      {/* <h1 className="project-heading" onClick={handleDrawerOpen}> */}
      {/* <h1 className="project-heading" > */}

      {/* Projects */}
      {/* </h1>  */}
      {/* </div>  */}
      {/* <Drawer
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
          
        >   */}

      {/* <DrawerHeader className="project-heading project-heading css-1k455el" title="Projects" theme={theme}> */}
      {/* <h1 className="project-heading" > */}
      {/* Projects
            </h1>  */}
      {/* <Close className="close-drawer-btn" onClick={handleDrawerClose}/> 
          </DrawerHeader> 
  
         <Divider /> */}
      <div className="pro-con-wrapper">
        {/* <div className="pro-container"> */}
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          navigation={true}
          pagination={true}
          modules={[EffectCube, Pagination, Navigation]}
          className="mySwiper"
          styles={{ width: "500px", position: "fixed", marginLeft: "-50px" }}
        >
          {dynamicCard}
        </Swiper>
      </div>
      {/* </div> */}
      {/* </Drawer> */}
      {/* <h1 className="project-heading" onClick={handleIconOpen}>
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
        </Drawer> */}
    </div>
  );
};

export default Work;
