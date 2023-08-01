import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './StoryDetails.css';

const StoryDetails = () => {
  let { id } = useParams();

  console.log(id);

  return(
    <p>test</p>
  )
}

export default StoryDetails;