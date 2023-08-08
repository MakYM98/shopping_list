import React from "react";
import { features } from "../constants";
import styles, { layout } from '../style'
import Button from './button'
import Image from "next/image";

const FeatureCard = ({icon, title, content, index}:any) => {
    return(
        <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1? "mb-6": "mb-0"} feature-card`}>
            <div className={`w-[64px] h-[64px] rounded=full ${styles.flexCenter}`}>
                <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-semibold text-white text-[18px] leading-[23px] mb-1">
                    {title}
                </h4>
                <p className="font-normal text-gray-400 text-[18px] leading-[24px] mb-1">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default function Business() {
    return(
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    You do the shopping, <br className="sm:block hidden"/>
                    We&apos;ll help you track.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Through this application, you won&apos;t have to worry about 
                    forgetting any items, how the items look or going above
                    your budget!
                </p>
                <Button styles="mt-10"/>
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index)=> (
                    <FeatureCard key={feature.id} {...feature} index={index}/>
                ))}
            </div>
        </section>
    )
}