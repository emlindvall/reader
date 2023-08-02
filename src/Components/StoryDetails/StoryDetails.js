import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import authorPng from '../../assets/author.png';
import linkPng from '../../assets/link.png';
import './StoryDetails.css';

const StoryDetails = ({ feed }) => {
  let { id } = useParams();
  const [story, setStory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findStory = async () => {
      if (feed) {
        const foundStory = feed.find((story) => story.newId === id);
        if (foundStory) {
          setStory(foundStory);
          setLoading(false);
        }
      }
    };

    findStory();
  }, [feed, id]);

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

  return (
    <div className="story-details-container">
      {loading ? (<p>Loading....</p>) : 
      (<div>
        <div className="top-row">
        <div className="top-row-left">
          <img src={authorPng} alt="Placeholder author image" className="author-png"/>
          <p className="author">{story.author}</p>
        </div>
        <div className="top-row-right">
          <p className="date-time">{formattedDate}</p>
        </div>
      </div>
      <p className="headline">{story.title}</p>
      <img src={story.urlToImage} alt="Story preview image" className="details-story-png"/>
      <p className="content">{story.content.split("[")[0]}</p>
      <NavLink to={`${story.url}`} style={{ textDecoration: 'none', color: "#201F1E" }}>
        <div className="source-container">
          <img src={linkPng} alt="Link icon, not a hyperlink" className="link-png"/>
          <p className="redirect">Read the rest at</p>
          <p className="source-link">{story.source.name}</p>
        </div>
      </NavLink>
      </div>)
      }
      <NavLink to={"/"} style={{ textDecoration: 'none', color: "#201F1E" }}>
        <button className="back-button">back</button>
      </NavLink>
    </div>
  );
};

export default StoryDetails;