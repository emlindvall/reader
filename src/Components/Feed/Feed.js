import React, { useState } from 'react';
import StoryCard from '../StoryCard/StoryCard';
import './Feed.css';

const Feed = ({ feed, resultsFeed, reloadFeed }) => {
  return (
    !resultsFeed.length ? (
    <div className="feed-container">
      {feed.map((story) => (
        <StoryCard key={story.newId} story={story} />
      ))}
    </div>
    ) : (
      <div className="feed-container">
      {resultsFeed.map((story) => (
        <StoryCard key={story.newId} story={story} />
      ))}
      <button className="back-button" onClick={reloadFeed}>back</button>
    </div>
    )
  );
};

export default Feed;