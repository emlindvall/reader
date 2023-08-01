import React from 'react';
import StoryCard from '../StoryCard/StoryCard';
import './Feed.css';

const Feed = ({ feed }) => {
  return (
    <div className="feed-container">
      {feed.map((story) => (
        <StoryCard key={story.newId} story={story} />
      ))}
    </div>
  );
};

export default Feed;