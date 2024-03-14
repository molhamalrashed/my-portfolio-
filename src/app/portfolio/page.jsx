"use client";

import Image from 'next/image'
import Link from 'next/link'
import {useRef} from "react";
import {motion, useTransform, useScroll} from "framer-motion";

const items = [
    {
        id:1,
        color: "from-blue-400 to-green-400",
        title: "Aziel-Net",
        description: "a social network designed for refugees encompassing sign- up functionality. Users can add friends, react to posts, upload images, and access news from ( IND) .",
        image: "/azielnet.png",
        link:"https://c44-group-a-574c03ac3629.herokuapp.com/"
    },
    {
        id:2,
        color: "from-green-400 to-red-400",
        title: "All-in-1 quiz",
        description: "an app allowing users to engage in a game answering questions from various genres.",
        image: "/allinone.png",
        link:"https://molhamalrashed.github.io/All-in-1-Quiz/"
    },
    {
        id:3,
        color: "from-red-400 to-yellow-400",
        title: "CInema-See",
        description: "a movie platform showcasing the latest movies. Including searching for movies, saving favorite films, and displaying detailed information about movies or series.",
        image: "/cinimasee.png",
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
                <div key={item.id}>
                    <div>
                        <h1>{item.title}</h1>
                        <div>
                        <Image src={item.image} alt={item.title} fill />
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