import Image from 'next/image'

export default function Experience(){
    return(
        <>
        <div className="flex flex-col tracking-tight">
            
            <div className="flex flex-row items-center gap-[6vw] px-[8vw]">
                <div className="font-[bigShoulders] text-[6vw] font-bold text-[white] "> 
                    Experience
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
                                OSCode
                            </div>
                            <div className='text-white'>
                                img
                            </div>
                        </div>

                        <div className='flex flex-col text-neutral-600 text-[1.6vw] font-medium'>
                            <div>
                                Full Stack Dev
                            </div>
                            <div>
                                Oct 2024 - May 2025
                            </div>
                        </div>

                        <div className='text-white text-[1.1vw]'>
                          <li className='mt-[vw]'>Designed and developed effective web solutions, delivering high-quality services to meet client requirements.</li>
                          <li className='mt-[2vw]'>Collaborated in cross-functional teams and participated in client meetings to ensure alignment with user needs and adherence to project deadlines.</li>
                          <li className='mt-[2vw]'>Worked closely with teams and attended client meetings to facilitate seamless project execution and client satisfaction.</li>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col px-[8vw]'>
                    <div className='flex flex-col gap-[3vw]'>
                        <div className='flex flex-row'>
                            <div className='font-medium text-white text-[3vw]'>
                                WebsCarftMedia
                            </div>
                            <div className='text-white'>
                                img
                            </div>
                        </div>

                        <div className='flex flex-col gap-[] text-neutral-600 text-[1.6vw] font-medium'>
                            <div>
                                Front End Dev
                            </div>
                            <div>
                                Aug 2024 – Oct 2024
                            </div>
                        </div>

                        <div className='text-white text-[1.1vw]'>
                            <li>Supported maintenance of 5+ websites, ensuring 100% uptime.</li>
                            <li className='mt-[2vw]'>Learned working in a time bound environment and meeting my deadlines on time. </li>
                            <li className='mt-[2vw]'>Gained experience on technologies like React, Tailwind, and Typescript.</li>
                            <li className='mt-[2vw]'>Learned about how a corporate startup works.</li>
                        </div>
                    </div>

                </div>


            </div>


        </div>
        </>
    )
}