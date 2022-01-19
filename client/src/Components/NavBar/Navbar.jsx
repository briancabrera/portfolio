import {useState} from 'react'
import "./navbar.scss"
import { Link, useLocation } from "react-router-dom"

const Navbar = (props) => {
    const [view, setView] = useState(true)
    const { pathname } = useLocation()

    return (
        <div className="navbar">
            <div className="container">
                <div className="icons">  
                    <a href="https://www.linkedin.com/in/cabrerabrian/" target="_blank">
                        <img src={require("../resources/logos/linkedin.png")} alt="" />
                    </a>
                    <a href="https://github.com/briancabrera" target="_blank">
                        <img src={require("../resources/logos/github.png")} alt="" id="github" />
                    </a>
                    {
                        pathname !== "/home" ?
                        <Link to="/home" className="link">
                            <span>
                                Home
                            </span>
                        </Link>
                        :
                        null
                    }
                </div>
            </div>  
        </div>
    )
}

export default Navbar
