import React from 'react';
import Header from './components/Header';
import './App.css';
import data from './data';

import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
      <AddMovie />
      <SearchBar />
    </div>
  );
}

export default App;
