import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Header from '../Header/Header';
import Feed from '../Feed/Feed';
import StoryDetails from '../StoryDetails/StoryDetails';
import { getStories } from '../../utilities/apiCall';
import './App.css';

const App = () => {
  const [feed, setFeed] = useState([]);
  const [resultsFeed, setResultsFeed] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API and set feed state.
    const fetchData = async () => {
      try {
        const data = await getStories();
        const newFeed = data.articles.map((story) => ({
          ...story,
          newId: nanoid(),
        }));
        setFeed(newFeed);
        localStorage.setItem('feed', JSON.stringify(newFeed));
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    // Check if feed data exists in localStorage, if so, load it into state.
    const storedFeed = localStorage.getItem('feed');
    if (storedFeed) {
      setFeed(JSON.parse(storedFeed));
    } else {
      fetchData();
    }
  }, []);

  const handleSearch = (incomingQuery) => {
    const resultsFeed = feed.filter((story) => {
      return (
        story.title.toLowerCase().includes(incomingQuery) ||
        (story.description !== null && story.description.toLowerCase().includes(incomingQuery)) ||
        (story.author !== null && story.author.toLowerCase().includes(incomingQuery))
      );
    });
    setResultsFeed(resultsFeed);
  };

  const reloadFeed = () => {
    setResultsFeed([]);
    const storedFeed = localStorage.getItem('feed');
    if (storedFeed) {
      setFeed(JSON.parse(storedFeed));
    }
  };

  return (
    <div className="display-container">
      <Header handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Feed feed={feed} resultsFeed={resultsFeed} reloadFeed={reloadFeed} />} />
        <Route path="/:id" element={<StoryDetails feed={feed} />} />
      </Routes>
    </div>
  );
};

export default App;