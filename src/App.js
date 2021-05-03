import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import moviesData from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ moviesData } />
    </div>
  );
}

export default App;
