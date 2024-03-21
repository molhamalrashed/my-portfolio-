"use client";

import {motion} from "framer-motion";

const text = "Are you ready!"
const ContactPage = () => {
return (
    <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}} >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2">
        <motion.div>
            {text.split("").map((letter,index)=>(
                <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, delay:index*0.1, repeat:Infinity}}>{letter}</motion.span>
            ))}
        </motion.div>
        </div>
        {/* Form Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2"></div>
        </div>
    </motion.div>
)
}
export default ContactPage