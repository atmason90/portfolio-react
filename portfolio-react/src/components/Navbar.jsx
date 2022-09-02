import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsMedium } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[120px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '100px'}}/>  
        </div> 

        {/* navbar menu */}
        <ul className='hidden sm:flex'>
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
        </ul>
        
        {/* hamburger */}
        <div onClick={handleClick} className='sm:hidden z-40'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl hover:text-[#ff66c4]'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#ff66c4]'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                About Me
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#ff66c4]'>
                <Link onClick={handleClick} to='resume' smooth={true} duration={500}>
                Resume
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#ff66c4]'>
                <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                Projects
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-[#ff66c4]'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[40%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/andrewmason0529/' target='#'>LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/atmason90' target='#'>GitHub <FaGithub size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://medium.com/@atmason90' target='#'>Medium <BsMedium size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#53a795]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='mailto:atmason90@gmail.com'>Email <HiOutlineMail size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1wYsH2dNr3WzDzxkQggT2Yt7v8GplWKbu/view?usp=sharing' target='#'>Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
            </ul>
        </div>
    </div>
  
  )
}

export default Navbar
