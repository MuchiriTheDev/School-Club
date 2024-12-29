import { useState } from 'react'
import Blog from '../assets/blog-lgo.png';
import Documentation from '../assets/docs-logo.png';
import Reset from '../assets/reset.png';
import Author from '../assets/author.png';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import article1 from '../assets/article1.jpg';
import article2 from '../assets/article2.jpg';
import doc1 from '../assets/doc1.jpg';
import doc2 from '../assets/doc2.jpg';
import doc3 from '../assets/doc3.jpg';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import React from 'react'
import { assets } from '../assets/assets';
import { BiArrowFromLeft, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BsArrowDown, BsArrowDownLeft, BsArrowDownRight } from 'react-icons/bs';
import NewsLetter from '../Components/NewsLetter';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

const Resources = () => {
  const [ like, setLike ] = useState(0)

  const resources = [
    {
      type: 'Blog',
      image: blog1,
      author: 'John Doe',
      title: 'Enhancing Patient Outcomes through Machine Learning',
      body: 'Explore how machine learning is helping healthcare providers predict patient outcomes, reduce errors, and improve treatments.',
      date: '30/07/2023'
    },
    {
      type: 'Article',
      image: article1,
      author: 'Margaret Awino',
      title: 'Data-Driven Decisions in Agriculture',
      body: 'Machine learning aids in crop yield prediction, pest control, and efficient resource management, transforming modern agriculture.',
      date: '10/12/2024'
    },
    {
      type: 'Doc',
      image: doc1,
      author: 'Peter Kariuki',
      title: 'Predictive Analytics in Retail',
      body: 'Retailers use predictive analytics to optimize inventory, understand customer preferences, and enhance sales through data-driven strategies.',
      date: '15/07/2022'
    },
    {
      type: 'Blog',
      image: blog2,
      author: 'Victor Rono',
      title: 'Natural Language Processing in Customer Service',
      body: 'NLP technology is revolutionizing customer service by enabling efficient, automated support and personalized customer interactions.',
      date: '22/09/2024'
    },
    {
      type: 'Doc',
      image: doc2,
      author: 'Sarah Kimani',
      title: 'Fraud Detection with Machine Learning',
      body: 'Machine learning algorithms help detect fraudulent activities, ensuring security in finance and e-commerce transactions.',
      date: '01/04/2020'
    },
    {
      type: 'Doc',
      image: doc3,
      author: 'Jane Wanjiru',
      title: 'Autonomous Driving and Safety',
      body: 'Machine learning enables autonomous vehicles to recognize objects, make split-second decisions, and improve road safety.',
      date: '10/09/2024'
    },
    {
      type: 'Article',
      image: article2,
      author: 'Muchiri Edwin',
      title: 'Sentiment Analysis for Social Media Insights',
      body: 'Learn how sentiment analysis helps brands understand customer emotions, boosting marketing and customer engagement strategies.',
      date: '13/09/2024'
    },
    {
      type: 'Blog',
      image: blog3,
      author: 'Michael Ombati',
      title: 'Forecasting in Financial Markets',
      body: 'Machine learning models predict stock trends, supporting informed investment decisions and efficient risk management.',
      date: '05/11/2022'
    },
    {
      type: 'Doc',
      image: doc1,
      author: 'Kilonzo Abel',
      title: 'Detecting Anomalies in Manufacturing',
      body: 'Machine learning helps identify defects early in production, improving product quality and reducing waste.',
      date: '07/01/2024'
    },
    {
      type: 'Article',
      image: article1,
      author: 'Doreen Nyananga',
      title: 'Personalized Education with AI',
      body: 'AI-powered platforms provide customized learning paths for students, enhancing engagement and knowledge retention.',
      date: '10/09/2024'
    },
    {
      type: 'Article',
      image: article2,
      author: 'Kipsang Eliud',
      title: 'AI in Climate Change Mitigation',
      body: 'AI supports climate science by forecasting weather patterns, tracking deforestation, and analyzing carbon footprints.',
      date: '22/01/2024'
    },
    {
      type: 'Blog',
      image: blog1,
      author: 'Ali Hassan',
      title: 'Healthcare Data Privacy in Machine Learning',
      body: 'Balancing data privacy with machine learning in healthcare is crucial to protect patient information while advancing research.',
      date: '02/02/2023'
    }
  ];
  

  const [resourceItems,setResourceItems] = useState(resources);

  const sortButtons = [
  {
    buttonName : 'Article',
    type: 'Article',
    buttonLogo : Documentation
  },
  {
    buttonName : 'Blog',
    type:'Blog',
    buttonLogo : Blog
  },
  {
    buttonName : 'Documentation',
    type:'Doc',
    buttonLogo : Documentation
  }
  ];

  const filterResources = (type) => {
    const filteredResources = resources.filter(resource => resource.type === type );
    setResourceItems(filteredResources);
  };

  const resetResourceItems = () => {
    setResourceItems(resources); 
  };

  return (
    <div className='bg-gray-100'>
      <Navbar/>
      {/* Hero page in resource page */}
      <div
        style={{
          background: `url(${assets.ev4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        className="w-full h-[80vh] flex justify-start items-center relative"
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 w-full p-0 md:p-6 pl-3 md:pl-20 h-full backdrop-blur-sm flex justify-center items-start flex-col text-white">
          <div className="w-full h-fit py-4 bg-opacity-70 backdrop-blur-md rounded-lg">
            <h1 className="font-bold text-3xl w-full sm:text-4xl text-lightGreen mb-4 drop-shadow-md">Amazing Resources</h1>
            
            <p className="text-xs sm:text-base leading-relaxed sm:w-3/4 text-white font-medium mb-6 shadow-sm">
              Discover a curated collection of resources to boost your journey in data science and machine learning. From blogs to research articles, dive into insights that empower your projects, keep you updated on the latest trends, and sharpen your technical skills.
            </p>
            
            <a
              className="flex items-center justify-center h-12 w-fit rounded-sm text-white bg-lightGreen gap-3 font-semibold text-sm md:text-lg py-3 px-8 transition-transform duration-300 transform hover:scale-105 shadow-lg"
              href='#resources'
            >
              <p>Explore Resources</p>
              <BsArrowDown size={20} className="text-2xl font-bold" />
            </a>
          </div>
        </div>
      </div>




      {/* section two */}
      <div className='block py-10'>
        <p className='w-full text-gray-700 font-bold text-2xl md:text-4xl text-center my-4'>
          Explore our learning resources
        </p>
        
        <div className='flex flex-col items-center justify-center gap-x-5 mb-6'>
          <p className="mx-10 mb-4 text-green font-bold text-base md:text-xl ">
            Sort by:
          </p>
          <div className="flex gap-3 items-center justify-center md:w-2/3 sm:w-3/4 w-full">
            {sortButtons.map((sortButton,index) => {
              return (
                  <button 
                    key={index}
                    className='text-xs sm:text-sm border-solid border-lightGreen border w-fit flex items-center gap-1 px-2 py-1 text-gray-700 font-semibold rounded-lg shadow-xl hover:scale-105 transition-all duration-150'
                    onClick = { () => filterResources(sortButton.type)}>
                    <img 
                      className="lg:w-4 inline-block w-[10px] " 
                      src={sortButton.buttonLogo}/>
                      {sortButton.buttonName}
                  </button>
              )
            })}
              <button 
                className='text-xs sm:text-sm border-solid border-lightGreen border w-fit flex items-center gap-1 px-2 py-1 text-gray-700 font-semibold rounded-lg shadow-xl hover:scale-105 transition-all duration-150' onClick={resetResourceItems}>
                <img 
                  className="lg:w-4 inline-block w-[10px]" 
                    src={Reset}/>
                    Reset
              </button>
          </div>
          
        </div>
      </div>
      <div id='resources' 
        className='grid gap-1 md:gap-3 mb-10 grid-cols-1 sm:grid-cols-2 mx-0 md:mx-4 transition-opacity duration-500 ease-in opacity-0 
            animate-fadeIn'>
            {resourceItems.map((resourceItem,index) => {
                return (
                  <div
                    key={index}
                    style={{
                      background: `url(${resourceItem.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundAttachment: 'fixed',
                    }}
                    className="w-full h-[20em] flex justify-start items-center relative"
                  >
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black opacity-40 "></div>
                    <div className="w-full h-full flex flex-col justify-between backdrop-blur-sm transition-all duration-150 hover:backdrop-blur-0 items-center z-10 p-3">

                      <div className="flex w-full justify-between items-center mb-3">
                        <div className="flex items-center justify-center gap-3 bg-lightGreen px-4 py-2 rounded">
                          <BiUser className='h-full w-fit text-base sm:text-xl text-white'/>
                          <p className='text-white md:font-semibold lg:font-extrabold text-xs md:text-sm lg:text-base'>{resourceItem.author}</p>
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-lightGreen px-4 py-2 rounded">
                          <p className='text-white text-xs sm:text-base font-semibold  shadow-xl'>{resourceItem.date}</p>
                          {
                            like === index ?(
                              <FaHeart onClick={()=> setLike(0)} size={20} className='text-red-500'/>
                            ):(
                              <FaRegHeart onClick={()=> setLike(index)} size={20} className='text-white'/>
                            )
                          }
                        </div>
                      </div>

                      <div className="mb-3 w-full pl-3">
                        <h1 className='mb-3 font-bold text-white text-xl md:text-2xl lg:text-3xl'>
                          {resourceItem.title}
                        </h1>
                        <p className='text-slate-200 font-medium text-sm'>
                          {resourceItem.body}
                        </p>
                      </div>

                      <div className="w-full flex px-3 justify-between items-center">
                        <p className='text-lightGray font-bold text-base'>{resourceItem.type}</p>
                        <a 
                          className='w-fit h-fit px-4 py-2 bg-lightGreen rounded text-white text-base font-bold' 
                          href="#">
                          {resourceItem.type === 'Doc' ? "Download" : 'Link'}
                        </a>
                      </div>
                    </div>

                  </div>
                );
            })}
      </div>
      <Footer/>   
    </div>
      
  )  
}

export default Resources;