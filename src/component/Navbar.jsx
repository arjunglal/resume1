import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'
const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleClick = () =>setNav(!nav)

  return (
    <div className={'fixed w-full h-[80px] flex justify-between items-center px-4 md:bg-[#01192f]/30 md:backdrop-blur-xl bg-[#01192f] text-gray-200'}>
        <div>
            <img src={Logo} alt="#" className='h-[150px] w-[150px] pb-[30px] pr-[40px]' />
        </div>

        {/*Menu*/}
            <ul className='hidden md:flex'>
                <li>        
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>        
                    <Link to='about' smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li>        
                    <Link to='skills' smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li>        
                    <Link to='contact' smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>

        {/**Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav?<FaBars/>:<FaTimes/>}
        </div>

        {/**Mobile Menu */}
            <ul className={!nav ? 'hidden':'md:hidden absolute top-0 left-[0px] w-full h-screen bg-[#01192f]/60 backdrop-blur flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>                <li>        
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li></li>
                <li className='py-6 text-4xl'>                <li>        
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li></li>
                <li className='py-6 text-4xl'>                <li>        
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li></li>
                <li className='py-6 text-4xl'>                <li>        
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li></li>
            </ul>

        {/**Social Icons*/}
        <div className='left-[-45px] flex fixed flex-col top-[250px] lg:left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-50px] lg:hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='w-full flex justify-between items-center text-gray-300' href="https://www.linkedin.com/in/arjun-g-lal">LinkedIn<FaLinkedin size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-50px] lg:hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='w-full flex justify-between items-center text-gray-300' href="https://github.com/arjunglal">GitHUb<FaGithub size={30}/></a>
                </li>
               {/*} <li className='  w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-50px] lg:hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='w-full flex justify-between items-center text-gray-300' href="/">Mail<HiOutlineMail size={30}/></a>
                </li>*/}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-50px] lg:hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='w-full flex justify-between items-center text-gray-300' href={require('../assets/myresume.pdf')} download='my resume'>Resume<BsFillPersonLinesFill size={30}/></a>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar