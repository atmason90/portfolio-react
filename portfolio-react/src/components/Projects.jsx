import React from 'react';
import bookend from '../assets/bookend.jpeg';
import blog from '../assets/techblog.jpeg';
import editor from '../assets/texteditor.jpeg';
import social from '../assets/socialnetwork.jpeg';
import ecomm from '../assets/ecomm.jpeg';
import ems from '../assets/ems.jpeg';


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#ff66c4]'>Projects</p>
            <p className='py-6'>Check out some of my recent projects</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            
            {/* grid item */}
            <div style={{ backgroundImage: `url(${bookend})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                        Bookend Application
                    </span>
                    <div className='pt-8 text-center'>
                       <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                        </a> 
                        <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                        </a> 
                    </div>
                </div>
            </div>
            
            {/* grid item */}
            <div style={{ backgroundImage: `url(${blog})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                        Tech Blog
                    </span>
                    <div className='pt-8 text-center'>
                       <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                        </a> 
                        <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                        </a> 
                    </div>
                </div>
            </div>

            {/* grid item */}
            <div style={{ backgroundImage: `url(${editor})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                        Text Editor
                    </span>
                    <div className='pt-8 text-center'>
                       <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                        </a> 
                        <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                        </a> 
                    </div>
                </div>
            </div>

            {/* grid item */}
            <div style={{ backgroundImage: `url(${social})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                        Social Network API
                    </span>
                    <div className='pt-8 text-center'>
                       <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                        </a> 
                        <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                        </a> 
                    </div>
                </div>
            </div>

            {/* grid item */}
            <div style={{ backgroundImage: `url(${ecomm})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                        E-commerce Backend
                    </span>
                    <div className='pt-8 text-center'>
                       <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                        </a> 
                        <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                        </a> 
                    </div>
                </div>
            </div>

            {/* grid item */}
            <div style={{ backgroundImage: `url(${ems})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl justify-center font-bold text-white tracking-wider'>
                        Employee Management System
                    </span>
                    <div className='pt-8 text-center'>
                       <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Deployed</button>
                        </a> 
                        <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
