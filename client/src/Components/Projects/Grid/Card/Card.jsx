import { useState } from 'react'
import "./card.scss"

export default function Card({image}) {    
    const [hovered, setHovered] = useState(false)
    const [open, setOpen] = useState(false)

    return (
        <div className={hovered ? "card animated" : "card"} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {
                hovered ?
                <img src={require(`../../../resources/portfolio/open-book.png`)} alt=""/>
                :
                <img src={require(`../../../resources/portfolio/${image}`)} alt=""/>
            }
        </div>
    )
}
