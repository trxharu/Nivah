import React, {useEffect, useState} from 'react';
import './imageview.css';
import navIcn from "../assets/nav-icn.png";
import user from "../assets/user.png";

function ImageView({testimonial}) {

    const [isEmpty, setIsEmpty] = useState(false);
    const [imgCount, setCount] = useState(0);

    useEffect(()=>{
        if(testimonial.length > 0) {
            setIsEmpty(true);
        }
    }, [testimonial]);

    function handleClick(e) {
        const imgWindow = document.querySelector(".img-window");
        switch (e.target.classList.value) {
            case "right-nav-btn":
                if (imgCount + 1 < testimonial.length) {
                    imgWindow.style.transform = `translateX(-${(imgCount + 1)*100}%)`;
                    setCount(imgCount + 1);
                }
                break;
            case "left-nav-btn":
                if(imgCount - 1 >= 0){
                    imgWindow.style.transform = `translateX(-${(imgCount - 1)*100}%)`;
                    setCount(imgCount - 1);
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className="image-view">
            <div className="img-window">
                {isEmpty && testimonial.map((data, key) => (
                    <img src={"http://localhost/nivah_api/uploads/testinomials/"+data.img_name} alt={key+"photo"} key={key}/>
                ))}
            </div>
            <div className="overlay">
                <div className="nav-btns">
                    <div className="left-nav-btn" onClick={(e) => handleClick(e)}><img src={navIcn} alt="left"/></div>
                    <div className="right-nav-btn" onClick={(e) => handleClick(e)}><img src={navIcn} alt="right"/></div>
                </div>
            </div>
            <div className="testinomial">
                <div className="desc-header">
                    <img src={user} alt="client" width="48px" height="48px" style={{background: "#fff"}}/>
                    <h2>{isEmpty && testimonial[imgCount].client_name}</h2>
                </div>
                <p>{isEmpty && testimonial[imgCount].description}</p>
            </div>
        </div>
    );
}

export default ImageView;
