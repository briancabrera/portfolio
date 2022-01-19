import React from 'react'
import { useForm } from "react-hook-form"
import "./form.scss"

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className="form">
            <div className="background">
                <img src={require("../../resources/contact/contactform.png")} alt="" />
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit()}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <input type="text" id="message" />
                    </div>
                    <input type="submit" id="submit-btn" value="Send"/>
                </form>
            </div>
        </div>
    )
}