"use client"

import React from "react";
import styles from '../style'
import { discount, robot } from '../../public/assets'
import Image from "next/image";

export default function Button(props:any) {
    return (
        <button 
            type="button" 
            className={
                `py-4 px-6 bg-blue-gradient font-medium text-[18px] text-primary 
                outline-none ${props.styles}`
            }
            onClick={props.clickFunc}
        >
            {props.text}
        </button>
    )
}