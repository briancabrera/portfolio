import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./Intro.scss"
import { Link, useLocation } from 'react-router-dom'
import Navbar from "../Navbar/Navbar.jsx"
import Ghostly from '../Ghostly/Ghostly'

import * as actions from "../../Actions/actions"

export default function Intro() {

    const dispatch = useDispatch()
    const introDialogue = useSelector(state => state.introDialogue)
    const [houseHovered, setHouseHovered] = useState(false)

    return (
        <div className="introContainer">
            <div className="house" onMouseEnter={() => setHouseHovered(true)} onMouseLeave={() => setHouseHovered(false)}>
                {   
                    introDialogue !== 6 ? 
                    <img src={require("../resources/house.png")} alt="" id="closedDoor"/>
                    :
                        !houseHovered ? 
                        <img src={require("../resources/house.png")} alt="" id="closedDoor"/>
                        :
                        <Link to="/home">
                            <img src={require("../resources/houseOpenDoor.png")} alt="" id="openDoor"/>
                        </Link>
                }
            </div>

            <Ghostly />
            
        </div>
    )
}
