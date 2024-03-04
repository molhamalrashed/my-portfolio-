"use client";

import Link from 'next/link';
import {useState} from 'react';
import Image from 'next/image';
import NavLink from "./navLink";
import {motion} from 'framer-motion';

const links = [
{url: '/', title: 'Home'},
{url: '/about', title: 'About'},
{url: '/portfolio', title: 'Portfolio'},
{url: '/contact', title: 'Contact'},
];

const Navbar = () => {
    const [open, setOpen] = useState(false); 

    const topLine ={
        closed: {
            rotate:0,
            backgroundColor: 'rgb(0,0,0)'
        },
        opened:{
            rotate: 45,
            backgroundColor: 'rgb(255,255,255)',
        }  
    }
    const middleLine ={
        closed: {
            opacity: 1,
            backgroundColor: 'rgb(0,0,0)'
        },
        opened:{
            opacity:0,
        }  
    }
    const bottomLine ={
        closed: {
           rotate:0,
           backgroundColor: 'rgb(0,0,0)'
        },
        opened:{
            rotate: -45,
            backgroundColor: 'rgb(255,255,255)',
        }  
    }
    const listVariants ={
        closed: {
            x:"100vw",
        },
        opened:{
            x:"0",
            transition:{
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }, 
    }
    const listItemVariants ={
        closed:{
            x:10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1,
        }
    }
return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
    {/* Links */}
        <div className='hidden md:flex flex-raw justify-between gap-4 w-1/3'>
            {links.map((link)=> (
                <NavLink link={link} key={link.title} />
            ))}
        </div>
    {/* Logo */}
    <div className= 'md:hidden lg:flex xl:w-1/3 xl:justify-center'>
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
            <span className='text-white mr-1'>Molham</span>
            <span className='w-20 h-8 rounded bg-white text-black flex items-center justify-center'>Alrashed</span>
        </Link>
    </div>

    {/* Contact Items */}
        <div className='hidden md:flex gap-4 w-1/3'>
        <Link href='https://github.com/molhamalrashed' target='_blank'>
        <Image src='/github.png' alt="" width={24} height={24} />
        </Link>
        <Link href='https://www.linkedin.com/in/molham-alrashed/' target='_blank'>
        <Image src='/linkedin.png' alt="" width={24} height={24} />
        </Link>
        <Link href='https://www.facebook.com/molhamalrashed' target='_blank'>
        <Image src='/facebook.png' alt="" width={24} height={24} />
        </Link>
        </div>
    {/* Responsive menu */}
    <div className='md:hidden'>
        <button className ='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={()=>{setOpen(!open)}}>
            <motion.div variants={topLine}  animate={open? "opened" : "closed"} className='w-10 h-1 bg-white rounded origin-left'></motion.div>
            <motion.div variants={middleLine}  animate={open? "opened" : "closed"} className='w-10 h-1 bg-white rounded'></motion.div>
            <motion.div variants={bottomLine}  animate={open? "opened" : "closed"} className='w-10 h-1 bg-white rounded origin-left'></motion.div>
        </button>
        {/* Menu list */}
        {open && (

            <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
            {links.map((link)=>(
                <motion.div variants={listItemVariants} key={link.url}>
                <Link href={link.url} >{link.title}</Link>
                </motion.div>
                ))}
        </motion.div>
         )}
    </div>
    </div>
)
}
export default Navbar;