import React, { useEffect, useState } from 'react';
import searchPng from '../../assets/search.png';
import './Search.css';

const Search = ({ handleSearch }) => {
  const handleChange = (event) => {
    event.preventDefault();
    handleSearch(event.target.value.toLowerCase());
  }

  return(
    <form className="search-bar">
    <button className="search-submit"><img src={searchPng} alt="Submit search button" className="search-png"/></button>
    <input 
      type="text" 
      placeholder='Search' 
      name='query' 
      id='searchQueryInput'
      className='search-field'
      onChange={handleChange}
    />
  </form>
  )
}

export default Search;