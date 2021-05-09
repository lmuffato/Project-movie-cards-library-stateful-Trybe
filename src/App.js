import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import SearchBar from './components/SearchBar';
import data from './data';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ data } />
      <AddMovie />
    </div>
  );
}

export default App;
