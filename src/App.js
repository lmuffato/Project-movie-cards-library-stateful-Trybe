import React from 'react';
import Header from './components/Header';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieLibrary movies={ movies } />
      <AddMovie />
    </div>
  );
}

export default App;
