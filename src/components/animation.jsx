"use client";
import { usePathname } from "next/navigation";
import {motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";

const TransitionProvider= ({children}) => {

    const pathname = usePathname();
return (
    <AnimatePresence mode="wait">

        <div key={pathname}  className=" w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
        <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
        animate={{height:"0vh"}}
        exit={{height:"140vh"}}
        transition={{ease:"easeOut", duration:"0.5"}} />

        <motion.div className="fixed m-auto top-0 left-0 right-0 bottom-0 z-50 text-white text-8xl w-fit h-fit"
        initial={{opacity:1}}
        animate={{opacity:0}}
        exit={{opacity:0}}
        transition={{ease:"easeOut", duration:"0.8"}}>
            {pathname.substring(1)}
            </motion.div>

        <motion.div className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
        animate={{height:"0vh", transition:{delay:"0.5 "}}}
        initial={{height:"140vh"}}/>
        <div className="h-24">
          <Navbar />
        </div>
        <div className='h-[calc(100vh-6rem)]'>{children}</div>
        </div>
    </AnimatePresence>
)
}
export default TransitionProvider;