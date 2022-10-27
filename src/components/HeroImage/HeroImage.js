import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './HeroImage.css'


const HeroImage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
           <img className='into-img' 
                alt='logo'
                src={logo}
            /> 
        </div>
        <div className='content'>
            <p> HI, I'M A CREATIVE</p>
                <h1>Developer.</h1>
        <Link to="/projects" 
        className='btn'>Projects
        </Link>
        <Link to="/contact" 
        className='btn btn-light'>Content
        </Link> 
        </div>
    </div>
  )
}

export default HeroImage