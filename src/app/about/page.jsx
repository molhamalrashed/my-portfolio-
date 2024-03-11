"use client";

import Brain from "@/components/brain";
import {motion} from "framer-motion";


const skills = ["Javascript", "React", "Node", "Express", "MongoDB","MySQL", "HTML", "CSS", "Tailwind", "Bootstrap","Next.js","Git", "Figma", "Photoshop","Audition", "Voice Acting", "Teaching"];

const AboutPage = () => {
return (
    <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}} >
        <div className="h-full overflow-scroll lg:flex">
    {/* Text container */}
            <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 md:w-2/3 md:pr-0 xl:w-1/2">
        {/* Biography */}
                <div className="flex flex-col gap-8 justify-center pt-12">
                    <h1 className="text-2xl font-bold">About me</h1>
                    <p className="text-lg">As a passionate and dedicated web developer, I am committed to continuous learning and self-improvement. I thrive in a dynamic team environment and possess strong organizational and time-management skills. With a background in teaching and voice acting, my excellent communication and interpersonal skills allow me to effectively collaborate with clients and colleagues.</p>
                    {/* Scroll SVG */}
                    <motion.svg
                    initial={{ opacity: 0.2, y: 0 }}
                    animate={{ opacity: 1, y: "10px" }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    >
                    <path
                        d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                        stroke="#000000"
                        strokeWidth="1"
                    ></path>
                    <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                    <path
                        d="M15 11L12 14L9 11"
                        stroke="#000000"
                        strokeWidth="1"
                    ></path>
                    </motion.svg>
                </div>

        {/* Skills */}
                <div className="flex flex-col gap-8 justify-center pt-12">
                    <h1 className="text-2xl font-bold">Skills</h1>
                    <div className="flex gap-4 flex-wrap">
                        {skills.map((skill)=> (<div className="rounded p-2 cursor-pointer bg-black text-white text-sm hover:bg-white hover:text-black" key={skill}>{skill}</div>))}
                    </div>
                    {/* Scroll SVG */}
                    <motion.svg
                    initial={{ opacity: 0.2, y: 0 }}
                    animate={{ opacity: 1, y: "10px" }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    >
                    <path
                        d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                        stroke="#000000"
                        strokeWidth="1"
                    ></path>
                    <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                    <path
                        d="M15 11L12 14L9 11"
                        stroke="#000000"
                        strokeWidth="1"
                    ></path>
                    </motion.svg>
                </div>
                {/* Experience */}
                <div className="flex flex-col gap-8 justify-center pt-12 pb-48">
                    <h1 className="text-2xl font-bold">Experience</h1>
                    {/* Experience list */}
                    <div className="">
                        {/* Experience list item 1 */}
                        <div className="flex justify-between h-100">
                        {/* Left side */}
                        <div className="h-fit w-1/3">
                        <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">Full Stack Web Developer Trainee</div>
                        <div className="text-sm p-3 italic">Building Full stack web application using Javascript, HTML, CSS, React, MongoDB and other technologies.</div>
                        <div className="p-3 font-semibold text-red-400 text-sm">March 2023 to December 2023</div>
                        <div className="p-1 text-sm bg-white rounded-lg font-semibold w-fit">HackYourFuture</div>
                        </div>
                        {/* center side */}
                        <div className="w-1/6">
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                        <div className="w-5 h-5 rounded-full bg-white absolute ring-4 ring-red-400 -left-2"></div>
                        </div>
                        </div>
                        {/* right side */}
                        <div className="w-1/3">
                        </div>
                        </div>

                        {/* Experience list item 2 */}
                        <div className="flex justify-between h-100">
                        {/* Left side */}
                        <div className="w-1/3">
                        </div>  
                        {/* center side */}
                        <div className="w-1/6">
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                        <div className="w-5 h-5 rounded-full bg-white absolute ring-4 ring-red-400 -left-2"></div>
                        </div>
                        </div>
                        {/* right side */}
                        <div className="w-1/3">
                        <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">ICT and Math Teacher</div>
                        <div className="text-sm p-3 italic">Planned and delivered engaging ICT and Math lessons to secondary and high school students.</div>
                        <div className="p-3 font-semibold text-red-400 text-sm">February 2017 to October 2021</div>
                        <div className="p-1 text-sm bg-white rounded-lg font-semibold w-fit">Cambridge International school - Erbil</div>
                        </div>
                        </div>

                        {/* Experience list item 3 */}
                        <div className="flex justify-between h-100">
                        {/* Left side */}
                        <div className="w-1/3">
                        <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg">Voice Actor</div>
                        <div className="text-sm p-3 italic">Showcased versatility and creativity by delivering captivating performances through voice acting.</div>
                        <div className="p-3 font-semibold text-red-400 text-sm">June 2018 to October 2021</div>
                        <div className="p-1 text-sm bg-white rounded-lg font-semibold w-fit">AL-Khalij, Freelancer</div>
                        </div>
                        {/* center side */}
                        <div className="w-1/6">
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                        <div className="w-5 h-5 rounded-full bg-white absolute ring-4 ring-red-400 -left-2"></div>
                        </div>
                        </div>
                        {/* right side */}
                        <div className="w-1/3">
                        </div>
                        </div>

                        {/* Experience list item 4 */}
                        <div className="flex justify-between h-100">
                        {/* Left side */}
                        <div className="w-1/3">
                        </div>  
                        {/* center side */}
                        <div className="w-1/6">
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                        <div className="w-5 h-5 rounded-full bg-white absolute ring-4 ring-red-400 -left-2"></div>
                        </div>
                        </div>
                        {/* right side */}
                        <div className="w-1/3">
                        <div className="bg-white font-semibold p-3 rounded-b-lg rounded-s-lg w-fit">Communication Engineer</div>
                        <div className="text-sm p-3 italic">Assisted in designing, implementing, and maintaining communication systems, ensuring seamless integration.</div>
                        <div className="p-3 font-semibold text-red-400 text-sm">January 2015 to May 2016</div>
                        <div className="p-1 text-sm bg-white rounded-lg font-semibold w-fit">Syriatel - Damascus</div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* SVG container */}
            <div className="hidden lg:block w-1/3 xl:w-1/2">
                <Brain/>
            </div>
        </div>
    </motion.div>
)
}
export default AboutPage