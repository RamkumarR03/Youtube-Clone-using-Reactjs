import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaSearch, FaYoutube } from "react-icons/fa";
import { IoMenuSharp, IoNotificationsOffSharp } from "react-icons/io5";
import '../index.css';

function Header() {
    return (
        <header className="header">
            <div>
                <IoMenuSharp style={{ height: '50px', width: '50px' }} />
            </div>
            <div className="logo">
                <p><FaYoutube style={{ color: 'red', height: '30px', width: '60px', margin: '0px', padding: '0px' }} /></p>
                <h3 >YouTube </h3>
            </div>
            <div className="header__center">
                <input type="text" placeholder="Search" />
                <button className="searchButton"><FaSearch /></button>
            </div>
            <div className="header__right">
                <IoNotificationsOffSharp className='icon1' style={{color:'blue'}}/>
                <CgProfile className='icon2' style={{color:'red'}}/>
            </div>
        </header>
    );
}

export default Header;