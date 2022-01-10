import React from 'react'
import Card from "./Card/Card.jsx"
import "./grid.scss"

export default function Grid() {

    const images = [
        "netflixgrid.png",
        "getflygrid.png"
    ];

    return (
        <div className="grid">
            {
                images.map((image, index) =>
                <Card image={image} key={index}/>)
            }
        </div>
    )
}
