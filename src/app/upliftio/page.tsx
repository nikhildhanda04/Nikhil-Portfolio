import ProjectLayout from "../projects/pagelayout";

export default function Upliftio(){
    return(
        <>
        <ProjectLayout 
        title="Upliftio"
        description="This is a service based business website. It displays the services of the client's startup in a unique and minimal way. "
        tech={["Nextjs", "Tailwind", "Framer", "Gsap"]}
        images={["/images/myob1.png", "/images/myob2.png"]}
        liveUrl="https://github.com/nikhildhanda04/upliftio"
        />
        </>
    )
}