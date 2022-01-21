import { useState } from 'react'
import "./card.scss"

export default function Card({image}) {    
    const [hoveredCard, setHoveredCard] = useState(false)

    return (
        <div className={hoveredCard ? "card animated" : "card"} onMouseEnter={() => setHoveredCard(true)} onMouseLeave={() => setHoveredCard(false)}>
            {
                hoveredCard ?
                <img src={require(`../../../resources/portfolio/animated-book.gif`)} alt="" />
                :
                <img src={require(`../../../resources/portfolio/${image}`)} alt=""/>
            }
        </div>
    )
}
