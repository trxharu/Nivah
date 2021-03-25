import React from 'react';
import './services.css';

function Services() {
    document.title = "Nivah | Services";

    let arr = ".serv-photography";

    function handleClick(e) {
        document.querySelector(arr).classList.remove("show");
        arr = "";
        switch(e.target.innerHTML) {
            case "Photography":
                document.querySelector(".serv-photography").classList.add("show");
                arr = ".serv-photography";
                break;
            case "Apparels":
                document.querySelector(".serv-apparels").classList.add("show");
                arr = ".serv-apparels";
                break;
            case "Decoration":
                document.querySelector(".serv-decoration").classList.add("show");
                arr = ".serv-decoration";
                break;
            default:
                break;
        }
    }
    return (
        <div className="body-wrap">
            <div className="container">
                <div className="services">
                    <h3 className="page-head" onClick={(e)=> handleClick(e)}>Photography</h3>
                    <div className="serv-photography show">
                        <ul>
                            <li>Wedding Photography</li>
                            <li>Candid Photography</li>
                            <li>Bridal Photography</li>
                            <li>Portrait Photography</li>
                            <li>Studio Photography</li>
                            <li>Theme Photography</li>
                            <li>Family Portraits</li>
                            <li>Wedding Cinematography <br></br>
                                (Narrative & Documentary)
                            </li>
                        </ul>
                        <ul>
                            <li>Pre-Wedding/ Post Wedding Shoots</li>
                            <li>Traditional Videography</li>
                            <li>Video Album Shoot</li>
                            <li>Baby Shoot</li>
                            <li>Maternity Shoot</li>
                            <li>Product Shoot</li>
                            <li>Ad Shoot</li>
                            <li>Wedding Album</li>
                            <li>E-Invitation</li>
                        </ul>
                    </div>
                    <h3 className="page-head" onClick={(e)=> handleClick(e)}>Apparels</h3>
                    <div className="serv-apparels">
                        <ul>
                            <li>Bridal Lehenga</li>
                            <li>Light Lehenga</li>
                            <li>Gown</li>
                            <li>Trousseau Sarees</li>
                            <li>Trousseau Anarkali</li>
                            <li>Indo-Western Outfits</li>
                            <li>Kurta Pajama</li>
                        </ul>
                        <ul>
                            <li>Waistcoat</li>
                            <li>Nehru Jacket</li>
                            <li>Three Piece Suit</li>
                            <li>Tuxedo Suit</li>
                            <li>Bandhgala Suit</li>
                            <li>Accessories ... & Many More</li>
                        </ul>
                    </div>
                    <h3 className="page-head" onClick={(e)=> handleClick(e)}>Decoration</h3>
                    <div className="serv-decoration" >
                        <ul>
                            <li>Wedding Decor</li>
                            <li>Floral Decoration</li>
                            <li>Lighting Arrangement</li>
                            <li>Furniture Setup</li>
                        </ul>
                    </div>
                    <h2 style={{textAlign: "Center", marginTop: "10px" , color: "#e7b315"}}>Organise Events Birthday Party, Farewel Party, Bachelor's Party & Hen's Party.</h2>
                </div>
            </div>
        </div>
    );
}

export default Services;
