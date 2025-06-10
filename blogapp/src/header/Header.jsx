import "./header.css"
import React from 'react';
import myImage from "../assets/4.jpg";


export const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={myImage} alt="" />
    </div>
  )
}

export default Header;
