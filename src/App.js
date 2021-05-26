import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import moviesData from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ moviesData } />
    </div>
  );
}

export default App;