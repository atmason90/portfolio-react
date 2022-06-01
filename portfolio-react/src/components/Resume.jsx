import React from 'react'
import { BsDownload } from 'react-icons/bs'

const Resume = () => {
  return (
    <div name='resume' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
      {/* container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff66c4]'>Resume</p>
            </div>
            <div></div>
            </div>
            <div className='text-xl mb-4'>
                <p>Here are some of the technologies I am most familiar with</p>
            </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-xl'>
                <p className='font-bold'>Frontend:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>React</li>
                </ul>
            </div>
            <div className='text-xl'>
                <p className='font-bold'>Backend:</p>
                <ul>
                    <li>Express.js</li>
                    <li>MySql</li>
                    <li>MongoDB</li>
                    <li>Rest APIs</li>
                    <li>Node.js</li>
                </ul>
            </div>
            <div>
      </div>
        </div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff66c4] hover:border-[#ff66c4]'>Download My Resume<span><BsDownload className='ml-3' /></span></button>
      </div>
    </div>
  )
}

export default Resume
