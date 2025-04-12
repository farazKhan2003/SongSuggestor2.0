import React, { useState } from 'react';

const SearchBar = ({ setSongInput, setRecommendations }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setSongInput(input);
    setRecommendations([]);
    // Call API and return recommendations
    // You will need to test whether it returns a list or a single recommendation
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a song"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
