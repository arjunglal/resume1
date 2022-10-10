import React from 'react'

const About = () => {
  return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
         <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
               <div className='sm:text-right pb-8 pl-4'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                     About
                  </p>
               </div>
               <div></div>
            </div>
            <div className='p-[25px] lg:p-0 max-w-[1000px] w-full grid lg:grid-cols-2 gap-8'>
               <div className='text-4xl font-bold'>
                  <p>Hi, I'm Arjun, this a resume website I made,Please look around.</p>
               </div>
            <div>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Expedita voluptate, delectus, nemo aut optio explicabo
                   praesentium consequuntur voluptas reiciendis debitis, 
                   sapiente similique maiores? Voluptas totam mollitia placeat
                   animi fugiat amet?
               </p>
               </div>
            </div>
         </div>
      </div>
  )
}

export default About