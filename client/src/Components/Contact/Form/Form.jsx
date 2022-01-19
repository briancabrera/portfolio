import { useState } from 'react'
import { useForm } from "react-hook-form"
import "./form.scss"
import emailjs from "emailjs-com"

export default function Form() {
    const [sent, setSent] = useState(false);

    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_hthxlum', e.target, 'user_0TmhV8cDn0F7e7HrEAd9p')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setSent(true);
    }

    return (
        <div className="form">
            {
                !sent ?
                <>
                    <div className="background">
                        <img src={require("../../resources/contact/contactform.png")} alt="" />
                    </div>
                    <div className="form-container">
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="field" type="text" name="name"/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="field" type="text" name="email"/>
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input className="field" type="text" name="subject"/>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="field" id="message" name="message" />
                            </div>
                            <input type="submit" id="submit-btn" value="Send"/>
                        </form>
                    </div>
                </>
                :
                <>
                    <div className="background">
                        <img src={require("../../resources/contact/animatedform.gif")} alt="" />
                    </div>
                </>
            }
        </div>
    )
}