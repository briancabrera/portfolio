import React from 'react'
import { useLocation } from "react-router-dom"
import "./userinteractions.scss"

export default function UserInteractions() {
    const location = useLocation();
    
    const paths = [
        "home",
        "projects",
        "resume",
        "contact",
        "about"
    ];

    const resumeURL = "https://drive.google.com/file/d/1NigsLrNtCC9e4P8FCLlMTHAZo8zt3b0H/view"

    

  return (
    <div className="interactions">
        <div className="path-container">
        {
            paths.map(path => 
                <a href={path === "resume" ? resumeURL : `/${path}`} target={path === "resume" ? "_blank" : "_self"} className="path">
                    <img src={require(`../resources/ghostly/${path}.png`)} alt=""
                    style={{display: location.pathname === `/${path}` ? "none" : "flex",
                            cursor: "pointer"}}/>  
                </a>
            )
        }
        </div>
    </div>
  )
}
