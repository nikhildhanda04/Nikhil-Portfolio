'use client'

import { motion } from 'framer-motion';
import { ChevronDown } from "./animatedDown"

export default function Scroll (){
    return(
        <>
        <div className="flex flex-col gap-[10vw] items-center justify-center">
            <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)" }}
            transition={{ duration: 0.9 }}
            className="text-white tracking-tight font-[poppins] text-[2.5vw] md:text-[2vw] px-[10vw] text-center">
                I’m Nikhil Dhanda — a Design Engineer passionately creating <br /> great digital experiences  and <br /> solutions.
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)" }}
            transition={{ duration: 0.9 }}
            className="text-neutral-500 text-center font-[poppins] text-[2vw] font-medium items-center justify-center">
                scroll <br /> <ChevronDown className='w-[3vw] h-[3vw]' />
            </motion.div>
            

        </div>
        </>
    )
}