import { useState } from 'react'
import "./Intro.scss"
import { Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar.jsx"
import Ghostly from '../Ghostly/Ghostly'

export default function Intro() {

    const [dialogue, setDialogue] = useState(1)
    const [asleep, setAsleep] = useState(true)
    const [houseHovered, setHouseHovered] = useState(false)

    const changeDialogue = () => {
        dialogue < 6 && setDialogue(dialogue + 1)
    }

    return (
        <div className="introContainer">
            <div className="house" onMouseEnter={() => setHouseHovered(true)} onMouseLeave={() => setHouseHovered(false)}>
                {   
                    dialogue !== 6 ? 
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

            { asleep && <img src={require("../resources/quest.gif")} alt="" id="quest"/> }

            <div className="virtualAssistant">
                {
                    asleep ?
                    <>
                        <img src={require("../resources/sleepingGhost.png")} alt="" id="ghostly" onClick={() => setAsleep(false) && changeDialogue()}/>
                    </>
                    :
                    <>
                        <img src={require("../resources/ghost.gif")} alt="" id="ghostly" onClick={() => changeDialogue()}/>
                        <img src={require(`../resources/ghostly/intro${dialogue}.png`)} alt="" className="dialogue" onClick={() => changeDialogue()}/>
                    </>
                }
            </div>
        </div>
    )
}
