import React from 'react'
import Card from "./Card/Card.jsx"
import "./grid.scss"

export default function Grid() {

    const images = [
        "netflixgrid.png",
        "getflygrid.png",
        "justachat.png"
    ];

    const links = [
        "https://github.com/briancabrera/netflix-clone",
        "https://github.com/hernancur/app-canbis",
        "https://github.com/briancabrera/chat-app"
    ]

    return (
        <div className="grid">
            {
                images.map((image, index) =>
                <a href={links[index]} target="_blank">
                    <Card image={image} key={index}/>
                </a>)
            }
        </div>
    )
}
