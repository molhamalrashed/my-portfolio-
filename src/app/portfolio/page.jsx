"use client";

import Image from 'next/image'
import Link from 'next/link'
import {useRef} from "react";
import {motion, useTransform, useScroll} from "framer-motion";

const items = [
    {
        id:1,
        color: "from-blue-300 to-green-300",
        title: "Aziel-Net",
        description: "a social network designed for refugees encompassing sign- up functionality. Users can add friends, react to posts, upload images, and access news from ( IND) .",
        image: "https://res.cloudinary.com/dtb1hpuil/image/upload/v1710443382/Screenshot_2024-03-14_193208_jvj0u4.png",
        link:"https://c44-group-a-574c03ac3629.herokuapp.com/"
    },
    {
        id:2,
        color: "from-green-300 to-red-300",
        title: "All-in-1 quiz",
        description: "an app allowing users to engage in a game answering questions from various genres.",
        image: "https://res.cloudinary.com/dtb1hpuil/image/upload/v1710443381/Screenshot_2024-03-14_193202_ynamrn.png",
        link:"https://molhamalrashed.github.io/All-in-1-Quiz/"
    },
    {
        id:3,
        color: "from-red-300 to-yellow-300",
        title: "CInema-See",
        description: "a movie platform showcasing the latest movies. Including searching for movies, saving favorite films, and displaying detailed information about movies or series.",
        image: "https://res.cloudinary.com/dtb1hpuil/image/upload/v1710443375/Screenshot_2024-03-14_193146_h8loyi.png",
        link:"https://magnificent-kheer-2a15a0.netlify.app/"
    }
]

const PortfolioPage = () => {

const ref = useRef();
const {scrollYProgress} = useScroll({target: ref});
const x = useTransform(scrollYProgress, [0,1],["0%", "100%"])

return (
    <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}} >
        <div className="[h-600hv]" ref={ref}>
            <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Works</div>
            <div className="sticky top-0 h-screen gap-4 items-center">
                {items.map((item)=>(
                <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                    <div>
                        <h1>{item.title}</h1>
                        <div>
                        <Image rsc={item.image} alt={item.title} fill />
                        </div>
                        <p>{item.description}</p>
                        <Link href={item.link}><button className='bg-black text-white'>Demo</button></Link>
                    </div>
                </div>))}
            </div>
        </div>
    </motion.div>
)
}
export default PortfolioPage