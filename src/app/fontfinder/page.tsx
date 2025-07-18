import ProjectLayout from "../projects/page";

export default function FontFinder() {
    return(
        <>
        <ProjectLayout 
        title = "Font Finder"
        description="This is a browser extension that lets you get all details about the font used on any website, with just a simple button click and hover on the text, and Vollia! all deatils in front of you."
        tech={["Reactjs", "Node", "Manifestjs", "Tailwind", "Chrome Extension"]}
        images={["/images/myob1.png", "/images/myob2.png"]}
        liveUrl="https://github.com/nikhildhanda04/font-finder"
        />
        </>
    )
}