"use client"
import { useState } from "react";
import { navLinks } from "../constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const close = require('../../public/assets/close.svg')
const logo = require('../../public/assets/logo.svg')
const menu = require('../../public/assets/menu.svg')

export default function Navbar() {
    const [toggle, setToggle] = useState(false)

    return(
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <Image src={logo} alt="Web Logo" className="w-[124px] h-[32px]"/>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li 
                        key={nav.id} 
                        className={`
                            font-normal 
                            cursor-pointer
                            text-[16px]
                            text-white
                            ${index === navLinks.length - 1 ? 'mr-0': 'mr-10'}
                            mr-10
                        `}
                    >
                        <Link 
                            href={`#${nav.id}`}
                        >
                            {nav.title}
                        </Link>
                    </li>
                ))}
                <li 
                        key={'test'} 
                        className={`
                            font-normal 
                            cursor-pointer
                            text-[16px]
                            text-black
                            mr-5
                        `}
                    >
                    <Button styles={"rounded-xl"} text="Sign Up"/>
                </li>
                <li 
                        key={'test'} 
                        className={`
                            font-normal 
                            cursor-pointer
                            text-[16px]
                            text-black
                        `}
                    >
                    <Button styles={"rounded-xl"} text="Login"/>
                </li>
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <Image 
                    src={toggle? close:menu} 
                    alt="Menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    className={`
                        ${toggle? 'flex': 'hidden'}
                        p-6 bg-black-gradient absolute top-20
                        right-0
                        mx-4
                        my-2
                        min-w-[140px]
                        rounded-xl
                        sidebar
                    `}
                >
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li 
                                key={nav.id}
                                className={`
                                    font-normal 
                                    cursor-pointer
                                    text-[16px]
                                    text-white
                                    ${index === navLinks.length - 1 ? 'mr-0': 'mb-4'}
                                `}
                            >
                                <Link 
                                    href={`#${nav.id}`} 
                                >
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}