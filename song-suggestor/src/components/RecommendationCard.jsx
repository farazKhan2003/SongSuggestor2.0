import React from 'react';

const RecommendationCard = ({ recommendation }) => {
  const defaultCover = '..logo.svg';

  return (
    <div className="recommendationcard">
      <img
        src={recommendation.albumcover}
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
