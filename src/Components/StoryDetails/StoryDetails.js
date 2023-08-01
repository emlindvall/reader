import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './StoryDetails.css';

const StoryDetails = ( { feed }) => {
  let { id } = useParams();

  return(
    <div className="story-details-container">
      <div className="top-row">
        <div className="top-row-left">
          {/* <img src={authorPng} alt="Placeholder author image" className="author-png"/> */}
          {/* <p className="author">{story.author}</p> */}
          <p className="for">for</p>
          {/* <p className="source">{story.source.name}</p> */}
        </div>
      </div>
    </div>
  )
}

export default StoryDetails;