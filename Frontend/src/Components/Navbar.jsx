import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { GoArrowRight } from 'react-icons/go'
const Navbar = () => {
    const [visible , setVisible] = useState(false)

  return (
    <div className='flex justify-between items-center px-10 w-full font-medium'>
        <Link to={'/'} className='lg:w-1/4 font-bold text-3xl text-start text-gray-600'>D.S.A.I.C</Link>
        <ul className="hidden lg:w-1/2 md:flex justify-center gap-2 md:gap-3 lg:gap-5 lg:gap-x-10 text-sm text-gray-700">
            <NavLink to='/' className="flex flex-col items-center gap-1 text-xs lg:text-sm font-medium">
                <p>Home</p>
                <hr className='w-3/4 border-none bg-lightGreen h-[3px] hidden duration-200 transition-all'/>
            </NavLink>
            <NavLink to='/about' className="flex flex-col items-center gap-1 text-xs lg:text-sm font-medium">
                <p>About</p>
                <hr className='w-3/4 border-none bg-lightGreen h-[3px] hidden duration-200 transition-all'/>
            </NavLink>
            <NavLink to='/hackathon' className="flex flex-col items-center gap-1 text-xs lg:text-sm font-medium">
                <p>Hackathon</p>
                <hr className='w-3/4 border-none bg-lightGreen h-[3px] hidden duration-200 transition-all'/>
            </NavLink>
            <NavLink to='/resources' className="flex flex-col items-center gap-1 text-xs lg:text-sm font-medium">
                <p>Resources</p>
                <hr className='w-3/4 border-none bg-lightGreen h-[3px] hidden duration-200 transition-all'/>
            </NavLink>
            <NavLink to='/contact' className="flex flex-col items-center gap-1 text-xs lg:text-sm font-medium">
                <p>Contact</p>
                <hr className='w-3/4 border-none bg-lightGreen h-[3px] hidden duration-200 transition-all'/>
            </NavLink>
        </ul>
        <div className='lg:w-1/4 flex justify-end items-center gap-6'>
            <Link to={'/registration'} className='p-3 hidden sm:h-3/4 w-fit rounded-sm bg-lightGreen text-white font-semibold text-xs sm:flex justify-center items-center gap-x-2'><p>Register Now</p> <GoArrowRight className='text-xl font-extrabold'/></Link>

            <div className="group relative">
                <Link className='p-10'><img src={assets.profile_icon} className='w-10 rounded-full h-10 flex justify-center items-center cursor-pointer p-1 border-[3px] border-lightGreen' alt=""/></Link>
                <div className="absolute hidden dropdown-menu bg-textGreen z-50 top-16 right-0 group-hover:block pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-green-600 text-white rounded">
                        <Link to={`/profile/19292`} className='cursor-pointer hover:text-black'>My Profile</Link>
                        <Link to={'/auth/login'} className='cursor-pointer hover:text-black'>Sign in</Link>
                    </div>
                </div>
            </div>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer md:hidden' alt="" />
        </div>
        {/* Sidebar for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden z-30 bg-white transition-all ${visible ? "w-full": "w-0"}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=> setVisible(false)} className="flex cursor-pointer items-center gap-4 p-3">
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p>Back</p>
                </div>
                <NavLink to='/' className="py-2 pl-6 border " onClick={()=> setVisible(false)} >Home</NavLink>
                <NavLink to='/about' className="py-2 pl-6 border " onClick={()=> setVisible(false)} >About</NavLink>
                <NavLink to='/hackathon' className="py-2 pl-6 border " onClick={()=> setVisible(false)} >Hackathon</NavLink>
                <NavLink to='/resources' className="py-2 pl-6 border " onClick={()=> setVisible(false)} >Resources</NavLink>
                <NavLink to='/contact' className="py-2 pl-6 border " onClick={()=> setVisible(false)} >Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar