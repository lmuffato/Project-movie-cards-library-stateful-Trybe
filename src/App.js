import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
// import movies from './data';

function App() {
  // const { movies } = movies;
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
    </div>
  );
}

export default App;
