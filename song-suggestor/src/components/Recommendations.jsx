import React from 'react';
import RecommendationCard from './RecommendationCard';

const Recommendations = ({ recommendations }) => {
  return (
    <div className="recommendations">
      {recommendations.length > 0 ? (
        recommendations.map((recommendation, index) => (
          <RecommendationCard key={index} recommendation={recommendation} />
        ))
      ) : (
        <p>No current recommendations</p>
      )}
    </div>
  );
};

export default Recommendations;
