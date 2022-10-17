import React from 'react'
import { ReactComponent as HomeIcon } from '../../images/icons/home-icon2.svg'
import { ReactComponent as PhoneIcon } from '../../images/icons/phone-icon.svg'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <HomeIcon style={{color: "#fff"}} className='home-icon'  alt='homeIcon'/>
            <PhoneIcon style={{color: "#fff"}} className='phone-icon'  alt='phoneIcon'/>
          </div>
        </div>
        <div className='right'></div>

      </div>
    </div>
  )
}

export default Footer