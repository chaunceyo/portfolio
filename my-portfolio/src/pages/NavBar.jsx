import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
    return (
      <nav className='container'>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    )
}

export default NavBar;