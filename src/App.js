import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import './App.css';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <MovieLibrary />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
