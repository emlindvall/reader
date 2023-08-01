import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Feed from '../Feed/Feed';
import StoryDetails from '../StoryDetails/StoryDetails';
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
      <Routes>
        <Route path="/" element={
          <Feed feed={feed}/>
        }/>
        <Route path="/:id" element={
          <StoryDetails feed={feed} />
        }/>
      </Routes>
    </div>
  )
}

export default App;