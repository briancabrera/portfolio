import { useState } from 'react'
import "./home.scss"
import { Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar.jsx"

export default function Home() {
    const [table, setTable] = useState(false);
    const [closet, setCloset] = useState(false);

    return (
        <div className="container">
            <Navbar />
            <Link to="/about" className="animated link">
                <span className="btn" 
                onMouseEnter={() => setTable(true)} onMouseLeave={() => setTable(false)}>
                    About me
                </span>
            </Link>
            <div className="animated room">
                <img src={require("../resources/house/inside/inside.png")} alt="" id={table || closet ? "roomhidden" : "room"}/>
                <img src={require("../resources/house/inside/table.png")} alt="" className={table ? "furniture" : "furniture hidden"} />
                <img src={require("../resources/house/inside/closet.png")} alt="" className={closet ? "furniture" : "furniture hidden"}/>
            </div>
            <Link to="/projects" className="animated link">
                <span className="btn" 
                onMouseEnter={() => setCloset(true)} onMouseLeave={() => setCloset(false)}>
                    Projects
                </span>
            </Link>
        </div>
    )
}
