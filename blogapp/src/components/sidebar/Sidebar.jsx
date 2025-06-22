import React, { useState, useEffect } from 'react'
import './sidebar.css'
import myImage from "../../assets/9.jpg";
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const [cats,setCats] = useState([]);


    useEffect(() => {
        const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="image" src={myImage} alt="" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link" key={c._id}>
                        <li className="sidebarListItem" key={c._id}>{c.name} </li>
                        </Link>
                    ))}
                    {/* Static categories for demonstration */}
                    
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
  
}

export default Sidebar;


