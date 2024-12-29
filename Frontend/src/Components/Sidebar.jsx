import React, { useState } from 'react'
import { FaCircleUser } from 'react-icons/fa6';
import { IoIosArrowForward, IoMdArrowRoundBack } from 'react-icons/io';
import { IoSettings } from 'react-icons/io5';
import { MdDelete, MdOutlineLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({setPage}) => {
    const [ active , setActive ] = useState(false);
    const nav = useNavigate()
  return (
    <div className={`h-screen ${active ?'md:w-1/5 fixed top0 left-0 w-full h-full z-50': 'md:w-20 w-16'} flex flex-col justify-between items-center transition-all duration-150 p-3 text-white bg-gray-700`}>

        <div className="w-full h-fit flex justify-end p-2 mb-10 cursor-pointer">
            <IoIosArrowForward onClick={()=> setActive(!active)} size={35} className={`text-xl ${ active ? 'rotate-180': null}`} />
        </div>

        <div className="mb-8">
            <div onClick={()=> {
                setActive(false)
                setPage('profile')
                }} 
                className="w-full h-fit p-2 flex items-center mb-3 gap-2 overflow-hidden cursor-pointer">
                <FaCircleUser size={35} className='text-lightGreen bg-white rounded-full border-none'/>
                <p className={`${active ? 'block': 'hidden'} font-semibold`}>Profile</p>
            </div>
            <div onClick={()=> {
                setActive(false)
                setPage('delete')
                }} 
                className="w-full h-fit p-2 flex items-center mb-3 gap-2 overflow-hidden cursor-pointer">
                <MdDelete size={35} className='text-lightGreen rounded-full border-none'/>
                <p className={`${active ? 'block': 'hidden'} font-semibold`}>Delete Account</p>
            </div>
            <p className='w-full h-[2px] mb-8 bg-white'></p>
            <div onClick={()=> {
                setActive(false)
                }} 
                className="w-full h-fit p-2 flex items-center mb-3 gap-2 overflow-hidden cursor-pointer">
                <MdOutlineLogout size={35} className='text-lightGreen rounded-full border-none'/>
                <p className={`${active ? 'block': 'hidden'} font-semibold`}>Log Out</p>
            </div>
            
        </div>
        <div onClick={()=> {
            setActive(false)
            nav('/')
        }} 
            className="w-full h-fit p-4 flex items-center mb-3 gap-2 overflow-hidden cursor-pointer">
            <IoMdArrowRoundBack size={35} className='text-lightGreen rounded-full border-none'/>
            <p className={`${active ? 'block': 'hidden'} font-semibold`}>Go Back</p>
        </div>

    </div>
  )
}

export default Sidebar