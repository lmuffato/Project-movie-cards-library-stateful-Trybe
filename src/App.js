import React from 'react';
import Header from './components/Header';
// import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import data from './data';
// import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;
