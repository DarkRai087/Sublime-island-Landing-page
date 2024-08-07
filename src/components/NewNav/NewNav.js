import Image from 'next/image';
import Link from 'next/link';

import React, { useState } from 'react';

import { AiFillContacts, AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";

import Logo1 from '../../Images/logo.png';


export default function NewNav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
        isOpen ? unLockScroll() : lockScroll()
    };
    const unLockScroll = () => {
        document.body.style.overflow = "auto"
    }
    const lockScroll = () => {
        document.body.style.overflow = "hidden"
    }
    return (
        <>
            {/* best colour I found */}
            {/* bg-[#FF8682] */}
            <div className='
                flex justify-between items-center w-full
                shadow-md pt-6 pb-7 px-8 min-h-28 text-lg font-Ubuntu_Mono
                bgNav
                '>
                <Link href="/">
                    <Image src={Logo1} alt="" className='h-full w-[8.5rem] object-contain brightness-200' priority />
                </Link>
                <div className='lg:hidden h-full flex justify-between flex-grow max-w-[65%] items-center text-white'>
                    <Link href="/" className='flex items-center gap-2 cursor-pointer text-base'>
                        <span>
                            <AiFillHome size={25} />
                        </span>
                        <span>Home</span>
                    </Link >
                    <Link href={"/Blogs"} className='flex items-center gap-2 cursor-pointer text-base'>
                        <span>
                            <CgNotes size={25} />
                        </span>
                        <span>Blogs</span>
                    </Link >
                    <Link href={"/About"} className='flex items-center gap-2 cursor-pointer text-base '>
                        <span> <BsFillInfoCircleFill /> </span>
                        <span>About Us</span>
                    </Link >
                    <Link href={"https://sublimeislands.in/Bus"} target="_blank" className='flex items-center gap-2'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-base font-semibold " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                        <span className=" text-base">Find Transport</span>
                    </Link>
                    <Link href={"https://sublimeislands.in/Hotels"} target="_blank" className='flex items-center gap-2'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-base font-semibold " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z"></path></svg>
                        <span className=" text-base">Find Stays</span>
                    </Link>
                    <Link href={"/Contact"} className=" flex items-center gap-2 px-2 pb-2 pt-2 text-white text-base" >
                        <span>
                            <AiFillContacts size={25} />
                        </span>
                        <span>Contact Us</span>
                    </Link >
                </div>
                <div className=''>
                    <Link href={"/ConnectUs"}>
                        <div className='lg:hidden h-full px-5 text-base bg-gradient-to-br from-red-500 via-red-600 to-purple-700 text-center bg-white rounded-lg p-2 text-white'>Connect with Us</div>
                    </Link>
                </div>
                <div className='hidden lg:block'>
                    <button className="relative group" onClick={toggleHamburger}>
                        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  ring-0 ring-white hover:ring-4 ring-opacity-30 duration-200 shadow-md">
                            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                <div className={`bg-slate-50 h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? "translate-x-10" : ""}`}></div>
                                <div className={`bg-slate-50 h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? "translate-x-10" : ""} delay-75`}></div>
                                <div className={`bg-slate-50 h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? "translate-x-10" : ""} delay-150`}></div>

                                <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${isOpen ? "translate-x-0 flex w-12" : ""}`}>
                                    <div className="absolute bg-slate-50 h-[2px] w-5 transform transition-all duration-500  delay-700 rotate-45"></div>
                                    <div className="absolute bg-slate-50 h-[2px] w-5 transform transition-all duration-500  delay-300 -rotate-45"></div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div >

            {/* hamburger menu for mobile view */}
            <div className={`${!isOpen ? "max-h-0 invisible" : "h-screen visible"} transition-all ease-in-out duration-[500ms] absolute w-screen z-[100] backdrop-blur-3xl block overflow-hidden`
            }>
                <div className='h-fit bg-white flex flex-col text-slate-950'>
                    <Link href={"/"} onClick={unLockScroll} className='flex items-center gap-2 text-xl p-2 px-4'>
                        <AiFillHome />
                        <span>Home</span>
                    </Link>
                    <Link href={"/Blogs"} onClick={unLockScroll} className='flex items-center gap-2 text-xl  p-2 px-4'>
                        <CgNotes />
                        <span>Blogs</span>
                    </Link>
                    <Link href={"/Contact"} onClick={unLockScroll} className="flex items-center gap-2 text-xl  p-2 px-4" >
                        <AiFillContacts />
                        <span>Contact Us</span>
                    </Link >
                    <Link href={"/About"} onClick={unLockScroll} className='flex items-center gap-2 text-xl  p-2 px-4'>
                        <BsFillInfoCircleFill />
                        <span>About Us</span>
                    </Link>
                    <Link href={"https://sublimeislands.in/Bus"} target="_blank" className='flex items-center gap-2  text-xl p-2 px-4'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="font-semibold " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                        <span className="">Find Transport</span>
                    </Link>
                    <Link href={"https://sublimeislands.in/Hotels"} target="_blank" className='flex items-center gap-2  text-xl p-2 px-4'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="font-semibold " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z"></path></svg>
                        <span className="">Find Stays</span>
                    </Link>
                    <Link href={"/ConnectUs"} onClick={unLockScroll} className='text-xl bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-purple-700 font-bold p-2 px-4 pb-5'>Connect with Us</Link>

                </div>
            </div>
        </>
    )
}