import Partition from '../components/Landingpage/parition'
import Image from 'next/image'
import { MoveUpRight } from 'lucide-react'

interface Props {
  title: string
  description: string
  tech: string[]
  images: string[]
  liveUrl: string
}

export default function ProjectLayout({ title, description, tech, images, liveUrl }: Props) {
  return (
    <div className="flex flex-col gap-[3vw] text-center  py-[5vw] tracking-tight justify-center items-center">
      <div className="font-[bigShoulders] font-black text-[19vw] leading-[17vw] text-[#FFF93D]">{title}</div>
      <Partition />
      <p className="text-neutral-600 text-[1.5vw] text-center px-[20vw] font-poppins">{description}</p>

      <div className="flex flex-row gap-[2vw]">
        {tech.map((t) => (
          <span
            key={t}
            className="font-[poppins] text-white bg-neutral-800 hover:bg-neutral-300 hover:text-neutral-800 border border-neutral-300 px-6 py-4 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-col px-[5vw] gap-[3vw]">
        {images.map((src, i) => (
          <div key={i} className="relative w-full h-[30vw]">
            <Image src={src} alt={`${title} ${i + 1}`} fill className="rounded-xl object-cover" />
          </div>
        ))}
      </div>

      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-200 flex items-center gap-4 bg-neutral-700 px-6 py-2 text-[2vw] rounded-3xl shadow-2xl shadow-neutral-400"
      >
        Check It Out <MoveUpRight size={30} />
      </a>
    </div>
  )
}