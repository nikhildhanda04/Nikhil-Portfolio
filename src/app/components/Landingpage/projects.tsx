import Image from 'next/image'

export default function Projects(){
    return(
        <>
        <div className="flex flex-col">
            <div className="flex flex-row items-center gap-[6vw] px-[8vw]">
                <div className="font-[bigShoulders] text-[6vw] font-bold text-[white] "> 
                    Projects
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

                <div className="grid grid-cols-1 md:grid-cols-2 px-[4vw] gap-[5vw]">
  <div className="flex items-center justify-center">
    <div>
    <Image
      src={"/Upliftio.jpg"}
      alt={"Upliftio"}
      width={500}
      height={100}
      className="object-cover shadow-2xl shadow-neutral-700 hover:opacity-70"
    />

        <div className='flex flex-col'>
            <div>
                Uplifto
            </div>

        </div>
    </div>
  </div>
  <div className="flex items-center justify-center">
    <Image
      src={"/Roadmap.jpg"}
      alt={"Roadmap"}
      width={500}
      height={100}
      className="object-cover shadow-2xl shadow-neutral-700 hover:opacity-70"
    />
  </div>
  <div className="flex items-center justify-center">
    <Image
      src={"/FontF.jpg"}
      alt={"FontFinder"}
      width={500}
      height={100}
      className="object-cover shadow-2xl shadow-neutral-700 hover:opacity-70"
    />
  </div>
  <div className="flex items-center justify-center">
    <Image
      src={"/Dashboard.jpg"}
      alt={"Dashboard"}
      width={500}
      height={50}
      className="object-cover shadow-2xl shadow-neutral-700 hover:opacity-70 "
    />
  </div>
</div>

        </div>
        </>
    )
}