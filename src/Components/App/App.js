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
  // const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStories();
        const newFeed = data.articles.map((story) => ({
          ...story,
          newId: nanoid(),
        }));
        localStorage.setItem('feed', JSON.stringify(newFeed));
        setFeed(newFeed);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (incomingQuery) => {
    // setQuery(incomingQuery);
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
    setResultsFeed('');
    // setQuery('');
    setFeed(JSON.parse(localStorage.getItem('feed')));
  }

  return (
    <div className="display-container">
      <Header handleSearch={handleSearch}/>
      <Routes>
        <Route path="/" element={<Feed feed={feed} resultsFeed={resultsFeed} reloadFeed={reloadFeed}/>} />
        <Route path="/:id" element={<StoryDetails feed={feed} />} />
      </Routes>
    </div>
  );
};

export default App;