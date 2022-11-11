import React from 'react'
import { Link } from 'react-router-dom'
import './AboutContent.css'


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1><br/>
            <h3>React | ReactNative | GraphQL | JavaScript | CSS | HTML</h3><br/>
            <p className='grit'> Grit | Growth | Community</p><br/>
            <p>Life as we know it now was not the same as yesterday. It will not be the same as tomorrow and it's better
                not to miss opportunity for it is knocking on your door; you just have to listen. </p><br/>
            <p>My name is Chantal, and I have walked in many pairs of shoes and I continue to strive for the next size.
                From a young age I have always been a leader with compassion for my teammates. My journey has been diverse; but never a dull moment. 
                I have been in the hospitality industry for 18 years, 5 years as a fashion designer and a sprint in mortgage finance.
                 My passion for performance, success, knowledge, and creativity has lead me into the direction of tech.  
                
            </p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img className='img' src="https://user-images.githubusercontent.com/102189342/201261846-cfa27051-c9e9-4898-aed4-84d5884c0d1a.png" alt="true" />
                </div>
                <div className='img-stack bottom'>
                    <img className='img' src="https://user-images.githubusercontent.com/102189342/201262195-be9bf62c-3857-4f76-97df-7d031d66511b.png" alt="true" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default AboutContent