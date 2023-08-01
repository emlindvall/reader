import React, { useEffect, useState } from 'react';
import authorPng from '../../assets/author.png';
import './StoryCard.css';

const StoryCard = ({ story, id }) => {
  console.log(story, "story obj in StoryCard");
  console.log(id, "id in StoryCard")

  const formattedDate = (() => {
    const date = new Date(story.publishedAt);
    return date.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  })()

  return(
    <div className="story-card-container">
      <div className="top-row">
        <div className="top-row-left">
          <img src={authorPng} alt="Placeholder author image" className="author-png"/>
          <p className="author">{story.author}</p>
          <p className="for">for</p>
          <p className="source">{story.source.name}</p>
        </div>
        <div className="top-row-right">
          <p className="date-time">{formattedDate}</p>
        </div>
      </div>
      <div className="bottom-row">
        <div className="bottom-row-left">
          <p className="headline">{story.title}</p>
          <p className="description">{story.description}</p>
        </div>
        <div className="bottom-row-right">
          <img src={story.urlToImage} alt="Story preview image" className="story-png"/>
        </div>
      </div>
    </div>
  )
}

export default StoryCard;