'use client'

import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export default function Projects(){
    return(
        <>
        <div className='flex flex-col px-[4vw]'>


            <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)" }}
                transition={{ duration: 0.6 }}
            className="flex flex-row items-center gap-[6vw] px-[8vw]">
                <div className="font-[bigShoulders] text-[6vw]  font-bold text-[white] "> 
                    Projects
            </div>
                <div>
                    <Image 
                    src={"/line.svg"}
                    alt={""}
                    width={800}
                    height={0}
                    />
                </div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-1 gap-[4vw] px-[4vw] mt-[4vw]'>


        <motion.div 
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)" }}
                transition={{ duration: 0.8}}
        className='flex flex-col rounded-xl gap-[2vw] text-left bg-[#2B2B2B] py-[3vw]'>
            <div className='w-[38vw] h-[30vw] relative mx-auto'>
                <Image 
                src="/Upliftio.jpg"
                alt="upiftio"
                fill
                className='rounded-2xl object-cover '
                />
            </div>
            <div className='px-[3vw] flex flex-row items-center gap-6'>
                <div className='flex flex-col'>
                <div className='font-[poppins] text-[2vw] font-medium text-neutral-200 '>
                    Upliftio
                </div>
                <div className='font-[poppins] text-[1.3vw]  text-neutral-700'>
                    Client work, diaplays thier services in a responsive and interactive manner. 
                </div>
                </div>
                <Link href="/upliftio">
                <div className='bg-neutral-700 p-4 rounded-3xl'>
                    <MoveUpRight 
                    color={"orange"}
                    size={"40"}
                    />
                </div>
                </Link>
            </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)" }}
                transition={{ duration: 0.8 }}
        className='flex flex-col rounded-xl gap-[2vw] text-left bg-[#2B2B2B] p-7'>
            <div className='w-[38vw] h-[30vw] relative mx-auto'>
                <Image 
                src="/Roadmap.jpg"
                alt="upiftio"
                fill
                className='rounded-2xl object-cover '
                />
            </div>
            <div className='p-4 flex flex-row items-center gap-6'>
                <div className='flex flex-col'>
                <div className='font-[poppins] text-[2vw] font-medium text-neutral-200 '>
                    RoadMap Generator
                </div>
                <div className='font-[poppins] text-[1.3vw]  text-neutral-700'>
                    AI prompt based flowchart generator. Gives you steps for reacching your goal.
                </div>
                </div>
                <Link href="/roadmapgen">
                <div className='bg-neutral-700 p-4 rounded-3xl'>
                    <MoveUpRight 
                    color={"orange"}
                    size={"40"}
                    />
                </div>
                </Link>
            </div>
        </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)" }}
                transition={{ duration: 0.8 }}
                className='flex flex-col rounded-xl gap-[2vw] text-left bg-[#2B2B2B] p-7'>
            <div className='w-[38vw] h-[30vw] relative mx-auto'>
                <Image 
                src="/FontF.jpg"
                alt="upiftio"
                fill
                className='rounded-2xl object-cover '
                />
            </div>
            <div className='p-4 flex flex-row items-center gap-6'>
                <div className='flex flex-col'>
                <div className='font-[poppins] text-[2vw] font-medium text-neutral-200 '>
                    Font Finder
                </div>
                <div className='font-[poppins] text-[1.3vw]  text-neutral-700'>
                    A web extenstion that gives you deatils of any font present of any website.  
                </div>
                </div>
                <Link href="fontfinder">
                <div className='bg-neutral-700 p-4 rounded-3xl'>
                    <MoveUpRight 
                    color={"orange"}
                    size={"40"}
                    />
                </div>
                </Link>
            </div>
        </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)" }}
                transition={{ duration: 0.8, }}
                className='flex flex-col rounded-xl gap-[2vw] text-left bg-[#2B2B2B] p-7'>
            <div className='w-[38vw] h-[30vw] relative mx-auto'>
                <Image 
                src="/Dashboard.jpg"
                alt="upiftio"
                fill
                className='rounded-2xl object-cover '
                />
            </div>
            <div className='p-4 flex flex-row items-center gap-6'>
                <div className='flex flex-col'>
                <div className='font-[poppins] text-[2vw] font-medium text-neutral-200 '>
                    MYOB
                </div>
                <div className='font-[poppins] text-[1.3vw]  text-neutral-700'>
                    An AI money manager webapp, that manages your money flow and suggets you best practices for your spendings.
                </div>
                </div>
                <Link href="/myob">
                <div className='bg-neutral-700 p-4 rounded-3xl'>
                    <MoveUpRight 
                    color={"orange"}
                    size={"40"}
                    />
                </div>
                </Link>
            </div>
        </motion.div>


        </div>



        </div>
        </>
    )
}