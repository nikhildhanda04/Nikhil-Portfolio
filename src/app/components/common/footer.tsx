export default function Footer(){
    return(
        <>
        <div className="w-full mask-b-from-50% bg-gradient-to-b from-[#121212] to-neutral-800 border border-t-neutral-600 pt-[6vw] text-center overflow-hidden">
        <div className="flex flex-col  gap-[5vw]  tracking-tight px-[10vw]">
            <div className="flex flex-row text-left justify-between">
                <div className="flex flex-col gap-[1vw]">

                    <div className="font-[poppins] font-semibold text-[4.5vw] text-white">
                        Interested? Reach out.
                    </div>
                    <div className="flex flex-row gap-[1vw]">
                        <input 
                         type="text"
                        placeholder="Your Name"
                        className="px-4 w-full py-[1vw] font-[poppins] rounded-2xl bg-neutral-500 opacity-60 text-white"
                        required
                        />

                        <input 
                         type="text"
                        placeholder="Your Email"
                        className="px-4 w-full py-[1vw] font-[poppins] rounded-2xl bg-neutral-500 opacity-60 text-white"
                        required
                        />
                        
                    </div>

                    <div>
                        <input 
                        type="text"
                        placeholder="Your Message"
                        className="px-4 w-full py-[5vw] font-[poppins] rounded-2xl bg-neutral-500 opacity-60 text-white"
                        />
                    </div>

                        <div>
                            <button className="p-4 bg-neutral-600 font-[poppins] text-[1.4vw] rounded-3xl px-[6vw] text-[#FFF93D]">
                                Send
                            </button>
                        </div>

                </div>
                <div className="flex flex-row mt-[2vw] gap-[4vw] font-[poppins] ">
                    <div className="flex flex-col text-left gap-[2vw]">
                        <div className="font-semibold text-white text-[2vw]">
                            Navigation
                        </div>
                        <div className="text-neutral-600 list-none text-[1.7vw]">
                            <li className="hover:text-[#FFF93D]">Home</li>
                            <li className="hover:text-[#FFF93D]  mt-3">Tech Stack </li>
                            <li className="hover:text-[#FFF93D]  mt-3">Experience</li>
                            <li className="hover:text-[#FFF93D]  mt-3">Projects</li>
                            <li className="hover:text-[#FFF93D]  mt-3">Education</li>
                        </div>

                    </div>
                    <div>
                         <div className="flex flex-col text-left gap-[2vw]">
                        <div className="font-semibold text-white text-[2vw]">
                            Socials
                        </div>
                        <div className="text-neutral-600 list-none text-[1.7vw] ">
                            <li className="hover:text-[#FFF93D] ">Instagram</li>
                            <li className="hover:text-[#FFF93D] mt-3">Linkedin </li>
                            <li className="hover:text-[#FFF93D] mt-3">X</li>
                            <li className="hover:text-[#FFF93D] mt-3">Github</li>
                        </div>

                    </div>
                    </div>

                </div>



            </div>
            <div className="font-[poppins] text-white">
                nikhil dhanda | all rights reserved
            </div>


        </div>
            <div className="font-[bigShoulders] font-black text-[17vw] w-full -mb-[13vw] text-[#FFF93D]">
                NIKHIL DHANDA
            </div>
    </div>
        </>
    )
}