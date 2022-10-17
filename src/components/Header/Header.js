import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { ReactComponent as Hamburger } from '../../images/icons/hamburger.svg'
import { ReactComponent as Close } from '../../images/icons/exit-btn.svg'


const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className='header-container'>
        <Link to="/">
            <h1>GOECHA</h1>
            </Link>
            <ui className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>    
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ui>
            <div className='hamburger' onClick={handleClick}>
            {click ? (
                <Close title="close" style={{color: "#fff"}} className='close'  alt='close'/>
            ): (
                <Hamburger title="hamburger1"  style={{color: "#fff"}} className='hamburger1'  alt='hamburger1' />
            )}   
            </div>
    </div>
  )
}

export default Header