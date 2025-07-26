'use client'

import { motion } from 'framer-motion'
import { Sparkle }  from 'lucide-react'

export default function Partition(){
    return(
        <>
        <motion.div 
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        className='flex items-center justify-center'
        >
            <Sparkle 
            width={80}
            height={80}
            color={"#FFF93D"}
            fill={"#FFF93D"}
            />
        </motion.div>
        </>
    )
}