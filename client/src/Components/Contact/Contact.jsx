import React from 'react'
import "./contact.scss"
import Form from "./Form/Form.jsx"
import Navbar from "../Navbar/Navbar.jsx"
import Ghostly from "../Ghostly/Ghostly.jsx"
import UserInteractions from "../UserInteractions/UserInteractions.jsx"

export default function Contact() {

    return (
        <div className="contact">
            <Navbar />
            <Form />
            <UserInteractions />
        </div>
    )
}
