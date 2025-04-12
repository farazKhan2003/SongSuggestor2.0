import React from 'react';

const RecommendationCard = ({ recommendation }) => {
  return (
    <div className="recommendationcard">
      <img
        src={recommendation.albumCover}
        alt={recommendation.name}
        class="albumcover"
      />

      <div className="cardcontent">
        <p className="songtitle"> {recommendation.name}</p>
        <p className="artist">{recommendation.artist}</p>
        <p className="album">{recommendation.album}</p>
      </div>
    </div>
  );
};

export default RecommendationCard;
