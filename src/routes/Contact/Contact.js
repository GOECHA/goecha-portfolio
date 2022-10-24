import React from 'react'
import Form from '../../components/Form/Form'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HeroImg2 from '../../components/HeroImg2/HeroImg2'

const Contact = () => {
  return (
    <div>
      <Header />
      <HeroImg2 heading="CONTACT." text="Lets have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact