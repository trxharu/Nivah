import React from 'react';

function TestimonialProfile({name, purl, text}) {
    return (<>
        <div className="profile-container testimonial">
            <img src={purl} alt={name} width="120px" height="120px"/>
            <div className="bio">
                <h2>{name}</h2>
                <p>{text}</p>
            </div>
        </div>
    </>);
}

export default TestimonialProfile;