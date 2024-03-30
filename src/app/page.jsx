"use client";

import Image from 'next/image';
import {motion} from "framer-motion";

const Homepage = () => {
  return (
  <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}} >
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
    {/* Image Section */}
    
    <div className="h-1/2 relative lg:h-full lg:w-1/2 z-10 ">
      <Image src="https://res.cloudinary.com/dtb1hpuil/image/upload/v1711491908/molham_Png_npdvu1.png" alt="Molham" fill className='object-contain' />
    </div>
    {/* Text section */}
    <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
      <h1 className='md:text-4xl font-bold'>Full-Stack Web Developer</h1>
      <p className='text-xs md:text-lg'>As a passionate and dedicated web developer, I am committed to continuous learning and self-improvement. I thrive in a dynamic team environment and possess strong organizational and time-management skills. With a background in teaching and voice acting, my excellent communication and interpersonal skills allow me to effectively collaborate with clients and colleagues.</p>
    
    {/* Buttons */}
    <div className='lg:w-full flex gap-4 sm:gap-8 text-xs sm:text-xl '>
      <a href="/portfolio" className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>My work</a>
      <a href="/contact" className='p-4 rounded-lg ring-1 ring-black'>Contact me</a>
    </div>
    </div>
  </div>;
    </motion.div>
)};

export default Homepage;
