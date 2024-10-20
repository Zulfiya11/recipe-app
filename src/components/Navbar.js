import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navList'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/submit">Submit Recipe</Link></li>
        <li><Link to="/browse">Browse Recipes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
