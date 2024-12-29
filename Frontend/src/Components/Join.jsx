import React from 'react'
import { assets } from '../assets/assets'
import { GoCheck } from "react-icons/go";
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Join = () => {
  return (
    <div className='w-full py-6 flex flex-col sm:flex-row justify-center items-center h-fit mb-10 bg-slate-100'>

        <div className="w-full h-full flex items-center justify-center">
            <img src={assets.reg} className='h-full w-fit' alt="" />
        </div>

        <div className="w-full h-full p-5">
            <h1 className='text-xl md:text-2xl font-bold mb-4  text-gray-700 '>How and why you should join DSAIC</h1>
            <p className='text-sm font-medium mb-3 text-gray-500'>
                Discover a supportive community where you can learn, grow, and innovate. Our members enjoy access to mentorship, peer learning, and exclusive sessions designed to foster knowledge and skills.
            </p>
            <h1 className='text-base font-bold mb-2 text-gray-700'>Steps to Join</h1>
            <ol className='w-full mb-3'>
                <li className='flex justify-start items-center gap-3'>
                    <GoCheck className='text-lightGreen text-2xl mr-3 p-3 h-full w-fit '/>
                    <p className='font-semibold text-base text-gray-800'>Sign up</p>
                </li>
                <li className='flex justify-start items-center gap-3'>
                    <GoCheck className='text-lightGreen text-2xl mr-3 p-3 h-full w-fit '/>
                    <p className='font-semibold text-base text-gray-800'>Complete your registration</p>
                </li>
                <li className='flex justify-start items-center gap-3'>
                    <GoCheck className='text-lightGreen text-2xl mr-3 p-3 h-full w-fit '/>
                    <p className='font-semibold text-base text-gray-800'>Reach out to us for more information</p>
                </li>
                <li className='flex justify-start items-center gap-3'>
                    <GoCheck className='text-lightGreen text-2xl mr-3 p-3 h-full w-fit '/>
                    <p className='font-semibold text-base text-gray-800'>Join our exclusive sessions</p>
                </li>
            </ol>
            <div className="w-full flex justify-center sm:justify-end items-center h-fit p-6">  
                <Link to={'/registration'} className='p-3 sm:h-3/4 w-full sm:w-fit rounded-sm shadow bg-lightGreen text-white font-semibold text-xs sm:text-md flex justify-center items-center gap-x-2'>
                    <p>Register Now</p> 
                    <GoArrowRight className='text-xl font-extrabold'/>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Join
