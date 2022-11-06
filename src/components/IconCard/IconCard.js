import React from 'react'
import './IconCard.css'


const IconCard = (props) => {
  return (
    <div className='icon-card'>
        <imag src={props.icon} alt="icon img"/>
    </div>
  )
}

export default IconCard