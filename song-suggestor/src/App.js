import './styles/App.css';
import React, { useState } from 'react';
import Recommendations from './components/Recommendations';
import SearchBar from './components/SearchBar';

const App = () => {
  const [songInput, setSongInput] = useState('');
  const [songReccs, setSongReccs] = useState([]);
  //const [songLike, setSongLike] = useState();
  //const [songDislike, setSongDislike] = useState();

  return (
    <div className="app">
      <h1>Song Suggestor</h1>
      <SearchBar setSongInput={setSongInput} setSongReccs={setSongReccs} />
      <Recommendations recommendations={songReccs} />
    </div>
  );
};

export default App;
