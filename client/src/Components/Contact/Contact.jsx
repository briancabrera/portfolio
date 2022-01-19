import React from 'react'
import { Link } from "react-router-dom"
import "./contact.scss"
import Form from "./Form/Form.jsx"

export default function Contact() {

    return (
        <div className="contact">
            <Link to="/home" className="link">
                <span>
                    Home
                </span>
            </Link>
            <Form />
        </div>
    )
}
