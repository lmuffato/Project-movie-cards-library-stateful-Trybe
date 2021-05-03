import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar 
        searchText='string' 
        onSearchTextChange={'clallBack'} 
        bookmarkedOnly='bool' 
        onBookmarkedChange='callback' 
        selectedGenre='string' 
        onSelectedGenreChange='callback' />
    </div>
  );
}

export default App;
