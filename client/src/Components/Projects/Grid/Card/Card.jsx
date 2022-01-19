import { useState } from 'react'
import "./card.scss"

export default function Card({image}) {    
    const [hovered, setHovered] = useState(false)

    return (
        <div className={hovered ? "card animated" : "card"} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {
                hovered ?
                <img src={require(`../../../resources/portfolio/animated-book.gif`)} alt="" />
                :
                <img src={require(`../../../resources/portfolio/${image}`)} alt=""/>
            }
        </div>
    )
}
