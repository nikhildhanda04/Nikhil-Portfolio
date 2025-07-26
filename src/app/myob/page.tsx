import ProjectLayout from "../projects/pagelayout";

export default function Myobpage(){
    return(
        <ProjectLayout
      title="MYOB"
      description="MYOB (manage your own bag), is a money-management system that turns your bank statement into a full dashboard showing where every dollar goes."
      tech={["Next.js", "Tailwind", "Express.js", "MongoDB", "Shadcn"]}
      images={["/images/myob1.png", "/images/myob2.png"]}
      liveUrl="https://github.com/nikhildhanda04/MYOB"
    />
    )
}