import React from 'react';
import Header from '../../components/Header/Header';
import HeroImage from '../../components/HeroImage/HeroImage';



const Home = () => {
  return (
    <div className='home-footer-container'>
      <Header/>
      <HeroImage style={{marginBottom:"10rem"}}/> 
    </div>
  )
}

export default Home