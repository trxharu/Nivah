import React from 'react';

function Careers() {
    return (
        <div className="body-wrap">
            <div className="container">
                <h2 className="page-head">Work with us</h2>
                <div className="cv-container">
                <h3 className="page-text">Submit your CV here:</h3>
                <input type="file" name="cv" id="cv"/>
                <button id="cv-upload">Upload</button>
                </div>
            </div>
        </div>
    );
}

export default Careers;