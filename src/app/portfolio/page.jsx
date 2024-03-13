"use client";

import {useRef, useScroll} from "react";
import {motion, useTransform} from "framer-motion";

const PortfolioPage = () => {

const ref = useRef();
const {scrollYProgress} = useScroll({target:ref});
const x = useTransform(scrollYProgress, [0,1],["0%", "100%"])

return (
    <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}} >
        <div className="[h-600hv]" ref={ref}></div>
    </motion.div>
)
}
export default PortfolioPage