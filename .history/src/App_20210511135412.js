import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
