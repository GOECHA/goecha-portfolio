import React from 'react'
// import Header from '../Header/Header'
import Home from '../../routes/Home/Home'
import About from '../../routes/About/About'
import Project from '../../routes/Project/Project'
import Contact from '../../routes/Contact/Contact'
import { Routes, Route } from 'react-router-dom'
// import './App.css'
// import Footer from '../Footer/Footer'
// import '../Footer/Footer.css'

const App = () => {


  return (
    <main className='App'>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      {/* <Footer style={{marginTop:"10rem"}}/>  */}
    </main>
  )
}

export default App