import {useState} from 'react'
import Grid from "./Grid/Grid.jsx"
import Navbar from "../Navbar/Navbar.jsx"
import UserInteractions from "../UserInteractions/UserInteractions.jsx"
import "./projects.scss"


export default function Projects() {

    return (
        <div className="projects">
            <Navbar projects={true}/>
            <Grid />
            <UserInteractions />
        </div>
    )
}
