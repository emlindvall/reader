import React, { useEffect, useState } from 'react';
import StoryCard from '../StoryCard/StoryCard';
import { nanoid } from "nanoid";
import './Feed.css';

const Feed = ({ feed }) => {

  const allStories = feed.map((story) => {
    return(
      <StoryCard
        key={nanoid()}
        story={story}
      />
    )
  })

  return(
    <div className="feed-container">
      {allStories}
    </div>
  )
}

export default Feed;