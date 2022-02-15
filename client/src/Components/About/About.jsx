import {useState} from 'react'
import Navbar from "../Navbar/Navbar.jsx"
import "./about.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function About() {
    const [stack, setStack] = useState(true);



    return (
        <div className="about">
            <Navbar />
            <div className="text">
                <span id="span1">
                I'm Brian, a Full Stack Developer. Punta del Este, Uruguay.
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
            </div>
            <div className="skills">
                    <div className="skillset">
                        <div class="toggle" onClick={() => stack ? setStack(false) : setStack(true)}>
                            <input type="checkbox" class="check"/>
                            <b class="b switch"/>
                            <b class="b track"/>
                        </div>
                        {
                        stack ?
                        <>
                            <span>
                                Front-end
                            </span>
                            <img src={require("../resources/about/frontend.png")} alt="" />
                        </>
                        :
                        <>
                            <span>
                                Back-end
                            </span>
                            <img src={require("../resources/about/backend.png")} alt="" />
                        </>
                        }
                        </div>
            </div>
        </div>
    )
}
