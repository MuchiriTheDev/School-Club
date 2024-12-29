import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { GoArrowRight } from "react-icons/go"

const Hero = () => {
  return (
    <div className='w-full h-fit py-10 sm:py-3 flex sm:flex-row flex-col gap-2 px-5 sm:px-10 items-center justify-center bg-slate-100'>

        {/* left section */}
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-fit flex flex-col justify-center sm:justify-start">
                <h1 className='text-xl md:text-3xl uppercase font-semibold mb-1 text-gray-800'>Transform Technology with Us</h1>
                <h1 className='text-base md:text-2xl font-semibold mb-3 text-gray-800'>at DSAIC in <span className='font-bold uppercase text-lightGreen'>Dedan Kimathi</span></h1>
                <p className='text-justify text-xs md:text-sm font-medium mb-5'>
                    Join a community driven by innovation and excellence. Dive into exciting opportunities, sharpen your skills, and lead the future of technology today.
                </p>

                <Link className="w-fit h-fit px-12 py-2 text-md text-white font-semibold bg-lightGreen flex rounded shadow justify-between items-center gap-x-2" to={'/auth/signup'}>
                    <p>Sign In</p> 
                    <GoArrowRight className='text-xl font-extrabold'/>
                </Link>
            </div>
        </div>

        {/* right section */}
        <div className="w-full h-full p-5 flex justify-center items-center">
            <img src={assets.hero} alt="Hero Section" className="w-fit h-full p-3" />
        </div>

    </div>
  )
}

export default Hero
