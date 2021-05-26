import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      <SearchBar />
      <AddMovie />
    </div>
  );
}

export default App;
