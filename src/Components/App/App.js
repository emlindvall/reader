import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Feed from '../Feed/Feed';
import { mockData } from '../../mockData/mockData.js';
import './App.css';

const App = () => {
  const [feed, setFeed] = useState([]);

  const fetchData = () => {
    setFeed(mockData.data[0].articles)
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return(
    <div className="display-container">
      <Header/>
      <Feed feed={feed}/>
    </div>
  )
}

export default App;