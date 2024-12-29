import React from 'react'
import { assets } from '../assets/assets'

const Motive = () => {
    const motivesArray = [
        {
            img: `${assets.grow}`,
            title: "Study, Learn, and Grow",
            desc: "Empower yourself with knowledge through hands-on projects, workshops, and resources tailored to enhance your learning experience."
        },
        {
            img: `${assets.associate}`,
            title: "Mentorship",
            desc: "Gain guidance from experienced mentors who are passionate about helping you achieve your goals in Data Science and Artificial Intelligence."
        },
        {
            img: `${assets.grow}`,
            title: "Community Support",
            desc: "Be part of a vibrant community that encourages collaboration, peer learning, and shared growth in a friendly environment."
        },
    ]
    return (
        <div className='w-full p-2 bg-white h-fit py-10 mb-4'>
            {/* Heading */}
            <div className="w-full h-fit p-0 py-3 md:p-3 mb-5">
                <h2 className='text-gray-800 font-bold text-4xl mb-3  w-full text-center'>Our Motives</h2>
                <p className='text-gray-500 font-medium text-sm text-center w-full'>
                    At <span className='font-bold text-xs md:text-sm text-gray-800'>DSAIC</span>, we believe in limitless learning. We embrace peer learning, mentorship, and community-driven growth to foster innovation and excellence.
                </p>
            </div>
            <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-x-6">
                {
                    motivesArray.map((motive, i) => {
                        return (
                            <div key={i} className="w-full flex items-center flex-col justify-center gap-3">
                                <img className='w-1/5 h-fit mb-2' src={motive.img} alt={motive.title} />
                                <h1 className='font-bold text-base  mb-2'>{motive.title}</h1>
                                <p className='text-center font-medium text-xs md:text-sm text-gray-500'>
                                    {motive.desc}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Motive
