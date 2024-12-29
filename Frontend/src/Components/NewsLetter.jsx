import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col py-10 px-5'>
        <h1 className='font-bold  text-gray-800 md:text-3xl text-xl text-center h-fit mb-5 w-full md:w-3/4'>
            Subscribe to our newsletter
        </h1>
        <p className='font-semibold text-base md:text-xl text-gray-500 captitalize mb-5 text-center'>
          Get latest update, notifications of upcoming events and exclusive contents 
        </p>
        <form className="w-full sm:w-3/4 h-14 border border-lightGreen rounded-md overflow-hidden ">
            <input type="email"  placeholder='Email Address' required className='w-3/4 text-gray-500 h-full p-4 border-none outline-none' />
            <input type="submit" className='w-1/4 h-full  bg-lightGreen text-white transition-all duration-200 hover:scale-105 font-semibold text-sm md:text-xl border-none outline-none' value="Submit" />
        </form>
    </div>
  )
}

export default NewsLetter