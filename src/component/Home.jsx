import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#01192f]'>
        {/**Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi there, I'm</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Arjun G Lal</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Front End Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'> A tech enthusiast with experience in Web development and coding who is eager to learn, grasp and acquire more skills that the tech world can offer.</p>
            <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300'>View Work
                <span className='group-hover:duration-300'><HiArrowNarrowRight className='group-hover:ml-6 duration-300 ml-3 '/></span></button>
            </div>
        </div>

    </div>
  )
}

export default Home