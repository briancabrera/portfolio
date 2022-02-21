import {useState, useEffect, React} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setIntroDialogue } from "../../Actions/actions"
import "./ghostly.scss"

export default function Ghostly() {
    const dispatch = useDispatch();
    const location = useLocation();
    
    const [asleep, setAsleep] = useState(true)
    const [dialogue, setDialogue] = useState(1)
    const introDialogue = useSelector(state => state.introDialogue)
    

    const changeDialogue = () => {
        dialogue < 6 && setDialogue(dialogue + 1)
    }

    useEffect(() => {
        introDialogue < 6 && dispatch(setIntroDialogue())
        console.log(introDialogue)
    }, [dialogue]);

  return (
    <div className="virtualAssistant">
                {
                    location.pathname === "/" ?
                        asleep ?
                        <>
                            <img src={require("../resources/sleepingGhost.png")} alt="" id="ghostly" onClick={() => setAsleep(false)}/>
                            <img src={require("../resources/quest.gif")} alt="" id="quest"/> 
                        </>
                        :
                        <>
                            <img src={require("../resources/ghost.gif")} alt="" id="ghostly" onClick={() => changeDialogue()}/>
                            <img src={require(`../resources/ghostly/intro${dialogue}.png`)} alt="" className="dialogue" onClick={() => changeDialogue()}/>
                        </>
                    :
                    <>
                        <img src={require("../resources/ghost.gif")} alt="" id="ghostly" onClick={() => 0}/>

                    </>
                    
                }
            </div>
  )
}
