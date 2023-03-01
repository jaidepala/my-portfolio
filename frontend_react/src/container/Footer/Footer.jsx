import React, { useState } from "react";

// Images
import { images } from "../../constants";

// App Wrap
import { AppWrap, MotionWrap } from "../../wrapper";

// Client
import { client } from "../../client";

// SCSS
import "./Footer.scss";

const Footer = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        client.create(contact)
        .then((data) => {
            setLoading(false);
            setIsFormSubmitted(true);


        });
    };

    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:jaidepala@gmail.com" className="p-text">
                        jaidepala@gmail.com
                    </a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="email" />
                    <a href="tel:+91-9930472601" className="p-text">
                        +91-9930472601
                    </a>
                </div>
            </div>
            {
                isFormSubmitted && (
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                )
            }
            {
                !isFormSubmitted && (

                    <div className="app__footer-form app__flex">
                        <div className="app__flex">
                            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
                        </div>
                        <div className="app__flex">
                            <input className="p-text" type="text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
                        </div>
                        <div>
                            <textarea className="p-text" placeholder="Your Message" name="message" value={message} onChange={handleChangeInput}>

                            </textarea>
                        </div>
                        <button type="button" className="p-text" onClick={handleSubmit} disabled={loading}>
                            { loading ? 'Sending' : 'Send Message' }
                        </button>
                    </div>
                )
            }
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "contact",
    "app__whitebg"
);
