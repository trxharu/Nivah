import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return <div className="footer">
        <div className="container">
            <p>@2020 NIVAH</p>
            <div>
                <Link to="/careers">Careers</Link>
                <Link to="/contactus">Let's Talk</Link>
            </div>
        </div>
        <div className="container">
        Under development
        </div>
    </div>
}

export default Footer;
