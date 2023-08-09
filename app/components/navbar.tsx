"use client"
import { useState } from "react";
import { navLinks } from "../constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import SignUpModal from "./signup";
import LoginModal from "./login";
import { close, logo, menu } from "@/public/assets";

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    const [toggleSUP, setToggleSUP] = useState(false)
    const [toggleLOG, setToggleLOG] = useState(false)

    const closeSignUp = () => {
        setToggleSUP(false)
    }

    const closeLogin = () => {
        setToggleLOG(false)
    }

    return(
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <SignUpModal 
                visible={toggleSUP}
                closeFunc={()=>{closeSignUp()}}
            />
            <LoginModal 
                visible={toggleLOG}
                closeFunc={()=>{closeLogin()}}
            />
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
                {/* Login/SignUp Components */}
                <li 
                        key={'signup'} 
                        className={`
                            font-normal 
                            cursor-pointer
                            text-[16px]
                            text-black
                            mr-5
                        `}
                    >
                    <Button
                        styles={"rounded-xl"} 
                        text="Sign Up"
                        clickFunc={() => setToggleSUP((prev) => !prev)}
                    />
                </li>
                <li 
                        key={'login'} 
                        className={`
                            font-normal 
                            cursor-pointer
                            text-[16px]
                            text-black
                        `}
                    >
                    <Button 
                        styles={"rounded-xl"} 
                        text="Login"
                        clickFunc={() => setToggleLOG((prev) => !prev)}
                    />
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
                                    mb-4
                                `}
                            >
                                <Link 
                                    href={`#${nav.id}`} 
                                >
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                        {/* Login/SignUp Components */}
                        <li 
                                key={'signup'} 
                                className={`
                                    font-normal 
                                    cursor-pointer
                                    text-[16px]
                                  text-white
                                    mb-4
                                `}
                            >
                            <p onClick={() => setToggleSUP((prev) => !prev)}>
                                Sign Up
                            </p>
                        </li>
                        <li 
                                key={'signup'} 
                                className={`
                                    font-normal 
                                    cursor-pointer
                                    text-[16px]
                                  text-white
                                `}
                            >
                            <p onClick={() => setToggleLOG((prev) => !prev)}>
                                Login
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}