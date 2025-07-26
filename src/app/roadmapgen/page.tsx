import ProjectLayout from "../projects/pagelayout"

export default function roadmap() {
    return(
        <>
        <ProjectLayout 
        title = "Roadmap Generator"
        description="This is a AI prompt based visual roadmap generator that makes you flow charts that you can follow to reach your learning goals."
        tech={["Reactjs", "Express", "Ollama", "jwt", "Axios", "React flow" ]}
        images={["/images/myob1.png", "/images/myob2.png"]}
        liveUrl="https://github.com/nikhildhanda04/roadmapgen"
        />
        </>
    )
}