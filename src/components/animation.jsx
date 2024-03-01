"use client";
import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";

const Animation = ({children}) => {
return (
    <div className=''>
        <AnimatePresence>
        <div className=" w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
        <div className="h-24">
          <Navbar />
        </div>
        <div className='h-[calc(100vh-6rem)]'>{children}</div>
        </div>
        </AnimatePresence>
    </div>
)
}
export default Animation