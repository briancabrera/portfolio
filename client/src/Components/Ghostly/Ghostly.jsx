import { useState } from 'react'

export default function Ghostly({dialogues}) {

    const [dialogue, setDialogue] = useState(0)

    const changeDialogue = () => {
        dialogue < dialogues.length && setDialogue(dialogue + 1)
    }

    return (
        <div>
            <img src={require("../resources/ghost.gif")} alt="" id="ghostly" onClick={() => changeDialogue()}/>
            <img src={require(`../resources/ghostly/${dialogues[dialogue]}.png`)} alt="" className="dialogue"/>
        </div>
    )
}
