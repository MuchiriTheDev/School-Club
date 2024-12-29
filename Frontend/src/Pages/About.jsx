import React, { useEffect, useState } from 'react'
import { assets } from "../assets/assets"
import { Link } from 'react-router-dom'
import { BsArrowRight, BsLink, BsLinkedin } from 'react-icons/bs'
import { LuLinkedin } from "react-icons/lu";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { MdClose, MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import NewsLetter from '../Components/NewsLetter';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
  const [ showMore , setShowMore ]= useState(false)
  const [ more, setMore ] = useState(false)
  const [selected , setSelected] = useState(0)
  const [ visible, setVisible] = useState(false)
  const [ alms, setAlms ] = useState(3)
  const [ no , setNo ] = useState(6)

  const {ev1, ev2, ev3, ev4, ev5, ev6, ev7, ev8, ev9, main} = assets
  const images = [ev1, ev2, ev3, ev4, ev5, ev6, ev7, ev8, ev9]
  const imageToShow = images.slice(0,no)
  const devs = [
    {
      name: "Muchiri",
      role: "Product Manager",
      link: 'https://muchiri-mwangi-com.vercel.app/',
      img: assets.muchiri,
    },{
      name: "Michael",
      role: "Frontend (Lead)",
      link: 'https://muchiri-mwangi-com.vercel.app/',
      img: assets.michael,
    },{
      name: "Victor",
      role: "Design (Lead)",
      link: null,
      img: assets.rono,
    },
  ]

  const alumni = [
    {
      name: "Oyori",
      role: "Data Scientist And Machine Learning Engineer",
      tech: ["SQL","SPSS","Excel","R","Python","Ruby"],
      exp: "Oyori excels in data science, machine learning, and strategic data insights. With strong communication skills and continuous learning, he empowers clients through actionable analytics and engagement in the tech community.",
      link: 'https://www.linkedin.com/in/oyori-obegi/',
      img: assets.oyori

    },
    {
      name: "Michael",
      role: "Data Scientist And Machine Learning Engineer",
      tech: ["JavaScript","Java", "React Native", "PostGreSQL", "MongoDB","R","Python","Ruby"],
      exp: "Passionate about Machine Learning and Python, leveraging tools like Seaborn, scikit-learn, and Django for data insights and web deployment. Continually learning, community-taught developer dedicated to harnessing technology for better decisions.",
      link: 'https://www.linkedin.com/in/michael-ngecha/',
      img: assets.michael
    },{
      name: "Rono",
      role: "Machine Learning And Embedded Systems Engineer",
      tech: ["Python", "MatLab","Embedded Systems", "PyTorch"],
      exp: "Rono is a Machine Learning and Embedded Systems Engineer specializing in IoT, real-time AI solutions, and hardware-software integration, with expertise in Python, C++, microcontrollers, and system optimization for impactful applications.",
      link: 'https://www.linkedin.com/in/rono-victor/',
      img: assets.rono
    },{
      name: "Mary",
      role: "Machine Learning Researcher",
      tech: ["Python","SQL","Ruby","JAX"],
      exp: "Mary is an AI/ML researcher, passionate about agricultural and environmental conservation, using machine learning to solve real-world problems. Proficient in Python, SQL, and Dash, she applies diverse algorithms effectively.",
      link: null,
      img: assets.mary
    },

    
    {
      name: "Ombati",
      role: "Data Scientist And Machine Learning Engineer",
      tech: ["R" ,"Python","MatLab","JavaScript"],
      exp: "Ombati is a versatile developer proficient in R, Python, JavaScript, and MATLAB. Expert in data analysis, machine learning, web development, and scientific computing. Passionate about crafting efficient, robust, and innovative solutions.",
      link: 'https://www.linkedin.com/in/brian-ombati-ogeto/',
      img: assets.ombati
    },{
      name: "Lucy",
      role: "Data Scientist And Machine Learning Engineer",
      tech: ["JavaScript","Python","React","Tailwind CSS"],
      exp: "Lucy is a software developer with expertise in JavaScript, HTML, CSS, React, and Node.js.Enthusiastic about AI and machine learning, she excels in UI/UX design with Figma and thrives in collaborative environments.",
      link: 'https://www.linkedin.com/in/lucy-alphonce-480a5a205/',
      img: assets.lucy
    },{
      name: "Karani",
      role: "Data Scientist And Machine Learning Engineer",
      tech: ["R","React",'JavaScript','SQL'],
      exp: "Karani is a Business Information Technology graduate skilled in R, React, and SQL. An active developer community advocate and an enthusiastic softball player, blending tech expertise with community engagement.",
      link: 'https://www.linkedin.com/in/keith-karani-3794041a4/',
      img: assets.karani
    }
    ,{
      name: "Nyongesa",
      role: "Data Analysis, Machine Learning Engineer and Fullstack Development ",
      tech: ["R","Python","SQL","Javascript","Django","SPSS"],
      exp: "Nyongesa specializes in AI, machine learning, and big data in the reinsurance industry. Proficient in Elasticsearch, Kafka, and Kibana, he leverages advanced analytics to deliver actionable insights and drive strategic decisions.",
      link: 'https://www.linkedin.com/in/kelvin-nyongesa/',
      img: assets.nyongesa
}]
  
  
  const alumniSliced = alumni.slice(0,alms)

  const handlePrev = () =>{
    if(selected > 0 ){
      setSelected(selected - 1)
    }else{
      setSelected(images.length - 1)
    }
  }
  const handleNext =() =>{
    if(selected < images.length - 1){
      setSelected(selected + 1)
    }else{
      setSelected(0)
    }
  }

  useEffect(()=>{
    if(showMore){
      setNo(images.length)
    }else{
      setNo(4)
    }
  }, [showMore])
  
  useEffect(()=>{
    if(more){
      setAlms(alumni.length)
    }else{
      setAlms(3)
    }
  }, [more])
  
  return (
    <div className='w-full h-fit flex flex-col justify-center items-center'>
      <Navbar/>

      {/* Our Journey */}
      <div className="flex flex-col md:flex-row justify-between w-full bg-slate-200 h-fit items-center gap-2 p-0 sm:p-4">
        <div className="w-full md:w-1/2 h-1/2 flex justify-center items-center">
          <img className='w-full h-fit p-0 sm:p-4 rounded-sm' src={main} alt="Our Journey" />
        </div>
        <div className="w-full md:w-1/2 h-full p-4">
          <h1 className='text-gray-700 font-bold lg:text-4xl md:text-2xl text-xl capitalize text-center md:text-justify mb-4'>Our Inspiring Journey</h1>
          <p className='mb-4 text-gray-800 text-sm lg:text-base font-medium sm:text-start text-center w-full text-pretty'>
            From a humble beginning to a thriving community, our journey has been driven by passion, innovation, and the pursuit of excellence. We started with a simple idea — to bring like-minded people together and create something remarkable. Through dedication and hard work, we’ve grown into a powerful force, shaping the future of tech.
          </p>
          <p className='mb-4 text-gray-800 text-sm lg:text-base font-medium sm:text-start text-center w-full text-pretty '>
            Our story a testament to what can be achieved when creative minds come together, combining strengths in diverse fields like data science, machine learning, web development, and beyond. We pride ourselves on embracing challenges, learning from failures, and celebrating our victories, no matter how small.
          </p>
          <div className="w-full sm:h-20 h-14 flex items-center justify-center sm:justify-start">
            <Link to={'/registration'} className='bg-lightGreen h-3/4 flex justify-center gap-3 items-center sm:px-4 sm:py-2 px-2 py-1 text-white font-bold'>
              <p>Join Our Movement</p>
              <BsArrowRight className='text-xl font-extrabold'/>
            </Link>
          </div>
        </div>
      </div>

      {/* Our Purpose */}
      <div className="w-full h-fit p-4 flex justify-center items-center">
        <div className="md:w-3/4 w-full h-fit p-4">
          <h1 className='text-gray-700 font-bold text-2xl md:text-4xl capitalize text-center  mb-5'>
            Our Purpose & Values
          </h1>
          <p className='mb-4 text-gray-800 text-base text-center font-medium'>
            We exist to empower and inspire the next generation of innovators. Our mission is to create a platform where skills are sharpened, ideas are nurtured, and leaders are born. We believe in building sustainable solutions that not only meet today’s challenges but also shape the future. Collaboration, creativity, and integrity are at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* Moments Captured */}
      <div className="w-full h-fit p-6 flex justify-center items-center flex-col">
        <div className="w-full h-fit p-4">
          <h1 className='text-gray-700 font-bold text-2xl md:text-4xl capitalize text-center  mb-5'>Captured Moments</h1>
          <p className='text-gray-600 font-semibold text-base md:text-base capitalize text-center mb-5'>Snapshots of our remarkable journey</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mb-4 transition-all duration-150">
          {imageToShow.map((img, i) => (
              <img onClick={() => {
                setVisible(true)
                setSelected(i)
              }} className='w-full rounded-md h-[15em]' src={img} alt={`Gallery ${i}`} key={i}/>
          ))}
        </div>
        <button onClick={() => setShowMore(!showMore)} className={`flex justify-center items-center gap-2 my-5 w-fit h-14 px-4 py-2 ${showMore ? "bg-gray-500" : "bg-lightGreen"} bg-lightGreen rounded-sm text-white font-medium text-xl transition-all duration-150`}>
          {showMore ? (<>Show Less<MdOutlineKeyboardDoubleArrowUp /></>) : (<>Show More<MdOutlineKeyboardDoubleArrowDown /></>)}
        </button>
      </div>

      {/* Image slide show */}
      <div className={`fixed top-0 left-0  w-full h-full p-2 bg-black bg-opacity-55 backdrop-blur-md ${visible ? "flex" : "hidden"} flex-col justify-between items-center`}>
        <div className="w-full h-2/3 flex justify-center items-center mt-10">
          <img src={images[selected]} className='md:w-[50%] w-full h-fit ' alt="" />
        </div>
        <ul className="flex sm:w-3/4 md:w-2/3 w-fit overflow-x-scroll h-fit justify-center md:gap-3 gap-1 z-20 items-center">
          {
            images.map((img, i)=>{
              return (
              <li onClick={()=> setSelected(i)} key={i} className="h-20 cursor-pointer z-10 w-fit">
                <img src={img} alt="" className={`sm:w-full w-20 h-3/4 ${i === selected ? "border-2 border-lightGreen": null}`} />
              </li>
              )
            })
          }
        </ul>
        <div className="flex absolute w-full h-fit transform  left-0  z-10 top-[60%] px-5 justify-between items-center">
          <GoArrowLeft
            onClick={handlePrev}
            className={`text-4xl p-2 rounded-full bg-lightGreen text-white cursor-pointer hover:bg-gray-600 font-extrabold transition-all duration-200 `}
          />
          <GoArrowRight
            onClick={handleNext}
            className={`text-4xl p-2 rounded-full bg-lightGreen text-white cursor-pointer hover:bg-gray-600 font-extrabold transition-all duration-200 `}
          />
        </div>
        <MdClose onClick={() => setVisible(false)} className='text-4xl absolute top-10 right-10 text-white w-10 rounded-full h-fit bg-lightGreen hover:bg-red-600' />
      </div>
      {/* Meet Our Alumni */}
      <div className="w-full h-fit p-2 sm:p-6 flex justify-center items-center flex-col bg-slate-200 py-10">
        <h1 className="text-gray-800 font-bold text-2xl md:text-4xl  text-center mb-5">Our Esteemed Alumni</h1>
        <p className='mb-5 text-gray-600 capitalize font-bold text-base'>The pillars who shaped our legacy</p>
        <div className="w-full">
          {alumniSliced.map((alm, i) => (
              <div key={i} className="w-full h-fit md:h-[27em] flex md:flex-row flex-col justify-start items-center shadow-sm">
                 <div className="md:w-1/2 w-full h-full p-4 flex justify-center items-center">
                    <img src={alm.img} className='w-full md:w-2/3 h-full rounded-lg' alt={alm.name} />
                 </div>
                 <div className="h-full w-full md:w-1/2 p-3 md:p-6">
                    <h1 className='mb-5 text-gray-700 font-bold text-3xl'>{alm.name}</h1>
                    <h2 className='mb-5 text-gray-600 font-bold text-xl'>{alm.role}</h2>
                    <p className='mb-5 text-sm font-medium text-gray-500'>{alm.exp}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-3">
                      {alm.tech.map((tech, index) => (
                          <span key={index} className='px-3 py-2 text-center bg-gray-600 text-white font-semibold shadow-md transition-all duration-200 hover:bg-green-400'>{tech}</span>
                      ))}
                    </div>
                    <a href={alm.link} target="_blank" rel="noopener noreferrer" className='transition-all gap-2 duration-200 rounded-md hover:scale-105 hover:bg-green-700 my-10 shadow-md py-3 px-3 bg-lightGreen text-white font-bold h-14 w-fit flex justify-center items-center' >
                      <BsLinkedin className='text-lg'/>View Profile
                    </a>
                 </div>
              </div>
          ))}
        </div>
        <button onClick={() => setMore(!more)} className={`flex justify-center items-center gap-2 w-fit h-14 px-4 my-5 py-2 ${more ? "bg-gray-500" : "bg-lightGreen"} bg-lightGreen rounded-sm text-white font-medium text-xl transition-all duration-150`}>
          {more ? (<>Show Less <MdOutlineKeyboardDoubleArrowUp /></>) : (<>Show More <MdOutlineKeyboardDoubleArrowDown /></>)}
        </button>
      </div>

        {/* Dev Team */}
  <div className="w-full h-fit p-6 flex justify-center items-center flex-col bg-white py-10">
  <h1 className="text-gray-800 font-bold text-2xl md:text-3xl uppercase text-center mb-5">
    The Developers
  </h1>
  <p className='text-gray-600 font-semibold text-base md:text-xl capitalize text-center mb-5'>Those who made this website to be what it looks like</p>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full mt-5'>
    {
      devs.map((dev, i)=>{
        return (
          <div className="w-full h-fit flex flex-col justify-center items-center shadow-md transition-all duration-200 rounded-md hover:bg-slate-100 p-4 hover:scale-105" key={i}>
            <img src={dev.img} className='w-32 border-[3px] border-lightGreen mb-3 rounded-full shadow-md h-32' alt="" />
            <h1 className='mb-3 text-gray-800 font-extrabold text-xl'>{dev.name}</h1>
            <h2 className='mb-3 text-gray-600 font-semibold text-base'>{dev.role}</h2>
            <Link className='transition-all gap-2 duration-200 rounded-md hover:scale-105 hover:bg-green-700 my-10 shadow-md py-3 px-3 bg-lightGreen text-white font-bold h-14 w-fit flex justify-center items-center' to={dev.link}>
                <BsLink className='text-2xl'/>
                <p>View Portfolio</p>
              </Link>
          </div>
        )
      })
    }
  </div>
</div>


      {/* Newsletter Section */}
      <Footer/>
    </div>
  )
}

export default About




// {/* Our Journey */}
// <div className="flex flex-col md:flex-row justify-between w-full bg-slate-200 h-fit items-center gap-2 p-0 sm:p-4">
// <div className="w-full md:w-1/2 h-1/2 flex justify-center items-center">
//   <img className='w-full h-fit p-0 sm:p-4 rounded-sm' src={main} alt="Our Journey" />
// </div>
// <div className="w-full md:w-1/2 h-full p-4">
//   <h1 className='text-gray-700 font-bold lg:text-4xl md:text-2xl text-xl capitalize text-center md:text-justify mb-4'>Our Inspiring Journey</h1>
//   <p className='mb-4 text-gray-800 text-sm lg:text-base font-medium sm:text-start text-center w-full text-pretty'>
//     From a humble beginning to a thriving community, our journey has been driven by passion, innovation, and the pursuit of excellence. We started with a simple idea — to bring like-minded people together and create something remarkable. Through dedication and hard work, we’ve grown into a powerful force, shaping the future of tech.
//   </p>
//   <p className='mb-4 text-gray-800 text-sm lg:text-base font-medium sm:text-start text-center w-full text-pretty '>
//     Our story is a testament to what can be achieved when creative minds come together, combining strengths in diverse fields like data science, machine learning, web development, and beyond. We pride ourselves on embracing challenges, learning from failures, and celebrating our victories, no matter how small.
//   </p>
//   <div className="w-full sm:h-20 h-14 flex items-center justify-center sm:justify-start">
//     <Link to={'/registration'} className='bg-lightGreen h-3/4 flex justify-center gap-3 items-center sm:px-4 sm:py-2 px-2 py-1 text-white font-bold'>
//       <p>Join Our Movement</p>
//       <BsArrowRight className='text-xl font-extrabold'/>
//     </Link>
//   </div>
// </div>
// </div>

//  {/* Our Purpose */}
//  <div className="w-full h-fit p-4 flex justify-center items-center">
//  <div className="md:w-3/4 w-full h-fit p-4">
//    <h1 className='text-gray-700 font-bold text-2xl md:text-4xl capitalize text-center  mb-5'>
//      Our Purpose & Values
//    </h1>
//    <p className='mb-4 text-gray-800 text-base font-medium'>
//      We exist to empower and inspire the next generation of innovators. Our mission is to create a platform where skills are sharpened, ideas are nurtured, and leaders are born. We believe in building sustainable solutions that not only meet today’s challenges but also shape the future. Collaboration, creativity, and integrity are at the heart of everything we do.
//    </p>
//  </div>
// </div>
