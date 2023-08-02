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
  const [query, setQuery] = useState([]);

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

  const handleSearch = (incomingQuery) => {
    setQuery(incomingQuery.toLowerCase());
    if (query) {
      const resultsFeed = feed.filter((story) => {
        return (
          story.title.toLowerCase().includes(query) ||
          story.description.toLowerCase().includes(query) ||
          story.author.toLowerCase().includes(query)
        );
      });
      setFeed(resultsFeed);
    }
    console.log(feed);
  };

  const reloadFeed = () => {
    setQuery('');
    setFeed(JSON.parse(localStorage.getItem('feed')));
  }

  return (
    <div className="display-container">
      <Header handleSearch={handleSearch}/>
      <Routes>
        <Route path="/" element={<Feed feed={feed} query={query} reloadFeed={reloadFeed}/>} />
        <Route path="/:id" element={<StoryDetails feed={feed} />} />
      </Routes>
    </div>
  );
};

export default App;