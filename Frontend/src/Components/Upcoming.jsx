import React from 'react'
import { TbCircleDashedPlus } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Upcoming = ({img, name, desc, topics, link}) => {
  return (
    <div className='w-full bg-emerald-300 bg-opacity-80 h-fit lg:h-[75vh] flex justify-center items-center flex-col lg:flex-row p-0 sm:p-2'>
         {/* Left side */}
         <div className="sm:p-4 p-2 pb-0 w-full lg:w-1/2 h-full flex justify-center items-center">
            <img src={img} alt="" className="rounded-lg h-full w-fit " />
         </div>

         {/* Right Side */}
         <div className="sm:p-4 p-2  lg:w-1/2 w-full h-full">
            <div className="bg-gray-800 rounded-sm w-full h-full text-white sm:p-4 p-3 flex justify-start md:justify-center items-center flex-col">
                <h1 className='text-xl w-full md:text-2xl font-extrabold text-start md:text-center capitalize mb-6'>{name}</h1>
                <p className='text-sm font-medium mb-6 text-justify md:text-center '>
                    {desc}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 w-full h-fit">
                    {
                        topics.map((item,i)=>{
                            return (
                                <span className='w-full h-10 py-2 px-3 flex justify-center sm:py-0 items-center text-center text-white text-xs sm:text-sm bg-emerald-800 rounded-md shadow-lg'>
                                    {item}
                                </span>
                            )
                        })
                    }
                </div>
                <Link  className='font-medium flex items-center justify-center gap-2 text-base sm:text-lg px-6 py-2 rounded-md bg-lightGreen' to={link}><p>Register</p><TbCircleDashedPlus/></Link>
            </div>
         </div>
    </div>
  )
}

export default Upcoming