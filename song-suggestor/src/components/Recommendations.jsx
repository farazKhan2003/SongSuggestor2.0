import React from 'react';
import RecommendationCard from './RecommendationCard';

const Recommendations = ({ recommendations }) => {
  return (
    <div className="recommendations">
      {recommendations.length > 0 ? (
        recommendations.map((rec, index) => (
          <RecommendationCard key={index} recommendations={rec} />
        ))
      ) : (
        <p>No current recommendations</p>
      )}
    </div>
  );
};

export default Recommendations;
