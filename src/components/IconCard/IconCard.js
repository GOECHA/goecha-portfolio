
import React, { useRef, useEffect, useState } from 'react'
import './IconCard.css'
// import {ReactComponent as ImportedSVG} from `../../images/icons/${icons}.svg`;




const IconCard = (props) => {
  return (
    <div className='icon-card'>
        <div className='icon-wrapper'>
            {/* <svg> */}
       
        <svg viewBox="0 0 100 100" src={props.icon} /> 
        {/* {props.icon}  */}
        {/* </svg> */}
        {/* <svg xmlns={`../../images/icons/${props.icon}`} alt="icon img" /> */}
        {/* </svg> */}
        </div>
    </div>
  )
}

export  default IconCard