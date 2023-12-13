"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {

    const [position, setPosition] = useState(' ');

    if(typeof window !== "undefined"){
        window.addEventListener("scroll",()=>{              
            if(window.scrollY > 500){                
              setPosition("sticky top-0")
            }else{
              setPosition(" ")
            }
          })
    }

    const data = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "DashBoard",
            url: "/dashboard"
        },
        {
            name: "Profile",
            url: "/profile"
        },
        {
            name: "Cart",
            url: "/cart"
        }
    ]

    return (
        <div className={`h-[11vh] z-50 w-full bg-gray-700 px-6 flex justify-between items-center ${position}`}>
            <Link href='/'>
                <Image src='/images/logo/cholan.png' alt='' width={160} height={80} />
            </Link>
            <div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex p-2 w-10 h-10 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <ul className='hidden sm:flex '>
                    {data.map((e,i) => {
                        return (
                            <li className='p-3 text-white'>
                                <Link href={e.url} key={i} >{e.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Header
