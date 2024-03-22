"use client";

import {motion} from "framer-motion";

const text = "Are you ready!"
const ContactPage = () => {
return (
    <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}} >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-5xl">
        <div>
            {text.split("").map((letter,index)=>(
                <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, delay:index*0.1, repeat:Infinity}}>{letter}</motion.span>
            ))}
              ☺️
        </div>
        </div>
        {/* Form Container */}
        <div className="h-1/2 lg:h-5/6 lg:w-1/2 flex items-center flex-col justify-center gap-5 bg-red-50 rounded-xl p-20 mt-10 ">
            <span>Dear Molham</span>
            <textarea rows={6} placeholder="Write your message here"></textarea>
            <span>Email Address</span>
            <textarea rows={1} placeholder="Write your email here"></textarea>
            <button className="">Send</button>
        </div>
        </div>
    </motion.div>
)
}
export default ContactPage