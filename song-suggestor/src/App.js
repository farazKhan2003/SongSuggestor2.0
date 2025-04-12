import './styles/App.css';
import React, { usestate } from 'react';
import Rating from './components/Rating';
import RecommendationCard from './components/RecommendationCard';
import Recommendations from './components/Recommendations';
import SearchBar from './components/SearchBar';

const App = () => {
  const [songInput, setSongInput] = usestate('');
  const [songRecc, setSongRecc] = usestate('');
  const [songLike, setSongLike] = usestate();
  const [songDislike, setSongDislike] = usestate();

  return (
    <div className="app">
      <h1>Song Suggestor</h1>
      <SearchBar setSongInput={setSongInput} setSongRecc={setSongRecc} />
      <Recommendations recommendations={songRecc} />
    </div>
  );
};

export default App;
