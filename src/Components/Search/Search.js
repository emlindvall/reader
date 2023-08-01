import React, { useEffect, useState } from 'react';
import searchPng from '../../assets/search.png';
import './Search.css';

const Search = () => {
  return(
    <form className="search-bar">
    <button className="search-submit"><img src={searchPng} alt="Submit search button" className="search-png"/></button>
    <input 
      type="text" 
      placeholder='Search' 
      name='query' 
      id='searchQueryInput'
      className='search-field'
    />
  </form>
  )
}

export default Search;