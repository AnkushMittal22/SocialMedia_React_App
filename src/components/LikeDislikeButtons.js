// src/components/LikeDislikeButtons.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const LikeDislikeButtons = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);

      if (disliked) {
        setDislikeCount(dislikeCount - 1);
        setDisliked(false);
      }
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
  };

  const handleDislikeClick = () => {
    if (!disliked) {
      setDislikeCount(dislikeCount + 1);
      setDisliked(true);

      if (liked) {
        setLikeCount(likeCount - 1);
        setLiked(false);
      }
    } else {
      setDislikeCount(dislikeCount - 1);
      setDisliked(false);
    }
  };

  return (
    <div>
      <button onClick={handleLikeClick} style={{ color: liked ? 'blue' : 'black' }}>
        <FontAwesomeIcon icon={faThumbsUp} /> Like ({likeCount})
      </button>
      <button onClick={handleDislikeClick} style={{ color: disliked ? 'red' : 'black' }}>
        <FontAwesomeIcon icon={faThumbsDown} /> Dislike ({dislikeCount})
      </button>
    </div>
  );
};

export default LikeDislikeButtons;
