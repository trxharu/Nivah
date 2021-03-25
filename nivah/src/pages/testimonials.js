import React from 'react';

import TestimonialProfile from '../components/testimonial';
import def from '../assets/default.png';
import '../components/testimonial.css';

let data = [{
    name: "test data",
    text: "lorem ipsum dollar sit amet lorem ipsum dollar sit amet lorem ipsum dollar sit amet",
    purl: def
},
{
    name: "test data",
    text: "lorem ipsum dollar sit amet lorem ipsum dollar sit amet lorem ipsum dollar sit amet",
    purl: def
}];
function Testimonials() {
    document.title = "Nivah | Who Loves Us"
    return (<>
        <div className="body-wrap">
            <div className="container">
                <div className="testimonial-container">
                    {data.map((d, key)=>(
                        <TestimonialProfile purl={d.purl} key={key} name={d.name} text={d.text}></TestimonialProfile>
                    ))}
                </div>
            </div>
        </div>
    </>);
}

export default Testimonials;