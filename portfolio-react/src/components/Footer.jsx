import React from 'react';
import { Link } from 'react-scroll';


const Footer = () => {
  return (
      <div>
        <footer className='fixed w-full bottom-0 p-4 bg-[#0a192f] sm:p-6'>
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-[#ff66c4] sm:text-center">© 2022 <a href="https://github.com/atmason90" class="hover:underline">Andrew Mason</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className='hover:text-[#ff66c4]'>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='hover:text-[#ff66c4]'>
                        <Link to='about' smooth={true} duration={500}>
                        About Me
                        </Link>
                    </li>
                    <li className='hover:text-[#ff66c4]'>
                        <Link to='resume' smooth={true} duration={500}>
                        Resume
                        </Link>
                    </li>
                    <li className='hover:text-[#ff66c4]'>
                        <Link to='projects' smooth={true} duration={500}>
                        Projects
                        </Link>
                    </li>
                    <li className='hover:text-[#ff66c4]'>
                        <Link to='contact' smooth={true} duration={500}>
                        Contact
                        </Link>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/andrewmason0529/" target='#'>LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/atmason90" target='#'>GitHub</a>
                    </li>
                    <li>
                        <a href="https://medium.com/@atmason90" target='#'>Medium</a>
                    </li>
                </ul>
            </div>
        </footer>
      </div>
  )
}

export default Footer
