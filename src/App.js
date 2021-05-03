import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText="string"
        onSearchTextChange="callBack"
        bookmarkedOnly
        onBookmarkedChange="callback"
        selectedGenre="string"
        onSelectedGenreChange="callback"
      />
      <AddMovie onCLick="callback" />
    </div>
  );
}

export default App;
