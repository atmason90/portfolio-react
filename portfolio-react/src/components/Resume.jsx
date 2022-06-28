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
            <div className='text-3xl mb-4'>
                <p>Technologies and Skills</p>
            </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-4 gap-8 px-4'>
        <div className='text-xl'>
                <p className='font-bold text-3xl'>Languages:</p>
                <ul>
                    <li>JavaScript (ES6)</li>
                    <li>HTML5</li>
                    <li>Cascading Style Sheets (CSS)</li>
                    <li>JSX</li>
                </ul>
            </div>
            <div className='text-xl'>
                <p className='font-bold text-3xl'>Frontend:</p>
                <ul>
                    <li>Bootstrap</li>
                    <li>JQuery</li>
                    <li>Moment.js</li>
                    <li>Handlebars.js</li>
                    <li>JWT JavaScript Web Token</li>
                    <li>React</li>
                    <li>React Hooks</li>
                    <li>Webpack</li>
                    <li>Progressive Web Apps (PWA)</li>
                    <li>Context API</li>
                </ul>
            </div>
            <div className='text-xl'>
                <p className='font-bold text-3xl'>Backend:</p>
                <ul>
                    <li>Web API</li>
                    <li>Server-Side API</li>
                    <li>Third-Party API</li>
                    <li>IndexedDB</li>
                    <li>AJAX</li>
                    <li>Fetch</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Rest API</li>
                    <li>MySql</li>
                    <li>Sequelize ORM</li>
                    <li>MongoDB</li>
                    <li>Mongoose ODM</li>
                    <li>Apollo GraphQL</li>
                </ul>
            </div>
            <div className='text-xl'>
                <p className='font-bold text-3xl'>Other:</p>
                <ul>
                    <li>Problem Solving</li>
                    <li>Pseudocode</li>
                    <li>Chrome Dev Tools</li>
                    <li>Insomnia/Postman</li>
                    <li>JSON</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Test Driven Development (TDD)</li>
                    <li>Jest</li>
                    <li>Data Structures</li>
                    <li>Algorithms</li>
                    <li>MERN Stack</li>
                </ul>
            </div>
            <div>
      </div>
        </div>
        <a href="https://drive.google.com/file/d/1wYsH2dNr3WzDzxkQggT2Yt7v8GplWKbu/view?usp=sharing" target='#'>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff66c4] hover:border-[#ff66c4]'>Download My Resume<span><BsDownload className='ml-3' /></span>
        </button>
        </a>
      </div>
    </div>
  )
}

export default Resume
