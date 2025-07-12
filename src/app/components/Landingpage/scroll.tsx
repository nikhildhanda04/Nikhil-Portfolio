import { ChevronDown } from "./animatedDown"

export default function Scroll (){
    return(
        <>
        <div className="flex flex-col gap-[10vw] items-center justify-center">
            <div className="text-white tracking-tight font-[poppins] text-[2vw] px-[15vw] text-center">
                I’m Nikhil Dhanda — a Design Engineer passionately creating <br /> great digital experiences  and <br /> solutions.
            </div>
            <div className="text-neutral-500 font-[poppins] text-[1.3vw] font-medium items-center justify-center">
                scroll <br /> <ChevronDown />
            </div>
            

        </div>
        </>
    )
}