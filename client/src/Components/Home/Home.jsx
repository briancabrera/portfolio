import { useState } from 'react'
import "./home.scss"
import { Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar.jsx"

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
                <Link to="/about" className="animated link">
                    <span className="btn" 
                    onMouseEnter={() => setResume(true)} onMouseLeave={() => setResume(false)}>
                        Resume
                    </span>
                </Link>
            </div>
            <div className="animated room">
                <img src={require("../resources/house/inside/inside.png")} alt="" id={about || projects || contact ? "roomhidden" : "room"}/>
                <img src={require("../resources/house/inside/table.png")} alt="" className={about ? "furniture" : "furniture hidden"} />
                <img src={require("../resources/house/inside/closet.png")} alt="" className={projects ? "furniture" : "furniture hidden"}/>
                <img src={require("../resources/house/inside/envelope.png")} alt="" className={contact ? "furniture" : "furniture hidden"}/>
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
        </div>
    )
}
