import React from 'react'
import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'
import HeroImg2 from '../../components/HeroImg2/HeroImg2'
import PricingCard from '../../components/PricingCard/PricingCard'
// import WorkCard from '../../components/WorkCard/WorkCard'
import Work from '../../components/Work/Work'

const Project = () => {
  return (
    <div>
      <Header />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent projects"/>
      <Work />
      <PricingCard />
      {/* <Footer /> */}
    </div>
  )
}

export default Project