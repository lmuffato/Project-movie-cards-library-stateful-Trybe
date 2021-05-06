import React from 'react';
import Header from './components/Header';
import './App.css';
// import MovieList from './components/MovieList';
import movies from './data';
// import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      {/* <SearchBar /> */}
      {/* <MovieList movies={ movies } /> */}
    </div>
  );
}

export default App;
