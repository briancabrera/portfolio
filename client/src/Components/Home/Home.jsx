import { useState } from 'react'
import "./home.scss"
import { Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar.jsx"
import Ghostly from "../Ghostly/Ghostly.jsx"
import UserInteractions from "../UserInteractions/UserInteractions.jsx"

export default function Home() {
    const [about, setAbout] = useState(false);
    const [projects, setProjects] = useState(false);
    const [contact, setContact] = useState(false);
    const [resume, setResume] = useState(false);

    return (
        <div className="container">
            <Navbar />
            <div className="animated links">
                <Link to="/about" className="animated link">
                    <span className="btn" 
                    onMouseEnter={() => setAbout(true)} onMouseLeave={() => setAbout(false)}>
                        About me
                    </span>
                </Link>
                
                    <a href="https://drive.google.com/file/d/1NigsLrNtCC9e4P8FCLlMTHAZo8zt3b0H/view?usp=sharing"
                    target="_blank"
                    className="animated link" >
                        <span className="btn" 
                        onMouseEnter={() => setResume(true)} onMouseLeave={() => setResume(false)}>
                            Resume
                        </span>
                    </a>

            </div>
            <div className="animated room">
                <img src={require("../resources/house/inside/inside.png")} alt="" id={about || projects || contact || resume? "roomhidden" : "room"}/>
                <img src={require("../resources/house/inside/about.png")} alt="" className={about ? "furniture" : "furniture hidden"} />
                <img src={require("../resources/house/inside/closet.png")} alt="" className={projects ? "furniture" : "furniture hidden"}/>
                <img src={require("../resources/house/inside/envelope.png")} alt="" className={contact ? "furniture" : "furniture hidden"}/>
                <img src={require("../resources/house/inside/table.png")} alt="" className={resume ? "furniture" : "furniture hidden"} />
            </div>
            <div className="animated links">
                <Link to="/projects" className="animated link">
                    <span className="btn" 
                    onMouseEnter={() => setProjects(true)} onMouseLeave={() => setProjects(false)}>
                        Projects
                    </span>
                </Link>
                <Link to="/contact" className="animated link">
                    <span className="btn" 
                    onMouseEnter={() => setContact(true)} onMouseLeave={() => setContact(false)}>
                        Contact
                    </span>
                </Link>
            </div>
            <Ghostly />
            <UserInteractions />
        </div>
    )
}
