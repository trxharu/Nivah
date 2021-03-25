import React from 'react';
import fb_icn from '../assets/icons/fb.svg';
import ig_icn from '../assets/icons/ig.svg';
import flag from '../assets/icons/flag.png';

import './contactus.css';

function ContactUs() {
    document.title = "Nivah | Let's Talk";
    return (
        <div className="body-wrap">
            <div className="container contact">
                <div className="contact-con">
                <h1>Contact with us for more details</h1>
                <div className="contact-body">
                    <h3>Phone: <img src={flag} alt="Indian Flag" width="32px"></img> +91 8840941539</h3>
                    <h3>E-mail: <a href="mailto:nivahtfg@nivah.co.in">nivahtfg@nivah.co.in</a></h3>
                </div>
                <div className="contact-media">
                    <p className="page-text">Follow us on social media:</p>
                    <a href="https://www.facebook.com/Nivah-111905573767008" target="_blank" rel="noopener noreferrer">
                        <img src={fb_icn} alt="Facebook" width="48px" height="48px"></img>
                    </a>
                    <a href="https://www.instagram.com/nivah.events/" target="_blank" rel="noopener noreferrer">
                        <img src={ig_icn} alt="Instagram" width="48px" height="48px"></img>
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;