import React, {useState} from 'react';

import sample from '../assets/sample.jpg';
import './galary.css';
function Galary() {
    let [photo, setPhoto] = useState(sample);

    return (
        <div className="galary">
            {/* <img src={photo} alt="galary"/> */}
        </div>
    );
}

export default Galary;