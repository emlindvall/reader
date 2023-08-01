import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Header from '../Header/Header';
import Feed from '../Feed/Feed';
import StoryDetails from '../StoryDetails/StoryDetails';
import { mockData } from '../../mockData/mockData.js';
import './App.css';

const App = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const storedFeed = JSON.parse(localStorage.getItem('feed'));
      let newFeed = [];
      
      if (storedFeed) {
        newFeed = storedFeed;
      } else {
        newFeed = mockData.data[0].articles.map((story) => ({
          ...story,
          newId: nanoid(),
        }));
        localStorage.setItem('feed', JSON.stringify(newFeed));
      }
      
      setFeed(newFeed);
    };

    fetchData();
  }, []);

  return (
    <div className="display-container">
      <Header />
      <Routes>
        <Route path="/" element={<Feed feed={feed} />} />
        <Route path="/:id" element={<StoryDetails feed={feed} />} />
      </Routes>
    </div>
  );
};

export default App;