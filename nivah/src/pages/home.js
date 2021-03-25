import React from 'react';
import ImageView from '../components/imageview';

function Home({data}) {
    document.title = "Nivah | Official Website";
    return (
        <div className="body-wrap">
            <div className="home-wrap">
                <ImageView testimonial={data}/>
            </div>
        </div>
    );
}

export default Home;
