'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';
import Bell from '../images/bell.png';
import Search from '../images/search.png';
import Link from 'next/link';
import { useState } from 'react';
import { Chokokutai } from 'next/font/google';

const Navigation = () => {
    const [search, setSearch] = useState(false);
    const [cookieValue, setCookieValue] = useState<any>(null)

    useEffect(() => {
        const parseCookies = () => {
            const cookiesObj: { [key: string]: string } = {};
    
            document.cookie.split(';').forEach(cookie => {
                const [key, value] = cookie.trim().split('=');
                cookiesObj[key] = value;
            })
    
            return cookiesObj;
        }
        


        if(typeof document !== 'undefined') {
            const cookies = document.cookie;
            if(cookies == null) {
                setCookieValue(null)
            }
            else {
                const cookiesObj = parseCookies();
                setCookieValue(cookiesObj);
            }
            console.log(cookies)
            
            
        }

        

    }, [])

    const handleLogout = () => {
        console.log("Logged out")
        if(typeof document !== 'undefined') {
            
            document.cookie = "";
            setCookieValue(null)
        }
    }

    

    

    
    


    return (
        <nav className='flex h-[14vh] flex-col fixed top-0 w-full z-50'>
            <div className="h-[10vh] flex flex-row items-center  justify-center  w-full bg-gray-800">
                <div className="w-[90%] flex flex-row items-center justify-between">
                    <Link href="/">
                        <p className=" cursor-pointer text-[30px]">NEWS</p>
                    </Link>
                    <div className="flex flex-row items-center space-x-[10px]">
                        <div className='flex flex-row items-center '>
                            <div className={` ${search ? 'scale-x-100' : 'scale-x-0'} origin-right bg-gray-400 py-[3px] px-[15px] duration-500 cursor-pointer rounded-full text-black`}>
                                <input className='focus:outline-none' placeholder='Search News'/>
                            </div>
                            <div onClick={() => setSearch(true)} className={`${search ? 'hidden' : 'flex'} duration-500 bg-gray-400 py-[7px] px-[7px] cursor-pointer rounded-full text-black`}>
                                <Image src={Search} alt='search' height={19}   />
                            </div>
                            
                        </div>

                        <div className='relative group'>
                            <div className='bg-gray-400 py-[7px] px-[7px] cursor-pointer rounded-full text-black'>
                                <Image src={Bell} alt='notifications' height={19}   />
                            </div>
                            <div className="absolute right-[-70px] top-[40px] w-[300px] h-[300px] bg-gray-400 rounded-[10px] p-4 shadow-lg ring-1 ring-black opacity-0 scale-0 translate-y-5 origin-top group-hover:opacity-100  group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <div className='flex flex-col ring-1 ring-black px-[10px] py-[5px] rounded-[5px]'>
                                    <p className='font-bold text-[20px]'>Notification Title 01</p>
                                    <p className='text-sm text-black'>Notification Subtitle</p>
                                    <p className='text-xs text-black mt-[2px]'>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                                </div>
                            </div>
                        </div>

                        {cookieValue ?
                        <a  href="https://news-app-backend-4rb1.vercel.app/auth/logout">
                            <div onClick={handleLogout} className='bg-gray-400 py-[5px] px-[20px] cursor-pointer rounded-full text-black'>
                                <p>Logout</p>
                            </div>
                        </a>
                        :
                        <Link href="/login">
                            <div className="bg-gray-400 py-[5px] px-[20px] cursor-pointer rounded-full text-black">
                                <p>Login</p>
                            </div>
                        </Link>}
                    </div>
                </div>
            </div>
            <ul className="flex border-b-[1px] w-[100%] bg-gray-500 text-black flex-row items-center justify-center py-[3px]">
                <div className="w-[90%] flex flex-row space-x-[30px] ">
                    <Link href="/" className="cursor-pointer">
                        <p>Home</p>
                    </Link >
                    <li className="cursor-pointer">
                        <p>Top stories</p>
                    </li>
                    <li className="cursor-pointer">
                        <p>Latest news</p>
                    </li>
                    <li className="cursor-pointer">
                        <p>Tech</p>
                    </li>
                    <li className="cursor-pointer">
                        <p>Business</p>
                    </li>
                    <li className="cursor-pointer">
                        <p>Politics</p>
                    </li>
                    <li className="cursor-pointer">
                        <p>Sports</p>
                    </li>
                </div>
            </ul>
            
        </nav>
    )

}

export default Navigation;