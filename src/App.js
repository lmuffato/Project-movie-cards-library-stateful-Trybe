import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function App() {
  console.log(movies);
  const props = { movies };
  return (
    <div className="App">
      <Header />
      <MovieLibrary { ...props } />
    </div>
  );
}

export default App;
