import React, { useState, useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Events = () => {
  const [trans, setTrans] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const eventContainerRef = useRef(null);

  const events = [
    {
      img: `${assets.ev1}`,
      time: "Tuesday, Aug 15 5:00pm EAT",
      venue: "RC 15",
      heading: "Introduction to Data Science"
    }, {
      img: `${assets.ev2}`,
      time: "Tuesday, Aug 22 5:00pm EAT",
      venue: "RC 15",
      heading: "Python for begginers"
    },{
      img: `${assets.ev3}`,
      time: "Tuesday, Aug 29 5:00pm EAT",
      venue: "RC 15",
      heading: "Introduction to Pandas"
    },{
      img: `${assets.ev4}`,
      time: "Tuesday, Sep 5 5:00pm EAT",
      venue: "RC 15",
      heading: "Introduction To Numpy"
    },
    // Other events...
  ];

  useEffect(() => {
    const containerWidth = eventContainerRef.current.offsetWidth;
    const totalWidth = events.length * containerWidth; // Total width of all cards
    const max = (totalWidth / containerWidth - 1) * 100;
    setMaxScroll(max);
  }, [events.length]);

  const handleNext = () => {
    if (trans < maxScroll) {
      setTrans(trans + 100);
    }
  };

  const handlePrev = () => {
    if (trans > 0) {
      setTrans(trans - 100);
    }
  };

  return (
    <div className='w-full h-auto mb-20'>
      {/* Heading */}
      <div className="w-full flex justify-between items-center p-3 px-5 mb-5 md:px-10">
        <h1 className='text-gray-800 font-bold text-base sm:text-3xl'>Upcoming Events</h1>
        <p className='text-gray-800 font-bold text-sm sm:text-2xl capitalize cursor-pointer hover:underline'>Explore more events</p>
      </div>

      {/* Event List */}
      <div className="relative w-full flex items-center h-full p-5 overflow-hidden smn  :overflow-x-hidden overflow-x-scroll">
        <div
          ref={eventContainerRef}
          className={`w-full flex  gap-5 transition-transform ease-in-out duration-300`}
          style={{ transform: `translateX(-${trans}%)` }}
        >
          {
            events.map((ev, i) => (
              <div key={i} className='min-w-[85vw] sm:min-w-[60vw] lg:min-w-[30em] h-auto flex-shrink-0 relative shadow-lg rounded-lg overflow-hidden'>
                <img className='w-full h-[15em] sm:h-[20em] object-cover' src={ev.img} alt={ev.heading} />
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 p-4">
                  <h3 className='font-bold text-lg mb-2'>Time: {ev.time}</h3>
                  <h3 className='font-bold text-lg mb-2'>Heading: {ev.heading}</h3>
                  <p className='font-bold text-lg mb-2'>Venue: {ev.venue}</p>
                </div>
              </div>
            ))
          }
        </div>

        {/* Navigation Arrows */}
        <div className="hidden sm:flex absolute  bottom-0 transform -translate-y-1/2 left-0 right-0 z-10 top-[90%] px-5 justify-between items-center">
          <GoArrowLeft
            onClick={handlePrev}
            className={`text-3xl sm:text-4xl p-2 rounded-full bg-lightGreen text-white cursor-pointer hover:bg-gray-600 font-extrabold transition-all duration-200 ${trans <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
          <GoArrowRight
            onClick={handleNext}
            className={`text-3xl sm:text-4xl p-2 rounded-full bg-lightGreen text-white cursor-pointer hover:bg-gray-600 font-extrabold transition-all duration-200 ${trans >= maxScroll ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
