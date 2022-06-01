import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ff66c4] text-lg'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Andrew Mason</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a full stack developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>with a background in Management Consulting. Looking to leverage my development skills to provide web applications that support business initiatives.</p>
      
      <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff66c4] hover:border-[#ff66c4]'>View Projects <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span></button>
      </div>
      </div>
    </div>
  )
}

export default Home
