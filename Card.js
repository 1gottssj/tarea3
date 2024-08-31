import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, content, additionalContent, initialLikes = 0, onLike }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(likes + 1);
    if (onLike) {
      onLike(); 
    }
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="card-content">
        {content}
        <br /> {/* Salto de línea */}
        <span className="additional-content">{additionalContent}</span>
      </p>
      <button onClick={handleLike}>Like {likes}</button>
    </div>
  );
};

export default Card;
