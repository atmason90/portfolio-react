import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff66c4]'>About Me</p>
            </div>
            <div></div>
            </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-3xl font-bold'>
                <p>Web Developer / Software Engineer with a background in Management Consulting. Looking to leverage my development skills to provide web applications that support business initiatives. Earned a certificate in web development from UC Berkeley.</p>
            </div>
            <div className='text-lg'>
                <p>Management consulting experience has led to high proficiency working with large, cross-functional teams to create dynamic and lasting business solutions. Recognized as a results-driven, resourceful, collaborative, and persistent problem-solver. Excellent communicator with effective relationship-building skills. Possess a strong technical acumen, along with a tenacity and desire to learn, grow and achieve in any endeavor, adding value to any organization or community.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
