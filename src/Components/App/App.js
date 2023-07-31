import React, { useEffect, useState } from 'react';
import Feed from '../Feed/Feed.js';
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
    <Feed feed={feed}/>
  )
}

export default App;