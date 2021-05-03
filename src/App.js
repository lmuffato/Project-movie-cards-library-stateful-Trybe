import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import data from './data';
import './App.css';

function handleClick(event) {
  event.preventDefault();
  console.log(event.target);
}

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText={ 'string' }
        onSearchTextChange={ console.log }
        bookmarkedOnly={ false }
        onBookmarkedChange={ console.log }
        selectedGenre={ 'string' }
        onSelectedGenreChange={ console.log }
      />
      <MovieList movies={ data } />
      <AddMovie onClick={ handleClick } />
    </div>
  );
}

export default App;
