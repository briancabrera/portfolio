import React from 'react'
import Navbar from "../Navbar/Navbar.jsx"
import "./about.scss"

export default function About() {
    return (
        <div className="about">
            <Navbar />
            <div className="text">
                <span id="span1">
                I'm Brian, a Full-Stack Developer born and raised in Punta del Este, Uruguay.
                </span>
                <span className="span2">
                I graduated from Henry, and worked for SuiteDB in Montevideo.
                </span>
                <span className="span2">
                Even though is not easy to get a first experience in IT, I decided to quit and look for another opportunities that allow me to contribute and grow as a professional.
                </span>
                <span className="span2">
                If I had to describe myself in one word, determined is the one to go. I always give 100% in everything I do.
                </span>
                <span className="span2">
                To me, there's no beast that cannot be tamed, no challenge that cannot be overcome, and no objective that cannot be reached.
                </span>
                <span id="span3">
                To keep it simple:
                </span>
                <span id="span4">
                Work hard, hard work.
                </span>
            </div>
            <div className="skills">
                test
            </div>
        </div>
    )
}
