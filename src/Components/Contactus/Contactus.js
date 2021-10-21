import React from 'react';
import './Contactus.css';

const Contactus = () => {
    return(
        <div className='contact-us-container'>
            <div className="container">
                <div className="contact-us">
                    contact us
                </div>
                <div className="underline"></div>
                <div className="contact-us-content">
                    Have an issue, comment or technical concern? Please feel free to contact us anytime between 9.00 am to 6.00 PM Eastern Standard Time, Monday - Friday
                </div>
                <div className="divider"></div>
                <form className="contact-form">
                    <div className="row">
                        <div className="col-6">
                            <label for="name" className="input-label">Name(Required)</label>
                            <input id="name"placeholder="Name" type="text"></input>
                        </div>
                        <div className="col-6">
                        <label for="email" className="input-label">Email(Required)</label>
                            <input id="email" placeholder="Email" type="email"></input>
                        </div>
                    </div>
                    <div className="row long-input">
                        <label for="subject" className="input-label">Subject(Required)</label>
                        <input id="subject" placeholder="Subject" type="text"></input>
                    </div>
                    <div className="row long-input">
                        <label for="message" className="input-label">Message(Required)</label>
                        <textarea id="message" placeholder="Message" rows="6"></textarea>
                    </div>
                    <button className="submit-button" type="submit">SEND</button>
                </form>
                <div className="get-in-touch-container">
                    <div className="get-in-touch">GET IN TOUCH</div>
                    <div className="underline"></div>
                    <div className="row email-container">
                        <img src={process.env.PUBLIC_URL + '/images/mail-icon.png'} alt="" className="Icon-material-mail"></img>
                        <div className="colexion-email">info@colexion.io</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus;