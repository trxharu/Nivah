import React from 'react';
import Galary from '../components/galary';

import './photographs.css';

function PhotographsWorks() {
    document.title = "Nivah | Our Works - Photographs";
    return (
        <div className="body-wrap">
             <div className="container">
                <h1 className="w-head">Our Works / Photographs</h1>
                <div className="photographs-container">
                    <div className="photographs-sidebar">
                        <ul>
                            <li className="active">Wedding Stories</li>
                            <li>Couple Stories (Pre-Shoot)</li>
                            <li>Hello Littles</li>
                            <li>Travel Diaries</li>
                            <li>Street Photography</li>
                        </ul>
                    </div>
                    <div className="photographs-main">
                        <Galary></Galary>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotographsWorks;