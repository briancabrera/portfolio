import React from 'react'
import "./navbar.scss"
import { Redirect } from "react-router-dom"

const Navbar = () => {

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
            </div>  
        </div>
    )
}

export default Navbar
