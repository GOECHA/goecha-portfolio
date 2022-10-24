import React from 'react'
import { Link } from 'react-router-dom'
import './AboutContent.css'


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I am a React developer</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img className='img' src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60" alt="true" />
                </div>
                <div className='img-stack bottom'>
                    <img className='img' src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvZnR3YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" alt="true" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default AboutContent