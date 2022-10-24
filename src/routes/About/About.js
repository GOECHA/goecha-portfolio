import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HeroImg2 from '../../components/HeroImg2/HeroImg2'
import AboutContent from '../../components/AboutContent/AboutContent'

const About = () => {
  return (
    <div>
        <Header />
        <HeroImg2 heading="ABOUT." text="I'm a friendly Front-End Developer." />
        <AboutContent />
        <Footer />
    </div>
  )
}

export default About