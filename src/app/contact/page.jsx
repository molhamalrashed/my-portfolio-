"use client";

import {motion} from "framer-motion";
import {useState, useRef} from "react";
import emailjs from '@emailjs/browser';


const text = "Are you ready!"
const ContactPage = () => {

const [success, setSuccess] = useState(false);
const [error, setError] = useState(false);
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);   

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };

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
        <form onSubmit={sendEmail} ref={form} className="h-1/2 lg:h-5/6 lg:w-1/2 flex items-center flex-col justify-center gap-5 bg-red-50 rounded-xl p-20 mt-10 ">
            <textarea rows={6} 
            placeholder="Write your message here" 
            className="bg-transparent w-full border-b-2 border-b-black outline-none"
            name="user_message"
            ></textarea>
            <textarea rows={2} 
            placeholder="Write your email here" 
            className="bg-transparent w-full border-b-2 border-b-black outline-none"
            name="user_email"
            ></textarea>
            <button
             className="bg-[#c0adff] rounded font-semibold w-full p-2"
             >
            Send</button>
            {success && <span className="text-green-400 font-semibold">Your message is sent successfully </span>}
            {error && <span className="text-red-400 font-semibold">An error happened during sending</span>}
        </form>
        </div>
    </motion.div>
)
}
export default ContactPage