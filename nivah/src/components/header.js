import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/main_logo.png';
import './header.css';

function Header() {
    let [menuOpen, setMenu] = useState(false);

    function handleMenu() {
        let navList = document.querySelector(".nav-list");
        let menuBtn = document.querySelector(".extra-btn");
        let menuLayer = document.querySelector(".menu-item");
        let mNav = document.querySelector(".m-nav");
        if(!menuOpen)
        {
            navList.style.visibility = "hidden";
            menuBtn.classList.add('open');
            menuLayer.style.height = "280px";
            mNav.style.opacity = "1";
            menuLayer.style.zIndex = "4";
            setMenu(true);
        } else {
            navList.style.visibility = "visible";
            menuBtn.classList.remove('open');
            mNav.style.opacity = "0";
            menuLayer.style.height = "0px";
            menuLayer.style.zIndex = "-1";
            setMenu(false);
        }
    }

    return (
        <div className="header">
            <div className="menu-item">
            <nav>
                <ul className="m-nav">
                        <li>
                            <NavLink onClick={handleMenu} to="/" exact activeStyle={{color : "#e7b315", opacity: 1}}>HOME</NavLink>
                        </li>
                        <li>
                        <p style={{"cursor": "pointer"}}>OUR STORY</p>
                            <ul className="m-sub">
                                <li>
                                    <NavLink onClick={handleMenu} to="/ourstory" exact activeStyle={{color : "#e7b315", opacity: 1}}>Why Us?</NavLink>        
                                </li>
                                <li>
                                    <NavLink onClick={handleMenu} to="/ourteam" exact activeStyle={{color : "#e7b315", opacity: 1}}>Meet The Team</NavLink>        
                                </li>
                            </ul>
                        </li>
                        <li>
                        <p style={{"cursor": "pointer"}}>OUR WORK</p>
                            <ul className="m-sub">
                                <li>
                                    <NavLink onClick={handleMenu} to="/apparelsworks" exact activeStyle={{color : "#e7b315", opacity: 1}}>Apparels</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={handleMenu} to="/photographsworks" exact activeStyle={{color : "#e7b315", opacity: 1}}>Photographs</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink onClick={handleMenu} to="/testimonials" exact activeStyle={{color : "#e7b315", opacity: 1}}>WHO LOVES US</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleMenu} to="/services" exact activeStyle={{color : "#e7b315", opacity: 1}}>SERVICES</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleMenu} to="/shop" exact activeStyle={{color : "#e7b315", opacity: 1}}>SHOP</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-items container">
                <div className="menu">
                    <div className="extra-btn" onClick={handleMenu}>
                        <div className="menu-btn"></div>
                    </div>
                </div>
                <div className="logo">
                    <img src={logo} width="50px" alt="logo"/>
                </div>
                <nav className="d-nav">
                    <ul className="nav-list">
                        <li>
                            <NavLink to="/" exact activeStyle={{color : "#e7b315", opacity: 1}}>HOME</NavLink>
                        </li>
                        <li>
                        <p style={{"cursor": "pointer"}}>OUR STORY</p>
                            <ul className="sub-menu">
                                <li>
                                    <NavLink to="/ourstory" exact activeStyle={{color : "#e7b315", opacity: 1}}>Why Us?</NavLink>        
                                </li>
                                <li>
                                    <NavLink to="/ourteam" exact activeStyle={{color : "#e7b315", opacity: 1}}>Meet The Team</NavLink>        
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p style={{"cursor": "pointer"}}>OUR WORK</p>
                            <ul className="sub-menu">
                                <li>
                                    <NavLink to="/apparelsworks" exact activeStyle={{color : "#e7b315", opacity: 1}}>Apparels</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/photographsworks" exact activeStyle={{color : "#e7b315", opacity: 1}}>Photographs</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/testimonials" exact activeStyle={{color : "#e7b315", opacity: 1}}>WHO LOVES US</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" exact activeStyle={{color : "#e7b315", opacity: 1}}>SERVICES</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop" exact activeStyle={{color : "#e7b315", opacity: 1}}>SHOP</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
