import React from 'react';

function OurWorks() {
    document.title = "Nivah | Our Works";

    function handleHead(e) {

    }
    return (
        <div className="body-wrap">
            <div className="container">
                <h3 className="page-head" onClick={(e) => handleHead(e)}>Apparels</h3>
                <div className="w-apparels">

                </div>
                <h3 className="page-head" onClick={(e) => handleHead(e)}>Photographs</h3>
                <div className="w-photographs">
                    
                </div>
            </div>
        </div>
    );
}

export default OurWorks;