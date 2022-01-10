import {useState} from 'react'
import "./navbar.scss"
import { Redirect } from "react-router-dom"

const Navbar = (props) => {
    const [view, setView] = useState(true)

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
                </div>
                    {
                        props.projects ?
                            view ?
                            <span onClick={() => setView(false)} className="view">Grid</span>
                            :
                            <span onClick={() => setView(true)} className="view">Slides</span>
                        :
                        null
                    }
            </div>  
        </div>
    )
}

export default Navbar
