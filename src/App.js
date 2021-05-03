import React, { useCallback } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText="string"
        onSearchTextChange={ useCallback() }
        bookmarkedOnly={ false }
        onBookmarkedChange={ useCallback() }
        selectedGenre="string"
        onSelectedGenreChange={ useCallback() }
      />
    </div>
  );
}

export default App;
