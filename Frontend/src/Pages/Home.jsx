import React from 'react'
import Hero from '../Components/Hero'
import Motive from '../Components/Motive'
import Join from '../Components/Join'
import Events from '../Components/Events'
import { Link } from 'react-router-dom'
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa6";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Motive/>
      <Join/>
      <Footer/>
    </div>
  )
}

export default Home;