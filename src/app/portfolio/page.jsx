"use client";

import Image from 'next/image'
import Link from 'next/link'
import {useRef} from "react";
import {motion, useTransform, useScroll} from "framer-motion";

const items = [
    {
        id:1,
        color: "from-blue-200 to-green-200",
        title: "Aziel-Net",
        description: "a social network designed for refugees encompassing sign- up functionality. Users can add friends, react to posts, upload images, and access news from ( IND) .",
        image: "https://res.cloudinary.com/dtb1hpuil/image/upload/v1710443382/Screenshot_2024-03-14_193208_jvj0u4.png",
        link:"https://c44-group-a-574c03ac3629.herokuapp.com/"
    },
    {
        id:2,
        color: "from-green-200 to-red-200",
        title: "All-in-1 quiz",
        description: "an app allowing users to engage in a game answering questions from various genres.",
        image: "https://res.cloudinary.com/dtb1hpuil/image/upload/v1710443381/Screenshot_2024-03-14_193202_ynamrn.png",
        link:"https://molhamalrashed.github.io/All-in-1-Quiz/"
    },
    {
        id:3,
        color: "from-red-200 to-blue-200",
        title: "CInema-See",
        description: "a movie platform showcasing the latest movies. Including searching for movies, saving favorite films, and displaying detailed information about movies or series.",
        image: "https://res.cloudinary.com/dtb1hpuil/image/upload/v1710443375/Screenshot_2024-03-14_193146_h8loyi.png",
        link:"https://magnificent-kheer-2a15a0.netlify.app/"
    }
]

const PortfolioPage = () => {


const ref = useRef();
const {scrollYProgress} = useScroll({target: ref});
const x = useTransform(scrollYProgress, [0,1],["0%", "-75%"])

return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
            <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-100 to-blue-200" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex pt-[10rem] md:pt-[5rem] lg:pt-[5rem] xl:pt-[3rem] justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                    <div className='flex flex-col relative text-white gap-8'>
                        <h1 className='flex text-center font-bold text-2xl md:text-4xl lg:text-6xl xl:text-8xl'>{item.title}</h1>
                        <div className='relative w-80 h-60 md:w-[400px] md:h-[280px] lg:w-[500px] lg:h-[350px]  '>
                        <Image src={item.image} alt={item.title} fill/>
                        </div>
                        
                        <p className='text-[#392775]  w-80 md:w-[400px] lg:w-[500px] xl:w-[600px] lg:text-lg'>{item.description}</p>
                        <Link href={item.link} target='_blank' className='flex justify-end '><button className='rounded-lg bg-[#38296b] p-3 m-3'>Demo</button></Link>
                        
                    </div>
                </div>))}
                </motion.div>
            </div>
                </div>
                <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
                  <h1 className='text-black text-8xl pt-[10rem]'>Do you have a project</h1>
                  <div className='relative'>
                    <motion.svg animate={{rotate:-360}} transition={{duration:8, ease:"linear", repeat:Infinity}} viewBox='0 0 300 300' className='w-64 h-64 md:w-[500px] md:h-[500px]'>
                      <defs>
                        <path id='circlePath'
                        d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0'>
                        </path>
                      </defs>
                      <text fill="#000">
                  <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end & Back-end  Web-Developer
              </textPath>
            </text>
                    </motion.svg>
                    <Link href="/contact" className='w-16 h-16 md:w-24 md:h-24 absolute top-0 right-0 left-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'>Hire me</Link>
                  </div>
        </div>
    </motion.div>
)
}
export default PortfolioPage