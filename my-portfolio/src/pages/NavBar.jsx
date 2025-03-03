import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
    return (
      <nav className='nav-baer-container'>
      <ul className="navbar-links">
        <img className='nav-logo' src='./WebDevChauncey.png'></img>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    )
}

export default NavBar;