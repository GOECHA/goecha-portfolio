
import React from 'react'
import './IconCard.css'
// import {ReactComponent as ImportedSVG} from `../../images/icons/${icons}.svg`;
// import {icons} from '../../components/WorkCardData/WorkCardData'



const IconCard = (props) => {

    

  return (
    <div className='icon-card'>
        {/* <div className='icon-wrapper'> */}
            {/* <svg> */}
       
        {/* <svg viewBox="0 0 100 100" src={props.icon} />  */}
        {/* {props.icons}  */}
        {/* </svg> */}
        <img src={props.icons} alt="icon img" />
        {/* </svg> */}
        {/* </div> */}
    </div>
  )
}

export  default IconCard