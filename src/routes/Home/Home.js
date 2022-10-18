import React from 'react';
import Header from '../../components/Header/Header';
import HeroImage from '../../components/HeroImage/HeroImage';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div >
      <Header/>
      <HeroImage style={{marginBottom:"10rem"}}/> 
      <Footer />
    </div>
  )
}

export default Home