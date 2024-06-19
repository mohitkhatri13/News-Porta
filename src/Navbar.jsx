import React from 'react';
import { NavLink } from 'react-router-dom';

const getNavLinkClass = ({ isActive }) => (isActive ? 'text-white font-bold nav-link' : 'nav-link');

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-auto h-6 bg-slate-400 p-6 '>
      <div className='ml-20 font-bold text-2xl'>
        <NavLink to="/" >
          THE-NEWS
        </NavLink>
      </div>
      <div>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/category/business" className={getNavLinkClass}>
          Business
        </NavLink>
        <NavLink to="/category/health" className={getNavLinkClass}>
          Health
        </NavLink>
        <NavLink to="/category/entertainment" className={getNavLinkClass}>
          Entertainment
        </NavLink>
        <NavLink to="/category/science" className={getNavLinkClass}>
          Science
        </NavLink>
        <NavLink to="/category/sports" className={getNavLinkClass}>
          Sports
        </NavLink>
        <NavLink to="/category/technology" className={getNavLinkClass}>
          Technology
        </NavLink>
      </div>
     
    </div>
  );
};

export default Navbar;
