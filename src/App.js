import React from 'react';
import Header from './components/Header';
// import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ movies } />
      <AddMovie />
    </div>
  );
}

export default App;
