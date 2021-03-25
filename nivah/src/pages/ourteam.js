import React from 'react';
import Profile from '../components/profile';

import pic from '../assets/pp.jpeg';
import r_pic from '../assets/r_photo.jpg';
import s_pic from '../assets/s_photo.jpg';
import sc_pic from '../assets/sc_photo.jpg';
import new_p from '../assets/new_p.jpeg';
import def from '../assets/default.png';

let data = [{
    name: "Ashok Piyadarshi",
    bio: `He’s the man with the looks & a big heart. The soul of our
            company, he is the one who makes it all possible from start to end. Fashion
            Designer by profession and a photographer by passion. Strong, passionate &
            practical, he brings the designs to life & is truly the creator of happiness.`,
    photo: pic
},
{
    name: "Nabeela Khan",
    bio: `She’s the one with an attitude to get things done right. The
    backbone of our company, she designs & styles weddings (each one unique &
    awe-inspiring) as if it’s her own D-day. A Dreamer, enthusiast & fiercely feminist,
    she’s the perfect blend of style & elegance.`,
    photo: def
}];
let data2 = [{
    name: "Abhishek Chandra",
    bio: `He is Known for his contemporary, off-beat approach of shooting indian marriages in unique and 
    instantly recognizable style derived from his passion for creating portraits. One who plays with lights
    just to get that one perfect shot. Distinctly dramatic and edgy style of photography is synonym of Abhishek.`,
    photo: def
},
{
    name: "Satyam Singh",
    bio: `He specializes in artistic wedding cinematography. With his cool mind, he gets the best shot, known for 
    having an observant approach, drive for perfection and innovative cinematography techniques. His passion, dedication
    and hard work has earned him a reputation of ONE SHOT MAN, who can shoot any kind of subject with full 
    satisfaction of our client.`,
    photo: s_pic
},
{
    name: "Rudra Pathak",
    bio: `Highly enthusiastic and skilled in photography & cinematography. Dedicated & punctual
    , always ready to help in big and even small tasks. Cheerful and energetic, always keeps light
    hearted mood around himself, but doesn't gets distracted while at work.`,
    photo: r_pic
}];

let design_data = [{
    name: "Ashok Priyadarshi",
    bio: `Blends excellent design skills, strong technical background and solid fashion sense to create innovative and cost-effective designs.
    He is the one who provides trends and theme inspiration.`,
    photo: pic
},
{
    name: "Gaurav Keshan",
    bio: `Creative, highly visual fashion professional with more than 8 years of experience and who 
    brilliantly mix and match the technical expertise and intuition like fabric and colour.`,
    photo: new_p
}
];
let post_data = [
    {
        name: "Adarsh Singh",
        bio: `He is the tech nerd with awesome editing skills. Roams around with his observant yet nonchalant
        attitude. Quite sincere with the responsibilities assigned and brings out the
        best work everytime.`,
        photo: def
    },
    {
        name: "Shubham Chatterjee",
        bio: `Music geek, content writer, singer/songwriter, media enthusiast. Loves Storytelling and 
        Cinema. Appreciates creativity and is always thrilled to work for artistic ventures`,
        photo: sc_pic
    }
];

function OurTeam() {
    document.title = "Nivah | Our Team";

    let arr = [".t-core"];

    function handleClick(e) {
        for(let i = 0;  i < arr.length; i++){
            document.querySelector(arr.pop()).classList.remove("show");
        }
        
        switch(e.target.innerHTML) {
            case "Core Team":
                document.querySelector(".t-core").classList.add("show");
                arr.push(".t-core");
                break;
            case "Designing Team":
                document.querySelector(".t-design").classList.add("show");
                arr.push(".t-design");
                break;
            case "Photography and Cinematography Team":
                document.querySelector(".t-photography").classList.add("show");
                arr.push(".t-photography");
                break;
            case "Post-Production Team":
                document.querySelector(".t-postprod").classList.add("show");
                arr.push(".t-postprod");
                break;
            default:
                break;
        }
    }

    return (
        <div className="body-wrap">
            <div className="container">
                <div className="our-team">
                    <h3 className="page-head" onClick={(e)=> handleClick(e)}>Core Team</h3>
                    <div className="t-core show">
                        {data.map((profile, key)=>(
                            <Profile key={key} purl={profile.photo} name={profile.name} bio={profile.bio}></Profile>
                        ))}
                    </div>
                    <h3 className="page-head" onClick={(e)=> handleClick(e)}>Photography and Cinematography Team</h3>
                    <div className="t-photography">
                        {data2.map((profile, key)=>(
                            <Profile key={key} purl={profile.photo} name={profile.name} bio={profile.bio}></Profile>
                        ))}
                    </div>
                    <h3 className="page-head" onClick={(e)=> handleClick(e)}>Post-Production Team</h3>
                    <div className="t-postprod">
                        {post_data.map((profile, key)=>(
                            <Profile key={key} purl={profile.photo} name={profile.name} bio={profile.bio}></Profile>
                        ))}
                    </div>
                    <h3 className="page-head" onClick={(e)=> handleClick(e)}>Designing Team</h3>
                    <div className="t-design">
                        {design_data.map((profile, key)=>(
                            <Profile key={key} purl={profile.photo} name={profile.name} bio={profile.bio}></Profile>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default OurTeam;
