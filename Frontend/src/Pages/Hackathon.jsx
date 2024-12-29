import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { BiArrowFromLeft, BiArrowFromRight, BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Upcoming from '../Components/Upcoming'
import NewsLetter from '../Components/NewsLetter'
import { IoSearchCircle } from 'react-icons/io5'
import { BsExclamation } from 'react-icons/bs'
import { GiThrustBend } from 'react-icons/gi'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

const Hackathon = () => {
  const [items, setItems] = useState([])

  const upcomingHackathon = [
    {
      name: "DSAIC HACKATHON 2024",
      desc: "Get ready for the ultimate hackathon experience! Join us on December 7th, 2024, at the Nelion Dome for a day of creativity, data, and Artificial Intelligence magic. Whether you're a coding wizard, a data guru, or an idea powerhouse, this is your chance to build machine learning models, network with tech enthusiasts, and win exciting prizes! Hosted by DSAIC in partnership with DSAIL and DeHUB.",
      topics: ['Data Science', "Machine Learning", 'Artificial Intelligence'],
      link: 'https://forms.gle/Ld1rZf7emc4K3phJ6',
      img: assets.hack,
    }
  ]

  const outDated = [
    {
      name: "Umoja Hackathon",
      desc: "On December 7th, 2024, at the Nelion Dome, participants built machine learning models, networked with tech enthusiasts, and won exciting prizes. Hosted by DSAIC in partnership with DSAIL and DeHUB.",
      topics: ['Data Science', "Machine Learning", 'Artificial Intelligence'],
      link: 'https://forms.gle/Ld1rZf7emc4K3phJ6',
      img: assets.umoja,
    }
  ]
  

  const filtering = (evt) => {
    const filteredItems = upcomingHackathon.filter(item =>
      item.name.toLowerCase().includes(evt.toLowerCase())
    )
    setItems(filteredItems)
  }

  useEffect(() => {
    setItems(upcomingHackathon) // Initially display all items
  }, [])

  return (
    <div className='w-full h-fit flex flex-col justify-center items-center'>
      <Navbar/>
      {/* Hero hackathon page */}
      <div style={{
        background: `url(${assets.heroHack})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
        className="w-full h-[90vh] bg-cover bg-center flex justify-center items-center">
        <div className="w-full h-full bg-transparent backdrop-blur-lg flex flex-col justify-center items-center">
          <div className='w-full h-fit flex flex-col items-center'>
            <h1 className="font-bold text-3xl md:text-4xl text-lightGreen drop-shadow-lg uppercase text-center mb-6">Welcome to Our Hackathon Page</h1>
            <p className='text-base sm:text-lg w-3/4 sm:w-1/2 p-1 md:p-4 text-white font-semibold text-center mb-6'>
              Discover the ultimate platform for creativity and innovation. Join us for a day of hacking, networking, and tech excellence.
            </p>
            <Link className='flex items-center justify-center place-content-center h-14 w-fit rounded shadow-lg text-white bg-lightGreen gap-3 font-bold text-xl py-4 px-6' to={'/'}>
              <p>Participate</p>
              <BiArrowFromLeft className='h-full text-4xl font-extrabold flex items-center' />
            </Link>
          </div>
        </div>
      </div>


      {/* Upcoming events */}
      <div className="w-full h-fit py-10 px-0 sm:px-3">
        <div className='w-full h-fit p-4 flex justify-center items-center flex-col'>
          <h1 className='text-gray-800 font-extrabold text-xl md:text-3xl capitalize mb-3 '>UPCOMING HACKATHONS</h1>
          <p className='text-gray-700 font-bold text-sm md:text-base mb-3 capitalize'>Participate in building incredible technology</p>
        </div>
        <div className="w-full h-fit p-4 flex justify-center items-center">
          <div className="h-8 md:h-10 w-[15em] md:w-[20em] rounded-full text-xl font-medium border border-lightGreen flex justify-center items-center gap-2">
            <BiSearchAlt className='p-1 text-gray-800 w-1/4 flex justify-center items-center h-full' />
            <input onChange={e => filtering(e.target.value)} className='w-3/4 pr-4 pl-2 py-2 h-full bg-transparent border-none outline-none' type="search" placeholder='Search' />
          </div>  
        </div>
        <div className="w-full h-fit flex justify-center items-center flex-col gap-4">
          {
            items.length === 0 ? (
              <div className="flex justify-center items-center flex-col p-4 w-full h-fit">
                <h1 className='uppercase text-gray-800 font-extrabold md:text-2xl text-xl flex justify-center items-center gap-2'>
                  <p>No Hackthons Found </p>
                  <BsExclamation className='h-full w-fit text-3xl'/>
                </h1>
                <p className='capitalize text-gray-600 font-semibold md:text-base text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum asperiores et ex aut?</p>
              </div>
            ):(
              items.map((hack, i) => {
                return <Upcoming key={i} img={hack.img} link={hack.link} topics={hack.topics} name={hack.name} desc={hack.desc} />
              })
            )
          }
        </div>
      </div>

      {/* Past Hackathons */}
      <div className="w-full h-fit bg-slate-100 py-10 px-3">
        <div className='w-full h-fit p-4 flex justify-center items-center flex-col'>
          <h1 className='text-gray-800 font-extrabold text-xl md:text-3xl uppercase mb-3 '>Past HACKATHONS</h1>
          <p className='text-gray-700 font-bold text-sm md:text-base mb-3 capitalize'>Incredible technologies that were created and their code</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {
            outDated.map((hack, i) => {
              return (
                <div className="w-full h-full flex justify-center items-center flex-col">
                  <img src={hack.img} className='w-full h-1/2 mb-3' alt="" />
                  <h1 className='text-gray-800 mb-3 w-full text-xl font-extrabold uppercase'>{hack.name}</h1>
                  <p className='text-gray-600 mb-5 text-sm text-start font-semibold'>{hack.desc}</p>
                  <div className="w-full">
                  <Link to={hack.link} className='bg-gray-800 text-white text-sm font-semibold flex justify-start items-center gap-2 h-10 w-fit py-2 px-4 uppercase'>
                    <p>get the code</p>
                    <GiThrustBend/>
                  </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* subscription */}
      <Footer/>
    </div>
  )
}

export default Hackathon
