import React from 'react';
import StoryCard from '../StoryCard/StoryCard';
import './Feed.css';

const Feed = ({ feed, query, reloadFeed }) => {
  return (
    <div className="feed-container">
      {feed.map((story) => (
        <StoryCard key={story.newId} story={story} />
      ))}
      {query.length ? <button className="back-button" onClick={reloadFeed}>back</button> : <p></p>}
    </div>
  );
};

export default Feed;