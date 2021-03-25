import React from 'react';
import './profile.css';

function Profile({name, bio, purl}) {
    return (
        <div className="profile-container">
            <img src={purl} alt={name} width="120px" height="120px"/>
            <div className="bio">
                <h2>{name}</h2>
                <p>{bio}</p>
            </div>
        </div>
    );
}

export default Profile;