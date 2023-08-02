import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import './Header.css';

const Header = ({ handleSearch }) => {
  return(
    <div className="header-container">
      <NavLink to="/" style={{ textDecoration: 'none', color: "#201F1E" }}>
        <p className="logo">reader</p>
      </NavLink>
      <Search handleSearch={handleSearch}/>
    </div>
  )
}

export default Header;