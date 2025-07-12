import Image from 'next/image'

export default function Education (){
    return(
        <>
        <div className="flex flex-col tracking-tight">
                    
                    <div className="flex flex-row items-center gap-[6vw] px-[8vw]">
                        <div className="font-[bigShoulders] text-[6vw] font-bold text-[white] "> 
                            Education
                        </div>
                                        <div>
                                            <Image 
                                            src={"/line.svg"}
                                            alt={""}
                                            width={700}
                                            height={0}
                                            />
                                        </div>
                    </div>
        
                    <div className='flex flex-col md:flex-row px-[3vw] py-[8vw] font-[poppins] '>
                        <div className='flex flex-col px-[8vw]'>
                            <div className='flex flex-col gap-[3vw]'>
                                <div className='flex flex-row'>
                                    <div className='font-medium text-white text-[3vw]'>
                                        BTech in CSE 
                                    </div>
                                </div>
        
                                <div className='flex flex-col text-neutral-600 text-[1.6vw] font-medium'>
                                    <div>
                                        2022-2026
                                    </div>
                                    <div>
                                        VIT BHOPAL
                                    </div>
                                </div>
        
                                <div className='text-white text-[1.1vw]'>
                                My Bachelor’s in Computer Science, specializing in AI and ML, was a deep dive into technology at Vit Bhopal. I explored frameworks and algorithms, building AI-driven projects that fueled my passion. Guided by professors and peers, I honed my technical and problem-solving skills.
                                </div>
                            </div>
        
                        </div>
        
                        <div className='flex flex-col px-[8vw]'>
                            <div className='flex flex-col gap-[3vw]'>
                                <div className='flex flex-row'>
                                    <div className='font-medium text-white text-[3vw]'>
                                        High School
                                    </div>
                                </div>
        
                                <div className='flex flex-col gap-[] text-neutral-600 text-[1.6vw] font-medium'>
                                    <div>
                                        2010 - 2022
                                    </div>
                                    <div>
                                        The Shri Ram School
                                    </div>
                                </div>
        
                                <div className='text-white text-[1.1vw]'>
                                   My school education ignited my passion for learning, especially in technology. Driven by curiosity, I eagerly explored how things worked, from gadgets to computer programs. Science classes and the computer club fueled this interest, letting me dive into coding and build exciting projects. Supported by inspiring teachers and peers, these experiences honed my problem-solving skills and deepened my love for technology.
                                </div>
                            </div>
        
                        </div>
        
        
                    </div>
        
        
                </div>
        </>
    )
}