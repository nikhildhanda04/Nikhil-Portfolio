
'use client'
import { motion } from 'framer-motion';

export default function Hero (){
    return(
        <>
        <div className="flex flex-col items-center tracking-tight text-center leading-[10vw]">
            <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
            className="font-[poppins] text-[1.5vw] text-neutral-400 font-semibold"
            >
                <span className='bg-neutral-800 px-[2vw] py-[1.3vw] text-[1.1vw] opacity-65 rounded-full'>-THE EXPERTISE YOU NEED- </span><br />
                <span className="font-[bigShoulders] font-black text-[19vw] leading-[15vw] text-[#FFF93D]">
                    NIKHIL <br /> DHANDA
                </span>
            </motion.div>
        </div>
        </>
    )
}